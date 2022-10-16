interface Department {
  detailsEmployee(): string;
}

interface EmployeeFn {
  // interface Function type
  (name: string, age: number): string;
}

// interface extends
interface Employee extends Department {
  // Optional properties
  name?: string;
  age?: number;
  isStillWorking?: boolean;
}

const EmployeeFn: EmployeeFn = (name: string, age: number) => {
  return `${name} ${age}`;
};

console.log(EmployeeFn("John", 30));

const newEmployee: Employee = {
  isStillWorking: true,
  detailsEmployee() {
    let details: string;
    if (this.isStillWorking) details = `Your still working in this Company`;
    else details = "Your not working anymore in this Company";
    return details;
  },
};

console.log(newEmployee.detailsEmployee());

// Using interface in class use implements
class ITEmployee implements Employee {
  constructor(
    // Shorthand initialization class constructor
    public name: string,
    public age: number,
    public isStillWorking: boolean
  ) {}

  detailsEmployee(): string {
    return `Employee name: ${this.name}, age: ${this.age} years old, isStillWorking: ${this.isStillWorking}. This is IT Employee.`;
  }
}

const newITEmployee = new ITEmployee("Hutama", 27, true);

console.log(newITEmployee.detailsEmployee());
