var copyFiles = require('copyfiles');
var fs = require('fs');
var exec = require('child_process').execSync;
var rimraf = require('rimraf').sync;
var async = require('async');
var path = require('path');

var packages = require('./packages-to-install');
var rmFolders = require('./folders-to-remove');
var filesToCopy = require('./files-to-copy');

function setup() {
  if (process.argv.length != 3) {
    console.error("\nUSAGE: npm run setup <path-to-slingshot-folder>\n");
    return;
  }
  var folder = process.argv[2];
  if (folder.lastIndexOf("/") !== (folder.length - 1) ) folder = folder + "/";

  if (!checkFolder(folder)) {
    console.log("ERROR: there does not appear to be a slingshot project at " + folder);
    return;
  }
  console.log("setting up app in " + folder);

  installPackages(folder);
  removeFolders(folder);
  installFiles(folder, function () {
    console.log("Setup COMPLETE");
  });
}

function installPackages(folder) {
  var pwd = process.cwd();
  process.chdir(folder);
  console.log("installing " + packages.length + " packages....");
  var commands = [];
  packages.forEach(function (pkg) {
    commands.push("npm install --save " + pkg);
  });
  execAll(commands);
  process.chdir(pwd);
}

function removeFolders(folder) {
  var pwd = process.cwd();
  rmFolders.forEach(function (name) {
    var fullPath = path.resolve(folder) + '/' + name;
    console.log("rimraf: " + fullPath);
    rimraf(fullPath, {rmdir: true}, function (err) {
      console.error('ERROR removing ' + fullPath + ' ' + err);
    });
  });
}

function installFiles(folder, cb) {
  var fileList = [];
  filesToCopy.forEach(function (path) {
    fileList.push(path);
    console.log("copying --> " + path);
  });
  fileList.push(folder);
  copyFiles(fileList, cb);
}

function checkFolder(folder) {
  console.log("checking slingshot folder " + folder);
  if (!fs.existsSync(folder + "package.json")) {
    return false;
  }
  if (!fs.existsSync(folder + "src")) {
    return false;
  }
  return true;
}

function execAll(commands) {
  commands.forEach(function(cmd) {
    console.log("===> " + cmd);
    exec(cmd);
  });
}

setup();
