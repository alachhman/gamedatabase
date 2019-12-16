const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
log = console.log;

async function getDragaliaPrints() {
    let json = await axios.get(
        "https://gamepress.gg/sites/default/files/aggregatedjson/DragaliaLostWyrmpintsList.json?314012807818294637"
    );

    const printList = json.data.map(async (data)=>{
        let html = await axios.get(
            'https://gamepress.gg/dragalialost' + data.icon.substring(11, data.icon.indexOf('"><img src'))
        );
        const $ = cheerio.load(html.data);
        const name = $("h1").text();
        const atk = data.max_atk;
        const hp = data.max_hp;
        const type = data.wyrmprint_type;
        const rarity = data.rarity_num;
        const images = [];
        $('#char-image > a > img').each((i, img)=>{
            images.push('https://gamepress.gg' + $(img).attr('src'))
        });
        const descriptions = [];
        $('#wyrmprint-descriptions > tbody > tr').each((i, tr)=>{
            if(i > 0){
                descriptions.push($(tr).find('td:nth-child(2)').text())
            }
        });
        const skills = [];
        $('div.views-element-container').each((i, div)=>{
            const skill = [];
            $(div).find('> div > div > div > table:nth-child(1) > tbody > tr > td.ability-info').each((i, td)=>{
                skill.push({
                    name: $(td).find('b').text(),
                    description: $(td).find('span').text()
                })
            });
            skills.push(skill);
        });
        const skillsClean = skills.map((element)=>{
            if(element.length > 1){
                return element;
            }
        }).filter(function (element) {
            return element != null;
        });

        const print = {
            name: name,
            atk: atk,
            hp: hp,
            type: type,
            rarity: rarity,
            images: images,
            descriptions: descriptions,
            skills: skillsClean
        };

        console.dir(print, {depth: 5, colors: true});
        console.log(",")
    });
}

getDragaliaPrints();
