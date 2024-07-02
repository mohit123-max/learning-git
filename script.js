let dark = false;

document.querySelector("button").onclick = ()=>{
    if(dark === false){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        dark = true ; 
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        dark = false ; 
    }
}

console.log("hii my friend");