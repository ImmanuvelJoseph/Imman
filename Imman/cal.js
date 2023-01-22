function add(){
    var a1 = parseInt(document.getElementById("v1").value);
    var a2 = parseInt(document.getElementById("v2").value);
    var c = a1+a1;
    document.getElementById('ans').innerHTML ="the answer is"+c;
}
function sub(){
    var b1 = parseInt(document.getElementById("v1").value);
    var b2 = parseInt(document.getElementById("v2").value);
    var c = b1-b2;
    document.getElementById('ans').innerHTML ="the answer is"+c;
}
function mul(){
    var c1 = parseInt(document.getElementById("v1").value);
    var c2 = parseInt(document.getElementById("v2").value);
    var c = c1*c2;
    document.getElementById('ans').innerHTML ="the answer is"+c;
}
function div(){
    var d1 = parseInt(document.getElementById("v1").value);
    var d2 = parseInt(document.getElementById("v2").value);
    var c = d1/d2;
    document.getElementById('ans').innerHTML ="the answer is"+c;
}