let internalcount = 0;

// initializing stats
let costexponent = 1.1;
let tickspersecond = 1;
let producers = {
    farmer: {
        // int solid
        baseCost: 25,
        power: 1,
        count: 0,
        // generated
        cost: 0,
        totalprod: 0
    },
};

for (let type in producers) { // cycles through every part in producers, type will be that producer's name, like for i in statement
    producers[type].cost = producers[type].baseCost; // sets initial cost to base cost
}

function clickThing(number){
    internalcount += number; // adds number to internalcount
    document.getElementById("thingsdisplay").innerHTML = String(internalcount); // sets thingdisplay value to internalcount
};

function buyProduction(type){
    let producer = producers[type]; // sets the variable producer to the producer type selected
    if (!producer){
        return; // if the producer does not exist, stop
    };
    producer.cost = Math.floor(producer.baseCost*Math.pow(costexponent,producer.count)); // calculates producer cost, costexponent to the producer count power
    if (internalcount >= producer.cost){ // checks if you have enough
        internalcount -= producer.cost; // subtracts cost from money
        producer.count += 1; // gives you the producer
    };
    document.getElementById("farmerdisplay").innerHTML = producer.count; // updates amount
    document.getElementById("farmercost").innerHTML = Math.floor(25 * Math.pow(costexponent,producer.count)); // updates cost
    document.getElementById("thingsdisplay").innerHTML = internalcount; // updates money
    document.getElementById(String(type)+"prodpersecond").innerHTML = producer.count*producer.power*tickspersecond; //updates production per second
};


window.setInterval(function(){ // fires the following code every 1000/tickspersecond milliseconds
    for (let type in producers) { // cycles through all producers
        clickThing(producers[type].count*producers[type].power); // adds producer amount * producer power to money
    };
}, 1000/tickspersecond);

