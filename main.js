// initializing stats
let costexponent = 1.1;
let tickspersecond = 1;

let producers = {
    things: {
        generatedcount: 0,
        // leave count here or else clickThing breaks and outputs NaN onto display when adding to money
        count: 0
    },
    farmer: {
        // int solid
        baseCost: 25,
        power: 1,
        produces: "things",
    },
    farmerfactory: {
        // int solid
        baseCost: 500,
        power: 1,
        produces: "farmer"
    },
};

for (let type in producers) { // cycles through every part in producers, type will be that producer's name, like for i in statement
    if (type === "things") continue; // skips current loop if current producer is things, because things is money count
    producers[type].count = 0; // creates count, cost, prodpersecond attributes on selected producer & sets them to zero
    producers[type].cost = 0;
    producers[type].generatedcount = 0;
    producers[type].prodpersecond = 0;
    producers[type].cost = producers[type].baseCost; // sets initial cost to base cost
    document.getElementById(String(type)+"cost").innerHTML = producers[type].baseCost; // updates all cost displays to show baseCost
    document.getElementById(String(type)+"display").innerHTML = producers[type].count; // updates all cost displays to show baseCost
    document.getElementById(String(type)+"prodpersecond").innerHTML = producers[type].count*producers[type].power*tickspersecond;
};

function clickThing(number,type){
    producers[type].generatedcount += number; // adds number to count
    document.getElementById(String(type)+"display").innerHTML = String(producers[type].count+producers[type].generatedcount); // sets thingdisplay value to count
    console.log("%cadded "+String(number)+" of "+String(type),"color:#ADADAD;"); // reports action in console
};

function updateProduction(type){
    producers[type].prodpersecond = (producers[type].count+producers[type].generatedcount)*producers[type].power*tickspersecond;
    document.getElementById(String(type)+"prodpersecond").innerHTML = producers[type].prodpersecond; //updates production per second
};

function updateAmountOfProduction(type){
    document.getElementById(String(type)+"display").innerHTML = producers[type].count+producers[type].generatedcount; // updates amount
};

function buyProduction(type){
    let producer = producers[type]; // sets the variable producer to the producer type selected
    if (!producer){
        console.log("called producer "+String(type)+"does not exist");
        return; // if the producer does not exist, stop
    };
    producer.cost = Math.floor(producer.baseCost*Math.pow(costexponent,producer.count)); // calculates producer cost, costexponent to the producer count power
    if (producers.things.generatedcount >= producer.cost){ // checks if you have enough
        producers.things.generatedcount -= producer.cost; // subtracts cost from money
        producer.count += 1; // gives you the producer
        console.log(
            "%csuccessfully bought %c"+String(type)+" %cproduction",
            "colour:#E8E8E8; font-weight: bold;",
            "color:#4BDB4B; font-weight: bold;", 
            "color:#E8E8E8; font-weight: normal;"); // reports that production was successfully bought
        }
    else {
        console.log(
            "%ccould not buy %c"+String(type)+" %cproduction, %cerror %cnot enough money",
            "colour:#E8E8E8; font-weight: normal;",
            "color:#C72A2A; font-weight: bold;", 
            "color:#E8E8E8; font-weight: normal;",
            "color:#C72A2A; font-weight: bold;",
            "color:#E8E8E8; font-weight: normal;");// reports that production could not be bought
        };
    document.getElementById(String(type)+"cost").innerHTML = Math.floor(producer.baseCost * Math.pow(costexponent,producer.count)); // updates cost
    document.getElementById("thingsdisplay").innerHTML = producers.things.generatedcount; // updates money
    updateAmountOfProduction(type);
    updateProduction(type);
};

window.setInterval(function(){ // fires the following code every 1000/tickspersecond milliseconds
    for (let type in producers) { // cycles through all producers
        if (type === "things") continue; // things is currency, it doesn't produce anything
        clickThing((producers[type].count+producers[type].generatedcount)*producers[type].power,producers[type].produces); // adds producer amount * producer power to money
        updateAmountOfProduction(type);
        updateProduction(type);
    };
}, 1000/tickspersecond);

