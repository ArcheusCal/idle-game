var things = 0;

function clickThing(number){
    things = things + number;
    document.getElementById("thingdisplay").innerHTML = things;
};
