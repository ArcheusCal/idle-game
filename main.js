var internalcount = 0;

function clickThing(number){
    // adds number to internalcount
    internalcount += number;
    // sets thingdisplay value to internalcount
    document.getElementById("thingdisplay").innerHTML = String(internalcount);
};
