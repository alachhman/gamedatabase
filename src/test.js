const axios = require('axios');
const units = require('./dragalia/units/units');

async function unitCountTest(){
    let count = 0;

    let json = await axios.get(
        "https://gamepress.gg/sites/default/files/aggregatedjson/DragaliaLostCharacterList.json?1581181076155443736"
    );

    for(const trainer of json.data){
        count ++;
    }

    let unitCount = 0;

    for(const unit of units.units){
        unitCount++;
    }

    console.log("Actual Count: " + count);
    console.log("Unit Count : " + unitCount);
}

unitCountTest();

async function verifyNoEmptyFields(units) {
    for(const unit of units){
        Object.keys(unit).forEach(e => {
            if(unit[e] === ""){
                console.log('Error: ' + unit.name + ' blank value of '  + e)
            }
        });
    }
}

verifyNoEmptyFields(units.units);

/*
var printNumTwo;
for(var i = 0; i < 3; i++){
    if(i === 2){
        printNumTwo = function(){
            return i;
        }
    }
}
console.log(printNumTwo());
*/
