var internalcount = 0;
var displaycount = 0;

function clickThing(number){
    internalcount = internalcount + number;
    if (internalcount = 0) {
        displaycount = "0"
    }
    else {
        displaycount = internalcount
    }
    document.getElementById("thingdisplay").innerHTML = displaycount;
};
