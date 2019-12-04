const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
log = console.log;

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

        const cvTemp = $('#stats-table > tbody > tr:nth-child(4)').text().split("\n");
        const cv = [cvTemp[1], cvTemp[2]];

        const abilities = [];
        $('.view.view-ability-on-character-page > div > div > div > span > table > tbody').each((i, skillTable) => {
            const abilitiesTemp = [];
            $(skillTable).find('.ability-info').each((i, skill) => {
                abilitiesTemp.push(
                    {
                        name: $(skill).find('> b > a').text(),
                        effect: $(skill).find('> .ability-effect').text().replace("\n", ""),
                    }
                )
            });
            abilities.push(abilitiesTemp);
        });

        const skills = [];
        $('.view.view-skills-on-character > div > div > div > span').each((i, skill) => {
            const name = $(skill).find('.skill-main-title > td > b > a').text();
            const cost = $(skill).find('.skill-extra-data > tbody > tr > td:nth-child(2)').text();
            const iframe = $(skill).find('.skill-extra-data > tbody > tr > td:nth-child(4)').text();
            const levels = [];
            $(skill).find('table').each((i, table) => {
                if (i !== 1) {
                    $(table).find('> tbody > tr').each((i, level) => {
                        if (i !== 0) {
                            levels.push(
                                {
                                    level: $(level).find('> th').text(),
                                    description: $(level).find('> td:nth-child(2)').text(),
                                }
                            );
                        }
                    });
                }
            });
            skills.push({
                name: name,
                levels: levels,
                cost: cost,
                iframe: iframe
            });
        });

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
            cv: cv,
            title: title,
            rarity: rarity,
            element: element,
            weapon: weapon,
            role: role,
            atk: atk,
            hp: hp,
            abilities: abilities,
            skills: skills
        };

        if(name === "Marth"){console.dir(adventurer, {depth: null, colors: true})}
    });
};

getDragaliaUnits().then(() => console.log("Starting."));



