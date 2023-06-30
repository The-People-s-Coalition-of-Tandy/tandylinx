//hover states

//THIS IS JANKY RIGHT NOW

for(let i=0 ; i < data.length ;  i++){
    // var hover_id =  i ;
    var hover = document.getElementById(i);
    hover.addEventListener("mouseover", function () {
    this.style.backgroundColor = data[i].hover_color;
    this.style.border = "3px red solid";
    console.log(this);
});
    hover.addEventListener("mouseleave", function () {
    this.style.backgroundColor = data[i].bg_color;
    this.style.border = "3px outset gray";

});

}

