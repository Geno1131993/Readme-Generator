const fs = require("fs");
const https = require("https");
const inquirer = require("inquirer");
const axios = require("axios");
const {promisify} = require("util");

var repos = '';


inquirer.prompt([
    {
        type: "input",
        message: "What is GitHub username?",
        name: "username"
    }
]).then(function({username}){

    //onsole.log(username);


    axios  
        .get(buildUrl(username))
        .then(function(response) {
            //console.log(response.data);
            console.log(JSON.parse(response.data));
        });

});



function buildUrl(username){
    return "http://api.github.com/users/" + username + "/repos";
}



function write(){

}