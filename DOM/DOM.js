// console.log("hey this is prince");
// console.log("hey this is Pk");

// alert(" bhai chal gya jada mat soch ab padh le");
// dom - document object model
// dom manipulation kya kya karna hai ye baat karte hai
// text badalna
// html badalna 
// css ko chnage karna
// event listeners
// there are the methods by which we can select the thing .... getElementById, getElementByClassName,
// quarySelector, quarySelectorAll // imp


// let h1 = document.querySelector("h1");
// //h1.textContent ="hello prince kayse ho";
// h1.hidden = true;
// console.dir(h1);

//set attribute

// let img = document.querySelector("img");
// img.setAttribute("src","https://images.unsplash.com/photo-1735128370612-aaba0b42eda6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

//append
  // step 1 - create element
   // append or prepend karo jaha bhi element chahiye waha

// let h2 = document.createElement("h2");
// h2.textContent="hello boss";
// document.body.append(h2);


// solving some question which is genrated by gpt


// what is the DOM ? how does it represent the html structure?
  //--


  // events listner and event handling 
    
  
     // pahle  hame dom ki help se usko item ko select karna hota
       
     //ayse let p = document.quarySelector("p");
       // p.addEventListner("click" , function(){ ---- event ko listen karta hai uske bad 
       //                                  event me jo change karna hota hai usko
       //    p.style.color="red";                               function likhte hai
       //  
        //})

        // uper wala single click pe kaaam karega and duble click ke liye dblclick likhana hoga

         // let pc= document.quarySelector("p");
          //p.addEventListner("dblclick",function(){
          // p.style.color="yellow";
         //})
       
         // ebent Listener look like
         // element.addEvemntlistener("event name",function(){})

         // how to  removeing eventlistner if already evenet listner is happen..
               // p.removeEventListner("dblclick",dblclick); 
                       //                ye first wla comment hai woh dblclick pe kaam karta hai
                                           // second wala function hai ho pahle he bana ke shirf pass karna hai yaha poe

      //  let inp = document.querySelector("input");    // es line me normaly bas input type data ko selet kiya hai html se.. dom se event lagane ya fir hatane ke liye
      //  inp.addEventListener("input",function(dets){   // esme bol raha hai ager koe chnage hota hai input me toh ye action karna hai...
      //   if(dets.data !== null){        ye if esliye use hua kyu ki ye backspace pe bhi event chalta hai aur woh print ho jata hai bu hame toh shirf wahi print karna hai jo ham type kar rahe hai..
      //     console.log(dets.data);   yaha jo dets hai ye shirf veriable hai eska koe bhi naam ho sakta hai but jo .data hai ye use hota hai kyu ki har ek data ko print karwana hai har ek evenet pe ok...
      //   }

      //  });

      //  let input = document.querySelector("input");
      //  input.addEventListener("input",function(dets){
      //             if(dets.data !== null){
      //               console.log(dets.data);
      //             }
      //     });


      //change event tab chalta hai jab koe aapka koe input select ya textarea
      // mein koe change ho jaye..

      let sel = document.querySelector("select");
      let device = document.querySelector("#device");
      sel.addEventListener("change",function(dets){
         //console.log(dets.target.value);
        // device.textContent="Device Selected";
        device.textContent=`${dets.target.value} Device Selected`;

      });



 