javascript: var name;
var filename;
var image;
var description;

name = document.querySelector("#page-title").querySelector("h1").innerHTML;
filename = name
  .toLowerCase()
  .replace(/ /g, "-")
  .replace(/★/g, "");

image = document
  .querySelector(".item-rarity-icon")
  .querySelector("a")
  .querySelector("img")
  .src.split("/")
  .pop()
  .split(".png?itok")[0];

image = decodeURIComponent(image);

var imagencita = document
  .querySelector(".item-rarity-icon")
  .querySelector("a")
  .querySelector("img").src;

description = document
  .querySelectorAll(".description-cell")[0]
  .querySelector("p").innerHTML;

fetch(imagencita)
  .then(response => response.blob())
  .then(blob => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      var base64data = reader.result;

      var json = {
        name: name,
        image: base64data,
        description: description
      };
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(json));
      var dummyAnchor = document.createElement("a");
      document.querySelector("body").appendChild(dummyAnchor);
      dummyAnchor.setAttribute("href", dataStr);
      dummyAnchor.setAttribute("download", filename + ".json");
      dummyAnchor.click();
    };
  });
