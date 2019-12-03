javascript: var filename;
var name;
var target;
var accuracy;
var power;
var type;
var category;
var cost;
var description;
var skill_type;

var data = [];

filename = window.location.href.split("/").pop();
name = document.querySelector("#page-title").querySelector("h1").innerHTML;
table = document.querySelectorAll("span.value-cell");
for (var i = 0, l = table.length; i < l; i++) {
    data.push(table[i]);
}

accuracy = data[3].innerHTML.replace(/\n/g, "");

target = data[4].querySelector("a").innerHTML;

power = data[2].innerHTML.replace(/\n/g, "");

if (data[0].querySelector(".type-title")) {
    type = data[0].querySelector(".type-title").innerHTML;
} else {
    type = "";
}

category = data[1]
    .querySelector("img")
    .src.split("/")
    .pop()
    .split(".")[0]
    .replace(/%20/g, " ");

moveDetailCell = document
    .querySelectorAll("div.move-detail-cell")[1]
    .querySelector("p").innerHTML;

skill_type = document
    .querySelector(".trainer-pokemon-skill")
    .innerHTML.replace(/\n/g, "");

if (document.querySelector(".pokemon-cost")) {
    cost = document.querySelector(".pokemon-cost").childElementCount;
} else if (document.querySelector(".trainer-cost")) {
    cost = document.querySelector(".trainer-cost").querySelector("a").innerHTML;
}

description = document
    .querySelectorAll(".move-detail-cell")[1]
    .querySelector("p").innerHTML;

var json = {
    name: name,
    target: target,
    accuracy: accuracy,
    power: power,
    type: type,
    category: category,
    cost: cost,
    description: description,
    skill_type: skill_type
};

var dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));

var dummyAnchor = document.createElement("a");
document.querySelector("body").appendChild(dummyAnchor);
dummyAnchor.setAttribute("href", dataStr);
dummyAnchor.setAttribute("download", filename + ".json");
dummyAnchor.click();
