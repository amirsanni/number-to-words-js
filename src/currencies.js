module.exports = {
    currencies: {
        'EUR':{'main':'Euro', 'fraction':"Cent"},
        'GBP':{'main':'Pound', 'fraction':"Penny"},
        'GHC':{'main':"Ghana Cedi", 'fraction':'Pesewa'},
        'GHS':{'main':"Ghana Cedi", 'fraction':'Pesewa'},
        'MUR':{'main':'Rupee', 'fraction':"Cent"},
        'NGN':{'main':"Naira", 'fraction':'Kobo'},
        'USD':{'main':"US Dollar", 'fraction':"Cent"},
        'XAF':{'main':'Franc', 'fraction':"Centime"},
        'XOF':{'main':'Franc', 'fraction':"Centime"}
    },

    getInfo(currencyCode){
        return currencyCode ? this.currencies[currencyCode.toUpperCase()] : {'main':'', 'fraction':''};
    }
};