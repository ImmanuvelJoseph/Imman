function calc(){
    var v1 = parseInt(document.getElementById("v1").value);
    var v2 = parseInt(document.getElementById("v2").value);
    var s =(document.getElementById("sym").value);
    switch(s){
        case "+": c= v1+v2;
        break;
        case "-": c= v1-v2;
        break;
        case "*": c= v1*v2;
        break;
        case "/": c= v1/v2;
        break;
        default: alert("enter the valid symbol + - * /");
    }
    document.getElementById('ans').innerHTML = "Output" +c;

}