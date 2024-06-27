function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}
const saturdayFunDefault = saturdayFun(); 
const saturdayFunOverride = saturdayFun("bike");

const mondayWorkDefault = mondayWork(); 
const mondayWorkOverride = mondayWork("work from home"); 

const wrapAdjectiveFunction = wrapAdjective(); 
const wrapAdjectiveResult = wrapAdjectiveFunction(); 
const encouragingPromptFunction = wrapAdjective("!!!"); 
const encouragingPromptResult = encouragingPromptFunction("amazing"); 

