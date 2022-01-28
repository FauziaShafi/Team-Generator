const inquirer = require('inquirer');
const generateMarkdown = require("../lib/generateMarkdown");
const Engineer = require("./Engineer"); 
const Manager = require("./Manager"); 
const Intern = require("./Intern"); 
let allEmployees =[];
const fs =require('fs');


class Prompt {
  
      start() {
        this.initList();
      }

      initList() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the team manager's name?",
            },
            {
              type: "input",
              message: "What is the team manager's ID?",
              name: "ID",
            },
            {
              type: "input",
              message: "What is the team manager's email?",
              name: "email",
            },
            {
              type: "input",
              message: "What is the team manager's Office Number?",
              name: "ofcNo",
            },
          ])
          .then(({name,ID,email,ofcNo}) => {
            const managerInfo = new Manager(name,ID,email,ofcNo); 
            allEmployees.push(managerInfo); 
            this.askUser();
          });
      }

      askUser() {
        inquirer
          .prompt([
            {
              type: "confirm",
              message: "Would you like to add another team member?",
              name: "addAnothermember",
            },
          ])
          .then(ans  => {
            if(ans.addAnothermember === "false") {
              this.writeList();
            } else {
              
              this.getNewEmployee();
            }

          });
      }
      getNewEmployee() {
        inquirer
          .prompt([
           
            {
              type: "list",
              name: "EmployeeType",
              message: "Which type of team member would you like to add ?",
              choices : ["Engineer","Intern", "I don't want to add any more team member"],
            },
           
          ])
          .then( userResponse => {
           
           
            if (userResponse.EmployeeType == "Engineer") {
              this.addEngineer();
             
            }else if(userResponse.EmployeeType == "Intern") {
              this.addIntern();

            } else {
              this.writeList();
            }
          });
      }

      addEngineer() {
        inquirer
        .prompt([
          {
            type: "input",
            name: "EngName",
            message: "What is your Engineer's name?",
          },
          {
            type: "input",
            message: "What is your Engineer's ID?",
            name: "EngID",
          },
          {
            type: "input",
            message: "What is your Engineer's email?",
            name: "Engemail",
          },
          {
            type: "input",
            message: "What is your Engineer's Github users name?",
            name: "Github",
          },
         
        ]) .then(({ EngName,EngID,Engemail,Github }) => {
        
            //convert the response into an engineer object 
            const engineerInfo = new Engineer(EngName,EngID,Engemail, Github); 
            //console.log(" CLass Object:", engineerInfo); 

            allEmployees.push(engineerInfo); 
            //propmpt to add new employee again 
            this.askUser();
        });
        

      }
      addIntern() {
        inquirer
        .prompt([
          {
            type: "input",
            name: "intern",
            message: "What is your intern's name?",
          },
          {
            type: "input",
            message: "What is your intern's ID?",
            name: "InternID",
          },
          {
            type: "input",
            message: "What is your intern's email?",
            name: "Internemail",
          },
          {
            type: "input",
            message: "What is your intern's school ?",
            name: "school",
          },
         
        ])
        .then(({intern,InternID,Internemail,school }) => {
          const internInfo = new Intern(intern,InternID,Internemail,school);
          allEmployees.push(internInfo);
        
         
          if (this.addIntern) {
            this.askUser();
          
          } else {
            this.writeList();
          }
        });
        
      }
    
      // Saves task list to a txt file and exit
      writeList() {
        // console.log("All employees Info", allEmployees); 
         const htmlPageContent = generateMarkdown(allEmployees) ;
        fs.writeFile('dist/employee.html',htmlPageContent , (err) =>
        err ? console.error(err) : console.log('Success!')
      );

      }

}

module.exports = Prompt;