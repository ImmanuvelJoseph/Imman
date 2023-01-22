function tables2(){
    var a = parseInt(document.getElementById("a").value);
    var r ="";
    var i = 1;
    do{
        r=r + a + "x" + i +"=" + (a*i) + "<br>";
        i++;
    }while(i<=12);
    document.getElementById("a1").innerHTML = r;
}