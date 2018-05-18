export class MarketList {
    /*
     * Important markets
     * market_list [8] - AUD (Australian Dollar)
     *            [24] - CAD (Canadian Dollar)
     *            [30] - CNY (Chinese Yuan) 
     *            [42] - EUR (Euro)
     *            [45] - GBP (British Pound Sterling)
     *            [66] - JPY (Japanese Yen)
     *            [94] - MXY (Mexican Peso)
     *           [101] - NZD (New Zealand Dollar)
     *           [139] - USD (United States Dollar)
     *           [146] - XAG (Silver Ounce)
     *           [147] - XAU (Gold Ounce)
     */
    private market_list: string[] = [
        "AED (United Arab Emirates Dirham)", "AFN (Afghan Afghani)", "ALL (Albanian Lek)", "AMD (Armenian Dram)", // 0-3
        "ANG (Netherlands Antillean Guilder)", "AOA (Angolan Kwanza)", "ARS (Argentine Peso)", "AUD (Australian Dollar)",  // 4-7
        "AWG (Aruban Florin)", "AZN (Azerbaijani Manat)", "BAM (Bosnia-Herzegovina Convertible Mark)", "BBD (Barbadian Dollar)", // 8-11
        "BDT (Bangladeshi Taka)", "BGN (Bulgarian Lev)", "BHD (Bahraini Dinar)", "BIF (Burundian Franc)", // 12-15
        "BMD (Bermudan Dollar)", "BND (Brunei Dollar)", "BOB (Bolivian Boliviano)", "BRL (Brazilian Real)", // 16-19
        "BSD (Bahamian Dollar)", "BTN (Bhutanese Ngultrum)", "BWP (Botswanan Pula)", "BZD (Belize Dollar)", // 20-23
        "CAD (Canadian Dollar)", "CDF (Congolese Franc)", "CHF (Swiss Franc)", "CLF (Chilean Unit of Account UF)", // 24-27
        "CLP (Chilean Peso)", "CNH (Chinese Yuan Offshore)", "CNY (Chinese Yuan)", "COP (Colombian Peso)", // 28-31
        "CUP (Cuban Peso)", "CVE (Cape Verdean Escudo)", "CZK (Czech Republic Koruna)", "DJF (Djiboutian Franc)", // 32-35
        "DKK (Danish Krone)", "DOP (Dominican Peso)", "DZD (Algerian Dinar)", "EGP (Egyptian Pound)", // 36-39
        "ERN (Eritrean Nakfa)", "ETB (Ethiopian Birr)", "EUR (Euro)", "FJD (Fijian Dollar)", // 40-43
        "FKP (Falkland Islands Pound)", "GBP (British Pound Sterling)", "GEL (Georgian Lari)", "GHS (Ghanaian Cedi)", // 44-47
        "GIP (Gibraltar Pound)", "GMD (Gambian Dalasi)", "GNF (Guinean Franc)", "GTQ (Guatemalan Quetzal)", // 48-51
        "GYD (Guyanaese Dollar)", "HKD (Hong Kong Dollar)", "HNL (Honduran Lempira)", "HRK (Croatian Kuna)", // 52-55
        "HTG (Haitian Gourde)", "HUF (Hungarian Forint)", "IDR (Indonesian Rupiah)", "ILS (Israeli New Sheqel)", // 56-59
        "INR (Indian Rupee)", "IQD (Iraqi Dinar)", "IRR (Iranian Rial)", "JEP (Jersey Pound)", // 60-63
        "JMD (Jamaican Dollar)", "JOD (Jordanian Dinar)", "JPY (Japanese Yen)", "KES (Kenyan Shilling)", // 64-67
        "KGS (Kyrgystani Som)", "KHR (Cambodian Riel)", "KMF (Comorian Franc)", "KPW (North Korean Won)", // 68-71
        "KRW (South Korean Won)", "KWD (Kuwaiti Dinar)", "KYD (Cayman Islands Dollar)", "KZT (Kazakhstani Tenge)", // 72-75
        "LAK (Laotian Kip)", "LBP (Lebanese Pound)", "LKR (Sri Lankan Rupee)", "LRD (Liberian Dollar)", // 76-79
        "LSL (Lesotho Loti)", "LYD (Libyan Dinar)", "MAD (Moroccan Dirham)", "MDL (Moldovan Leu)", // 80-83
        "MGA (Malagasy Ariary)", "MKD (Macedonian Denar)", "MMK (Myanma Kyat)", "MNT (Mongolian Tugrik)", // 84-87
        "MOP (Macanese Pataca)", "MRO (Mauritanian Ouguiya (pre-2018))", "MRU (Mauritanian Ouguiya)", "MUR (Mauritian Rupee)", // 88-91
        "MVR (Maldivian Rufiyaa)", "MWK (Malawian Kwacha)", "MXN (Mexican Peso)", "MYR (Malaysian Ringgit)", // 92-95
        "MZN (Mozambican Metical)", "NAD (Namibian Dollar)", "NGN (Nigerian Naira)", "NOK (Norwegian Krone)", // 96-99
        "NPR (Nepalese Rupee)", "NZD (New Zealand Dollar)", "OMR (Omani Rial)", "PAB (Panamanian Balboa)", // 100-103
        "PEN (Peruvian Nuevo Sol)", "PGK (Papua New Guinean Kina)", "PHP (Philippine Peso)", "PKR (Pakistani Rupee)", // 104-107
        "PLN (Polish Zloty)", "PYG (Paraguayan Guarani)", "QAR (Qatari Rial)", "RON (Romanian Leu)", // 108-111
        "RSD (Serbian Dinar)", "RUB (Russian Ruble)", "RUR (Old Russian Ruble)", "RWF (Rwandan Franc)", // 112-115
        "SAR (Saudi Riyal)", "SBDf (Solomon Islands Dollar)", "SCR (Seychellois Rupee)", "SDG (Sudanese Pound)", // 116-119
        "SEK (Swedish Krona)", "SGD (Singapore Dollar)", "SHP (Saint Helena Pound)", "SLL (Sierra Leonean Leone)", // 120-123
        "SOS (Somali Shilling)", "SRD (Surinamese Dollar)", "SYP (Syrian Pound)", "SZL (Swazi Lilangeni)", // 124-127
        "THB (Thai Baht)", "TJS (Tajikistani Somoni)", "TMT (Turkmenistani Manat)", "TND (Tunisian Dinar)", // 128-131
        "TOP (Tongan Pa'anga)", "TRY (Turkish Lira)", "TTD (Trinidad and Tobago Dollar)", "TWD (New Taiwan Dollar)", // 132-135
        "TZS (Tanzanian Shilling)", "UAH (Ukrainian Hryvnia)", "UGX (Ugandan Shilling)", "USD (United States Dollar)", // 136-139
        "UYU (Uruguayan Peso)", "UZS (Uzbekistan Som)", "VND (Vietnamese Dong)", "VUV (Vanuatu Vatu)", // 140-143
        "WST (Samoan Tala)", "XAF (CFA Franc BEAC)", "XAG (Silver Ounce)", "XAU (Gold Ounce)", // 144-147
        "XCD (East Caribbean Dollar)", "XDR (Special Drawing Rights)", "XOF (CFA Franc BCEAO)", "XPF (CFP Franc)", // 148-151
        "YER (Yemeni Rial)", "ZAR (South African Rand)", "ZMW (Zambian Kwacha)", "ZWL (Zimbabwean Dollar)" //152-155
    ]

    getMarketList(){
        return this.market_list;
    }
}
