var params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let apikey = params.apikey, dc = params.dc;
let url = "https://cdns." + dc + ".gigya.com/js/gigya.js?" + "apiKey=" + apikey;

var script = document.createElement("script");
script.type = "text/javascript";
script.src = url;
script.innerContent = document.currentScript.innerContent;
script.onload = function(){
    console.log("Script is ready!");
};
document.head.appendChild(script);