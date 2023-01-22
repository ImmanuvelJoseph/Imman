ad={
    name:'Virat',
    age:30,
    work: function(){
        console.log(this.name+ " is a cricketer");
    },
    family:{
        wife:'Anuskha', profession:'actress'
    }
}
console.log(ad);
console.log(ad.name);
ad.work();
console.log(ad.family.wife);
var v1= "This a javascript class" ;
console.log(v1.charAt(3));
console.log(v1.charCodeAt(7));
console.log(v1.concat("Good Morning" ));
console.log(v1);
console.log(v1.indexOf("s"));
console.log(v1.lastIndexOf("s"));
console.log(v1.endsWith("t"));
