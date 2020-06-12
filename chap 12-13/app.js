
//chapter 12-13

//que 1
var alpha = prompt("enter to know");

if(alpha>='a' && alpha<='z'){
    alert("lowercase letter");}
    
if(alpha>='A' && alpha<='Z'){
    alert("uppercase letter");}

if(alpha>='0' && alpha<='9'){
    alert("its a number")}


//que 2
var no1= prompt("enter first value");
var no2= prompt("enter second value");
if(no1>no2){
    alert("first value is greater")
}    
if(no1<no2){
    alert("second value is greater")
}
else(alert("both value are equal"))

//que 3
var no3= prompt("enter to know whether the number is positive, negative or zero.");
if(no3>0){
    alert("POSITIVE")
}    
if(no1<0){
    alert("NEGATIVE")
}
else(alert("ZERO"))


//que 4
var no5=prompt("enter single letter to know its a const or vowel");
var no4 = no5.toLowerCase();
if(no4 === 'a' || no4 === 'e' || no4 === 'i' || no4 ==='o' || no4 ==='u'){
    alert("true vowel")
}
else(alert("false no vowel"))

// que 5
var pass1 = "saylani";
var pass2;
pass2=prompt("Please enter your password");
if(pass1 === pass2){
    alert("Correct! The password you entered matches the original password")
}
else(alert("Incorrect password"));


//que 6
var greeting;
var hour = 13;
if (hour = 13) {
 greeting = "Good day";
}
else greeting = "Good evening"
alert(greeting)

//que 7 wrongly done beneath this question
var hrtime;
hrtime=prompt("enter time to know am pm.");

if(hrtime<1000){
var hrtime2=hrtime.slice(0,1)
alert(hrtime2 + ' am')}

if(hrtime>999 && hrtime<1200){
    var hrtime3=hrtime.slice(0,2);
    alert(hrtime3 + ' am')}

if(hrtime>=1200 && hrtime<=2401){
var hrtime4=hrtime.slice(0,2);
alert(hrtime4 + ' pm')
}

// que 7 rightly done
var hrtime;
hrtime=prompt("enter time to know am pm.");

if(hrtime>0000 && hrtime<1200){
    alert("GOOD MORNING!")}


if(hrtime>=1200 && hrtime<1700){
    alert("GOOD AFTERNOON!");
    }

if(hrtime>=1700 && hrtime<2100){
    alert("GOOD EVENING!");}

   if(hrtime>=2100 && hrtime<=2359){
       alert("GOOD NIGHT!");
   } 


//que 8


