let internalcount = 0;
let costexponent = 1.1;

let producers = {
    farmer: {
        count: 0,
        baseCost: 25,
        cost: 0,
        production: 1
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
    producer = producers[type] // sets the variable producer to the producer type selected
    if (!producer){
        return; // if the producer does not exist, stop
    }
    producer.cost = Math.floor(producer.baseCost*Math.pow(costexponent,producer.count)); // calculates producer cost, costexponent to the producer count power
    if (internalcount >= producer.cost){ // checks if you have enough
        internalcount -= producer.cost; // subtracts cost from money
        producer.count += 1; // gives you the producer
    };
    document.getElementById("farmerdisplay").innerHTML = producers.farmers.count; // updates amount
    document.getElementById("farmercost").innerHTML = Math.floor(25 * Math.pow(costexponent,producers.farmers.count)); // updates cost
    document.getElementById("thingsdisplay").innerHTML = internalcount; // updates amount
};
