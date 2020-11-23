
var Name = "";
var FathName = "";
var DOB = "";
var NIC = "";
var Gender = "";
var Status = "";
var Email = "";

var Skills = []


function PersSave(){
    Name = document.getElementById("Name").value;
    // alert(Name)
    fathname = document.getElementById("fathname").value;
    // alert(fathname)
    dateb = document.getElementById("dateb").value;
    number = document.getElementById("number").value;
    // alert(number)
    nationality = document.getElementById("nationality").value;
    //    alert(nationality)
male = document.getElementById("male").value;
// alert(male)
status = document.getElementById("status").value;
// alert(status)
email = document.getElementById("email").value;
alert(email)
}
  
function AddSkill(){

var myExp = document.getElementById("MySkills").value
    var node = document.createElement("h3");                 // Create a <li> node
    var texnode = document.createTextNode(myExp);         // Create a text node
    node.appendChild(texnode);                              // Append the text to <li>
    document.getElementById("Skills").appendChild(node);
}


function AddExp(){

    var myExp = document.getElementById("Exper").value
        var node = document.createElement("h3");                 // Create a <li> node
        var texnode = document.createTextNode(myExp);         // Create a text node
        node.appendChild(texnode);                              // Append the text to <li>
        document.getElementById("Exp").appendChild(node);
    }
    function AddQual(){
        var myQual = document.getElementById("qual").value
        var node = document.createElement("h4")
        var textnode = document.createTextNode(myQual)
        node.appendChild(textnode);                              
document.getElementById("Qual").appendChild(node);
    }