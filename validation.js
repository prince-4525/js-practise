let nm = document.querySelector("#name");
let form= document.querySelector("form");

form.addEventListener("submit" , function(evt){
evt.preventDefault();
if(nm.Value.length <=2){
    document.querySelector("#hide").computedStyleMap.display = "initial";
}else{
     document.querySelector("#hide").computedStyleMap.display = "none";
}

})