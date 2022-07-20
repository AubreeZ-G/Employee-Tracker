const inquirer = require("inquirer")
const mysql = require("mysql2")
const db = mysql.createConnection({
    host: "localHost",
    user: "route",
    password: "Aubree",
    dataBase: "employee_tracker",
})
require ("console.table")

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["View Employee", "View Department", "View Roles", "Add Employee", "Add Department", "Add Role", "Exit"],
            name: "userselection"
        }
    ]).then(({ userselection }) => {
        switch (userselection) {
            case "View Employee":
                viewEmployee();
                break;
            case "View Department":
                viewDepartment();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Exit":
                db.end();
                process.exit(0);
        }
        })




}

function viewEmployee(){
    db.query("select * from employee;",function(err,data){
        if(err) throw err;
        console.table(data)
    })
}

db.connect(function () {
    console.log("Welcome to Employee Tracker")
    startApp()
})