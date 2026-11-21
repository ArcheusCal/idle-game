let internalcount = 0;
let costexponent = 1.1;

let producers = {
    farmers: {
        count: 0,
        baseCost: 25,
        production: 1
    },
};

function clickThing(number){
    internalcount += number; // adds number to internalcount
    document.getElementById("thingsdisplay").innerHTML = String(internalcount); // sets thingdisplay value to internalcount
};

function buyProduction(type){
    if (type === 1){
        thingfarmerscost = Math.floor(25 * Math.pow(costexponent,thingfarmerscount));  // the cost is the costexponent to the power of amount of farmers
        if (internalcount >= thingfarmerscost){ // checks if you have enough
            thingfarmerscount += 1; // adds the amount of thingfarmers
            internalcount -= thingfarmerscost; // subtracts cost
            document.getElementById("thingfarmersdisplay").innerHTML = thingfarmerscount; // updates amount
            document.getElementById("thingfarmerscost").innerHTML = Math.floor(25 * Math.pow(costexponent,thingfarmerscount)); // updates cost
            document.getElementById("thingsdisplay").innerHTML = internalcount; // updates amount
        }
    };
    document.getElementById("thingfarmersdisplay").innerHTML = String(thingfarmerscount);
};
