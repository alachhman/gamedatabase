const fs = require("fs");
const cheerio = require("cheerio");
const axios = require("axios");
log = console.log;

async function getDragaliaDragonLinks() {
    let html = await axios.get(
        "https://dragalialost.gamepedia.com/Category:Dragons"
    );
    const $ = cheerio.load(html.data);
    $("#mw-pages > .mw-content-ltr > .mw-category").each((i, letter) => {
        $(letter).find('ul > li').each((i, link) => {
            console.log('\'https://dragalialost.gamepedia.com' + $(link).find('a').attr('href') + "\' ,")
        });
    });
}

async function getDragaliaDragonData(links) {
    for (const link of links) {
        let html = await axios.get(link);
        const $ = cheerio.load(html.data);
        const name = $('h1').text();
        const title = $('.panel-heading > div:nth-child(1)').text();
        const isLocked = ((name.includes("(") && !name.includes("Dragon")) || name === "Rush");
        const image = $('#mw-content-text > div > div.panel > div.panel-body > div.portrait-container > div > div:nth-child(1) > p > a > img').attr("src");
        const str = $('#adv-str').text();
        const hp = $('#adv-hp').text();

        const maxMight = $('#mw-content-text > div > div.panel > div.panel-body > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > span').text().replace('Does not include external buffs (e.g. Halidom, Wyrmprints, etc.)Max HP + Max Str + Lv. 2 Skill Might + Lv. 2 Ability Might + Lv. 30 Bond (* Elemental Matching Bonus)', '');
        const rarityAlt = (isLocked) ? '5' : $('#mw-content-text > div > div.panel > div.panel-body > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div > img').attr('alt');
        const rarity = rarityAlt.includes('5') ? 5 : (rarityAlt.includes('4') ? 4 : 3);
        const favoriteFood = $('#mw-content-text > div > div.panel > div.panel-body > div:nth-child(2) > div:nth-child(8) > div:nth-child(2) > span > a:nth-child(2)').text();

        const skillName = $('#mw-content-text > div > div.panel > div:nth-child(3) > div:nth-child(2) > table > tbody > tr > th > a').text();
        const skillLevels = [];
        $('#mw-content-text > div > div.panel > div:nth-child(3) > div:nth-child(2) > table > tbody > tr > td > div > div').each((i, div) => {
            skillLevels.push($(div).text().split('\n')[2].substring(0, $(div).text().split('\n')[2].indexOf(' (Might')))
        });

        const abilities = [];
        $('#mw-content-text > div > div.panel > div:nth-child(3) > div.skill-section > table').each((i, table) => {
            const abiName = $(table).find('tbody > tr > th > a').text();
            const abiLevels = [];
            $(table).find('tbody > tr > td > div > div').each((i, div) => {
                abiLevels.push($(div).text().split('\n')[1].substring(0, $(div).text().split('\n')[1].indexOf(' (Might')).replace(/\t/g, ''))
            });
            abilities.push({
                name: abiName,
                levels: abiLevels
            })
        });

        const comboTable = [];
        $('.wikitable > tbody > tr').each((i, tr) => {
            let multiplier = "";
            let hitCount = "";
            if (i !== 0) {
                $(tr).find('td').each((i, td) => {
                    switch (i) {
                        case 0:
                            break;
                        case 1:
                            multiplier = $(td).text();
                            break;
                        case 2:
                            hitCount = $(td).text();
                            break;
                    }
                });
                comboTable.push({
                    name: "Combo " + i,
                    multiplier: multiplier,
                    hitCount: hitCount.replace('\n', '')
                });
            }
        });

        let element = "";
        switch ($('#mw-content-text > div > div.panel > div.panel-heading > div:nth-child(2) > span > img').attr('alt')) {
            case 'Icon Element Flame.png': element = 'Flame'; break;
            case 'Icon Element Water.png': element = 'Water'; break;
            case 'Icon Element Wind.png': element = 'Wind'; break;
            case 'Icon Element Light.png': element = 'Light'; break;
            case 'Icon Element Shadow.png': element = 'Shadow'; break;
        }

        const skill = {
            name: skillName,
            levels: skillLevels
        };
        const dragon = {
            name: name,
            title: title,
            isLocked: isLocked,
            image: image,
            str: str,
            hp: hp,
            element: element,
            maxMight: maxMight,
            rarity: rarity,
            favoriteFood: favoriteFood,
            skill: skill,
            abilities: abilities,
            comboTable: comboTable
        };
        console.dir(dragon, {depth: 5, colors: true});
        console.log(',');
    }
}

//getDragaliaDragonLinks();

