# number-to-words-js
A simple script to convert numbers/figures to words, with support for some currencies.

# Installation
```
npm install @amirsanni/number-to-words
```


# Supported Currency Codes
AED, AFN, ANG, ARS, AUD, BRL, CAD, CHF, CNY, DKK, DZD, EGP, EUR, GBP, GHC, GHS, HKD, ILS, INR, IQD, IRR, JMD, JOD, JPY, KES, KPW, KRW, KWD, LYD, MXN, MAD, MUR, NGN, NZD, PEN, PHP, PYG, QAR, RON, RSD, RUB, RWF, SAR, SDG, SEK, SGD, SHP, SYP, THB, TND, TRY, TWD, UGX, USD, VES, XAF, XCD, XOF, XPF, YER, ZAR.


# How to use
```
const convert = require('number-to-words');
```

```
convert(3490948028.56, "NGN");
```

Returns **Three Billion, Four Hundred and Ninety Million, Nine Hundred and Forty-Eight Thousand, and Twenty-Eight Naira, Fifty-Six Kobo**.
