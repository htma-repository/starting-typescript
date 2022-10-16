/* 
public => make properties available on all class, inheritance class & can be re-initialize on outside class

private => make properties available ONLY on class who initialize, CAN'T used on inheritance class & CAN'T re-initialize outside class

protected => make properties available ONLY on class who initialize AND inheritance class, CAN'T re-initialized outside class

readonly => make properties readonly, CAN'T re-initialized after FIRST initialized, CAN mix with public, private, protected
*/

class Students {
  // name: string;
  // age: number;
  // passed: boolean;
  static hobby: string[] = [];
  protected subjects: string[] = [];

  constructor(
    // Shorthand initialization class constructor
    protected readonly id: string,
    protected name: string,
    protected age: number,
    protected passed: boolean
  ) {
    // this.name = name;
    // this.age = age;
    // this.passed = passed;
  }

  static addStudent(name: string, age: number, ...hobby: string[]) {
    return { name, age, hobby: Students.hobby.push(...hobby) };
  }

  congrats() {
    let congrats;
    if (this.passed) {
      congrats = "Congrats your passed the test";
    } else {
      congrats = "Sorry, Try again next year";
    }

    return `${this.id} - Hello ${this.name}, your age ${this.age} years old. ${congrats}`;
  }

  addSubjects(...newSubject: string[]) {
    this.subjects.push(...newSubject);
  }

  viewSubjects() {
    return this.subjects;
  }
}

class StudentSmart extends Students {
  achievement: string[];

  get lastReportSubject() {
    return this.achievement;
  }

  set lastReportSubject(lastReport: string[]) {
    this.addSubjects(...lastReport);
  }

  constructor(
    id: string,
    name: string,
    age: number,
    passed: boolean,
    achievement: string[]
  ) {
    super(id, name, age, passed);
    this.achievement = achievement;
  }

  addSubjects(...newSubject: string[]): void {
    this.subjects.push(...newSubject);
  }
}

const student_1 = new Students("s1", "Hutama", 27, true);
const student_2 = new Students("s2", "Diva", 30, false);
const student_3 = {
  name: "Tama",
  age: 26,
  passed: true,
  congrats: student_1.congrats,
};

student_1.addSubjects("ReactJs", "TypeScript", "TailwindCSS");

const studentSmart_1 = new StudentSmart("ss1", "Hutama", 24, true, [
  "gold",
  "platinum",
]);

studentSmart_1.addSubjects("s1", "s2", "s3");

studentSmart_1.lastReportSubject = ["lastReport1", "lastReport2"];

const newStudent_1 = Students.addStudent(
  "Yoko",
  28,
  "Gaming",
  "Watching Movie"
);

console.log(newStudent_1);

console.log(student_1.congrats());
console.log(student_2.congrats());
console.log(student_3.congrats());
console.log(student_1.viewSubjects());

console.log(studentSmart_1);
console.log(studentSmart_1.congrats());
