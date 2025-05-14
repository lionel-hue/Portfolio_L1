let time= 0
 const audio = new Audio("./welcome.mp3")


   function load (){
       if(time < 100){
        setTimeout(load,10)
        time++
        document.querySelectorAll(".container .loader progress")[0].value = time
       } else { 
         setTimeout( ()=>{                 
               document.querySelectorAll(".container .loader")[0].style.opacity=0
               document.querySelector(".container #home").style.display="flex" 

               setTimeout(()=>{
                  document.querySelectorAll(".container .loader")[0].style.display="none"
                  document.querySelector(".container #home").style.opacity="100%"  
                  audio.play()              
                 },1500)
               },1500)
         }
    }
        
       load()

       
       let menu = document.querySelectorAll(".container #home .menu")[0]
       let side_bar = document.querySelectorAll(".container #home .side_bar")[0]


        menu.addEventListener("click",e =>{
    
          if(side_bar.style.left=="-29.75vw"){
            side_bar.style.left = 0
          } else side_bar.style.left = "-29.75vw"
        })

        addEventListener('keydown',e=>{
          switch(e.key){ 
                   case " ":       
                   side_bar.style.left = 0
                     break;
                     case "x":
                      side_bar.style.left = "-29.75vw"
                      break;
                      case "X":
                        side_bar.style.left = "-29.75vw"
                        break;
          }
        })


 document.querySelectorAll("#home .side_bar .side_bar_elements_container div")[1].addEventListener("click",loisirs) 
 
 
     function loisirs(){
          
          if ( document.querySelectorAll("#home .side_bar .side_bar_elements_container div strong")[0].style.opacity==0){
          document.querySelectorAll("#home .side_bar .side_bar_elements_container div strong")[0].style.display="block"
          document.querySelectorAll("#home .side_bar .side_bar_elements_container div strong")[0].style.opacity="100%"
           } else{
            document.querySelectorAll("#home .side_bar .side_bar_elements_container div strong")[0].style.opacity=0
            document.querySelectorAll("#home .side_bar .side_bar_elements_container div strong")[0].style.display="none"
           }
        }

   