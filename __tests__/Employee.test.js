const Employee = require("../lib/Employee");

describe("Employee object", () => {
    it("should create an employee object", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result).toBeInstanceOf(Employee);
    });
});

describe("Employee parameters", () => {
    it("should create an employee with specific parameters", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.name).toBe("Sue");
    expect(result.id).toBe(1);
    expect(result.email).toBe("sue@work.com");
    });
});

describe("Employee getters", () => {
    it("should retrieve specific values via getters", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getName()).toBe("Sue");
    expect(result.getId()).toBe(1);
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getRole()).toBe("Employee");
    });
});

describe("Employee getters", () => {
    it("should retrieve values via getters", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getName()).toBe("Sue");
    expect(result.getId()).toBe(1);
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getRole()).toBe("Employee");
    });
});
