const Employee = require("../lib/Employee");

describe("Employee object", () => {
    it("should create an employee object", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result).toBeInstanceOf(Employee);
    });
});

describe("name", () => {
    it("should return the correct name", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.name).toBe("Sue");
    expect(result.name).not.toBe("Bob");
    expect(result.getName()).toBe("Sue");
    expect(result.getName()).not.toBe("Bob");
    });
});

describe("id", () => {
    it("should return the correct id", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.id).toBe(1);
    expect(result.id).not.toBe(2);
    expect(result.getId()).toBe(1);
    expect(result.getId()).not.toBe(2);
    });
});

describe("email", () => {
    it("should return the correct email", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.email).toBe("sue@work.com");
    expect(result.email).not.toBe("sue@home.com");
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getEmail()).not.toBe("sue@home.com");
    });
});

describe("role", () => {
    it("should return the correct role", () => {
    const result = new Employee("Sue", 1, "sue@work.com");
    expect(result.getRole()).toBe("Employee");
    expect(result.getRole()).not.toBe("Engineer");
    });
});
