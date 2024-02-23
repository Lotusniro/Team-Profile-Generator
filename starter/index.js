const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const render = require("./src/page-template.js");
//first we need to create an array to store the team members
const team = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Which type of employee would you like to add to the team?",
      choices: ["Manager", "Engineer", "Intern", "I finished my team info"],
    },
  ]);
};

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the manager's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the manager's employee id",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter a correct answer, the employee id should be a number!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "officeNumber",
      message: "Please enter the manager's office number",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter a correct answer, the office number should be a number!");
          return false;
        }
      },
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the engineer's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the engineer's employee id",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter a correct answer, the employee id should be a number!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the engineer's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the engineer's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the engineer's GitHub username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the engineer's GitHub username!");
          return false;
        }
      },
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the intern's name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's name!");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "Please enter the intern's employee id",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter a correct answer, the employee id should be a number!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the intern's email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the intern's email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the intern's school",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      },
    },
  ]);
};

const addManager = (managerData) => {
  const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
  team.push(manager);
  console.log("Manager added to the team!");
};

const addEngineer = (engineerData) => {
  const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
  team.push(engineer);
  console.log("Engineer added to the team!");
};

const addIntern = (internData) => {
  const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
  team.push(intern);
  console.log("Intern added to the team!");
};



const init = () => {
  promptUser()
    .then((userChoice) => {
      if (userChoice.employeeType === "Manager") {
        promptManager().then((managerData) => {
          addManager(managerData);
          init();
        });
      } else if (userChoice.employeeType === "Engineer") {
        promptEngineer().then((engineerData) => {
          addEngineer(engineerData);
          init();
        });
      } else if (userChoice.employeeType === "Intern") {
        promptIntern().then((internData) => {
          addIntern(internData);
          init();
        });
      } else {
        fs.writeFileSync(outputPath, render(team), "utf-8");
        console.log("Your team's HTML file has been created!");
      }
    });
};




init();


