package org.javaro.lecture;

public class Exam {
	String subject;
	int score;
	
	public void setExamScore(String subject, int score) {
		this.subject = subject;
		this.score = score;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getSubject () {
		return this.subject;
	}
	
	public void setScore(int score) {
		this.score = score;
	}
	
	public int getScore() {
		return this.score;
	}
}
