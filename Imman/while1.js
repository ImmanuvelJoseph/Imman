function tables1(){
    var a = parseInt(document.getElementById("a").value);
    var r ="";
    var i = 1;
    while(i<=12){
        r=r + a + "x" + i +"=" + (a*i) + "<br>";
        i++;
    }
    document.getElementById("a1").innerHTML = r;
}