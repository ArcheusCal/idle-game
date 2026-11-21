let internalcount = 0;
let costexponent = 1.1;

let producers = {
    farmers: {
        count: 0,
        baseCost: 25,
        cost: 0,
        production: 1
    },
};

function clickThing(number){
    internalcount += number; // adds number to internalcount
    document.getElementById("thingsdisplay").innerHTML = String(internalcount); // sets thingdisplay value to internalcount
};

function buyProduction(type){
    if (type === 1){
        producers.farmers.cost = Math.floor(producers.farmers.baseCost * Math.pow(costexponent,producers.farmers.count));  // the cost is the costexponent to the power of amount of farmers
        if (internalcount >= producers.farmers.cost){ // checks if you have enough
            producers.farmers.count += 1; // adds the amount of thingfarmers
            internalcount -= producers.farmers.cost; // subtracts cost
            document.getElementById("thingfarmersdisplay").innerHTML = producers.farmers.count; // updates amount
            document.getElementById("thingfarmerscost").innerHTML = Math.floor(25 * Math.pow(costexponent,producers.farmers.count)); // updates cost
            document.getElementById("thingsdisplay").innerHTML = internalcount; // updates amount
        }
    };
};
