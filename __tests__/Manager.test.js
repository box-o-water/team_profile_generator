const Manager = require("../lib/Manager");

describe("Manager object", () => {
    it("should create an manager object", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result).toBeInstanceOf(Manager);
    });
});

describe("name", () => {
    it("should return the correct name", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result.name).toBe("Sue");
    expect(result.name).not.toBe("Bob");
    expect(result.getName()).toBe("Sue");
    expect(result.getName()).not.toBe("Bob");
    });
});

describe("id", () => {
    it("should return the correct id", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result.id).toBe(1);
    expect(result.id).not.toBe(2);
    expect(result.getId()).toBe(1);
    expect(result.getId()).not.toBe(2);
    });
});

describe("email", () => {
    it("should return the correct email", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result.email).toBe("sue@work.com");
    expect(result.email).not.toBe("sue@home.com");
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getEmail()).not.toBe("sue@home.com");
    });
});

describe("officeNumber", () => {
    it("should return the correct officeNumber", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result.officeNumber).toBe("1a");
    expect(result.officeNumber).not.toBe("1b");
    expect(result.getOfficeNumber()).toBe("1a");
    expect(result.getOfficeNumber()).not.toBe("1b");
    });
});

describe("role", () => {
    it("should return the correct role", () => {
    const result = new Manager("Sue", 1, "sue@work.com", "1a");
    expect(result.getRole()).toBe("Manager");
    expect(result.getRole()).not.toBe("Employee");
    });
});
