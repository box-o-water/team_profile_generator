const Engineer = require("../lib/Engineer");

describe("Engineer object", () => {
    it("should create an engineer object", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result).toBeInstanceOf(Engineer);
    });
});

describe("name", () => {
    it("should return the correct name", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.name).toBe("Sue");
    expect(result.name).not.toBe("Bob");
    expect(result.getName()).toBe("Sue");
    expect(result.getName()).not.toBe("Bob");
    });
});

describe("id", () => {
    it("should return the correct id", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.id).toBe(1);
    expect(result.id).not.toBe(2);
    expect(result.getId()).toBe(1);
    expect(result.getId()).not.toBe(2);
    });
});

describe("email", () => {
    it("should return the correct email", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.email).toBe("sue@work.com");
    expect(result.email).not.toBe("sue@home.com");
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getEmail()).not.toBe("sue@home.com");
    });
});

describe("github", () => {
    it("should return the correct github", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.github).toBe("github.com/sue");
    expect(result.github).not.toBe("github.com/bob");
    expect(result.getGithub()).toBe("github.com/sue");
    expect(result.getGithub()).not.toBe("github.com/bob");
    });
});

describe("role", () => {
    it("should return the correct role", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getRole()).toBe("Engineer");
    expect(result.getRole()).not.toBe("Employee");
    });
});
