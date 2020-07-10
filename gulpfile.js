// Copy files from project template into item template
//
// this attempts to match the files based on the folder names inside
// item templates, so for example a folder called Dashboard will
// match any files from the project template in a folder called Dashboard
// e.g '/App_Plugins/Dashboard/package.manifest'
// and any files that start with Dashboard (e.g DashboardController.cs)
// 
// this might not be 100% but it will help keeping the item templates in sync
// with the package.
// 
// should be ran before you package anything up
//
// you will need to manually update the 'primaryOutputs' values in the item
// template template.json file, as this script doesn't do that. 
// 

const { src, dest } = require('gulp');
const fs = require('fs');
const path = require('path');

var itemTemplateFolder = './ItemTemplates/';
var projectTemplateFolder = './ProjectTemplates/UmbracoPackage.1/src/UmbracoPackage.1/'

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

function copyItemTemplates(cb)
{
    var folders = getFolders(itemTemplateFolder);

    folders.forEach(function(folder) {
        console.log(folder);

        var sourcePatterns = [
            projectTemplateFolder + '**/' + folder + '/**/*',
            projectTemplateFolder + '**/' + folder + '*.*',
        ];

        sourcePatterns.forEach(function(pattern) {
            console.log(pattern);
            src(pattern)
                .pipe(dest(itemTemplateFolder + folder));
        });
    });
}

exports.default = function(cb) {
    copyItemTemplates();
    cb();
}