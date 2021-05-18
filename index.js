
temp=setInterval(function(){
   var hours = Number(document.getElementById("hours").innerText);
   var minutes = Number(document.getElementById("minutes").innerText);
   var seconds = Number(document.getElementById("seconds").innerText);
   if(seconds==00){
    seconds=59;
    if(minutes==0){
       minutes=59;
       if(hours==0)
       clearfun();
       else
       hours-=1;
    }
    else
    minutes-=1;
   }
   else{
       seconds-=1;
   }
  
   
   document.getElementById("hours").innerText=hours;
   document.getElementById("minutes").innerText=minutes;
   document.getElementById("seconds").innerText=seconds;
   
  
},1000);

function clearfun(){
    clearInterval(temp);
}
let index=1;
setInterval(function(){
    if(index==5)
      index=1;
    else
       index++;
    document.images[0].src = "stadium"+index+".jpg";

},3000
)