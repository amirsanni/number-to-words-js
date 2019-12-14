const handler = require('./handlers');
const currency = require('./currencies');


module.exports = function(fig, currencyCode){
    let main_word;
    let brokenFigures = fig.toString().split('.');
    let number = brokenFigures[0];
    
    let decimal = brokenFigures[1] ? (brokenFigures[1].length > 1 ? brokenFigures[1] : brokenFigures[1]+"0") : 0;

    let sub_part = decimal > 0 ? (" "+(decimal <= 19 ? handler.handleXDigits(decimal) : handler.handleTwoDigits(decimal))+" "+currency.getInfo(currencyCode).fraction) : "";

    if(number == 0){
        main_word = "Zero";
    }

    else if(number <= 19 && number >= 1){//1-19
        main_word = handler.handleXDigits(number);
    }

    else if(number.length == 2 || number < 100){//20-99
        main_word = handler.handleTwoDigits(number);
    }

    else if(number.length == 3 || (number < 1000)){
        main_word = handler.handleHundreds(number);
    }

    else if(number.length <= 6 || (number < 1000000)){//less than a million
        main_word = handler.handleThousands(number);
    }

    else if(number.length <= 9 || (number < 1000000000)){//less than a billion
        main_word = handler.handleMillions(number);
    }

    else if(number.length <= 12 || (number < 1000000000000)){//less than a trillion
        main_word = handler.handleBillions(number);
    }

    else{
        return "Number too large";
    }

    return main_word+" "+currency.getInfo(currencyCode).main+sub_part;
};