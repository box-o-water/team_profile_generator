const Engineer = require("../lib/Engineer");

describe("Engineer object", () => {
    it("should create an engineer object", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result).toBeInstanceOf(Engineer);
    });
});

describe("Engineer parameters", () => {
    it("should create an engineer with name Sue", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.name).toBe("Sue");
    expect(result.name).not.toBe("Bob");
    });
});

describe("Engineer parameters", () => {
    it("should create an engineer with id 1", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.id).toBe(1);
    expect(result.id).not.toBe(2);
    });
});

describe("Engineer parameters", () => {
    it("should create an engineer with email sue@work.com", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.email).toBe("sue@work.com");
    expect(result.email).not.toBe("sue@home.com");
    });
});

describe("Engineer getters", () => {
    it("should retrieve the name Sue with getName", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getName()).toBe("Sue");
    expect(result.getName()).not.toBe("Bob");
    });
});

describe("Engineer getters", () => {
    it("should retrieve the id 1 with getID", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getId()).toBe(1);
    expect(result.getId()).not.toBe(2);
    });
});

describe("Engineer getters", () => {
    it("should retrieve the email sue@work.com with getEmail", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getEmail()).toBe("sue@work.com");
    expect(result.getEmail()).not.toBe("sue@home.com");
    });
});

describe("Engineer getters", () => {
    it("should retrieve the email sue@work.com with getGithub", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getGithub()).toBe("github.com/sue");
    expect(result.getGithub()).not.toBe("github.com/bob");
    });
});

describe("Engineer getters", () => {
    it("should retrieve the role Engineer with getRole", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    expect(result.getRole()).toBe("Engineer");
    expect(result.getRole()).not.toBe("Employee");
    });
});
