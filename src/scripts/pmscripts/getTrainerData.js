const fs = require("fs");
const request = require('request');
const cheerio = require("cheerio");
const axios = require("axios");
const {trainerData} = require('./trainers.js');
log = console.log;
const trainerFolder = "/Users/alachhman/Documents/GitHub/gamedatabase/src/trainers/";

const getTrainerData = async () => {
    for (const trainer of trainerData) {
        const trainerUri = await axios.get(
            "https://gamepress.gg/pokemonmasters/trainer/" + trainer.Trainer.replace(". ", "-").replace(" ", "-").replace(" ", "-")
        );
        const $ = cheerio.load(trainerUri.data);

        console.log(trainer.Trainer + " is being written.");

        const description = $('div.trainer-description').text();

        let base_potential_src = $('#sync-pair-table > tbody > tr:nth-child(2) > td').attr("src");
        if (base_potential_src === undefined) {
            base_potential_src = "5-star";
        }
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
