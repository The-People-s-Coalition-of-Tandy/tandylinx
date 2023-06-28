



var submit = document.getElementById("submit");
submit.addEventListener("click", create_output_array, false);


function create_output_array(){

    var artist_input = document.getElementById("artist");
    var title_input = document.getElementById("title");
    var album_cover_url_input = document.getElementById("album_cover_url_src");
    var background_color_input = document.getElementById("website_bg_color");


    var output;


    var new_line = " \n";
    var artist = "var artist = ";
    output =  artist + '"' + artist_input.value + '"' + "; " + new_line;

    var title = "var title = ";
    output += title + '"' + title_input.value  + '"' + "; " + new_line;

    var album_cover = "var album_cover_url_src = ";
    output += album_cover + '"' + album_cover_url_input.value + '"'  + "; " + new_line;
   
    var background_color = "var backgroundColor = ";
    output += background_color + '"' + background_color_input.value + '"' + "; " + new_line + new_line;




//create Data array

    var data_text = "var data = [ ";
        // console.log(output);


 for (i = 0; i < how_many_buttons; i++){

    
    var current_link_id = "link_" + i;

    var current_link_name = document.getElementById(current_link_id + "_name");
    var current_link_url = document.getElementById(current_link_id + "_url");
    var current_link_font_color = document.getElementById(current_link_id + "_font_color");
    var current_link_bg_color = document.getElementById(current_link_id  + "_bg_color");


    // console.log(how_many_buttons);
    // console.log(output);


    if (i == how_many_buttons - 1){
        data_text += new_line + "{ " + new_line;
        data_text += '"name" : ' + '"' + current_link_name.value + '"' + "," + new_line;
        data_text += '"url" : ' + '"' +current_link_url.value + '"' + "," + new_line;
        data_text += '"font_color" : ' + '"' + current_link_font_color.value + '"' + "," + new_line;
        data_text += '"bg_color" : ' + '"' + current_link_bg_color.value + '"' + "," + new_line;
        data_text += '"hover_color" : "rgb(100 100 180)" '+ new_line;
        data_text += "}" + new_line;
        data_text += "]";
        output += data_text;

        data_text = "";

    }else{

        data_text += new_line + "{ " + new_line;
        data_text += '"name" : ' + '"' + current_link_name.value + '"' + "," + new_line;
        data_text += '"url" : ' + '"' + current_link_url.value + '"' + "," + new_line;
        data_text += '"font_color" : ' + '"' + current_link_font_color.value + '"' + "," + new_line;
        data_text += '"bg_color" : ' + '"' + current_link_bg_color.value + '"' + "," + new_line;
        data_text += '"hover_color" : "rgb(100 100 180)" '+ new_line;
        data_text += "},";
        // console.log(data_text);
        output += data_text;

        data_text = "";


    }


  }

   




    document.getElementById("output").textContent = output;





}

