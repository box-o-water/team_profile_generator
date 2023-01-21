# team_profile_generator

![open issues](https://img.shields.io/github/issues-raw/box-o-water/team_profile_generator)
![closed issues](https://img.shields.io/github/issues-closed-raw/box-o-water/team_profile_generator)

![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.

![preview](/images/team_profile_generator_preview.png)

Click [here](https://watch.screencastify.com/v/kP0961N7A6vpiTqZ9Ol9) to watch a video demonstrating the team_profile_generator.

Click [here](/dist/index.html) to see the exact `index.html` file rendered in the video.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

GIVEN a command-line application that accepts user input:

- [x] WHEN I am prompted for my team members and their information
      THEN an HTML file is generated that displays a nicely formatted team roster based on user input

- [x] WHEN I click on an email address in the HTML
      THEN my default email program opens and populates the TO field of the email with the address

- [x] WHEN I click on the GitHub username
      THEN that GitHub profile opens in a new tab

- [x] WHEN I start the application
      THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

- [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
      THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

- [x] WHEN I select the engineer option
      THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

- [x] WHEN I select the intern option
      THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

- [x] WHEN I decide to finish building my team
      THEN I exit the application, and the HTML is generated

## Installation

- Install `nvm`
- Use `nvm` to install `npm` and `node`
- $ git clone git@github.com:box-o-water/team_profile_generator.git
- $ npm install

## Usage

- $ node index.js
- Answer prompts (defaults are provided for quick testing, or fill in your own)
- When finished, check /dist directory for generated `index.html` file
- Render the html file locally by method of your choosing

```
Try adding another Engineer:

Name: Roy Trenneman
Id: 4
Email: r.t@reynholm.com
Github: turnitoffandonagain
```

## Contributing

To contribute, create an issue in this repo, or fork this repo and create a pull request against this repo from your fork.

# Tests

- $ npm test

# Questions

Visit my [box-o-water](https://github.com/box-o-water) profile page.

For any questions about this project, please send an email to <boxooowater@gmail.com>.

## Credits

N/A

## License

Licensed under the [MIT](/LICENSE) license.
