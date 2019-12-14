const xml = require('./xml');

const handlers = {
    handleXDigits(digits){//1-19
        return xml.x[digits];
    },


    handleTwoDigits(digits){//20-99
        if(digits <= 19){
            return this.handleXDigits(digits);
        }
    
        else{
            let first_digit = digits.substr(0, 1);
            let second_digit = digits.substr(1, 1);
    
            let first_digit_word = first_digit != '0' ? xml.m[first_digit] : "";
            let second_digit_word = second_digit == '0' ? "" : xml.x[second_digit];
    
            return first_digit_word.trim() && second_digit_word.trim() ? first_digit_word+"-"+second_digit_word : first_digit_word+" "+second_digit_word;
        }
    },


    handleHundreds(digits){
        let first_digit_word = this.handleXDigits(digits.substr(0, 1));
        let other_two_digits_word = this.handleTwoDigits(digits.substr(1));
        
        return (first_digit_word.trim() ? first_digit_word+" Hundred" : "")+(other_two_digits_word.trim() ? " and "+other_two_digits_word : "");
    },


    handleThousands(digits){
        // digits should be min 4 char and max 6 char in length
        let th = digits.substr(0, digits.length-3);//get everything excluding the last three digits.
        let dred = digits.substr(-3);//get last three digits
    
        let dred_word = this.handleHundreds(dred);
        let th_word = th.length == 3 ? this.handleHundreds(th) : (th.length == 2 ? this.handleTwoDigits(th) : this.handleXDigits(th));
    
        return (th_word.trim() && dred_word.trim() ? th_word+" Thousand, " : (th_word.trim() ? th_word+" Thousand" : ""))+(dred_word.trim() ? dred_word : "");
    },


    handleMillions(digits){
        // digits should be min 7 char and max 9 char in length
        let th_word = this.handleThousands(digits.substr(-6));//get the last six digits.
        let mill = digits.substr(0, digits.length-6);//get everything excluding the last six digits.
    
        let mill_word = mill.length == 3 ? this.handleHundreds(mill) : (mill.length == 2 ? this.handleTwoDigits(mill) : this.handleXDigits(mill));
    
        // return (mill_word.trim() && th_word.trim() ? mill_word." Million, " : (mill_word.trim() ? mill_word." Million" : ""))+(th_word.trim() ? th_word : "");
        let comma = mill_word.trim() && th_word.trim() ? ', ' : '';

        return `${mill_word} Million${comma} ${th_word.trim()}`;
    },


    handleBillions(digits){
        // digits should be min 10 char and max 12 char in length
        let mill_word = this.handleMillions(digits.substr(-9));//get the last nine digits.
        let bill = digits.substr(0, digits.length-9);//get everything excluding the last nine digits.
    
        let bill_word = bill.length == 3 ? this.handleHundreds(bill) : (bill.length == 2 ? this.handleTwoDigits(bill) : this.handleXDigits(bill));
    
        return (bill_word.trim() ? bill_word+" Billion" : "")+(mill_word.trim() ? " "+ mill_word : "");
    }
};

module.exports = handlers;