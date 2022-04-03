var playerfirst=document.querySelector("#firstname");

var playersecond=document.querySelector("#sname")

var btn=document.querySelector("#submitbutton");

var namearea=document.querySelector(".playernames")

var input=document.querySelectorAll("input")

var k;

var player1;

var player2;
btn.addEventListener("click",function(){
     
    if(playerfirst.value=="" && playersecond.value==""){
        playerfirst.style.border="1px solid red"
        playersecond.style.border="1px solid red"
        alert("Please enter player first and second names")
        
    }
    if(playerfirst.value!="" && playersecond.value!=""){
      namearea.innerHTML=`<p><span class='name'>x-${playerfirst.value}</span><span class='vs'>VS</span><span class='name'>${playersecond.value}-o</span></p>`
      k=namearea.innerHTML;
      player1=playerfirst.value;
      player2=playersecond.value;
      console.log(playerfirst)
      playerfirst.value=null;
      playersecond.value=null;
      playerfirst.disabled=true;
      playersecond.disabled=true;
      btn.disabled=true;
      playerfirst.style.border="none"
      playersecond.style.border="none"

      
    }
    if(playerfirst.value=="" &&  playersecond.value!=""){
        playerfirst.style.border="1px solid red"
        playersecond.style.border="none"
        alert("Please enter player first name")
        
        playersecond.value!=null;
    }
    if(playersecond.value=="" && playerfirst.value!=""){
        playersecond.style.border="1px solid red"
        playerfirst.style.border="none"
        alert("Please enter player second name")
        playerfirst.value!=null;
    }
    
   
  
})

input[0].addEventListener("keyup",function(e){
   
    if(e.keyCode==13){
    if(input[0].value=="" && input[1].value==""){
        input[0].style.border="1px solid red"
        input[1].style.border="1px solid red"
        alert("Please enter player first and second names")
       
    }
    if(input[0].value!="" && input[1].value!=""){
      namearea.innerHTML=`<p><span class='name'>x-${playerfirst.value}</span><span class='vs'>VS</span><span class='name'>${playersecond.value}-0</span></p>`
      k=namearea.innerHTML;
      player1=playerfirst.value;
      player2=playersecond.value;
      playerfirst.value=null;
      playersecond.value=null;
      playerfirst.disabled=true;
      playersecond.disabled=true;
      btn.disabled=true;
      input[0].style.border="none"
      input[1].style.border="none"

    }
    if(input[0].value=="" &&  input[1].value!=""){
        input[0].style.border="1px solid red"
        input[1].style.border="none"
        alert("Please enter player first name")
        
        playersecond.value!=null;
    }
    if(input[1].value=="" && input[0].value!=""){
        input[1].style.border="1px solid red"
        input[0].style.border="none"
        alert("Please enter player second name")
        
        playerfirst.value!=null;
    }
   }
})

input[1].addEventListener("keyup",function(e){
    if(e.keyCode==13){
        if(input[0].value=="" && input[1].value==""){
        input[0].style.border="1px solid red"
        input[1].style.border="1px solid red"
        alert("Please enter player first and second names")
        
            
        }
        if(input[0].value!="" && input[1].value!=""){
          namearea.innerHTML=`<p><span class='name'>x-${playerfirst.value}</span><span class='vs'>VS</span><span class='name'>${playersecond.value}-o</span></p>`
          k=namearea.innerHTML;
          player1=playerfirst.value;
          player2=playersecond.value;
          playerfirst.value=null;
          playersecond.value=null;
          playerfirst.disabled=true;
          playersecond.disabled=true;
          btn.disabled=true;
          input[0].style.border="none"
          input[1].style.border="none"
        }
        if(input[0].value=="" &&  input[1].value!=""){
            input[0].style.border="1px solid red"
            input[1].style.border="none"
            alert("Please enter player first name")
            
            playersecond.value!=null;
        }
        if(input[1].value=="" && input[0].value!=""){
            input[1].style.border="1px solid red"
            input[0].style.border="none"
            alert("Please enter player second name")
            
            playerfirst.value!=null;
        }
       }


})

var button=document.querySelectorAll(".icon")

var click=false;
var click1=0;
var t=true;
var x;
var n;


button.forEach(o=>{
    function empty(){
        for(var i=0;i<button.length;i++){
            if(button[i].textContent==""){
             button[i].disabled=true;
            }
        }
    }
    o.addEventListener("click",function(){
        
        
        
         if(k==namearea.innerHTML){
         click1++;
         click=!click;
         console.log(click)
         if(click==true){
         o.textContent="x"
         
         x=o.textContent;
         o.disabled=true;

         
         }
         else{
         o.textContent="o"
         n=o.textContent;
         o.disabled=true;
         
        }
         
         
        
        if(button[0].textContent==x && button[1].textContent==x && button[2].textContent==x){
            alert(`Player ${player1} won`)
            empty() 
            t=!t;
            
        }
        if(button[3].textContent==x && button[4].textContent==x && button[5].textContent==x){
            alert(`Playe ${player1}  won`)
            empty()
            t=!t;
         }
        if(button[6].textContent==x && button[7].textContent==x && button[8].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
        if(button[0].textContent==x && button[3].textContent==x && button[6].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
        if(button[1].textContent==x && button[4].textContent==x && button[7].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
        if(button[2].textContent==x && button[5].textContent==x && button[8].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
         if(button[0].textContent==x && button[4].textContent==x && button[8].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
         if(button[2].textContent==x && button[4].textContent==x && button[6].textContent==x){
            alert(`Player ${player1} won`)
            empty()
            t=!t;
         }
         
         if(button[0].textContent==n && button[1].textContent==n && button[2].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
         if(button[3].textContent==n && button[4].textContent==n && button[5].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
         if(button[6].textContent==n && button[7].textContent==n && button[8].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
         if(button[0].textContent==n && button[3].textContent==n && button[6].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
         if(button[1].textContent==n && button[4].textContent==n && button[7].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
         if(button[2].textContent==n && button[5].textContent==n && button[8].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
        if(button[0].textContent==n && button[4].textContent==n && button[8].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            t=!t;
         }
        if(button[2].textContent==n && button[4].textContent==n && button[6].textContent==n){
            alert(`Player ${player2} won`)
            empty()
            
            t=!t;
        }
        if(click1==9 && t==true){
           alert("Draw")
        }
        }
         else{
             input[0].style.border="1px solid red"
             input[1].style.border="1px solid red"
             alert("Please enter player first and second names")
         }
        
    })
})




var restart=document.querySelector(".restart");

console.log(restart)



restart.addEventListener("click",function(){
    
    
    for(var i=0;i<button.length;i++){
        button[i].textContent=""
        button[i].disabled=false;
    }
    
    click=false;
    t=true;
    click1=0;
    
   
})

var resnewnames=document.querySelector("#newnames")

resnewnames.addEventListener("click",function(){
    playerfirst.disabled=false;
    playersecond.disabled=false;
    namearea.innerHTML=""
    for(var i=0;i<button.length;i++){
        button[i].textContent=""
        button[i].disabled=false;
    }
    
    click=false;
    t=true;
    click1=0;
    btn.disabled=false;
})