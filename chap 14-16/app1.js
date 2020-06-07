// que no 7
document.write("QUALIFICATIONS<br>")
var qual = ["SSC","HSC", "BCS","BS", "BCOM", "MS", "M. Phil", "PhD"]
j=1;
for(var i=0;i<=7;i++){
    document.write(j)
    document.write(")")
    document.write(qual[i])
    document.write("<br>")
    j++;
}
document.write("<br><br>")

//que no 8
var name =["ali","hamza","sheroze"];
var scr=[230,320,480];

total=500;
for(j=0;j<=2;j++){
    new1[j]=((scr[j]/total)*100);
    document.write(new1[j])
}
    
for(f=0;f<=2;f++){
    document.write("score of")
    document.write(name[f]);
    document.write("is")
    document.write(scr[f]);
    document.write("percentage: ")
    document.write(new1[f]);
    document.write("<br>")

}


