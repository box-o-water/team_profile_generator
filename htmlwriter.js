const yippie = [];

// Control the employee order in the array by pushing the manager first, then the engineers, then the interns.
const populateYippie = blah => {
    // Push employees...
    yippie.push(blah
        // ...that are Managers...
        .filter(seriously => seriously.getRole() === "Manager")
        // ...to a new array, using .map, calling a function to create a div for each
        .map(penguin => divManager(penguin))
    );

    // Push employees...    
    yippie.push(blah
        // ...that are Engineers...
        .filter(seriously => seriously.getRole() === "Engineer")
        // ...to a new array, using .map, calling a function to create a div for each
        .map(penguin => divEngineer(penguin))
    );

    // Push employees...   
    yippie.push(blah
        // ...that are Interns...
        .filter(seriously => seriously.getRole() === "Intern")
        // ...and use .map to create a new array, calling a function on every intern
        .map(penguin => divIntern(penguin))
    );
    
    // join the three arrays from above into a single string object with no spaces
    // as html ignores spacing between elements
    console.log("final:", yippie);
    return yippie.join("");  
};

// Create div for Manager.
const divManager = penguin => {
    return `<div id="manager">
    <h2>${penguin.getName()}</h2>
    <ul>
        <li>Role: ${penguin.getRole()}</li>
        <li>Id: ${penguin.getId()}</li>
        <li>Email: <a href="mailto:${penguin.getEmail()}">${penguin.getEmail()}</a></li>
        <li>Office Number: ${penguin.getOfficeNumber()}</li>
    </ul>
</div>`
};

const divEngineer = penguin => {
    return `<div id="engineer">
    <h2>${penguin.getName()}</h2>
    <ul>
        <li>Role: ${penguin.getRole()}</li>
        <li>Id: ${penguin.getId()}</li>
        <li>Email: <a href="mailto:${penguin.getEmail()}">${penguin.getEmail()}</a></li>
        <li>Github: ${penguin.getGithub()}</li>
    </ul>
</div>
`
};

const divIntern = penguin => {
    return `<div id="intern">
    <h2>${penguin.getName()}</h2>
    <ul>
        <li>Role: ${penguin.getRole()}</li>
        <li>Id: ${penguin.getId()}</li>
        <li>Email: <a href="mailto:${penguin.getEmail()}">${penguin.getEmail()}</a></li>
        <li>School: ${penguin.getSchool()}</li>
    </ul>
</div>
`
};

const andTheRest = penguin =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    ${populateYippie(penguin)}
    </body>
    </html>`
}

module.exports = andTheRest;