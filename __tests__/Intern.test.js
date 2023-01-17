const Intern = require("../lib/Intern");

describe("Intern object", () => {
    it("should create an intern object", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result).toBeInstanceOf(Intern);
    });
});

describe("name", () => {
    it("should return the correct name", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result.name).toBe("Sue");
    expect(result.name).not.toBe("Bob");
    expect(result.getName()).toBe("Sue");
    expect(result.getName()).not.toBe("Bob");
    });
});

describe("id", () => {
    it("should return the correct id", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result.id).toBe(1);
    expect(result.id).not.toBe(2);
    expect(result.getId()).toBe(1);
    expect(result.getId()).not.toBe(2);
    });
});

describe("email", () => {
    it("should return the correct email", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result.email).toBe("sue@work.com");
    expect(result.email).not.toBe("sue@home.com");
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getEmail()).not.toBe("sue@home.com");
    });
});

describe("school", () => {
    it("should return the correct school", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result.school).toBe("University of Minnesota - Twin Cities");
    expect(result.school).not.toBe("University of Minnesota - Duluth");
    expect(result.getSchool()).toBe("University of Minnesota - Twin Cities");
    expect(result.getSchool()).not.toBe("University of Minnesota - Duluth");
    });
});

describe("role", () => {
    it("should return the correct role", () => {
    const result = new Intern("Sue", 1, "sue@work.com", "University of Minnesota - Twin Cities");
    expect(result.getRole()).toBe("Intern");
    expect(result.getRole()).not.toBe("Employee");
    });
});
