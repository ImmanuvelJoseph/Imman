function pos(){
  var a1 = document.getElementById("id1");
  var num =/^[0-9]+$/;
  console.log(a1);
    if(a1.value>0){
        alert("positive"+a1.value);
    }
    else if (a1.value.trim().length ==0){
        alert("the field is empty");
    }
    else if(!(a1.value.match(num))){
        alert("enter only numbers");
    }
    else{
        alert("negative");
    }
    }
  function hi(){
    var a1 = document.getElementById("id2");
    if(a1.value>0){
        if(a1.value %2==0){
            alert("p5");
        }
        else{
            alert("po");
        }
    }
    else{
        if(a1.value %2==0){
            alert("Negative");
        }
        else{
            alert("positive");
                }
    }
  }