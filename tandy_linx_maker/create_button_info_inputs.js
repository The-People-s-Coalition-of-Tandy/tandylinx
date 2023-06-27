


var number_of_buttons = document.getElementById("how_many_submit_button");
number_of_buttons.addEventListener("click", create_button_info_inputs, false);


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var how_many_buttons = document.getElementById("how_many").value; 


function create_button_info_inputs(){
    

    const buttons_input_container =  document.getElementById("buttons_input_container");
    removeAllChildNodes(buttons_input_container);//makes it so the fields don't keep stacking

    how_many_buttons = document.getElementById("how_many").value; 


    for (i = 0; i < how_many_buttons; i++){
        var current_button_number = i; // cycle through all of the objects in data array

        var name_input = document.createElement("input"); //create input
        name_input.id =  "link_" + i + "_name";
        var name_label =  document.createElement("label");
        name_label.setAttribute = ("for", name_input.id);
        name_label.textContent = name_input.id + " " + "Name";

        var url_input = document.createElement("input"); //create input
        url_input.id =  "link_" + i + "_url";
        var url_label =  document.createElement("label");
        url_label.setAttribute = ("for", url_input.id);
        url_label.textContent = url_input.id + " " + "URL";

        var font_color_input = document.createElement("input"); //create input
        font_color_input.id =  "link_" + i  + "_font_color";
        var font_color_label =  document.createElement("label");
        font_color_label.setAttribute = ("for", font_color_input.id);
        font_color_label.textContent = font_color_input.id + " " + "Font Color";

        var bg_color_input = document.createElement("input"); //create input
        bg_color_input.id =  "link_" + i + "_bg_color";
        var bg_color_label =  document.createElement("label");
        bg_color_label.setAttribute = ("for", bg_color_input.id);
        bg_color_label.textContent = bg_color_input.id + " " + "Background Color";


        
       buttons_input_container.append(name_label, name_input);
       buttons_input_container.append(url_label, url_input);
       buttons_input_container.append(font_color_label, font_color_input);
       buttons_input_container.append(bg_color_label, bg_color_input);



    }

        console.log("there are " + how_many_buttons + " buttons");

}