// // que no 1
// document.write("Result<br>");
// var a=10;
// document.write("The value of a is: ");
// document.write(a);
// document.write("<br>- - - - - - - - - - - - - - - - - - - ");
// ++a;
// document.write("<br><br>the value of ++a is : ");
// document.write(a);
// document.write("<br>now the value of a is: ")
// document.write(a);

// a++;
// document.write("<br><br>the value of a++ is : ");
// document.write(a);
// document.write("<br>now the value of a is: ")
// document.write(a);

// --a;
// document.write("<br><br>the value of --a is : ");
// document.write(a);
// document.write("<br>now the value of a is: ")
// document.write(a);

// a--;
// document.write("<br><br>the value of a-- is : ");
// document.write(a);
// document.write("<br>now the value of a is: ")
// document.write(a);



// // que no 2
// document.write("a is 2")
// document.write("<br>b is 1")
// document.write("<br>result is 3")
// document.write("<br>as 1)a=2 --a pre increament so a=1")
// document.write("<br>as 2)a=0 and b=1 now --b is sub from a which is also pre increament so ans will be 1")
// document.write("<br>as 3)previous step ans is 1 we add it with pre increment of b so ans will be 2 ")
// document.write("<br>as 4)previous ans is 2 and  b-- is post increament it value remain same and will change after this step so ans will be 3<br><br>")


// // que no 3
// var name=prompt("please enter your name")
// alert("have a good day " + name)

// // que no 4
// var num=prompt("enter number to see its table")
// if(num!=0){
//     for(var i=1;i<=10;i++){
//     document.write(num + 'x' + i + "=" + num*i)
// document.write("<br>")
//     }}
//     else{
//         no=5;
//         for(var j=1;j<=10;j++){
//             document.write('5x' + j + "=" + no*j)
//         document.write("<br>")

//         }}

// // que no 5
var math=prompt("enter sub 1 name")
var phy=prompt("enter sub 2 name")
var chem=prompt("enter sub 3 name")
var total=100;
var first=prompt("enter marks for" + math)
var sec=prompt("enter marks for" + phy)
var third=prompt("enter marks for" + chem)
var perc1=(first/100)*100;
var perc2=(sec/100)*100;
var perc3=(third/100)*100;
var totper=(perc1+perc2+perc3)/3

document.write("SUBJECT | TOTAL MARKS | OBTAIN MARKS | PERCENTAGE" + "<br>")
document.write(math + "       " + total + "  " + first + "  " + perc1 + "<br>")
document.write(phy + "       " + total + "  " + sec + "  " + perc2 + "<br>")
document.write(chem + "       " + total + "  " + third + "  " + perc3)































