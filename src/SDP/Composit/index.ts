interface Employee {
  getName(): string;
  setSalary(salary: number);
  getSalaty(): number;
  getRoles(): string[];
}

class Developer1 implements Employee {
  public constructor(protected name, protected salary, protected roles) {}

  public getName(): string {
    return this.name;
  }

  public getSalaty(): number {
    return this.salary;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Designer implements Employee {
  public constructor(protected name, protected salary, protected roles) {}

  public getName(): string {
    return this.name;
  }

  public getSalaty(): number {
    return this.salary;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  getRoles(): string[] {
    return this.roles;
  }
}

class Organization {
  protected employees: Employee[] = [];

  public addEmployees(employee: Employee) {
    this.employees.push(employee);
  }

  public getNetSalaries(): number {
    return this.employees.reduce(
      (acc, employee) => acc + employee.getSalaty(),
      0
    );
  }
}

const john = new Developer1("John", 10000, ["Regular"]);
const jain = new Designer("Jain", 2000, ["Leader"]);

const organization = new Organization();
organization.addEmployees(john);
organization.addEmployees(jain);
console.log(organization.getNetSalaries());
