

//  to UPDATE tandyLinx, just change the values in the "data" array

var data = [
    {
        "name" :  '"Into the Blue" by BLUE DISH',
        "url" : "https://bluedish.pcotandy.org/"
    },
    {
        "name" :  "Bones Competition",
        "url" : "https://bones.pcotandy.org/"
    },
    {
        "name" :  "PCoT Website",
        "url" : "https://pcotandy.org"
    },
    {
        "name" :  '"EV1" by LE1',
        "url" : "https://www.pcotandy.org/EV1/"
    },
    {
        "name" :  '"Lands End" by Ko T. C.',
        "url" : "https://www.pcotandy.org/LandsEnd/"
    },
    {
        "name" :  "Get Coalition News",
        "url" : "https://www.pcotandy.org/signup.html"
    }//make sure theres no comma at the end of objects or the array
];


for(let i=0 ; i < data.length ;  i++){

    var current_link_data = data[i]; // cycle through all of the objects in data array

    var button = document.createElement("a"); //create link

    button.className = "link";
    button.innerHTML = current_link_data.name; // set name from data
    button.setAttribute('href', current_link_data.url); //set url from data

    document.getElementById("links_container").appendChild(button); //append link to end of container
}
