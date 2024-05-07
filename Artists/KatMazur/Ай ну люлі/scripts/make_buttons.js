

//  to UPDATE tandyLinx, just change the values in the "data" array

//create buttons
for(let i=0 ; i < data.length ;  i++){

    var current_link_data = data[i]; // cycle through all of the objects in data array

    var button = document.createElement("a"); //create link

    button.className = "link";
    button.id =  i;
    button.innerHTML = current_link_data.name; // set name from data
    button.setAttribute('href', current_link_data.url); //set url from data

    // var button_style = "color: " + current_link_data.font_color + "; ";
    // button_style += "background-color: " + current_link_data.bg_color + "; ";
    // button.setAttribute('style', button_style);

 

    document.getElementById("links_container").appendChild(button); //append link to end of container

}











