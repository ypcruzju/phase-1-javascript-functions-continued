
function saturdayFun(act = `roller-skate`){
    return (`This Saturday, I want to ${act}!`);


} saturdayFun();

const mondayWork = function(to = 'go to the office'){
   
    return `This Monday, I will ${to}.`


}
mondayWork();


function wrapAdjective(taco = `*`){
    return function wrapSupreme(tom = `special` ){
        return `You are ${taco}${tom}${taco}!`

    }

}
wrapAdjective(`||`)("a dedicated programmer");
wrapAdjective(`*`)(`You are a hard worker`)