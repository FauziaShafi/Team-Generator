function generateMarkdown(allEmployees) {
    console.log("GM ", allEmployees);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <title>Team Profile Generator</title>
    </head>
    <body>
       <div class="fluid-container">
           <div class="row text-white bg-danger p-3 d-flex justify-content-center">
               <h1 class="">My Team</h1>
           </div>
           <div class="container d-flex justify-content-center">
         ${allEmployees.map(employee => {
           

             if(employee.getRole() === "Manager"){
                 return `<div class="card-body p-0 m-4 ">
                     <h4 class="card-title text-white bg-primary p-3 m-0 rounded-top">${employee.name} <br><i class="fas fa-mug-hot"></i> Manager</h4>
                     
                     <div class="card-body py-5 rounded-bottom shadow mb-2" style="background-color:rgb(238, 225, 225);">
                     <ul class="list-group list-group-flush bg-light m-3">
                         <li class="list-group-item">ID: ${employee.id}</li>
                         <li class="list-group-item">Email: <a href="www.gmail.com">${employee.email}</a></li>
                         <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                     </ul>
                    </div>
                 
                 </div>`
                  } else if(employee.getRole() === "Engineer") {
                      return ` <div class="card-body p-0 m-4 ">
                          <h4 class="card-title text-white bg-primary p-3 m-0 rounded-top">${employee.name} <br> <i class="fas fa-glasses"></i> Engineer</h4>
                          <div class="card-body py-5 rounded-bottom shadow mb-2" style="background-color:rgb(238, 225, 225);">

                          <ul class="list-group list-group-flush bg-light m-3 ">
                              <li class="list-group-item">ID: ${employee.id}</li>
                              <li class="list-group-item">Email: <a href="www.gmail.com">${employee.email}</a></li>
                              <li class="list-group-item">Github: <a href="www.github.com">${employee.github}</a></li>
                          </ul>
                       </div>
                     
                  </div>`
                  } else if(employee.getRole() === "Intern") {

                      return `<div class="card-body p-0 m-4 ">
                          <h4 class="card-title text-white bg-primary p-3 m-0 rounded-top">${employee.name} <br> Intern</h4>
                          <div class="card-body py-5 rounded-bottom shadow mb-2" style="background-color:rgb(238, 225, 225);">

                          <ul class="list-group list-group-flush bg-light m-3 ">
                              <li class="list-group-item">ID: ${employee.id}</li>
                              <li class="list-group-item">Email: <a href="www.gmail.com">${employee.email}</a></li>
                              <li class="list-group-item">School: ${employee.school}</li>
                          </ul>
                        </div>
                     
                  </div>`

                  }

              })}
         </div>
          
           
       </div>
    </body>
    </html>`

}; 

module.exports = generateMarkdown; 