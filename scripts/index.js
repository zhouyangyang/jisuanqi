window.onload=function(){

	var aa=document.getElementsByClassName("aa"),
      equ=document.getElementById("chang"),
      xian=document.getElementById("xian"),
      xiaokuai=document.getElementsByClassName("xiaokuai"),
      color=document.getElementsByClassName("co1"),
      ac=document.getElementById("ac"),
      m=document.getElementById("m"),
      kuai=document.getElementById("kuai"),
      dakuai=document.getElementById("dakuai"),
      pic=document.getElementById("pic"),
    pic1=document.getElementById("pic1"),
    x3=document.getElementById("x3"),
    bb=document.getElementsByClassName("bb"),

     shu1="",
     shu2="",
     shu3="",
     yunsuan="",
     jieguo,
     kaiguan,
     kaiguan1=true,
     kaiguan2=false;
  
    // for(var i=0;i<xiaokuai.length;i++){
    //   xiaokuai[i].onclick=function(){
    //     console.log(1);
    //     this.style.webkitTransform="Scale(0.8,0.8)";
    //   }
    // }
  for(var i=0;i<color.length;i++){
     
 	   color[i].onclick=function(){
     
      if(yunsuan==""&&xy!="1"){
         if(this.innerHTML=="."&&shu1.indexOf(".")!=-1||this.innerHTML=="."&&shu1==""){
         return;
          }

        if(shu3!=""&&xian.innerHTML!=""&&kaiguan==true){                     
               xian.innerHTML="";
               console.log(xian.innerHTML);
               kaiguan=false;
               shu1="";              
         }           
           shu1=shu1+this.innerHTML;      
           xian.innerHTML=shu1;      
      }else{
         if(this.innerHTML=="."&&shu2.indexOf(".")!=-1||this.innerHTML=="."&&shu2==""){
         return;
          }
          if(kaiguan2==true){
            xian.innerHTML="";
          }
         shu2=shu2+this.innerHTML;
         if(xy=="1"){
           xian.innerHTML=shu2;
         }else{
           xian.innerHTML=shu1+yunsuan+shu2;
         }
        
      }
    }
  }

   for(var i=0;i<aa.length;i++){
      aa[i].onclick=function(){
        if(shu1==""){
          if(jieguo!=undefined){
              shu1=jieguo;
              yunsuan=this.innerHTML;
              xian.innerHTML=shu1+yunsuan;
           }
        }else{
         yunsuan=this.innerHTML;
         xian.innerHTML=shu1+yunsuan;
          
        }
      }    
    }

    equ.onclick=function(){      
        if(yunsuan=="+"){

          jieguo=Number(shu1)+Number(shu2);
        }
        if(yunsuan=="-"){
          jieguo=Number(shu1)-Number(shu2);
        }
        if(yunsuan=="*"){
          jieguo=Number(shu1)*Number(shu2);
        }
         if(yunsuan=="/"){
          jieguo=Number(shu1)/Number(shu2);
        }
        if(yunsuan==""){
            if(xy=="1"&&shu2!=""){
              jieguo=Math.pow(shu1,shu2);
            }
          if(xy==""&&jieguo==undefined){
             jieguo=shu1;   
          }else if(xy==""&&jieguo!=undefined){
             if(shu1!=""){
              jieguo=shu1;
             }else{
              jieguo=jieguo;
               } 
          }

        }

         xian.innerHTML=jieguo;
         shu1=shu2=yunsuan=xy="";
    }
    if(x3!=null){
        x3.onclick=function(){
      xian.innerHTML=Math.pow(shu1,3);
      shu1="";
    } 
    }
  
    var xy="";
    if(pic!=null){
       pic.onclick=function(){
         xy="1";
         kaiguan2=true;
       }
    }
   
    for(var i=0;i<bb.length;i++){
    
       bb[i].onclick=function(){

           if(shu1!=""){
                if(this.innerHTML=="sinh"){
                  xian.innerHTML=Math.sinh(shu1);
                }
                if(this.innerHTML=="cosh"){
                  xian.innerHTML=Math.cosh(shu1);
                }
                if(this.innerHTML=="tanh"){
                  xian.innerHTML=Math.tanh(shu1);
                }
                shu1=="";
            }    
        }
    }
    if(pic1!=null){
        pic1.onclick=function(){
         xian.innerHTML=Math.pow(Math.E,shu1);
         shu1="";
   }
    }
  
   ac.onclick=function(){
    shu1=shu2=yunsuan=shu3="";
    jieguo=0;
    xian.innerHTML=jieguo;
     m.style.display="none";
   }
   var hh=document.getElementsByClassName("hh");
   
   for(var j=0;j<hh.length;j++){
        
          hh[j].onclick=function(){
          
              if(this.innerHTML=="m+"){
                        kaiguan=true;
                     if(!isNaN(Number(xian.innerHTML))){
                
                        (shu3=="")?shu3=xian.innerHTML:shu3=(Number(shu3)+Number(xian.innerHTML));
                         m.style.display="block";
                     }
               }
              if(this.innerHTML=="m-"){
                kaiguan=true;
                         if(!isNaN(Number(xian.innerHTML))){
                        (shu3=="")?shu3=xian.innerHTML:shu3=Number(shu3)-Number(xian.innerHTML);
                         m.style.display="block";
                       }
               }
               if(this.innerHTML=="mr"){
                    if(shu3!=""){
                      xian.innerHTML=shu3;
                    }
               }
              if(this.innerHTML=="mc"){
                shu3=shu1="";
                 m.style.display="none";
              }       

               

                     
          }
   }
}