const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
log = console.log;
const pokemonFolder = "D:\\Programming\\gamedatabase\\src\\pokemon\\";

const getDragaliaUnits = async () => {
    let json = await axios.get(
        "https://gamepress.gg/sites/default/files/aggregatedjson/DragaliaLostCharacterList.json?1581181076155443736"
    );
    const unitList = json.data.map(async (unit) => {
        let html = await axios.get(
            "https://gamepress.gg" + unit.title.substring(9, unit.title.indexOf("\" hreflang=\"en\">"))
        );
        const $ = cheerio.load(html.data);
        const name = $("h1").text();
        const image = "https://gamepress.gg" + $('#char-image > a > img').attr('src');
        const description = $('#stats-table > tbody > tr:nth-child(2) > td > p').text();
        const title = $('#overview-table > tbody > tr:nth-child(1) > th').text();
        const rarity = unit.rarity_num;
        const element = unit.char_element;
        const weapon = unit.weapon_type;
        const role = unit.char_type;
        const atk = unit.max_atk;
        const hp = unit.max_hp;

        const adventurer = {
            name: name,
            image: image,
            description: description,
            title: title,
            rarity: rarity,
            element: element,
            weapon: weapon,
            role: role,
            atk: atk,
            hp: hp
        };
        console.log(adventurer);
    });
};

getDragaliaUnits().then(() => console.log("Starting."));


