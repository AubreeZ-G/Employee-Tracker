const inquirer = require("inquirer")
const mysql = require("mysql2")
const db = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "Aubree",
    database: "employee_tracker",
})
require("console.table")

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            choices: ["View Employee", "View Department", "View Roles", "Add Employee", "Add Department", "Add Role", "Exit"],
            name: "userselection",
            message: "What would you like to do ?"
        }
    ]).then(({ userselection }) => {
        console.log(userselection)
        switch(userselection) {
            case "View Employee":
                console.log("VE");
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
           default:
               console.log("End")
                db.end();
                process.exit(0);
        }
    })




}

function viewEmployee() {
    db.query("select * from employee;", function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
}

db.connect(function () {
    console.log("Welcome to Employee Tracker")
    startApp()
})

function viewDepartment() {
    db.query("select * from department;", function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
}


function viewRoles() {
    db.query("select * from roles;", function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
}