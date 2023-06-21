let mydiv=document.getElementById("myDiv");
let i = 0;
mydiv.onclick=function() {
    i++
    if(i % 2 !== 0) {
        mydiv.style.backgroundColor = "purple"
    }
    else if(i == 2) {
        myDiv.style.backgroundColor = "blue"
    }
    else {
        myDiv.style.opacity = "0"
    }
}