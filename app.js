const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// An array containing all members information

const team = [];

// prompt user about manager

function createManager() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
        validate: (value) => !isNaN(value) || "Please enter a number.",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
        validate: (value) => !isNaN(value) || "Please enter a number.",
      }
    ])
  .then((res) => {
    const manager = new Manager(
      res.name,
      res.id,
      res.email,
      res.officeNumber
    );
    team.push(manager);
    addMember();
  });
}

  const app = http.createServer(promptUser);

  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });


  createManager();

