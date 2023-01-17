const Employee = require("../lib/Employee");

describe("Employee object", () => {
    it("should create an employee object", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result).toBeInstanceOf(Employee);
    });
});

describe("Employee parameters", () => {
    it("should create an employee with name Sue", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.name).toBe("Sue");
    });
});

describe("Employee parameters", () => {
    it("should create an employee with id 1", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.id).toBe(1);
    });
});

describe("Employee parameters", () => {
    it("should create an employee with email sue@work.com", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.email).toBe("sue@work.com");
    });
});

describe("Employee getters", () => {
    it("should retrieve the name Sue with getName", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getName()).toBe("Sue");
    });
});

describe("Employee getters", () => {
    it("should retrieve the id 1 with getID", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getName()).toBe("Sue");
    expect(result.getId()).toBe(1);
    });
});

describe("Employee getters", () => {
    it("should retrieve the email sue@work.com with getEmail", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getEmail()).toBe("sue@work.com");
    });
});

describe("Employee getters", () => {
    it("should retrieve the role Employee with getRole", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getRole()).toBe("Employee");
    });
});
