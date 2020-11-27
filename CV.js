
var Name = "";
var FathName = "";
var DOB = "";
var NIC = "";
var Gender = "";
var Status = "";
var Email = "";
var Mobile = "";
var address = "";
var Skills = []
var Exp = []
var Qual = []
function PersSave() {
    if(document.getElementById("Name").value!="")
    {
        Name = document.getElementById("Name").value;        
    }
    else{
        alert("Please Enter  >> Name <<")
    }
if(document.getElementById("fathname").value!=""){

    fathname = document.getElementById("fathname").value;

}
else{
    alert("Please Enter  >>Father Name<<")
}
    
if( document.getElementById("mobil").value!=""){

    Mobile = document.getElementById("mobil").value;
}
else{
    alert("Please Enter >>Mobile number<<")
}

    address = document.getElementById("addres").value;
    dateb = document.getElementById("dateb").value;
    number = document.getElementById("number").value;
    nationality = document.getElementById("nationality").value;
    email = document.getElementById("email").value;
    if(document.getElementById('male').checked){
       Gender = document.getElementById('male').value
    }
    else if(document.getElementById('female').checked){
        Gender = document.getElementById('female').value
    }
    else{
        alert("Please Select Your >> Gender <<")
    }
    // event.preventDefault()
    

    
}

function AddSkill() {


    var myskill = document.getElementById("MySkills").value
    Skills.push(myskill)
    console.log(myskill)
    var node = document.createElement("li");                 // Create a <li> node
    var texnode = document.createTextNode(myskill);         // Create a text node
    node.appendChild(texnode);                              // Append the text to <li>
    document.getElementById("Skills").appendChild(node);
}


function AddExp() {

    var myExp = document.getElementById("Exper").value
    Exp.push(myExp)
    console.log(myExp)
    var node = document.createElement("li");
    var textnode = document.createTextNode(myExp);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("Exp").appendChild(node);
    // var nod = document.createElement("h3");                 // Create a <li> node

    // var myExp = document.getElementById("Exper").value
    // var texnode = document.createTextNode(myExp);         // Create a text node

}
function AddQual() {
    var myQual = document.getElementById("qual").value
    Qual.push(myQual)
    console.log(myQual)
    var node = document.createElement("li");
    var textnode = document.createTextNode(myQual);         // Create a text node
    node.appendChild(textnode);
    document.getElementById("Qual").appendChild(node);

    //         var node = document.createElement("h4")
    //         var textnode = document.createTextNode(myQual)
    //         node.appendChild(textnode);                              
    // document.getElementById("Qual").appendChild(node);
}

function showCV() {

    document.getElementById("showname").innerText = Name;
    document.getElementById('Main').style.display = 'block';
    document.getElementById('PickData').style.display = 'none';
    document.getElementById("father").innerText = fathname;
    document.getElementById("birth").innerText = dateb;
    document.getElementById("NIC").innerText = number;
    document.getElementById("national").innerText = nationality;
    document.getElementById("mail").innerText = email;
    document.getElementById("num").innerText = Mobile;
    // document.getElementById("cv").innerText = address;


    for (var i = 0; Skills.length > i; i++) {
        var Node = document.createElement("li");
        var textnode = document.createTextNode(Skills[i]);
        Node.appendChild(textnode);
        document.getElementById("ShowSkill").appendChild(Node);
    }
    for (var a = 0; Exp.length > a; a++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(Exp[a])
        node.appendChild(textnode)
        document.getElementById("showexp").appendChild(node)
    }
    for (var h = 0; Qual.length > h; h++) {
        var nod = document.createElement("li");
        var textnod = document.createTextNode(Qual[h])
        nod.appendChild(textnod)
        document.getElementById("Showqual").appendChild(nod)
    }




}

function Printme() {

    document.getElementById("print").style.display = "none";
    document.getElementById("btndiv").style.display = "none";
    window.print()
    document.getElementById("print").style.display = "block";
    document.getElementById("btndiv").style.display = "block";


    //  window.close()
    // window.print()

}



















