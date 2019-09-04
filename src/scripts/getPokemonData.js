const https = require("https");
const fs = require("fs");

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
          stats = {
            atk: pokemon.atk === "" ? 0 : parseInt(pokemon.atk),
            bulk: pokemon.bulk === "" ? 0 : parseInt(pokemon.bulk),
            def: pokemon.def === "" ? 0 : parseInt(pokemon.def),
            dex: pokemon.dex === "" ? 0 : parseInt(pokemon.dex),
            hp: pokemon.hp === "" ? 0 : parseInt(pokemon.hp),
            spatk: pokemon.spatk === "" ? 0 : parseInt(pokemon.spatk),
            spdef: pokemon.spdef === "" ? 0 : parseInt(pokemon.spdef),
            spd: pokemon.spd === "" ? 0 : parseInt(pokemon.spd)
          };

          let object = {
            name: name === "" ? "" : name,
            type1: type1 === "" ? "" : type1,
            type2: type2 === "" ? "" : type2,
            weakness: weakness === "" ? "" : weakness,
            role: role === "" ? "" : role,
            image: image === "" ? "" : image,
            stats: stats
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
