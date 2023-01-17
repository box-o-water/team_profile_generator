const yippie = [];

// Control the employee order in the array by pushing the manager first, then the engineers, then the interns.
const populateYippie = blah => {
    yippie.push(
        blah
        .filter(seriously => seriously.getRole() === "Manager")
    );
    
    yippie.push(
        blah
        .filter(seriously => seriously.getRole() === "Engineer")
    );

    yippie.push(
        blah
        .filter(seriously => seriously.getRole() === "Intern")
    );
    
    // return a string object with no spaces, as html ignores spacing between elements
    console.log(yippie);
    return yippie.join("");  
};

module.exports = populateYippie;