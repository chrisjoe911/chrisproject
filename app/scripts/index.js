var template = require("./shopsetting.js")
var ejs = require("ejs") 
var data = '123sixsa'
var html = ejs.render(template, {data})
document.body.innerHTML  = html
