from django.urls import path
from .views import ProblemListView, ProblemCreateView, SubmissionCreateView, SubmissionDetailView

urlpatterns = [
    path('problems/', ProblemListView.as_view()),
    path('problems/create/', ProblemCreateView.as_view()),
    path('submissions/', SubmissionCreateView.as_view()),
    path('submissions/<int:pk>/', SubmissionDetailView.as_view()),
]
