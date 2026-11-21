let internalcount = 0;

let thingfarmers = 0;

let thingfarmerscost = 25;

function clickThing(number){
    // adds number to internalcount
    internalcount += number;
    // sets thingdisplay value to internalcount
    document.getElementById("thingdisplay").innerHTML = String(internalcount);
};
