const mockCovid = [
  {
    recovered: 16,
    sk: "2020-03-15",
    pk: "VN",
    countryName: "Vietnam",
    confirmed: 53,
    deaths: 0
  },
  {
    recovered: 16,
    sk: "2020-03-16",
    pk: "VN",
    countryName: "Vietnam",
    confirmed: 56,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-15",
    pk: "CH",
    countryName: "Switzerland",
    confirmed: 1375,
    deaths: 13
  },
  {
    recovered: 4,
    sk: "2020-03-16",
    pk: "CH",
    countryName: "Switzerland",
    confirmed: 2200,
    deaths: 14
  },
  {
    recovered: 51,
    sk: "2020-03-15",
    pk: "US",
    countryName: "United States",
    confirmed: 2871,
    deaths: 55
  },
  {
    recovered: 51,
    sk: "2020-03-16",
    pk: "US",
    countryName: "United States",
    confirmed: 3401,
    deaths: 61
  },
  {
    recovered: 4339,
    sk: "2020-03-15",
    pk: "IT",
    countryName: "Italy",
    confirmed: 21157,
    deaths: 1441
  },
  {
    recovered: 2335,
    sk: "2020-03-16",
    pk: "IT",
    countryName: "Italy",
    confirmed: 24747,
    deaths: 1809
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "SC",
    countryName: "Seychelles",
    confirmed: 2,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "SC",
    countryName: "Seychelles",
    confirmed: 2,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "HR",
    countryName: "Croatia",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "HR",
    countryName: "Croatia",
    confirmed: 49,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "EE",
    countryName: "Estonia",
    confirmed: 115,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "EE",
    countryName: "Estonia",
    confirmed: 171,
    deaths: 0
  },
  {
    recovered: 67003,
    sk: "2020-03-15",
    pk: "CN",
    countryName: "China",
    confirmed: 80994,
    deaths: 3203
  },
  {
    recovered: 67017,
    sk: "2020-03-16",
    pk: "CN",
    countryName: "China",
    confirmed: 80999,
    deaths: 3203
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "SK",
    countryName: "Slovakia",
    confirmed: 54,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "SK",
    countryName: "Slovakia",
    confirmed: 54,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "SN",
    countryName: "Senegal",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "SN",
    countryName: "Senegal",
    confirmed: 24,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BA",
    countryName: "Bosnia and Herzegovina",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "BA",
    countryName: "Bosnia and Herzegovina",
    confirmed: 24,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BR",
    countryName: "Brazil",
    confirmed: 151,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "BR",
    countryName: "Brazil",
    confirmed: 162,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BO",
    countryName: "Bolivia",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 10,
    sk: "2020-03-15",
    pk: "IN",
    countryName: "India",
    confirmed: 102,
    deaths: 2
  },
  {
    recovered: 13,
    sk: "2020-03-16",
    pk: "IN",
    countryName: "India",
    confirmed: 113,
    deaths: 2
  },
  {
    recovered: 2,
    sk: "2020-03-15",
    pk: "PK",
    countryName: "Pakistan",
    confirmed: 31,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-16",
    pk: "PK",
    countryName: "Pakistan",
    confirmed: 53,
    deaths: 0
  },
  {
    recovered: 18,
    sk: "2020-03-15",
    pk: "GB",
    countryName: "United Kingdom",
    confirmed: 1140,
    deaths: 21
  },
  {
    recovered: 18,
    sk: "2020-03-16",
    pk: "GB",
    countryName: "United Kingdom",
    confirmed: 1140,
    deaths: 21
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "AM",
    countryName: "Armenia",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "AM",
    countryName: "Armenia",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "GE",
    countryName: "Georgia",
    confirmed: 30,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "GE",
    countryName: "Georgia",
    confirmed: 33,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "CL",
    countryName: "Chile",
    confirmed: 61,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "CL",
    countryName: "Chile",
    confirmed: 74,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-15",
    pk: "ID",
    countryName: "Indonesia",
    confirmed: 117,
    deaths: 5
  },
  {
    recovered: 8,
    sk: "2020-03-16",
    pk: "ID",
    countryName: "Indonesia",
    confirmed: 117,
    deaths: 5
  },
  {
    recovered: 118,
    sk: "2020-03-15",
    pk: "JP",
    countryName: "Japan",
    confirmed: 773,
    deaths: 22
  },
  {
    recovered: 118,
    sk: "2020-03-16",
    pk: "JP",
    countryName: "Japan",
    confirmed: 839,
    deaths: 22
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BG",
    countryName: "Bulgaria",
    confirmed: 41,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "BG",
    countryName: "Bulgaria",
    confirmed: 51,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "PS",
    countryName: "Palestine",
    confirmed: 31,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "PS",
    countryName: "Palestine",
    confirmed: 31,
    deaths: 0
  },
  {
    recovered: 6,
    sk: "2020-03-15",
    pk: "AT",
    countryName: "Austria",
    confirmed: 655,
    deaths: 1
  },
  {
    recovered: 6,
    sk: "2020-03-16",
    pk: "AT",
    countryName: "Austria",
    confirmed: 860,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BN",
    countryName: "Brunei",
    confirmed: 40,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "BN",
    countryName: "Brunei",
    confirmed: 50,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-15",
    pk: "MX",
    countryName: "Mexico",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-16",
    pk: "MX",
    countryName: "Mexico",
    confirmed: 41,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "AR",
    countryName: "Argentina",
    confirmed: 34,
    deaths: 2
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "AR",
    countryName: "Argentina",
    confirmed: 45,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "ZA",
    countryName: "South Africa",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "ZA",
    countryName: "South Africa",
    confirmed: 51,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "BE",
    countryName: "Belgium",
    confirmed: 689,
    deaths: 4
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "BE",
    countryName: "Belgium",
    confirmed: 886,
    deaths: 4
  },
  {
    recovered: 26,
    sk: "2020-03-15",
    pk: "IQ",
    countryName: "Iraq",
    confirmed: 110,
    deaths: 15
  },
  {
    recovered: 26,
    sk: "2020-03-16",
    pk: "IQ",
    countryName: "Iraq",
    confirmed: 116,
    deaths: 15
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "SE",
    countryName: "Sweden",
    confirmed: 961,
    deaths: 2
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "SE",
    countryName: "Sweden",
    confirmed: 1024,
    deaths: 3
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "FI",
    countryName: "Finland",
    confirmed: 225,
    deaths: 0
  },
  {
    recovered: 10,
    sk: "2020-03-16",
    pk: "FI",
    countryName: "Finland",
    confirmed: 244,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-15",
    pk: "PT",
    countryName: "Portugal",
    confirmed: 169,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-16",
    pk: "PT",
    countryName: "Portugal",
    confirmed: 245,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "LV",
    countryName: "Latvia",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "LV",
    countryName: "Latvia",
    confirmed: 30,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "MT",
    countryName: "Malta",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "MT",
    countryName: "Malta",
    confirmed: 21,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-15",
    pk: "MO",
    countryName: "Macau",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-16",
    pk: "MO",
    countryName: "Macau",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "PE",
    countryName: "Peru",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "PE",
    countryName: "Peru",
    confirmed: 43,
    deaths: 0
  },
  {
    recovered: 27,
    sk: "2020-03-15",
    pk: "AU",
    countryName: "Australia",
    confirmed: 250,
    deaths: 3
  },
  {
    recovered: 27,
    sk: "2020-03-16",
    pk: "AU",
    countryName: "Australia",
    confirmed: 289,
    deaths: 3
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "UA",
    countryName: "Ukraine",
    confirmed: 3,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "UA",
    countryName: "Ukraine",
    confirmed: 3,
    deaths: 1
  },
  {
    recovered: 714,
    sk: "2020-03-15",
    pk: "KR",
    countryName: "South Korea",
    confirmed: 8086,
    deaths: 72
  },
  {
    recovered: 834,
    sk: "2020-03-16",
    pk: "KR",
    countryName: "South Korea",
    confirmed: 8162,
    deaths: 75
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "EC",
    countryName: "Ecuador",
    confirmed: 28,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "EC",
    countryName: "Ecuador",
    confirmed: 28,
    deaths: 2
  },
  {
    recovered: 9,
    sk: "2020-03-15",
    pk: "RO",
    countryName: "Romania",
    confirmed: 123,
    deaths: 0
  },
  {
    recovered: 9,
    sk: "2020-03-16",
    pk: "RO",
    countryName: "Romania",
    confirmed: 131,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "RS",
    countryName: "Serbia",
    confirmed: 46,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "RS",
    countryName: "Serbia",
    confirmed: 48,
    deaths: 0
  },
  {
    recovered: 35,
    sk: "2020-03-15",
    pk: "TH",
    countryName: "Thailand",
    confirmed: 114,
    deaths: 1
  },
  {
    recovered: 35,
    sk: "2020-03-16",
    pk: "TH",
    countryName: "Thailand",
    confirmed: 114,
    deaths: 1
  },
  {
    recovered: 44,
    sk: "2020-03-15",
    pk: "BH",
    countryName: "Bahrain",
    confirmed: 210,
    deaths: 0
  },
  {
    recovered: 60,
    sk: "2020-03-16",
    pk: "BH",
    countryName: "Bahrain",
    confirmed: 214,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-15",
    pk: "NL",
    countryName: "Netherlands",
    confirmed: 959,
    deaths: 12
  },
  {
    recovered: 2,
    sk: "2020-03-16",
    pk: "NL",
    countryName: "Netherlands",
    confirmed: 1135,
    deaths: 20
  },
  {
    recovered: 8,
    sk: "2020-03-15",
    pk: "GR",
    countryName: "Greece",
    confirmed: 228,
    deaths: 3
  },
  {
    recovered: 8,
    sk: "2020-03-16",
    pk: "GR",
    countryName: "Greece",
    confirmed: 331,
    deaths: 4
  },
  {
    recovered: 46,
    sk: "2020-03-15",
    pk: "DE",
    countryName: "Germany",
    confirmed: 4585,
    deaths: 9
  },
  {
    recovered: 46,
    sk: "2020-03-16",
    pk: "DE",
    countryName: "Germany",
    confirmed: 5795,
    deaths: 11
  },
  {
    recovered: 3529,
    sk: "2020-03-15",
    pk: "IR",
    countryName: "Iran",
    confirmed: 12729,
    deaths: 611
  },
  {
    recovered: 4590,
    sk: "2020-03-16",
    pk: "IR",
    countryName: "Iran",
    confirmed: 13938,
    deaths: 724
  },
  {
    recovered: 42,
    sk: "2020-03-15",
    pk: "MY",
    countryName: "Malaysia",
    confirmed: 428,
    deaths: 0
  },
  {
    recovered: 42,
    sk: "2020-03-16",
    pk: "MY",
    countryName: "Malaysia",
    confirmed: 428,
    deaths: 0
  },
  {
    recovered: 105,
    sk: "2020-03-15",
    pk: "SG",
    countryName: "Singapore",
    confirmed: 212,
    deaths: 0
  },
  {
    recovered: 105,
    sk: "2020-03-16",
    pk: "SG",
    countryName: "Singapore",
    confirmed: 226,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-15",
    pk: "QA",
    countryName: "Qatar",
    confirmed: 337,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-16",
    pk: "QA",
    countryName: "Qatar",
    confirmed: 401,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "CY",
    countryName: "Cyprus",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "CY",
    countryName: "Cyprus",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-15",
    pk: "BY",
    countryName: "Belarus",
    confirmed: 27,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-16",
    pk: "BY",
    countryName: "Belarus",
    confirmed: 27,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "CO",
    countryName: "Colombia",
    confirmed: 22,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "CO",
    countryName: "Colombia",
    confirmed: 34,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-15",
    pk: "IL",
    countryName: "Israel",
    confirmed: 193,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-16",
    pk: "IL",
    countryName: "Israel",
    confirmed: 251,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-15",
    pk: "KW",
    countryName: "Kuwait",
    confirmed: 104,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-16",
    pk: "KW",
    countryName: "Kuwait",
    confirmed: 112,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "JO",
    countryName: "Jordan",
    confirmed: 12,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "DO",
    countryName: "Dominican Republic",
    confirmed: 11,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-15",
    pk: "PH",
    countryName: "Philippines",
    confirmed: 140,
    deaths: 11
  },
  {
    recovered: 2,
    sk: "2020-03-16",
    pk: "PH",
    countryName: "Philippines",
    confirmed: 140,
    deaths: 12
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "IE",
    countryName: "Ireland",
    confirmed: 129,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "IE",
    countryName: "Ireland",
    confirmed: 129,
    deaths: 2
  },
  {
    recovered: 12,
    sk: "2020-03-15",
    pk: "DZ",
    countryName: "Algeria",
    confirmed: 37,
    deaths: 3
  },
  {
    recovered: 12,
    sk: "2020-03-16",
    pk: "DZ",
    countryName: "Algeria",
    confirmed: 48,
    deaths: 4
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "CZ",
    countryName: "Czechia",
    confirmed: 231,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "CZ",
    countryName: "Czechia",
    confirmed: 253,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-15",
    pk: "SM",
    countryName: "San Marino",
    confirmed: 80,
    deaths: 5
  },
  {
    recovered: 4,
    sk: "2020-03-16",
    pk: "SM",
    countryName: "San Marino",
    confirmed: 101,
    deaths: 5
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "HK",
    countryName: "Hong Kong",
    confirmed: 72,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "HK",
    countryName: "Hong Kong",
    confirmed: 72,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "SI",
    countryName: "Slovenia",
    confirmed: 181,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "SI",
    countryName: "Slovenia",
    confirmed: 219,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "KH",
    countryName: "Cambodia",
    confirmed: 5,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "KH",
    countryName: "Cambodia",
    confirmed: 5,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-15",
    pk: "RU",
    countryName: "Russia",
    confirmed: 59,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-16",
    pk: "RU",
    countryName: "Russia",
    confirmed: 63,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "MA",
    countryName: "Morocco",
    confirmed: 17,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "MA",
    countryName: "Morocco",
    confirmed: 28,
    deaths: 1
  },
  {
    recovered: 20,
    sk: "2020-03-15",
    pk: "TW",
    countryName: "Taiwan",
    confirmed: 59,
    deaths: 1
  },
  {
    recovered: 20,
    sk: "2020-03-16",
    pk: "TW",
    countryName: "Taiwan",
    confirmed: 59,
    deaths: 1
  },
  {
    recovered: 9,
    sk: "2020-03-15",
    pk: "OM",
    countryName: "Oman",
    confirmed: 19,
    deaths: 0
  },
  {
    recovered: 9,
    sk: "2020-03-16",
    pk: "OM",
    countryName: "Oman",
    confirmed: 22,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "AF",
    countryName: "Afghanistan",
    confirmed: 11,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "AF",
    countryName: "Afghanistan",
    confirmed: 16,
    deaths: 0
  },
  {
    recovered: 12,
    sk: "2020-03-15",
    pk: "FR",
    countryName: "France",
    confirmed: 4469,
    deaths: 91
  },
  {
    recovered: 12,
    sk: "2020-03-16",
    pk: "FR",
    countryName: "France",
    confirmed: 4499,
    deaths: 91
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "DK",
    countryName: "Denmark",
    confirmed: 827,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "DK",
    countryName: "Denmark",
    confirmed: 864,
    deaths: 2
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "IS",
    countryName: "Iceland",
    confirmed: 156,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-16",
    pk: "IS",
    countryName: "Iceland",
    confirmed: 171,
    deaths: 5
  },
  {
    recovered: 27,
    sk: "2020-03-15",
    pk: "EG",
    countryName: "Egypt",
    confirmed: 109,
    deaths: 2
  },
  {
    recovered: 21,
    sk: "2020-03-16",
    pk: "EG",
    countryName: "Egypt",
    confirmed: 110,
    deaths: 2
  },
  {
    recovered: 517,
    sk: "2020-03-15",
    pk: "ES",
    countryName: "Spain",
    confirmed: 6391,
    deaths: 196
  },
  {
    recovered: 517,
    sk: "2020-03-16",
    pk: "ES",
    countryName: "Spain",
    confirmed: 7798,
    deaths: 289
  },
  {
    recovered: 3,
    sk: "2020-03-15",
    pk: "AZ",
    countryName: "Azerbaijan",
    confirmed: 15,
    deaths: 1
  },
  {
    recovered: 6,
    sk: "2020-03-16",
    pk: "AZ",
    countryName: "Azerbaijan",
    confirmed: 23,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "HU",
    countryName: "Hungary",
    confirmed: 30,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "HU",
    countryName: "Hungary",
    confirmed: 32,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "MD",
    countryName: "Moldova",
    confirmed: 12,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "MD",
    countryName: "Moldova",
    confirmed: 23,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "LK",
    countryName: "Sri Lanka",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "LK",
    countryName: "Sri Lanka",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "PL",
    countryName: "Poland",
    confirmed: 103,
    deaths: 3
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "PL",
    countryName: "Poland",
    confirmed: 119,
    deaths: 3
  },
  {
    recovered: 245,
    sk: "2020-03-15",
    pk: "OT",
    countryName: "Others",
    confirmed: 697,
    deaths: 7
  },
  {
    recovered: 245,
    sk: "2020-03-16",
    pk: "OT",
    countryName: "Others",
    confirmed: 697,
    deaths: 7
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "PA",
    countryName: "Panama",
    confirmed: 36,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "PA",
    countryName: "Panama",
    confirmed: 43,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "AL",
    countryName: "Albania",
    confirmed: 38,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "AL",
    countryName: "Albania",
    confirmed: 42,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "LB",
    countryName: "Lebanon",
    confirmed: 93,
    deaths: 3
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "LB",
    countryName: "Lebanon",
    confirmed: 99,
    deaths: 3
  },
  {
    recovered: 8,
    sk: "2020-03-15",
    pk: "CA",
    countryName: "Canada",
    confirmed: 240,
    deaths: 1
  },
  {
    recovered: 8,
    sk: "2020-03-16",
    pk: "CA",
    countryName: "Canada",
    confirmed: 240,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "LU",
    countryName: "Luxembourg",
    confirmed: 51,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "LU",
    countryName: "Luxembourg",
    confirmed: 59,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "CR",
    countryName: "Costa Rica",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "CR",
    countryName: "Costa Rica",
    confirmed: 27,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "SA",
    countryName: "Saudi Arabia",
    confirmed: 103,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "SA",
    countryName: "Saudi Arabia",
    confirmed: 103,
    deaths: 0
  },
  {
    recovered: 17,
    sk: "2020-03-15",
    pk: "AE",
    countryName: "United Arab Emirates",
    confirmed: 85,
    deaths: 0
  },
  {
    recovered: 23,
    sk: "2020-03-16",
    pk: "AE",
    countryName: "United Arab Emirates",
    confirmed: 98,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "MV",
    countryName: "Maldives",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "MV",
    countryName: "Maldives",
    confirmed: 13,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "TN",
    countryName: "Tunisia",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-16",
    pk: "TN",
    countryName: "Tunisia",
    confirmed: 18,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-15",
    pk: "NO",
    countryName: "Norway",
    confirmed: 1090,
    deaths: 3
  },
  {
    recovered: 1,
    sk: "2020-03-16",
    pk: "NO",
    countryName: "Norway",
    confirmed: 1221,
    deaths: 3
  }
];

