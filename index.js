// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// let superbowlWin = record.find(year => record.result === "W")



function superbowlWin(record){
    function isAWin(record){
        return record.result === "W";
    };
    
    let winHunter = record.find(isAWin)
    if(winHunter){
        return (winHunter.year)
    }else{
        return (undefined)
    }
}