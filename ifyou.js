{
var HOUR =  8;
var MINUTE = 55;
var PERIOD = "AM";
if(MINUTE > 30){
    MINUTE = "almost";
    }
if(MINUTE < 30){
    MINUTE = "just after";
}    
if(PERIOD == "AM"){
    PERIOD = "in the morning";
    }
if(PERIOD == "PM"){
    PERIOD = "in the evening";
}
if(MINUTE == "almost"){
    HOUR = HOUR + 1;
}
if(MINUTE == "just after"){
    HOUR = HOUR;
}

console.log("It's ",MINUTE, HOUR, PERIOD);
}
{var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(MINUTE > 30){
    MINUTE = "almost";
    }
if(MINUTE < 30){
    MINUTE = "just after";
}    
if(PERIOD == "AM"){
    PERIOD = "in the morning"
    }
if(PERIOD == "PM"){
        PERIOD = "in the evening";
    
    }
if(MINUTE == "almost"){
    HOUR = HOUR + 1;
}
if(MINUTE == "just after"){
    HOUR = HOUR;
}
console.log("It's ",MINUTE, HOUR, PERIOD);
}