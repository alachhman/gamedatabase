const fs = require("fs");
const request = require('request');
const cheerio = require("cheerio");
const axios = require("axios");
const {trainerData} = require('./trainers.js');
log = console.log;
const trainerFolder = "D:\\Programming\\gamedatabase\\src\\trainers\\";

const getTrainerData = async () => {
    for (const trainer of trainerData) {
        const trainerUri = await axios.get(
            "https://gamepress.gg/pokemonmasters/trainer/" + trainer.Trainer.replace(". ", "-").replace(" ", "-").replace(" ", "-")
        );
        const $ = cheerio.load(trainerUri.data);

        const description = $('div.trainer-description').text();

        const base_potential_src = $('td.base-potential-image > img').attr("src");
        let base_potential;
        if (base_potential_src.includes("5-star")) {
            base_potential = 5;
        } else if (base_potential_src.includes("4-star")) {
            base_potential = 4;
        } else if (base_potential_src.includes("3-star")) {
            base_potential = 3;
        }

        const recruitMethod = $('#sync-pair-table > tbody > tr:nth-child(3) > td').text();

        const object = {
            name: trainer.Trainer,
            info: description,
            base_potential: parseInt(base_potential),
            recruit_method: recruitMethod,
            pokemon_list: trainer.Pokemon.split("     ")
        };

      let objectString = JSON.stringify(object);
      fs.writeFileSync(trainerFolder + trainer.Trainer + ".json", objectString);
      console.log(object.name + " has been written");
    }
};

getTrainerData();
