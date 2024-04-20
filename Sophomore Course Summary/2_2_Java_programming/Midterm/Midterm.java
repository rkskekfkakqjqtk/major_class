public class Midterm{
	public static void main(String[] args) {
		Student stud1 = new Student("201901","홍길동",3);
		
		stud1.exam[0].setSubject("자바");
		stud1.exam[1].setSubject("C");
		stud1.exam[2].setSubject("C++");
		stud1.exam[0].setScore(89);
		stud1.exam[1].setScore(90);
		stud1.exam[2].setScore(100);
		
		stud1.printGPA();
		
	}
}