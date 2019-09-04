const https = require("https");
const fs = require("fs");

function getAndWritePokemonInfo() {
  https
    .get(
      "https://gamepress.gg/sites/default/files/aggregatedjson/PokemonMastersPokemonList.json",
      resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          let json = JSON.parse(data);
          json.forEach(pokemon => {
            name = pokemon.title_plain
              .split("&amp;")
              .pop()
              .trim();
            filename = name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/\(|\)/g, "");
            type1 = pokemon.type1_plain;
            type2 = pokemon.type2_plain;
            weakness = pokemon.weakness_plain;
            role = pokemon.role;
            image = pokemon.icon
              .replace(/\n/g, "")
              .trim()
              .replace(/<a href="(.*)"><img src="|".*$/gm, "")
              .replace(/^\/sites.*(?=pm)|\?.*$/g, "");

            let object = {
              name: name === "" ? "" : name,
              type1: type1 === "" ? "" : type1,
              type2: type2 === "" ? "" : type2,
              weakness: weakness === "" ? "" : weakness,
              role: role === "" ? "" : role,
              image: image === "" ? "" : image,
              stats: {}
            };

            let objectString = JSON.stringify(object);
            fs.writeFileSync(filename + ".json", objectString);
          });
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
    });
}

function getAndWritePokemonStats() {
  https
    .get(
      "https://gamepress.gg/sites/default/files/aggregatedjson/StatRankingsMastersPokemon.json",
      resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          let json = JSON.parse(data);
          json.forEach(stat => {
            filename = stat.title
              .split("&amp;")
              .pop()
              .trim()
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/\(|\)/g, "");

            let rawdata = fs.readFileSync("../pokemon/" + filename + ".json");
            let pokemon = JSON.parse(rawdata);
            pokemon.stats = {
              base: {
                attack: parseInt(stat.field_base_attack),
                defense: parseInt(stat.field_base_defense),
                hp: parseInt(stat.field_base_hp),
                speed: parseInt(stat.field_base_speed),
                sp_atk: parseInt(stat.field_base_sp_atk),
                sp_def: parseInt(stat.field_base_sp_def)
              },
              max: {
                attack: parseInt(stat.field_max_attack),
                bulk: parseInt(stat.field_max_bulk_floored),
                defense: parseInt(stat.field_max_defense),
                hp: parseInt(stat.field_max_hp),
                speed: parseInt(stat.field_max_speed),
                sp_atk: parseInt(stat.field_max_sp_atk),
                sp_def: parseInt(stat.field_max_sp_def)
              }
            };

            let objectString = JSON.stringify(pokemon);
            fs.writeFileSync(filename + ".json", objectString);
          });
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
    });
}

getAndWritePokemonInfo();
getAndWritePokemonStats();
