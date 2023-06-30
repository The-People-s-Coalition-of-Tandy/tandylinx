//create welcome_to header with data from data.js
function welcome_to_make(){

    var welcome_to_text;
    var welcome_to_start_text = "Welcome to the " + "<br> ";
    var welcome_to_link = '<a href=' + data[0].url + '>' + title + '</a>';
    var welcome_to_end_text = "<br> " + "Tandy Link Tree";
    welcome_to_text = welcome_to_start_text + welcome_to_link + welcome_to_end_text;
    
    document.getElementById("welcome_to").innerHTML = welcome_to_text;
    }
    
    welcome_to_make();
    