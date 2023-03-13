const generateTeam = team => {
    const createManager = manager => {
        return `
        <div class="card employee-card">
          <div class="card-header bg-primary text-black">
            <h2 class="card-name">${manager.getName()}</h2>
            <h3 class="card-name"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list">
                <li class="list-item">ID: ${manager.getId()}</li>
                <li class="list-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-itme">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>`;
    };

    const createEngineer = engineer => {
        return `
        <div class="card employee-card">
          <div class="card-header bg primary text-black">
            <h2 class="card-name">${engineer.getName()}</h2>
            <h3 class="card-name"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list">
                <li class="list-item">ID: ${engineer.getId()}</li>
                <li class="list-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-item">Github: <a href="https://github.com/${engineer.getGithub()}" target"_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
          </div>
        <div>`;
    };

    const createInter = intern => {
        return `
        <div class="card employee-card">
          <div class="card-header bg primary text-black">
            <h2 class="card-name">${intern.getName()}</h2>
            <h3 class="card-name"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
            <ul class="list">
                <li class="list-item">ID: ${intern.getId()}</li>
                <li class="list-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        <div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createInter(intern))
        );

    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="eng">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
         <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading bg-danger">
            <h1 class="text-center tex-black">TEAM</h1>
          </div>
         </div>
        </div>
        <div class="container">
         <div class="row">
           <div class="row team-space col-12 d-flex justify-content-center">
             ${generateTeam(team)}
           </div>
         </div>
        </div>
    </html>`;
};
