
var artist = "{ARTIST}";

var title = "{TITLE}" + " by " + artist;

var album_cover_url_src = "./assets/cover.png";

var backgroundColor = "blue";

const explosion_invert = true;

var data = [
    {//make sure theres no comma at the end of objects or the array
        "name" :  'Bandcamp',
        "url" : "https://tandy.bandcamp.com/album/5",
        "font_color" : "blue",
        "bg_color" : "rgb(200, 200, 200)",
        "hover_color" : "rgb(100 100 180)"
    },
    {
        "name" :  "Spotify",
        "url" : "https://bones.pcotandy.org/",
        "font_color" : "darkgreen",
        "bg_color" : "rgb(200, 200, 200)",
        "hover_color" : "rgb(164, 220, 159)"
    },
    {
        "name" :  "PCoT Website",
        "url" : "https://pcotandy.org",
        "font_color" : "pink",
        "bg_color" : "rgb(200, 200, 200)",
        "hover_color" : "darkgray"
    },
    {
        "name" :  "Get Coalition News",
        "url" : "https://www.pcotandy.org/signup.html",
        "font_color" : "orange",
        "bg_color" : "rgb(200, 200, 200)",
        "hover_color" : "lightblue"
    }
];
