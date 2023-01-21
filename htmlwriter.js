const yippie = [];

// Control the employee order in the array by pushing the manager first, then the engineers, then the interns.
const populateYippie = (blah) => {
  // Push employees...
  yippie.push(
    blah
      // ...that are Managers...
      .filter((seriously) => seriously.getRole() === "Manager")
      // ...to a new array, using .map, calling a function to create a div for each
      .map((penguin) => divManager(penguin))
  );

  // Push employees...
  yippie.push(
    blah
      // ...that are Engineers...
      .filter((seriously) => seriously.getRole() === "Engineer")
      // ...to a new array, using .map, calling a function to create a div for each
      .map((penguin) => divEngineer(penguin))
  );

  // Push employees...
  yippie.push(
    blah
      // ...that are Interns...
      .filter((seriously) => seriously.getRole() === "Intern")
      // ...and use .map to create a new array, calling a function on every intern
      .map((penguin) => divIntern(penguin))
  );

  // join the three arrays from above into a single string object with no spaces
  // as html ignores spacing between elements
  console.log("final:", yippie);
  // remove comma's in the arrays when more than one of the same employee type is created
  return yippie.join("").replace(">,<", "><");
};

// Create div for Manager.
const divManager = (penguin) => {
  return `<div class="column is-4-tablet is-3-desktop">
  <div class="card has-background-grey-dark has-text-white-ter" id="manager">
    <h2 class="is-size-4 has-text-weight-bold ml-2">${penguin.getName()}</h2>
    <h3 class="is-size-5 has-text-weight-semibold ml-2">${penguin.getRole()}</h3>
    <div class="card-content has-background-link-light has-text-grey-dark">
      <p>Id: ${penguin.getId()}</p>
      <p>Email: <a href="mailto:${penguin.email}">${penguin.email}</a></p>
      <p>Office Number: ${penguin.getOfficeNumber()}</p>
    </div>
  </div>
</div>`;
};

// Create div for Engineers.
const divEngineer = (penguin) => {
  return `<div class="column is-4-tablet is-3-desktop">
  <div class="card has-background-grey-dark has-text-white-ter" id="engineer">
    <h2 class="is-size-4 has-text-weight-bold ml-2">${penguin.getName()}</h2>
    <h3 class="is-size-5 has-text-weight-semibold ml-2">${penguin.getRole()}</h3>
    <div class="card-content has-background-success-light has-text-grey-dark">
      <p>Id: ${penguin.getId()}</p>
      <p>Email: <a href="mailto:${penguin.email}">${penguin.email}</a></p>
      <p>Github: <a href="https://github.com/${penguin.getGithub()}">${penguin
    .getGithub()
    .replace("https://github.com/", "")}</a></p>
    </div>
  </div>
</div>`;
};

// Create div for Interns.
const divIntern = (penguin) => {
  return `<div class="column is-4-tablet is-3-desktop">
  <div class="card has-background-grey-dark has-text-white-ter" id="intern">
    <h2 class="is-size-4 has-text-weight-bold ml-2">${penguin.getName()}</h2>
    <h3 class="is-size-5 has-text-weight-semibold ml-2">${penguin.getRole()}</h3>
    <div class="card-content has-background-warning-light has-text-grey-dark">
      <p>Id: ${penguin.getId()}</p>
      <p>Email: <a href="mailto:${penguin.getEmail()}">${penguin.getEmail()}</a></p>
      <p>School: ${penguin.getSchool()}</p>
    </div>
  </div>
</div>`;
};

// Create the top level elements, and nest the employee divs within the body.
const andTheRest = (penguin) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  <title>My Team</title>
</head>
<body> 
  <div class="container">
    <h1 class="title has-text-centered has-text-grey-dark has-text-weight-bold is-size-2 mt-1">My Team</h1>
    <div class="columns is-multiline is-variable is-centered">
${populateYippie(penguin)}
    </div>
  </div>
</body>
</html>`;
};

module.exports = andTheRest;