const dragonPageLinks = [
    'https://dragalialost.gamepedia.com/Agni',
    'https://dragalialost.gamepedia.com/Apollo',
    'https://dragalialost.gamepedia.com/Arctos',
    'https://dragalialost.gamepedia.com/Astral_Imp',
    'https://dragalialost.gamepedia.com/Bronze_Fafnir_(Dragon)',
    'https://dragalialost.gamepedia.com/Brunhilda',
    'https://dragalialost.gamepedia.com/Brunhilda_(Halloween)',
    'https://dragalialost.gamepedia.com/Brunhilda_(Mym)',
    'https://dragalialost.gamepedia.com/Cerberus',
    'https://dragalialost.gamepedia.com/Chthonius',
    'https://dragalialost.gamepedia.com/Cinder_Drake',
    'https://dragalialost.gamepedia.com/Corsaint_Phoenix',
    'https://dragalialost.gamepedia.com/Cupid',
    'https://dragalialost.gamepedia.com/Dragonyule_Jeanne',
    'https://dragalialost.gamepedia.com/Erasmus',
    'https://dragalialost.gamepedia.com/Freyja',
    'https://dragalialost.gamepedia.com/Fubuki',
    'https://dragalialost.gamepedia.com/Garuda',
    'https://dragalialost.gamepedia.com/Gilgamesh',
    'https://dragalialost.gamepedia.com/Gloom_Drake',
    'https://dragalialost.gamepedia.com/Gold_Fafnir_(Dragon)',
    'https://dragalialost.gamepedia.com/Gust_Drake',
    'https://dragalialost.gamepedia.com/Halloween_Maritimus',
    'https://dragalialost.gamepedia.com/Halloween_Silke',
    'https://dragalialost.gamepedia.com/Hastur',
    'https://dragalialost.gamepedia.com/High_Brunhilda',
    'https://dragalialost.gamepedia.com/High_Jupiter',
    'https://dragalialost.gamepedia.com/High_Mercury',
    'https://dragalialost.gamepedia.com/High_Midgardsormr',
    'https://dragalialost.gamepedia.com/High_Zodiark',
    'https://dragalialost.gamepedia.com/Hikage',
    'https://dragalialost.gamepedia.com/Hinata',
    'https://dragalialost.gamepedia.com/Homura',
    'https://dragalialost.gamepedia.com/Ifrit',
    'https://dragalialost.gamepedia.com/Jeanne_d%27Arc',
    'https://dragalialost.gamepedia.com/Juggernaut_(Dragon)',
    'https://dragalialost.gamepedia.com/Jupiter',
    'https://dragalialost.gamepedia.com/Kagutsuchi',
    'https://dragalialost.gamepedia.com/Kamuy',
    'https://dragalialost.gamepedia.com/Kindling_Imp',
    'https://dragalialost.gamepedia.com/Konohana_Sakuya',
    'https://dragalialost.gamepedia.com/Leviathan',
    'https://dragalialost.gamepedia.com/Liger',
    'https://dragalialost.gamepedia.com/Lindworm',
    'https://dragalialost.gamepedia.com/Long_Long',
    'https://dragalialost.gamepedia.com/Marishiten',
    'https://dragalialost.gamepedia.com/Maritimus',
    'https://dragalialost.gamepedia.com/Mercury',
    'https://dragalialost.gamepedia.com/Midgardsormr',
    'https://dragalialost.gamepedia.com/Mini_Mids',
    'https://dragalialost.gamepedia.com/Moon_Drake',
    'https://dragalialost.gamepedia.com/Nidhogg',
    'https://dragalialost.gamepedia.com/Nyarlathotep',
    'https://dragalialost.gamepedia.com/Nyarlathotep_(Lathna)',
    'https://dragalialost.gamepedia.com/Pallid_Imp',
    'https://dragalialost.gamepedia.com/Parallel_Zodiark',
    'https://dragalialost.gamepedia.com/Pazuzu',
    'https://dragalialost.gamepedia.com/Pele',
    'https://dragalialost.gamepedia.com/Peng_Lai',
    'https://dragalialost.gamepedia.com/Phantom',
    'https://dragalialost.gamepedia.com/Phoenix',
    'https://dragalialost.gamepedia.com/Poli%CA%BBahu',
    'https://dragalialost.gamepedia.com/Pop-Star_Siren',
    'https://dragalialost.gamepedia.com/Poseidon',
    'https://dragalialost.gamepedia.com/Prometheus',
    'https://dragalialost.gamepedia.com/Roc',
    'https://dragalialost.gamepedia.com/Rush',
    'https://dragalialost.gamepedia.com/Shinobi',
    'https://dragalialost.gamepedia.com/Shishimai_(Dragon)',
    'https://dragalialost.gamepedia.com/Silke',
    'https://dragalialost.gamepedia.com/Silver_Fafnir_(Dragon)',
    'https://dragalialost.gamepedia.com/Simurgh',
    'https://dragalialost.gamepedia.com/Siren',
    'https://dragalialost.gamepedia.com/Snow_Drake',
    'https://dragalialost.gamepedia.com/Stribog',
    'https://dragalialost.gamepedia.com/Sylvia',
    'https://dragalialost.gamepedia.com/Takemikazuchi',
    'https://dragalialost.gamepedia.com/Tsukuyomi',
    'https://dragalialost.gamepedia.com/Tsumuji',
    'https://dragalialost.gamepedia.com/Unicorn',
    'https://dragalialost.gamepedia.com/Vayu',
    'https://dragalialost.gamepedia.com/Vodyanoy',
    'https://dragalialost.gamepedia.com/Wellspring_Imp',
    'https://dragalialost.gamepedia.com/Yulong',
    'https://dragalialost.gamepedia.com/Zephyr',
    'https://dragalialost.gamepedia.com/Zephyr_Imp',
    'https://dragalialost.gamepedia.com/Zodiark',
];

getDragaliaDragonData(dragonPageLinks);