const mockCovidAPI = [
  {
    recovered: 16,
    sk: "2020-03-17",
    pk: "VN",
    countryName: "Vietnam",
    confirmed: 66,
    deaths: 0
  },
  {
    recovered: 16,
    sk: "2020-03-18",
    pk: "VN",
    countryName: "Vietnam",
    confirmed: 68,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-17",
    pk: "CH",
    countryName: "Switzerland",
    confirmed: 2700,
    deaths: 27
  },
  {
    recovered: 15,
    sk: "2020-03-18",
    pk: "CH",
    countryName: "Switzerland",
    confirmed: 3070,
    deaths: 27
  },
  {
    recovered: 51,
    sk: "2020-03-17",
    pk: "US",
    countryName: "United States",
    confirmed: 6106,
    deaths: 106
  },
  {
    recovered: 106,
    sk: "2020-03-18",
    pk: "US",
    countryName: "United States",
    confirmed: 7301,
    deaths: 116
  },
  {
    recovered: 2941,
    sk: "2020-03-17",
    pk: "IT",
    countryName: "Italy",
    confirmed: 31506,
    deaths: 2503
  },
  {
    recovered: 2941,
    sk: "2020-03-18",
    pk: "IT",
    countryName: "Italy",
    confirmed: 31506,
    deaths: 2503
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "SC",
    countryName: "Seychelles",
    confirmed: 2,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "SC",
    countryName: "Seychelles",
    confirmed: 4,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-17",
    pk: "HR",
    countryName: "Croatia",
    confirmed: 65,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-18",
    pk: "HR",
    countryName: "Croatia",
    confirmed: 81,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "EE",
    countryName: "Estonia",
    confirmed: 225,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "EE",
    countryName: "Estonia",
    confirmed: 258,
    deaths: 0
  },
  {
    recovered: 68769,
    sk: "2020-03-17",
    pk: "CN",
    countryName: "China",
    confirmed: 81027,
    deaths: 3230
  },
  {
    recovered: 69726,
    sk: "2020-03-18",
    pk: "CN",
    countryName: "China",
    confirmed: 81068,
    deaths: 3241
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "SK",
    countryName: "Slovakia",
    confirmed: 72,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "SK",
    countryName: "Slovakia",
    confirmed: 105,
    deaths: 1
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "SN",
    countryName: "Senegal",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "SN",
    countryName: "Senegal",
    confirmed: 31,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "BA",
    countryName: "Bosnia and Herzegovina",
    confirmed: 26,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "BA",
    countryName: "Bosnia and Herzegovina",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "BR",
    countryName: "Brazil",
    confirmed: 321,
    deaths: 1
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "BR",
    countryName: "Brazil",
    confirmed: 350,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "BO",
    countryName: "Bolivia",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 14,
    sk: "2020-03-17",
    pk: "IN",
    countryName: "India",
    confirmed: 142,
    deaths: 3
  },
  {
    recovered: 14,
    sk: "2020-03-18",
    pk: "IN",
    countryName: "India",
    confirmed: 156,
    deaths: 3
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "PK",
    countryName: "Pakistan",
    confirmed: 236,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "PK",
    countryName: "Pakistan",
    confirmed: 256,
    deaths: 0
  },
  {
    recovered: 52,
    sk: "2020-03-17",
    pk: "GB",
    countryName: "United Kingdom",
    confirmed: 1950,
    deaths: 55
  },
  {
    recovered: 65,
    sk: "2020-03-18",
    pk: "GB",
    countryName: "United Kingdom",
    confirmed: 2626,
    deaths: 71
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "AM",
    countryName: "Armenia",
    confirmed: 78,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "AM",
    countryName: "Armenia",
    confirmed: 84,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "GE",
    countryName: "Georgia",
    confirmed: 34,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "GE",
    countryName: "Georgia",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "CL",
    countryName: "Chile",
    confirmed: 201,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "CL",
    countryName: "Chile",
    confirmed: 238,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-17",
    pk: "ID",
    countryName: "Indonesia",
    confirmed: 172,
    deaths: 5
  },
  {
    recovered: 11,
    sk: "2020-03-18",
    pk: "ID",
    countryName: "Indonesia",
    confirmed: 227,
    deaths: 19
  },
  {
    recovered: 144,
    sk: "2020-03-17",
    pk: "JP",
    countryName: "Japan",
    confirmed: 878,
    deaths: 29
  },
  {
    recovered: 144,
    sk: "2020-03-18",
    pk: "JP",
    countryName: "Japan",
    confirmed: 889,
    deaths: 29
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "BG",
    countryName: "Bulgaria",
    confirmed: 67,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "BG",
    countryName: "Bulgaria",
    confirmed: 81,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "PS",
    countryName: "Palestine",
    confirmed: 31,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "PS",
    countryName: "Palestine",
    confirmed: 44,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "AT",
    countryName: "Austria",
    confirmed: 1332,
    deaths: 3
  },
  {
    recovered: 9,
    sk: "2020-03-18",
    pk: "AT",
    countryName: "Austria",
    confirmed: 1471,
    deaths: 3
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "BN",
    countryName: "Brunei",
    confirmed: 56,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "BN",
    countryName: "Brunei",
    confirmed: 68,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-17",
    pk: "MX",
    countryName: "Mexico",
    confirmed: 82,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-18",
    pk: "MX",
    countryName: "Mexico",
    confirmed: 93,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "GP",
    countryName: "Guadeloupe",
    confirmed: 27,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-17",
    pk: "AR",
    countryName: "Argentina",
    confirmed: 68,
    deaths: 2
  },
  {
    recovered: 3,
    sk: "2020-03-18",
    pk: "AR",
    countryName: "Argentina",
    confirmed: 79,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "ZA",
    countryName: "South Africa",
    confirmed: 62,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "ZA",
    countryName: "South Africa",
    confirmed: 116,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "BE",
    countryName: "Belgium",
    confirmed: 1243,
    deaths: 10
  },
  {
    recovered: 31,
    sk: "2020-03-18",
    pk: "BE",
    countryName: "Belgium",
    confirmed: 1486,
    deaths: 14
  },
  {
    recovered: 41,
    sk: "2020-03-17",
    pk: "IQ",
    countryName: "Iraq",
    confirmed: 154,
    deaths: 11
  },
  {
    recovered: 43,
    sk: "2020-03-18",
    pk: "IQ",
    countryName: "Iraq",
    confirmed: 164,
    deaths: 12
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "SE",
    countryName: "Sweden",
    confirmed: 1190,
    deaths: 7
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "SE",
    countryName: "Sweden",
    confirmed: 1292,
    deaths: 8
  },
  {
    recovered: 10,
    sk: "2020-03-17",
    pk: "FI",
    countryName: "Finland",
    confirmed: 321,
    deaths: 0
  },
  {
    recovered: 10,
    sk: "2020-03-18",
    pk: "FI",
    countryName: "Finland",
    confirmed: 359,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-17",
    pk: "PT",
    countryName: "Portugal",
    confirmed: 448,
    deaths: 1
  },
  {
    recovered: 3,
    sk: "2020-03-18",
    pk: "PT",
    countryName: "Portugal",
    confirmed: 448,
    deaths: 2
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "LV",
    countryName: "Latvia",
    confirmed: 49,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "LV",
    countryName: "Latvia",
    confirmed: 71,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "MT",
    countryName: "Malta",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "MT",
    countryName: "Malta",
    confirmed: 38,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-17",
    pk: "MO",
    countryName: "Macau",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 10,
    sk: "2020-03-18",
    pk: "MO",
    countryName: "Macau",
    confirmed: 15,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "PE",
    countryName: "Peru",
    confirmed: 117,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "PE",
    countryName: "Peru",
    confirmed: 117,
    deaths: 0
  },
  {
    recovered: 27,
    sk: "2020-03-17",
    pk: "AU",
    countryName: "Australia",
    confirmed: 442,
    deaths: 5
  },
  {
    recovered: 43,
    sk: "2020-03-18",
    pk: "AU",
    countryName: "Australia",
    confirmed: 565,
    deaths: 6
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "UA",
    countryName: "Ukraine",
    confirmed: 7,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "UA",
    countryName: "Ukraine",
    confirmed: 14,
    deaths: 2
  },
  {
    recovered: 834,
    sk: "2020-03-17",
    pk: "KR",
    countryName: "South Korea",
    confirmed: 8320,
    deaths: 75
  },
  {
    recovered: 1540,
    sk: "2020-03-18",
    pk: "KR",
    countryName: "South Korea",
    confirmed: 8413,
    deaths: 84
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "EC",
    countryName: "Ecuador",
    confirmed: 58,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "EC",
    countryName: "Ecuador",
    confirmed: 111,
    deaths: 2
  },
  {
    recovered: 16,
    sk: "2020-03-17",
    pk: "RO",
    countryName: "Romania",
    confirmed: 184,
    deaths: 0
  },
  {
    recovered: 19,
    sk: "2020-03-18",
    pk: "RO",
    countryName: "Romania",
    confirmed: 246,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "LT",
    countryName: "Lithuania",
    confirmed: 25,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "LT",
    countryName: "Lithuania",
    confirmed: 27,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "RS",
    countryName: "Serbia",
    confirmed: 65,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "RS",
    countryName: "Serbia",
    confirmed: 83,
    deaths: 0
  },
  {
    recovered: 41,
    sk: "2020-03-17",
    pk: "TH",
    countryName: "Thailand",
    confirmed: 177,
    deaths: 1
  },
  {
    recovered: 42,
    sk: "2020-03-18",
    pk: "TH",
    countryName: "Thailand",
    confirmed: 212,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "AD",
    countryName: "Andorra",
    confirmed: 39,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "AD",
    countryName: "Andorra",
    confirmed: 39,
    deaths: 0
  },
  {
    recovered: 81,
    sk: "2020-03-17",
    pk: "BH",
    countryName: "Bahrain",
    confirmed: 228,
    deaths: 1
  },
  {
    recovered: 88,
    sk: "2020-03-18",
    pk: "BH",
    countryName: "Bahrain",
    confirmed: 256,
    deaths: 1
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "NL",
    countryName: "Netherlands",
    confirmed: 1705,
    deaths: 43
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "NL",
    countryName: "Netherlands",
    confirmed: 2051,
    deaths: 58
  },
  {
    recovered: 8,
    sk: "2020-03-17",
    pk: "GR",
    countryName: "Greece",
    confirmed: 387,
    deaths: 5
  },
  {
    recovered: 8,
    sk: "2020-03-18",
    pk: "GR",
    countryName: "Greece",
    confirmed: 387,
    deaths: 5
  },
  {
    recovered: 67,
    sk: "2020-03-17",
    pk: "DE",
    countryName: "Germany",
    confirmed: 9257,
    deaths: 24
  },
  {
    recovered: 73,
    sk: "2020-03-18",
    pk: "DE",
    countryName: "Germany",
    confirmed: 10120,
    deaths: 27
  },
  {
    recovered: 5389,
    sk: "2020-03-17",
    pk: "IR",
    countryName: "Iran",
    confirmed: 16169,
    deaths: 988
  },
  {
    recovered: 5389,
    sk: "2020-03-18",
    pk: "IR",
    countryName: "Iran",
    confirmed: 17361,
    deaths: 1135
  },
  {
    recovered: 49,
    sk: "2020-03-17",
    pk: "MY",
    countryName: "Malaysia",
    confirmed: 673,
    deaths: 2
  },
  {
    recovered: 60,
    sk: "2020-03-18",
    pk: "MY",
    countryName: "Malaysia",
    confirmed: 790,
    deaths: 2
  },
  {
    recovered: 114,
    sk: "2020-03-17",
    pk: "SG",
    countryName: "Singapore",
    confirmed: 266,
    deaths: 0
  },
  {
    recovered: 114,
    sk: "2020-03-18",
    pk: "SG",
    countryName: "Singapore",
    confirmed: 313,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "UY",
    countryName: "Uruguay",
    confirmed: 29,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "UY",
    countryName: "Uruguay",
    confirmed: 50,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-17",
    pk: "QA",
    countryName: "Qatar",
    confirmed: 439,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-18",
    pk: "QA",
    countryName: "Qatar",
    confirmed: 442,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "CY",
    countryName: "Cyprus",
    confirmed: 46,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "CY",
    countryName: "Cyprus",
    confirmed: 49,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-17",
    pk: "BY",
    countryName: "Belarus",
    confirmed: 36,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-18",
    pk: "BY",
    countryName: "Belarus",
    confirmed: 51,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "TR",
    countryName: "Turkey",
    confirmed: 47,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "TR",
    countryName: "Turkey",
    confirmed: 98,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "CO",
    countryName: "Colombia",
    confirmed: 65,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "CO",
    countryName: "Colombia",
    confirmed: 75,
    deaths: 0
  },
  {
    recovered: 11,
    sk: "2020-03-17",
    pk: "IL",
    countryName: "Israel",
    confirmed: 337,
    deaths: 0
  },
  {
    recovered: 11,
    sk: "2020-03-18",
    pk: "IL",
    countryName: "Israel",
    confirmed: 433,
    deaths: 0
  },
  {
    recovered: 9,
    sk: "2020-03-17",
    pk: "KW",
    countryName: "Kuwait",
    confirmed: 130,
    deaths: 0
  },
  {
    recovered: 15,
    sk: "2020-03-18",
    pk: "KW",
    countryName: "Kuwait",
    confirmed: 142,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "JO",
    countryName: "Jordan",
    confirmed: 34,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "JO",
    countryName: "Jordan",
    confirmed: 52,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-15",
    pk: "DO",
    countryName: "Dominican Republic",
    confirmed: 11,
    deaths: 0
  },
  {
    recovered: 5,
    sk: "2020-03-17",
    pk: "PH",
    countryName: "Philippines",
    confirmed: 187,
    deaths: 14
  },
  {
    recovered: 7,
    sk: "2020-03-18",
    pk: "PH",
    countryName: "Philippines",
    confirmed: 202,
    deaths: 19
  },
  {
    recovered: 5,
    sk: "2020-03-17",
    pk: "IE",
    countryName: "Ireland",
    confirmed: 223,
    deaths: 2
  },
  {
    recovered: 5,
    sk: "2020-03-18",
    pk: "IE",
    countryName: "Ireland",
    confirmed: 292,
    deaths: 2
  },
  {
    recovered: 12,
    sk: "2020-03-17",
    pk: "DZ",
    countryName: "Algeria",
    confirmed: 60,
    deaths: 4
  },
  {
    recovered: 12,
    sk: "2020-03-18",
    pk: "DZ",
    countryName: "Algeria",
    confirmed: 72,
    deaths: 5
  },
  {
    recovered: 3,
    sk: "2020-03-17",
    pk: "CZ",
    countryName: "Czechia",
    confirmed: 434,
    deaths: 0
  },
  {
    recovered: 3,
    sk: "2020-03-18",
    pk: "CZ",
    countryName: "Czechia",
    confirmed: 464,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "VE",
    countryName: "Venezuela",
    confirmed: 33,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "VE",
    countryName: "Venezuela",
    confirmed: 36,
    deaths: 0
  },
  {
    recovered: 4,
    sk: "2020-03-17",
    pk: "SM",
    countryName: "San Marino",
    confirmed: 109,
    deaths: 7
  },
  {
    recovered: 4,
    sk: "2020-03-18",
    pk: "SM",
    countryName: "San Marino",
    confirmed: 119,
    deaths: 11
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "HK",
    countryName: "Hong Kong",
    confirmed: 72,
    deaths: 2
  },
  {
    recovered: 92,
    sk: "2020-03-18",
    pk: "HK",
    countryName: "Hong Kong",
    confirmed: 181,
    deaths: 4
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "KZ",
    countryName: "Kazakhstan",
    confirmed: 33,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "KZ",
    countryName: "Kazakhstan",
    confirmed: 35,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "SI",
    countryName: "Slovenia",
    confirmed: 275,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "SI",
    countryName: "Slovenia",
    confirmed: 275,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "KH",
    countryName: "Cambodia",
    confirmed: 33,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "KH",
    countryName: "Cambodia",
    confirmed: 35,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-17",
    pk: "RU",
    countryName: "Russia",
    confirmed: 114,
    deaths: 0
  },
  {
    recovered: 8,
    sk: "2020-03-18",
    pk: "RU",
    countryName: "Russia",
    confirmed: 147,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "MA",
    countryName: "Morocco",
    confirmed: 38,
    deaths: 2
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "MA",
    countryName: "Morocco",
    confirmed: 49,
    deaths: 2
  },
  {
    recovered: 20,
    sk: "2020-03-17",
    pk: "TW",
    countryName: "Taiwan",
    confirmed: 59,
    deaths: 1
  },
  {
    recovered: 20,
    sk: "2020-03-18",
    pk: "TW",
    countryName: "Taiwan",
    confirmed: 100,
    deaths: 1
  },
  {
    recovered: 9,
    sk: "2020-03-17",
    pk: "OM",
    countryName: "Oman",
    confirmed: 24,
    deaths: 0
  },
  {
    recovered: 12,
    sk: "2020-03-18",
    pk: "OM",
    countryName: "Oman",
    confirmed: 33,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "AF",
    countryName: "Afghanistan",
    confirmed: 5,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "AF",
    countryName: "Afghanistan",
    confirmed: 22,
    deaths: 0
  },
  {
    recovered: 12,
    sk: "2020-03-17",
    pk: "FR",
    countryName: "France",
    confirmed: 7652,
    deaths: 148
  },
  {
    recovered: 602,
    sk: "2020-03-18",
    pk: "FR",
    countryName: "France",
    confirmed: 7730,
    deaths: 175
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "DK",
    countryName: "Denmark",
    confirmed: 1024,
    deaths: 4
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "DK",
    countryName: "Denmark",
    confirmed: 1091,
    deaths: 4
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "IS",
    countryName: "Iceland",
    confirmed: 220,
    deaths: 1
  },
  {
    recovered: 5,
    sk: "2020-03-18",
    pk: "IS",
    countryName: "Iceland",
    confirmed: 250,
    deaths: 1
  },
  {
    recovered: 32,
    sk: "2020-03-17",
    pk: "EG",
    countryName: "Egypt",
    confirmed: 196,
    deaths: 4
  },
  {
    recovered: 32,
    sk: "2020-03-18",
    pk: "EG",
    countryName: "Egypt",
    confirmed: 196,
    deaths: 6
  },
  {
    recovered: 1028,
    sk: "2020-03-17",
    pk: "ES",
    countryName: "Spain",
    confirmed: 11748,
    deaths: 533
  },
  {
    recovered: 1081,
    sk: "2020-03-18",
    pk: "ES",
    countryName: "Spain",
    confirmed: 13910,
    deaths: 623
  },
  {
    recovered: 6,
    sk: "2020-03-17",
    pk: "AZ",
    countryName: "Azerbaijan",
    confirmed: 28,
    deaths: 1
  },
  {
    recovered: 6,
    sk: "2020-03-18",
    pk: "AZ",
    countryName: "Azerbaijan",
    confirmed: 28,
    deaths: 1
  },
  {
    recovered: 2,
    sk: "2020-03-17",
    pk: "HU",
    countryName: "Hungary",
    confirmed: 50,
    deaths: 1
  },
  {
    recovered: 2,
    sk: "2020-03-18",
    pk: "HU",
    countryName: "Hungary",
    confirmed: 58,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "MD",
    countryName: "Moldova",
    confirmed: 30,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "MD",
    countryName: "Moldova",
    confirmed: 30,
    deaths: 1
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "LK",
    countryName: "Sri Lanka",
    confirmed: 44,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "LK",
    countryName: "Sri Lanka",
    confirmed: 51,
    deaths: 0
  },
  {
    recovered: 13,
    sk: "2020-03-17",
    pk: "PL",
    countryName: "Poland",
    confirmed: 238,
    deaths: 5
  },
  {
    recovered: 13,
    sk: "2020-03-18",
    pk: "PL",
    countryName: "Poland",
    confirmed: 251,
    deaths: 5
  },
  {
    recovered: 245,
    sk: "2020-03-17",
    pk: "OT",
    countryName: "Others",
    confirmed: 697,
    deaths: 7
  },
  {
    recovered: 456,
    sk: "2020-03-18",
    pk: "OT",
    countryName: "Others",
    confirmed: 712,
    deaths: 7
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "PA",
    countryName: "Panama",
    confirmed: 69,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "PA",
    countryName: "Panama",
    confirmed: 86,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "AL",
    countryName: "Albania",
    confirmed: 55,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "AL",
    countryName: "Albania",
    confirmed: 59,
    deaths: 2
  },
  {
    recovered: 3,
    sk: "2020-03-17",
    pk: "LB",
    countryName: "Lebanon",
    confirmed: 120,
    deaths: 3
  },
  {
    recovered: 3,
    sk: "2020-03-18",
    pk: "LB",
    countryName: "Lebanon",
    confirmed: 133,
    deaths: 3
  },
  {
    recovered: 9,
    sk: "2020-03-17",
    pk: "CA",
    countryName: "Canada",
    confirmed: 436,
    deaths: 5
  },
  {
    recovered: 9,
    sk: "2020-03-18",
    pk: "CA",
    countryName: "Canada",
    confirmed: 547,
    deaths: 8
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "LU",
    countryName: "Luxembourg",
    confirmed: 140,
    deaths: 1
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "LU",
    countryName: "Luxembourg",
    confirmed: 203,
    deaths: 2
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "CR",
    countryName: "Costa Rica",
    confirmed: 41,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "CR",
    countryName: "Costa Rica",
    confirmed: 50,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "NZ",
    countryName: "New Zealand",
    confirmed: 20,
    deaths: 0
  },
  {
    recovered: 6,
    sk: "2020-03-17",
    pk: "SA",
    countryName: "Saudi Arabia",
    confirmed: 171,
    deaths: 0
  },
  {
    recovered: 6,
    sk: "2020-03-18",
    pk: "SA",
    countryName: "Saudi Arabia",
    confirmed: 171,
    deaths: 0
  },
  {
    recovered: 23,
    sk: "2020-03-17",
    pk: "AE",
    countryName: "United Arab Emirates",
    confirmed: 98,
    deaths: 0
  },
  {
    recovered: 26,
    sk: "2020-03-18",
    pk: "AE",
    countryName: "United Arab Emirates",
    confirmed: 113,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "MV",
    countryName: "Maldives",
    confirmed: 10,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "MV",
    countryName: "Maldives",
    confirmed: 13,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-17",
    pk: "TN",
    countryName: "Tunisia",
    confirmed: 24,
    deaths: 0
  },
  {
    recovered: 0,
    sk: "2020-03-18",
    pk: "TN",
    countryName: "Tunisia",
    confirmed: 29,
    deaths: 0
  },
  {
    recovered: 1,
    sk: "2020-03-17",
    pk: "NO",
    countryName: "Norway",
    confirmed: 1463,
    deaths: 3
  },
  {
    recovered: 1,
    sk: "2020-03-18",
    pk: "NO",
    countryName: "Norway",
    confirmed: 1529,
    deaths: 6
  }
];

export { mockCovid, mockCovidAPI };
