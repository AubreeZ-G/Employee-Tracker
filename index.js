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
function addDepartment() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter department name?",
            name:"dname"
        }
    ]).then(response => {
    db.query("insert into department(name) values (?)",response.dname, function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
})
}
function addEmployee() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter employee first name",
            name:"fname"
        },
        {
            type:"input",
            message:"Enter employee last name",
            name:"lname"
        },
        {
            type:"list",
            message:"Enter employee role id",
            name:"id",
            choices:[
                { value:1,name:"Manager-Marketing"},
                {value:2,name:"Manager-Sales"},
                {value:3,name:"Manager-HR"},
                {value:4,name:"Manager-Developers"},]
        },
    ]).then(response => {
    db.query("insert into employee(first_name,last_name,role_id) values(?,?,?)",
    [response.fname,response.name,response.id], function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
})
}
function addRole() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter role title",
            name:"title"
        },
        {
            type:"input",
            message:"Enter role salary",
            name:"salary"
        },
        {
            type:"input",
            message:"Enter department id",
            name:"depatment_id",
            choices:[
                { value:1,name:"Marketing"},
                {value:2,name:"Sales"},
                {value:3,name:"HR"},
                {value:4,name:"Developers"},]
        },
    ]).then(response => {
    db.query("insert into roles(title,salary,department_id) values (?,?,?)",[response.title,response.salary,response.department_id], function (err, data) {
        if (err) throw err;
        console.table(data)
        startApp()
    })
})
}