let table=document.getElementById("table");

const boxes = document.querySelectorAll('.box');
let n=0;
boxes.forEach(box => {
  box.addEventListener('click',(e)=>{
     let img=box.firstElementChild;
     if(img.attributes[0].value==""&&n<=9)
     {
     if(n%2==0){
     img.classList.add("x"); 
     img.attributes[0].value="X.png";
     n++;
     }
     else{
        img.classList.add("x"); 
        img.attributes[0].value="O.png";
        n++; 
     }
     n=check(n);
     if(n==9)
     {
     document.getElementById("status").innerHTML=" TIE"
      n++;
     }
     console.log(n)
   }
});
});
function check(n)
{
let i=0;
for(i=0;i<3;i++)
{
let row=table.children[0].children[i];
if(row.children[0].firstElementChild.attributes[0].value==row.children[1].firstElementChild.attributes[0].value&&row.children[1].firstElementChild.attributes[0].value==row.children[2].firstElementChild.attributes[0].value&&row.children[2].firstElementChild.attributes[0].value!="")
{
   document.getElementById("status").innerHTML=row.children[2].firstElementChild.attributes[0].value[0]+" Won"
   console.log(n)
   return 10;
}
}

i=0;
for(i=0;i<3;i++)
{
   let row=table.children[0]; 
   if(row.children[0].children[i].firstElementChild.attributes[0].value==row.children[1].children[i].firstElementChild.attributes[0].value&&row.children[1].children[i].firstElementChild.attributes[0].value==row.children[2].children[i].firstElementChild.attributes[0].value&&row.children[1].children[i].firstElementChild.attributes[0].value!="")
   {
   document.getElementById("status").innerHTML=row.children[0].children[i].firstElementChild.attributes[0].value[0]+" Won"
   return 10;
   }
}

let row=table.children[0]; 
if(row.children[0].children[0].firstElementChild.attributes[0].value==row.children[1].children[1].firstElementChild.attributes[0].value&&row.children[1].children[1].firstElementChild.attributes[0].value==row.children[2].children[2].firstElementChild.attributes[0].value&&row.children[1].children[1].firstElementChild.attributes[0].value!="")
   {document.getElementById("status").innerHTML=row.children[0].children[0].firstElementChild.attributes[0].value[0]+" Won"
    return 10;
}
if(row.children[2].children[0].firstElementChild.attributes[0].value==row.children[1].children[1].firstElementChild.attributes[0].value&&row.children[1].children[1].firstElementChild.attributes[0].value==row.children[0].children[2].firstElementChild.attributes[0].value&&row.children[1].children[1].firstElementChild.attributes[0].value!="")
   {document.getElementById("status").innerHTML=row.children[1].children[1].firstElementChild.attributes[0].value[0]+" Won"
    return 10;
   }
   else return n;
}
function reset(){
   boxes.forEach(box => {
      let img=box.firstElementChild;
      img.attributes[0].value="";
      document.getElementById("status").innerHTML="";
   });
}