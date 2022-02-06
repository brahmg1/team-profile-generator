//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

//an empty array that holds all the employee info
const finalArray = [];

//function that prompts questions for entering an employee
const enterEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name.");
            return false;
          }
        },
      },
      {
        type: "number",
        name: "id",
        message: "What is your employee's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your employee's email.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      //engineer prompt
      {
        type: "input",
        name: "github",
        message: "Please enter github username for this employee.",
        when: (answers) => answers.role === "Engineer",
      },
      //intern prompt
      {
        type: "input",
        name: "school",
        message: "What school did this employee go to?",
        when: (answers) => answers.role === "Intern",
      },
      //manager prompt question
      {
        type: "number",
        name: "officeNumber",
        message: `What is employee's office number?`,
        when: (answers) => answers.role === "Manager",
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        finalArray.push(engineer);
      } else if (answers.role === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        finalArray.push(intern);
      } else if (answers.role === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        finalArray.push(manager);
      }

      // ask user if they would like to use another employee
      inquirer
        .prompt({
          type: "confirm",
          name: "addAnotherEmployee",
          message: "Would you like to add another employee?",
          default: false,
        })
        .then(({ addAnotherEmployee }) => {
          if (!addAnotherEmployee) {
            console.log("Thank you, your employee has been sucessfully added.");
            createCard(finalArray);
          } else {
            enterEmployee();
          }
        });
    });
};

//function that gets correct info to put on the employee's card according to what role they are
const roleInfo = (employee) => {
  switch (employee.getRole()) {
    case "Intern":
      return `School: ${employee.getSchool()}`;
    case "Engineer":
      return `Github: <a href= "www.github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
    case "Manager":
      return `Office number: ${employee.getOfficeNumber()}`;
  }
};

const icon = (employee) => {
  switch (employee.getRole()) {
    case "Intern":
      return ` <i class="fas fa-user-graduate"></i>`;
    case "Manager":
      return `<i class="fas fa-mug-hot"></i>`;
    case "Engineer":
      return `<i class="fas fa-glasses"></i>`;
  }
};

//function that will call the methods in appropriate places in order to create a card for each employee
const createCard = (employees) => {
  //create an empty array to store the card info in
  const cardArray = [];
  //for each employee create a card
  employees.forEach((employee) => {
    const employeeCard = `
        <div class="card border-primary mb-3">
            <div class="card-header">${employee.getName()}</div>
                <div class="card-body">
                    <h4 class="card-title">${icon(
                      employee
                    )}  ${employee.getRole()}</h4>
                        <ul class="list-group list-group-flush text-primary">
                            <li class="list-group-item text-primary">ID: ${employee.getId()}</li>
                            <li class="list-group-item text-primary">Email: <a href ="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                            <li class="list-group-item text-primary">${roleInfo(
                              employee
                            )}</li>
                        </ul>
                </div>
            </div>
        </div>
    `;
     //and push this card to the card array
     cardArray.push(employeeCard);
  });
    //Add the closing divs to the file

    //us fs to write the file
    generateHTML(cardArray);
};

const generateHTML = (cardArray) => {
  fs.copyFile("./src/template.html", "./dist/index.html", (err) => {
    if (err) throw err;
    fs.appendFile("./dist/index.html", cardArray.join(""), (err) => {
        if (err) throw err;
      });
  });
};

enterEmployee();