from django.db import models
from django.conf import settings

# Create your models here.

class LanguageChoice(models.TextChoices):
    PYTHON = 'python', 'Python'
    JAVA = 'java', 'Java'
    CPP = 'cpp', 'C++'
    C = 'c', 'C'
    JAVASCRIPT = 'javascript', 'JavaScript'

class VerdictChoice(models.TextChoices):
    PENDING = 'pending', 'Pending'
    RUNNING = 'running', 'Running'
    ACCEPTED = 'accepted', 'Accepted'
    WRONG_ANSWER = 'wrong_answer', 'Wrong Answer'
    TIME_LIMIT_EXCEEDED = 'time_limit_exceeded', 'Time Limit Exceeded'
    MEMORY_LIMIT_EXCEEDED = 'memory_limit_exceeded', 'Memory Limit Exceeded'
    RUNTIME_ERROR = 'runtime_error', 'Runtime Error'
    COMPILATION_ERROR = 'compilation_error', 'Compilation Error'
    SYSTEM_ERROR = 'system_error', 'System Error'

class Submission(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='submissions')
    problem = models.ForeignKey('problems.Problem', on_delete=models.CASCADE, related_name='submissions')
    language = models.CharField(max_length=20, choices=LanguageChoice.choices)
    code = models.TextField()
    verdict = models.CharField(max_length=30, choices=VerdictChoice.choices, default=VerdictChoice.PENDING)
    execution_time = models.PositiveIntegerField(null=True, blank=True, help_text="Execution time in milliseconds")
    memory_usage = models.PositiveIntegerField(null=True, blank=True, help_text="Memory usage in KB")
    error_message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
        
    def __str__(self):
        return f"Submission by {self.user.username} for {self.problem.title}"

class TestCaseResult(models.Model):
    submission = models.ForeignKey(Submission, on_delete=models.CASCADE, related_name='testcase_results')
    testcase = models.ForeignKey('testcases.TestCase', on_delete=models.CASCADE, related_name='results')
    passed = models.BooleanField(default=False)
    execution_time = models.PositiveIntegerField(null=True, blank=True, help_text="Execution time in milliseconds")
    memory_usage = models.PositiveIntegerField(null=True, blank=True, help_text="Memory usage in KB")
    output = models.TextField(blank=True)
    error_message = models.TextField(blank=True)
    
    class Meta:
        ordering = ['testcase__order']
        
    def __str__(self):
        result = "Passed" if self.passed else "Failed"
        return f"TestCase {self.testcase.order} {result} for submission {self.submission.id}"
