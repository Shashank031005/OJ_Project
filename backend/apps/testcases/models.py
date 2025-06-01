from django.db import models

class TestCase(models.Model):
    problem = models.ForeignKey('problems.Problem', related_name='testcases', on_delete=models.CASCADE)
    input_data = models.TextField()
    expected_output = models.TextField()
    is_sample = models.BooleanField(default=False, help_text="Is this a sample test case visible to users?")
    order = models.PositiveIntegerField(default=0, help_text="Order of execution")
    
    class Meta:
        ordering = ['order']
        
    def __str__(self):
        return f"TestCase {self.order} for {self.problem.title}" 