function updateselect(){
    $.get("css-properties.json",function(data){
         console.log(data);
        console.log(Object.keys(data))
        code="";
        for(let x of Object.keys(data)){
            code+="<div class='content'>"
            code+="<h2>"+x+"</h2>"
            code+="<p>"+data[x]+"</p>"
            code+="</div>"
        }
        document.getElementById('props').innerHTML =code;
    });
}

$(document).ready(
       function(){
        updateselect();
       }
    )
