function tables(){
    var a = parseInt(document.getElementById("a").value);
    var r ="";
    for(var i=1;i<=12;i++){
        r=r + a + "x" + i +"=" + (a*i) + "<br>";
        
    }
    document.getElementById("a1").innerHTML = r;
}