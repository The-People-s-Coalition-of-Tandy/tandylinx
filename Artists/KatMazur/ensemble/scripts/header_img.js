//make album cover
function header_img_make(){
    var image = document.createElement("img"); //create link

    image.setAttribute('src', album_cover_url_src); //set url from data
    image.setAttribute('alt', "Album Cover"); //set url from data

    image.id = "album_cover_img";

    document.getElementById("album_cover").appendChild(image); //append link to end of container
}

header_img_make();