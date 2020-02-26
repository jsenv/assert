import { assert } from "../../index.js"

const actual = [
  {
    _id: "5d0a53ced3cf3aa714a32490",
    index: 0,
    guid: "8a5e5424-5c4a-48b9-988c-2c5f270e71b9",
    isActive: true,
    balance: "$1,213.96",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "green",
    name: {
      first: "Hoffman",
      last: "Larsen",
    },
    company: "VERTIDE",
    email: "hoffman.larsen@vertide.com",
    phone: "+1 (839) 523-2218",
    address: "874 Kings Hwy, Templeton, Puerto Rico, 5151",
    about:
      "Excepteur minim officia amet culpa elit occaecat mollit excepteur aliquip in ex laboris enim ullamco. Nisi consectetur anim minim commodo ad sit ad sit duis deserunt nulla velit Lorem. Incididunt nostrud ullamco minim culpa ad.",
    registered: "Sunday, July 23, 2017 10:11 PM",
    latitude: "-10.6842",
    longitude: "-110.119429",
    tags: ["mollit", "sunt", "tempor", "nisi", "ipsum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Walsh William",
      },
      {
        id: 1,
        name: "Juliette Vega",
      },
      {
        id: 2,
        name: "Vonda Burris",
      },
    ],
    greeting: "Hello, Hoffman! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53ce3fa3ad0a441be215",
    index: 1,
    guid: "24176180-a403-445a-8dbd-328777fb0956",
    isActive: true,
    balance: "$1,764.17",
    picture: "http://placehold.it/32x32",
    age: 29,
    eyeColor: "blue",
    name: {
      first: "Rhoda",
      last: "Knapp",
    },
    company: "OHMNET",
    email: "rhoda.knapp@ohmnet.org",
    phone: "+1 (894) 558-2593",
    address: "980 Moultrie Street, Bodega, Iowa, 3210",
    about:
      "Et cillum culpa do dolore. Exercitation tempor sint irure labore. Sunt voluptate nostrud est tempor laboris qui. Aute fugiat cupidatat pariatur qui cupidatat dolore qui est eiusmod aliqua amet enim aliquip consectetur. Ipsum Lorem ex sunt fugiat dolor consequat sunt. Deserunt excepteur nisi duis sit nostrud proident voluptate reprehenderit magna.",
    registered: "Sunday, October 7, 2018 10:08 AM",
    latitude: "3.373027",
    longitude: "-135.684374",
    tags: ["exercitation", "cillum", "Lorem", "pariatur", "consequat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Frances Olsen",
      },
      {
        id: 1,
        name: "Ellison Potter",
      },
      {
        id: 2,
        name: "Brianna Spence",
      },
    ],
    greeting: "Hello, Rhoda! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5d0a53ce6190f0f3a23f56d8",
    index: 2,
    guid: "e283d13e-da6b-49fd-8b23-d72d2c2525f7",
    isActive: true,
    balance: "$2,760.55",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "green",
    name: {
      first: "Julianne",
      last: "Mathews",
    },
    company: "INTRADISK",
    email: "julianne.mathews@intradisk.tv",
    phone: "+1 (966) 443-3107",
    address: "357 Boardwalk , Kempton, Texas, 1273",
    about:
      "Proident ipsum sint laborum tempor aliqua consequat duis nisi non. Nulla magna ullamco veniam dolore sunt sint tempor laboris sit excepteur sit excepteur anim sunt. Magna velit culpa duis velit. Est dolore excepteur id in labore aliquip est irure elit culpa ea. Est aliqua nisi eiusmod in do aliquip reprehenderit ad enim.",
    registered: "Wednesday, September 6, 2017 4:39 AM",
    latitude: "-5.565281",
    longitude: "143.072488",
    tags: ["reprehenderit", "reprehenderit", "est", "aliquip", "nisi"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Agnes Contreras",
      },
      {
        id: 1,
        name: "Case Hensley",
      },
      {
        id: 2,
        name: "Pickett Wall",
      },
    ],
    greeting: "Hello, Julianne! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce7e3dd4d451ff633c",
    index: 3,
    guid: "21045c16-9522-4735-a4e1-7839e8321698",
    isActive: false,
    balance: "$2,217.65",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "brown",
    name: {
      first: "Carly",
      last: "Vasquez",
    },
    company: "SULTRAXIN",
    email: "carly.vasquez@sultraxin.net",
    phone: "+1 (942) 514-3576",
    address: "843 Frost Street, Calverton, Illinois, 7459",
    about:
      "Cupidatat laboris non aliquip culpa Lorem est laboris dolore aliqua anim. Mollit ullamco laborum culpa incididunt officia qui do. Mollit fugiat eiusmod incididunt velit proident adipisicing irure anim.",
    registered: "Monday, December 29, 2014 3:28 AM",
    latitude: "-37.810111",
    longitude: "-160.118268",
    tags: ["consectetur", "adipisicing", "sunt", "consectetur", "ipsum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Leticia Cameron",
      },
      {
        id: 1,
        name: "Jennings Richardson",
      },
      {
        id: 2,
        name: "Foreman Glover",
      },
    ],
    greeting: "Hello, Carly! You have 9 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53cef8b2b447b11e5283",
    index: 4,
    guid: "7a327279-a00f-446b-8d4d-9e360ec7cf1d",
    isActive: true,
    balance: "$3,918.65",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "green",
    name: {
      first: "Huber",
      last: "Ochoa",
    },
    company: "GRAINSPOT",
    email: "huber.ochoa@grainspot.name",
    phone: "+1 (958) 504-2480",
    address: "833 Whitney Avenue, Muir, Washington, 3405",
    about:
      "Anim voluptate ullamco enim in. Velit magna sunt dolor esse do id. Pariatur quis laborum ex proident consectetur Lorem sint veniam sint minim qui qui sunt sit.",
    registered: "Thursday, July 24, 2014 6:46 AM",
    latitude: "73.614247",
    longitude: "42.319199",
    tags: ["dolore", "proident", "excepteur", "labore", "duis"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Crane Olson",
      },
      {
        id: 1,
        name: "Huffman Herrera",
      },
      {
        id: 2,
        name: "Hayes Atkinson",
      },
    ],
    greeting: "Hello, Huber! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce855e3a70d47f582f",
    index: 5,
    guid: "be3becf0-3e88-43f3-90c3-bd6a28ce7d68",
    isActive: false,
    balance: "$3,618.61",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "brown",
    name: {
      first: "Peters",
      last: "Galloway",
    },
    company: "METROZ",
    email: "peters.galloway@metroz.biz",
    phone: "+1 (911) 527-3095",
    address: "122 Etna Street, Jacksonwald, Tennessee, 4000",
    about:
      "Excepteur esse esse aliquip reprehenderit minim incididunt. Qui incididunt aliquip pariatur velit fugiat eu exercitation ut culpa proident ipsum. Ullamco amet anim anim laborum magna tempor. Laboris irure cillum mollit proident ullamco aliqua mollit culpa excepteur id eiusmod cupidatat consequat. Ut sit laborum sunt non excepteur irure.",
    registered: "Saturday, May 21, 2016 2:46 AM",
    latitude: "-2.40372",
    longitude: "-142.057512",
    tags: ["elit", "aliquip", "ex", "eiusmod", "pariatur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Lillie Soto",
      },
      {
        id: 1,
        name: "Robin Sweeney",
      },
      {
        id: 2,
        name: "Lindsay Clemons",
      },
    ],
    greeting: "Hello, Peters! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce6b848b7195af4bc0",
    index: 6,
    guid: "8c7c5922-2dda-42d9-a3a6-3df907428422",
    isActive: true,
    balance: "$1,515.59",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "blue",
    name: {
      first: "Rice",
      last: "Mcgee",
    },
    company: "ANIMALIA",
    email: "rice.mcgee@animalia.biz",
    phone: "+1 (980) 534-2589",
    address: "810 Rutledge Street, Blanco, Federated States Of Micronesia, 791",
    about:
      "Reprehenderit amet ut consectetur non culpa. Enim labore excepteur velit cupidatat nostrud amet dolor eu quis aliqua. In eiusmod amet labore ad sint ad adipisicing. Tempor ex cillum enim eu incididunt id minim elit proident enim cupidatat. Est anim adipisicing aute minim non nisi.",
    registered: "Tuesday, March 12, 2019 8:54 PM",
    latitude: "52.358294",
    longitude: "163.945634",
    tags: ["consequat", "mollit", "ullamco", "cillum", "excepteur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Gloria Mcclure",
      },
      {
        id: 1,
        name: "England Mills",
      },
      {
        id: 2,
        name: "Lola Estes",
      },
    ],
    greeting: "Hello, Rice! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce4e6942893f1d5bef",
    index: 7,
    guid: "bbd4571b-fbd9-4833-8006-d86f193b34cc",
    isActive: false,
    balance: "$1,868.51",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "blue",
    name: {
      first: "Saunders",
      last: "Fitzgerald",
    },
    company: "FURNIGEER",
    email: "saunders.fitzgerald@furnigeer.me",
    phone: "+1 (913) 503-3336",
    address: "884 Imlay Street, Ticonderoga, New York, 8529",
    about:
      "Ullamco excepteur mollit labore proident sit duis officia est Lorem excepteur quis. Voluptate do nisi dolor velit commodo aliquip id aliqua in aute cillum qui eu consectetur. Anim consequat voluptate ullamco minim sunt minim. Minim et laborum eu veniam enim id in ullamco consequat deserunt minim. Aute deserunt est pariatur ullamco duis labore deserunt consectetur.",
    registered: "Friday, October 28, 2016 12:17 AM",
    latitude: "18.343838",
    longitude: "-38.468551",
    tags: ["mollit", "veniam", "laborum", "consequat", "cillum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Alvarado Harrington",
      },
      {
        id: 1,
        name: "Freida Franks",
      },
      {
        id: 2,
        name: "Humphrey Tyler",
      },
    ],
    greeting: "Hello, Saunders! You have 6 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce328bbae453fed4f2",
    index: 8,
    guid: "10f4e6fa-f7c3-4ceb-87cc-0a052b5d0575",
    isActive: false,
    balance: "$2,445.38",
    picture: "http://placehold.it/32x32",
    age: 38,
    eyeColor: "blue",
    name: {
      first: "Christina",
      last: "Christian",
    },
    company: "RONBERT",
    email: "christina.christian@ronbert.io",
    phone: "+1 (841) 577-3588",
    address: "651 Montrose Avenue, Caroleen, Louisiana, 2858",
    about:
      "Reprehenderit culpa sit amet fugiat labore mollit aute irure proident do proident consectetur consectetur incididunt. In pariatur eu sunt enim in tempor officia ullamco reprehenderit non labore. Aute commodo sit proident ea sunt enim laborum ad ut quis ut exercitation. Tempor sit culpa duis nostrud commodo Lorem velit.",
    registered: "Saturday, April 6, 2019 9:39 AM",
    latitude: "70.67623",
    longitude: "50.427019",
    tags: ["excepteur", "dolore", "esse", "sint", "incididunt"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Terry Bush",
      },
      {
        id: 1,
        name: "Mcdonald Walters",
      },
      {
        id: 2,
        name: "Katharine Lawson",
      },
    ],
    greeting: "Hello, Christina! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53ce7e7d17df45ada123",
    index: 9,
    guid: "1815a5f0-9b4f-482f-a5d9-49f16e0c1b46",
    isActive: false,
    balance: "$3,798.51",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: {
      first: "Rhonda",
      last: "Ashley",
    },
    company: "ENQUILITY",
    email: "rhonda.ashley@enquility.ca",
    phone: "+1 (945) 447-3710",
    address: "573 Kenmore Terrace, Cresaptown, Palau, 8267",
    about:
      "Nisi reprehenderit culpa tempor incididunt nostrud. Quis Lorem aliquip voluptate ullamco in culpa mollit amet. Occaecat elit ut velit officia non fugiat dolore sint nisi nostrud. Aute eu Lorem duis consequat dolore.",
    registered: "Tuesday, August 2, 2016 3:57 AM",
    latitude: "-87.983639",
    longitude: "84.956236",
    tags: ["veniam", "quis", "quis", "ex", "cupidatat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Gilmore Cunningham",
      },
      {
        id: 1,
        name: "Traci Wong",
      },
      {
        id: 2,
        name: "Howell Patterson",
      },
    ],
    greeting: "Hello, Rhonda! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
]
const expected = [
  {
    _id: "5d0a53ced3cf3aa714a32490",
    index: 0,
    guid: "8a5e5424-5c4a-48b9-988c-2c5f270e71b9",
    isActive: true,
    balance: "$1,213.96",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "green",
    name: {
      first: "Hoffman",
      last: "Larsen",
    },
    company: "VERTIDE",
    email: "hoffman.larsen@vertide.com",
    phone: "+1 (839) 523-2218",
    address: "874 Kings Hwy, Templeton, Puerto Rico, 5151",
    about:
      "Excepteur minim officia amet culpa elit occaecat mollit excepteur aliquip in ex laboris enim ullamco. Nisi consectetur anim minim commodo ad sit ad sit duis deserunt nulla velit Lorem. Incididunt nostrud ullamco minim culpa ad.",
    registered: "Sunday, July 23, 2017 10:11 PM",
    latitude: "-10.6842",
    longitude: "-110.119429",
    tags: ["mollit", "sunt", "tempor", "nisi", "ipsum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Walsh William",
      },
      {
        id: 1,
        name: "Juliette Vega",
      },
      {
        id: 2,
        name: "Vonda Burris",
      },
    ],
    greeting: "Hello, Hoffman! You have 10 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53ce3fa3ad0a441be215",
    index: 1,
    guid: "24176180-a403-445a-8dbd-328777fb0956",
    isActive: true,
    balance: "$1,764.17",
    picture: "http://placehold.it/32x32",
    age: 29,
    eyeColor: "blue",
    name: {
      first: "Rhoda",
      last: "Knapp",
    },
    company: "OHMNET",
    email: "rhoda.knapp@ohmnet.org",
    phone: "+1 (894) 558-2593",
    address: "980 Moultrie Street, Bodega, Iowa, 3210",
    about:
      "Et cillum culpa do dolore. Exercitation tempor sint irure labore. Sunt voluptate nostrud est tempor laboris qui. Aute fugiat cupidatat pariatur qui cupidatat dolore qui est eiusmod aliqua amet enim aliquip consectetur. Ipsum Lorem ex sunt fugiat dolor consequat sunt. Deserunt excepteur nisi duis sit nostrud proident voluptate reprehenderit magna.",
    registered: "Sunday, October 7, 2018 10:08 AM",
    latitude: "3.373027",
    longitude: "-135.684374",
    tags: ["exercitation", "cillum", "Lorem", "pariatur", "consequat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Frances Olsen",
      },
      {
        id: 1,
        name: "Ellison Potter",
      },
      {
        id: 2,
        name: "Brianna Spence",
      },
    ],
    greeting: "Hello, Rhoda! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "5d0a53ce6190f0f3a23f56d8",
    index: 2,
    guid: "e283d13e-da6b-49fd-8b23-d72d2c2525f7",
    isActive: true,
    balance: "$2,760.55",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "green",
    name: {
      first: "Julianne",
      last: "Mathews",
    },
    company: "INTRADISK",
    email: "julianne.mathews@intradisk.tv",
    phone: "+1 (966) 443-3107",
    address: "357 Boardwalk , Kempton, Texas, 1273",
    about:
      "Proident ipsum sint laborum tempor aliqua consequat duis nisi non. Nulla magna ullamco veniam dolore sunt sint tempor laboris sit excepteur sit excepteur anim sunt. Magna velit culpa duis velit. Est dolore excepteur id in labore aliquip est irure elit culpa ea. Est aliqua nisi eiusmod in do aliquip reprehenderit ad enim.",
    registered: "Wednesday, September 6, 2017 4:39 AM",
    latitude: "-5.565281",
    longitude: "143.072488",
    tags: ["reprehenderit", "reprehenderit", "est", "aliquip", "nisi"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Agnes Contreras",
      },
      {
        id: 1,
        name: "Case Hensley",
      },
      {
        id: 2,
        name: "Pickett Wall",
      },
    ],
    greeting: "Hello, Julianne! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce7e3dd4d451ff633c",
    index: 3,
    guid: "21045c16-9522-4735-a4e1-7839e8321698",
    isActive: false,
    balance: "$2,217.65",
    picture: "http://placehold.it/32x32",
    age: 28,
    eyeColor: "brown",
    name: {
      first: "Carly",
      last: "Vasquez",
    },
    company: "SULTRAXIN",
    email: "carly.vasquez@sultraxin.net",
    phone: "+1 (942) 514-3576",
    address: "843 Frost Street, Calverton, Illinois, 7459",
    about:
      "Cupidatat laboris non aliquip culpa Lorem est laboris dolore aliqua anim. Mollit ullamco laborum culpa incididunt officia qui do. Mollit fugiat eiusmod incididunt velit proident adipisicing irure anim.",
    registered: "Monday, December 29, 2014 3:28 AM",
    latitude: "-37.810111",
    longitude: "-160.118268",
    tags: ["consectetur", "adipisicing", "sunt", "consectetur", "ipsum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Leticia Cameron",
      },
      {
        id: 1,
        name: "Jennings Richardson",
      },
      {
        id: 2,
        name: "Foreman Glover",
      },
    ],
    greeting: "Hello, Carly! You have 9 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53cef8b2b447b11e5283",
    index: 4,
    guid: "7a327279-a00f-446b-8d4d-9e360ec7cf1d",
    isActive: true,
    balance: "$3,918.65",
    picture: "http://placehold.it/32x32",
    age: 31,
    eyeColor: "green",
    name: {
      first: "Huber",
      last: "Ochoa",
    },
    company: "GRAINSPOT",
    email: "huber.ochoa@grainspot.name",
    phone: "+1 (958) 504-2480",
    address: "833 Whitney Avenue, Muir, Washington, 3405",
    about:
      "Anim voluptate ullamco enim in. Velit magna sunt dolor esse do id. Pariatur quis laborum ex proident consectetur Lorem sint veniam sint minim qui qui sunt sit.",
    registered: "Thursday, July 24, 2014 6:46 AM",
    latitude: "73.614247",
    longitude: "42.319199",
    tags: ["dolore", "proident", "excepteur", "labore", "duis"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Crane Olson",
      },
      {
        id: 1,
        name: "Huffman Herrera",
      },
      {
        id: 2,
        name: "Hayes Atkinson",
      },
    ],
    greeting: "Hello, Huber! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce855e3a70d47f582f",
    index: 5,
    guid: "be3becf0-3e88-43f3-90c3-bd6a28ce7d68",
    isActive: false,
    balance: "$3,618.61",
    picture: "http://placehold.it/32x32",
    age: 24,
    eyeColor: "brown",
    name: {
      first: "Peters",
      last: "Galloway",
    },
    company: "METROZ",
    email: "peters.galloway@metroz.biz",
    phone: "+1 (911) 527-3095",
    address: "122 Etna Street, Jacksonwald, Tennessee, 4000",
    about:
      "Excepteur esse esse aliquip reprehenderit minim incididunt. Qui incididunt aliquip pariatur velit fugiat eu exercitation ut culpa proident ipsum. Ullamco amet anim anim laborum magna tempor. Laboris irure cillum mollit proident ullamco aliqua mollit culpa excepteur id eiusmod cupidatat consequat. Ut sit laborum sunt non excepteur irure.",
    registered: "Saturday, May 21, 2016 2:46 AM",
    latitude: "-2.40372",
    longitude: "-142.057512",
    tags: ["elit", "aliquip", "ex", "eiusmod", "pariatur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Lillie Soto",
      },
      {
        id: 1,
        name: "Robin Sweeney",
      },
      {
        id: 2,
        name: "Lindsay Clemons",
      },
    ],
    greeting: "Hello, Peters! You have 5 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce6b848b7195af4bc0",
    index: 6,
    guid: "8c7c5922-2dda-42d9-a3a6-3df907428422",
    isActive: true,
    balance: "$1,515.59",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "blue",
    name: {
      first: "Rice",
      last: "Mcgee",
    },
    company: "ANIMALIA",
    email: "rice.mcgee@animalia.biz",
    phone: "+1 (980) 534-2589",
    address: "810 Rutledge Street, Blanco, Federated States Of Micronesia, 791",
    about:
      "Reprehenderit amet ut consectetur non culpa. Enim labore excepteur velit cupidatat nostrud amet dolor eu quis aliqua. In eiusmod amet labore ad sint ad adipisicing. Tempor ex cillum enim eu incididunt id minim elit proident enim cupidatat. Est anim adipisicing aute minim non nisi.",
    registered: "Tuesday, March 12, 2019 8:54 PM",
    latitude: "52.358294",
    longitude: "163.945634",
    tags: ["consequat", "mollit", "ullamco", "cillum", "excepteur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Gloria Mcclure",
      },
      {
        id: 1,
        name: "England Mills",
      },
      {
        id: 2,
        name: "Lola Estes",
      },
    ],
    greeting: "Hello, Rice! You have 9 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce4e6942893f1d5bef",
    index: 7,
    guid: "bbd4571b-fbd9-4833-8006-d86f193b34cc",
    isActive: false,
    balance: "$1,868.51",
    picture: "http://placehold.it/32x32",
    age: 40,
    eyeColor: "blue",
    name: {
      first: "Saunders",
      last: "Fitzgerald",
    },
    company: "FURNIGEER",
    email: "saunders.fitzgerald@furnigeer.me",
    phone: "+1 (913) 503-3336",
    address: "884 Imlay Street, Ticonderoga, New York, 8529",
    about:
      "Ullamco excepteur mollit labore proident sit duis officia est Lorem excepteur quis. Voluptate do nisi dolor velit commodo aliquip id aliqua in aute cillum qui eu consectetur. Anim consequat voluptate ullamco minim sunt minim. Minim et laborum eu veniam enim id in ullamco consequat deserunt minim. Aute deserunt est pariatur ullamco duis labore deserunt consectetur.",
    registered: "Friday, October 28, 2016 12:17 AM",
    latitude: "18.343838",
    longitude: "-38.468551",
    tags: ["mollit", "veniam", "laborum", "consequat", "cillum"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Alvarado Harrington",
      },
      {
        id: 1,
        name: "Freida Franks",
      },
      {
        id: 2,
        name: "Humphrey Tyler",
      },
    ],
    greeting: "Hello, Saunders! You have 6 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "5d0a53ce328bbae453fed4f2",
    index: 8,
    guid: "10f4e6fa-f7c3-4ceb-87cc-0a052b5d0575",
    isActive: false,
    balance: "$2,445.38",
    picture: "http://placehold.it/32x32",
    age: 38,
    eyeColor: "blue",
    name: {
      first: "Christina",
      last: "Christian",
    },
    company: "RONBERT",
    email: "christina.christian@ronbert.io",
    phone: "+1 (841) 577-3588",
    address: "651 Montrose Avenue, Caroleen, Louisiana, 2858",
    about:
      "Reprehenderit culpa sit amet fugiat labore mollit aute irure proident do proident consectetur consectetur incididunt. In pariatur eu sunt enim in tempor officia ullamco reprehenderit non labore. Aute commodo sit proident ea sunt enim laborum ad ut quis ut exercitation. Tempor sit culpa duis nostrud commodo Lorem velit.",
    registered: "Saturday, April 6, 2019 9:39 AM",
    latitude: "70.67623",
    longitude: "50.427019",
    tags: ["excepteur", "dolore", "esse", "sint", "incididunt"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Terry Bush",
      },
      {
        id: 1,
        name: "Mcdonald Walters",
      },
      {
        id: 2,
        name: "Katharine Lawson",
      },
    ],
    greeting: "Hello, Christina! You have 6 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "5d0a53ce7e7d17df45ada123",
    index: 9,
    guid: "1815a5f0-9b4f-482f-a5d9-49f16e0c1b46",
    isActive: false,
    balance: "$3,798.51",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: {
      first: "Rhonda",
      last: "Ashley",
    },
    company: "ENQUILITY",
    email: "rhonda.ashley@enquility.ca",
    phone: "+1 (945) 447-3710",
    address: "573 Kenmore Terrace, Cresaptown, Palau, 8267",
    about:
      "Nisi reprehenderit culpa tempor incididunt nostrud. Quis Lorem aliquip voluptate ullamco in culpa mollit amet. Occaecat elit ut velit officia non fugiat dolore sint nisi nostrud. Aute eu Lorem duis consequat dolore.",
    registered: "Tuesday, August 2, 2016 3:57 AM",
    latitude: "-87.983639",
    longitude: "84.956236",
    tags: ["veniam", "quis", "quis", "ex", "cupidatat"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Gilmore Cunningham",
      },
      {
        id: 1,
        name: "Traci Wong",
      },
      {
        id: 2,
        name: "Howell Patterson",
      },
    ],
    greeting: "Hello, Rhonda! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
]

assert({ actual, expected })
