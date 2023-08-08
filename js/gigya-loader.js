let defaultApikey = '4_jrYp5BuKZenarXK9aLYN-w';
let defaultDc = 'us1-st2';

let queryParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let apikey = queryParams.apikey ?? defaultApikey
let dc = queryParams.dc ?? defaultDc;
let url = "https://cdns." + dc + ".gigya.com/js/gigya.js?" + "apiKey=" + apikey;

let script = document.createElement("script");
script.type = "text/javascript";
script.src = url;
script.innerContent = document.currentScript.innerContent;
script.onload = function(){
    console.log("Script is ready!");
};
document.head.appendChild(script);