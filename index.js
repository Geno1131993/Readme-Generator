const fs = require("fs");
const https = require("https");
const inquirer = require("inquirer");
const axios = require("axios");

var repos = '';





inquirer.prompt([
    {
        type: "input",
        message: "What is GitHub username?",
        name: "username"
    }
]).then(function({username}){

    console.log(username);


    axios  
        .get(buildUrl(username))
        .then(function(response) {
            console.log(response.data);
        });

});





function buildUrl(username){
    return "http://api.github.com/users/" + username + "/repos";
}
