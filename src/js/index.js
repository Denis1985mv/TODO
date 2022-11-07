import { Person } from "./person";


const person = new Person;
console.log(person.name);
// alert(person.name);


let variable = '' +
'<html>' +
'    <head>' +
'    <title>Your Title Here</title>' +
'    </head>' +
'' +
'    <body bgcolor="FFFFFF">' +
'        <center><img src="wtools.jpg" align="bottom"> </center>' +
'        <hr>' +
'        <a href="http://wtools.io">Best Online Web Tools</a>is a link to another nifty site' +
'        <h1>This is a Header</h1>' +
'        <h2>This is a Medium Header</h2>' +
'        Send me mail at <a href="mailto:support@example.com">support@example.com</a>.' +
'        <p> This is a new paragraph!</p>' +
'        <p> <b>This is a new paragraph!</b></p>' +
'        <br> <b><i>This is a new sentence without a paragraph break, in bold italics.</i></b>' +
'        <hr>' +
'    </body>' +
'</html>' +
'';

document.writeln(variable);