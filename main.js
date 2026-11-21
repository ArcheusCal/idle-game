var internalcount = 0;

function clickThing(number){
    internalcount = internalcount + number;
    document.getElementById("thingdisplay").innerHTML = String(internalcount);
};
