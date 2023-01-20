// Create an SVG element
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "24");
svg.setAttribute("height", "24");
svg.setAttribute("viewBox", "0 0 24 24");

var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z");
path.setAttribute("fill", "black");
svg.appendChild(path);

var container = document.querySelector("#icon-container");
container.appendChild(svg);

svg.addEventListener("click", function() {
    var textToCopy = document.querySelector("#text-to-copy").innerText;
    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    var newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    newSvg.setAttribute("width", "24");
    newSvg.setAttribute("height", "24");
    newSvg.setAttribute("viewBox", "0 0 24 24");
    var newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.setAttribute("d", "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z");
    newPath.setAttribute("fill", "green");
    newSvg.appendChild(newPath);
    container.replaceChild(newSvg,svg);
    setTimeout(function() {
       container.replaceChild(svg,newSvg);
    }, 2000);
});


/////////////
//styles
////////////

var style = document.createElement('style');
style.innerHTML = 'svg:hover { cursor: pointer;}';
document.getElementsByTagName('head')[0].appendChild(style);
