function timeWord(str) {
    
    if(str.length !== 5){
        return "Invalid data input, please use '00:00' time format"
    }

    let wordsHr = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
                        "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", 
                        "twenty three"];
    
    let wordsMin = ["'o'", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
                        "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", 
                        "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one",
                        "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine",
                         "fourty", "fourty one", "fourty two", "fourty three", "fourty four", "fourty five", "fourty six", "fourty seven", "fouty eight", "fourty nine",
                         "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine", "sixty"];


        strToArray = (Object.assign([], str));

        for(let i = 0; i < strToArray.length; i++){

        let hr = (strToArray[i] + strToArray[i + 1])
        let min = (strToArray[i + 3] + strToArray[i + 4])

        let TimeOfDay = "";

        if(hr[0] === "0" || hr === "10" || hr === "11"){
            TimeOfDay = "am"
        }
        else {
            TimeOfDay = "pm"
        }


            if(hr === "12" && min === "00"){
                return "noon"
            }
            if(hr === "00" && min === "00"){
                return "midnight"
            }
            if(hr[0] === "0"){
                hr = hr.slice(1);
            }
            if(min[0] === "0" && min[1] !== "0"){
                min = min.slice(1)
                return wordsHr[hr] + " oh " + wordsMin[min] + ` ${TimeOfDay}`
            }
            if(min[0] === "0" && min[1] === "0"){
                return wordsHr[hr] + " 'o' clock" + ` ${TimeOfDay}`
            }
            if(min[0] === "0"){
                min = min.slice(1);
            }
            if(wordsHr[hr] === undefined || wordsMin[min] === undefined){
                return "Please type in a valid time format '00:00'"
            }
            else{
                return wordsHr[hr] + ' ' + wordsMin[min] + ` ${TimeOfDay}`
            
            }
        }
    };

console.log(timeWord("01:40"))


module.exports = timeWord;