javascript: var filename;
var name;
var info;
var base_potential;
var recruit_method;
var image;
var sync_pair_story = [];
var pokemon_list = [];

name = document.querySelector("#page-title").querySelector("h1").innerHTML;
filename = name.toLowerCase().replace(/ /g, "-");
if (document.querySelector(".trainer-description").querySelector("p")) {
  info = document.querySelector(".trainer-description").querySelector("p")
    .innerHTML;
} else {
  info = document.querySelector(".trainer-description").innerHTML;
}

var base_potential_src = document
  .querySelector(".base-potential-image")
  .querySelector("img").src;
if (base_potential_src.includes("5-star")) {
  base_potential = 5;
} else if (base_potential_src.includes("4-star")) {
  base_potential = 4;
} else if (base_potential_src.includes("3-star")) {
  base_potential = 3;
}

var allTh = document.querySelectorAll("th");
allTh.forEach(function(th) {
  if (th.innerHTML === "Recruit Method") {
    if (th.nextElementSibling.innerHTML === "") {
      recruit_method = "";
    } else {
      recruit_method = th.nextElementSibling.querySelector("a").innerHTML;
    }
  }
});

var sync_pair_story_title = document.querySelectorAll(".taxonomy-title");
sync_pair_story_title.forEach(function(node) {
  sync_pair_story.push(node.querySelector("a").innerHTML);
});

var pokemon_trainer_node_pokemon_title = document.querySelectorAll(
  ".pokemon-trainer-node-pokemon-title"
);
pokemon_trainer_node_pokemon_title.forEach(function(node) {
  pokemon_list.push(node.innerHTML.split("amp; ").pop());
});

image = document
  .querySelector(".trainer-top-image")
  .querySelector("a")
  .href.split("/")
  .pop()
  .split(".")[0];

var json = {
  name: name,
  info: info,
  base_potential: base_potential,
  recruit_method: recruit_method,
  pokemon_list: pokemon_list,
  image: image,
  sync_pair_story: sync_pair_story
};
var dataStr =
  "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
var dummyAnchor = document.createElement("a");
document.querySelector("body").appendChild(dummyAnchor);
dummyAnchor.setAttribute("href", dataStr);
dummyAnchor.setAttribute("download", filename + ".json");
dummyAnchor.click();
