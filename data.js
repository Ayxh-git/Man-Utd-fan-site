// Manchester United 2026/27 — бүх албан ёсны тэмцээний тоглолтын өгөгдөл
// Эх сурвалж:
//  - Sportradar: багийн статистик, гарааны бүрэлдэхүүн, хуваарь
//  - Sky Sports / NBC / Sports Mole / Sporting Life / 101GreatGoals / Football Web Pages: гоол, оновчтой дамжуулалт
//  - Sportsdunia: тоглогчдын үнэлгээ (10 онооны систем)
//  - FotMob (United in Focus, readmanutd-аар дамжуулан): гүйсэн зай, хурд
// Шинэ тоглолт болгоны дараа энэ файлыг шинэчилнэ.
window.MU_DATA = {
  season: "2026/27",
  updated: "2026-11-16",
  sources: {
    ratings: "Sportsdunia",
    physical: "FotMob (United in Focus, readmanutd)",
    stats: "Sportradar",
    winProb: "StatsUltra (15 000 улирлын симуляц, 2026-11-16)"
  },
  matches: [
    {
      id: "sr:sport_event:72221156", comp: "PL", round: "1-р тойрог", date: "2026-08-22T11:30:00Z",
      opponent: "Hull City", venue: "A", stadium: "MKM Stadium",
      score: { mu: 0, opp: 2 },
      goals: [],
      oppGoals: [{ min: "17'", player: "Semi Ajayi" }, { min: "38'", player: "Nobel Mendy" }],
      stats: {
        mu: { poss: 72, shots: 20, sot: 6, corners: 6, fouls: 9, yellow: 1, red: 0, offsides: 3, saves: 2 },
        opp: { poss: 28, shots: 8, sot: 4, corners: 1, fouls: 10, yellow: 2, red: 0, offsides: 0, saves: 6 }
      },
      lineup: ["Lammens", "Mazraoui", "Maguire", "Heaven", "Shaw", "Andrey Santos", "Tielemans", "Mbeumo", "Fernandes", "Dorgu", "Cunha"],
      subs: ["Rashford", "Mainoo", "Sesko", "Dalot", "Lacey"],
      ratings: { Lammens: 6.3, Mazraoui: 6.9, Maguire: 7.4, Heaven: 5.8, Shaw: 6.9, Tielemans: 6.4, "Andrey Santos": 6.9, Mbeumo: 6.7, Fernandes: 7.3, Dorgu: 5.7, Cunha: 6.5, Rashford: 6.8, Mainoo: 6.3, Sesko: 5.7, Dalot: 6.3, Lacey: 6.1 },
      physical: null,
      note: "Шинээр дэвшсэн Hull-д сет-пийсээс хоёр гоол алдаж, улирлаа ялагдлаар эхлүүлэв."
    },
    {
      id: "sr:sport_event:72221226", comp: "PL", round: "2-р тойрог", date: "2026-08-30T15:30:00Z",
      opponent: "Ipswich Town", venue: "H", stadium: "Old Trafford",
      score: { mu: 5, opp: 2 },
      goals: [
        { min: "40'", player: "Fernandes", assist: "Cunha" },
        { min: "56'", player: "Greaves (өөрийн хаалгандаа)", og: true },
        { min: "61'", player: "Fernandes", pen: true },
        { min: "68'", player: "Fernandes" },
        { min: "82'", player: "Mbeumo", assist: "Fernandes" }
      ],
      oppGoals: [{ min: "29'", player: "Leif Davis" }, { min: "90+1'", player: "Chuba Akpom" }],
      stats: {
        mu: { poss: 60, shots: 28, sot: 11, corners: 8, fouls: 7, yellow: 1, red: 0, offsides: 0, saves: 3 },
        opp: { poss: 40, shots: 7, sot: 5, corners: 4, fouls: 12, yellow: 3, red: 0, offsides: 1, saves: 7 }
      },
      lineup: ["Lammens", "Dalot", "Maguire", "Martinez", "Shaw", "Mainoo", "Tielemans", "Mbeumo", "Fernandes", "Rashford", "Cunha"],
      subs: ["Mazraoui", "Yoro", "Andrey Santos", "Dorgu", "Sesko"],
      ratings: { Lammens: 7.8, Shaw: 7.5, Martinez: 7.2, Maguire: 7.4, Dalot: 7.6, Tielemans: 8.5, Mainoo: 8.2, Rashford: 8.1, Fernandes: 9.9, Mbeumo: 8.5, Cunha: 8.3, Mazraoui: 6.2, Yoro: 6.1, "Andrey Santos": 6.2, Dorgu: 6.5, Sesko: 6.0 },
      physical: { team: { mu: 116.9, opp: 115.8 }, players: [{ player: "Tielemans", km: 11.5 }, { player: "Fernandes", km: 10.6 }] },
      note: "Бруну Фернандеш хет-трик хийж, улирлын анхны ялалт."
    },
    {
      id: "sr:sport_event:72221238", comp: "PL", round: "3-р тойрог", date: "2026-09-06T13:00:00Z",
      opponent: "Everton", venue: "A", stadium: "Hill Dickinson Stadium",
      score: { mu: 2, opp: 2 },
      goals: [
        { min: "47'", player: "Mbeumo", assist: "Mainoo" },
        { min: "88'", player: "Sesko", assist: "Shaw" }
      ],
      oppGoals: [{ min: "83'", player: "Tyrique George" }, { min: "90+6'", player: "Ainsley Maitland-Niles" }],
      stats: {
        mu: { poss: 55, shots: 14, sot: 3, corners: 3, fouls: 11, yellow: 3, red: 0, offsides: 1, saves: 4 },
        opp: { poss: 45, shots: 16, sot: 6, corners: 4, fouls: 7, yellow: 3, red: 0, offsides: 3, saves: 1 }
      },
      lineup: ["Lammens", "Dalot", "Maguire", "Martinez", "Shaw", "Tielemans", "Mainoo", "Mbeumo", "Fernandes", "Rashford", "Cunha"],
      subs: ["Dorgu", "Sesko", "Yoro", "Andrey Santos", "Mazraoui"],
      ratings: { Lammens: 6.0, Dalot: 6.9, Maguire: 7.3, Martinez: 7.0, Shaw: 7.8, Mainoo: 8.6, Tielemans: 7.4, Fernandes: 7.4, Mbeumo: 8.2, Cunha: 6.6, Rashford: 7.3 },
      physical: { topSpeed: [{ player: "Shaw", kmh: 31.2 }, { player: "Mbeumo", kmh: 30.8 }, { player: "Rashford", kmh: 30.6 }], players: [], note: "Хамгийн их зайг Тиелеманс туулсан (тоо нийтлэгдээгүй)." },
      note: "Хоёр удаа тэргүүлсэн ч 96 дахь минутад Maitland-Niles тэнцүүлэв."
    },
    {
      id: "sr:sport_event:74165900", comp: "UCL", round: "Лигийн шат 1", date: "2026-09-10T19:00:00Z",
      opponent: "Sabah", venue: "H", stadium: "Old Trafford",
      score: { mu: 4, opp: 0 },
      goals: [
        { min: "27'", player: "Cunha", assist: "Dorgu" },
        { min: "42'", player: "Fernandes", assist: "Tielemans" },
        { min: "45'", player: "Sesko" },
        { min: "68'", player: "Martinez" }
      ],
      oppGoals: [],
      stats: {
        mu: { poss: 55, shots: 20, sot: 9, corners: 7, fouls: 24, yellow: 1, red: 0, offsides: 0, saves: 1 },
        opp: { poss: 45, shots: 10, sot: 1, corners: 2, fouls: 25, yellow: 1, red: 0, offsides: 0, saves: 5 }
      },
      lineup: ["Lammens", "Mazraoui", "Yoro", "Martinez", "Dorgu", "Tielemans", "Mainoo", "Mbeumo", "Fernandes", "Cunha", "Sesko"],
      subs: ["Mount", "Zirkzee", "Amass", "Lacey"],
      ratings: { Lammens: 6.0, Mazraoui: 6.5, Yoro: 7.0, Martinez: 7.0, Dorgu: 8.0, Tielemans: 8.0, Mainoo: 7.0, Mbeumo: 8.0, Fernandes: 8.5, Cunha: 7.5, Sesko: 7.5 },
      physical: null,
      note: "Аваргуудын лигт 3 жилийн дараа эргэн ирж, том ялалт байгуулав."
    },
    {
      id: "sr:sport_event:72221266", comp: "PL", round: "4-р тойрог", date: "2026-09-13T15:30:00Z",
      opponent: "Manchester City", venue: "H", stadium: "Old Trafford",
      score: { mu: 0, opp: 1 },
      goals: [],
      oppGoals: [{ min: "60'", player: "Erling Haaland" }],
      stats: {
        mu: { poss: 54, shots: 16, sot: 3, corners: 6, fouls: 17, yellow: 1, red: 0, offsides: 4, saves: 1 },
        opp: { poss: 46, shots: 7, sot: 2, corners: 7, fouls: 10, yellow: 2, red: 1, offsides: 1, saves: 3 }
      },
      lineup: ["Lammens", "Dalot", "Maguire", "Martinez", "Dorgu", "Tielemans", "Mainoo", "Mbeumo", "Fernandes", "Rashford", "Cunha"],
      subs: ["Sesko", "Zirkzee"],
      ratings: { Lammens: 6.3, Dalot: 6.7, Maguire: 6.8, Martinez: 6.8, Dorgu: 7.2, Mainoo: 7.6, Tielemans: 6.9, Mbeumo: 5.8, Fernandes: 6.5, Rashford: 6.9, Cunha: 6.3, Sesko: 6.3, Zirkzee: 6.1 },
      physical: { players: [{ player: "Dorgu", km: 11.6 }, { player: "Mbeumo", km: 10.7 }] },
      note: "Сити 23 дахь минутаас 10 хүнтэй үлдсэн ч дербид ялагдав."
    },
    {
      id: "efl-r3-bha", comp: "EFL", round: "3-р шат", date: "2026-09-16T19:00:00Z",
      opponent: "Brighton & Hove Albion", venue: "H", stadium: "Old Trafford",
      score: { mu: 2, opp: 3 },
      goals: [{ min: "8'", player: "Lacey" }, { min: "10'", player: "Mount" }],
      oppGoals: [{ min: "45+1'", player: "Charalampos Kostoulas" }, { min: "65'", player: "Pascal Gross" }, { min: "69'", player: "Maxim De Cuyper" }],
      stats: {
        mu: { poss: null, shots: null, sot: null, corners: 4, fouls: 5, yellow: 0, red: 0, offsides: 0, saves: 2 },
        opp: { poss: null, shots: null, sot: null, corners: 3, fouls: 14, yellow: 4, red: 0, offsides: 2, saves: 2 }
      },
      lineup: ["Darlow", "Dalot", "Heaven", "Yoro", "Mazraoui", "Andrey Santos", "Tielemans", "Lacey", "Mount", "Rashford", "Sesko"],
      subs: ["Zirkzee", "Mbeumo", "Mainoo"],
      ratings: { Darlow: 5.4, Dalot: 5.0, Heaven: 6.0, Yoro: 5.7, Mazraoui: 5.5, "Andrey Santos": 6.3, Mount: 6.7, Tielemans: 6.2, Lacey: 6.9, Rashford: 6.8, Sesko: 5.7 },
      physical: null,
      note: "2:0-ээр тэргүүлж байгаад 2:3-аар хожигдож, EFL цомоос хасагдав. Статистик: Football Web Pages (хэсэгчилсэн)."
    },
    {
      id: "sr:sport_event:72221280", comp: "PL", round: "5-р тойрог", date: "2026-09-20T15:30:00Z",
      opponent: "Fulham", venue: "A", stadium: "Craven Cottage",
      score: { mu: 1, opp: 1 },
      goals: [{ min: "89'", player: "Cunha", assist: "Dorgu" }],
      oppGoals: [{ min: "63'", player: "Lisandro Martinez (өөрийн хаалгандаа)" }],
      stats: {
        mu: { poss: 56, shots: 25, sot: 7, corners: 13, fouls: 5, yellow: 0, red: 0, offsides: 2, saves: 6 },
        opp: { poss: 44, shots: 11, sot: 6, corners: 3, fouls: 9, yellow: 3, red: 0, offsides: 1, saves: 5 }
      },
      lineup: ["Lammens", "Dalot", "Maguire", "Martinez", "Shaw", "Tielemans", "Mainoo", "Mbeumo", "Fernandes", "Rashford", "Cunha"],
      subs: ["Zirkzee", "Mount", "Dorgu"],
      ratings: { Lammens: 8.4, Dalot: 7.3, Maguire: 7.4, Martinez: 6.4, Shaw: 6.6, Tielemans: 7.5, Mainoo: 7.5, Fernandes: 7.8, Mbeumo: 7.5, Cunha: 8.1, Rashford: 7.8 },
      physical: { team: { mu: 110.2, opp: 116.7 }, players: [{ player: "Tielemans", km: 12.0 }, { player: "Fernandes", km: 11.1 }], note: "Фернандеш бүтэн тоглолтод ердөө 1 спринт хийсэн." },
      note: "Кунья 89 дэх минутад хазайсан цохилтоор нэг оноо аварлаа."
    },
    {
      id: "sr:sport_event:72221308", comp: "PL", round: "6-р тойрог", date: "2026-10-10T16:30:00Z",
      opponent: "Tottenham Hotspur", venue: "H", stadium: "Old Trafford",
      score: { mu: 1, opp: 1 },
      goals: [{ min: "73'", player: "Mbeumo", assist: "Cunha" }],
      oppGoals: [{ min: "90+2'", player: "Dominic Solanke" }],
      stats: {
        mu: { poss: 49, shots: 11, sot: 4, corners: 4, fouls: 13, yellow: 4, red: 0, offsides: 2, saves: 2 },
        opp: { poss: 51, shots: 10, sot: 3, corners: 4, fouls: 16, yellow: 3, red: 1, offsides: 2, saves: 3 }
      },
      lineup: ["Lammens", "Yoro", "Maguire", "Martinez", "Shaw", "Tielemans", "Mainoo", "Amad", "Fernandes", "Mbeumo", "Cunha"],
      subs: ["Baleba", "Rashford", "Heaven"],
      ratings: { Lammens: 6.5, Yoro: 7.5, Maguire: 6.5, Martinez: 7.0, Shaw: 6.5, Tielemans: 7.0, Mainoo: 6.5, Mbeumo: 7.5, Fernandes: 6.5, Amad: 7.0, Cunha: 8.0 },
      physical: { players: [{ player: "Mainoo", km: 11.3 }, { player: "Fernandes", km: 11.1 }, { player: "Mbeumo", km: 11.1 }], note: "United Тоттенхэмээс ойролцоогоор 5 км бага гүйсэн." },
      note: "10 хүнтэй Спөрс нэмэлт цагт тэнцүүлэв."
    },
    {
      id: "sr:sport_event:74165910", comp: "UCL", round: "Лигийн шат 2", date: "2026-10-13T19:00:00Z",
      opponent: "Atlético Madrid", venue: "A", stadium: "Riyadh Air Metropolitano",
      score: { mu: 0, opp: 2 },
      goals: [],
      oppGoals: [{ min: "1'", player: "Pablo Barrios" }, { min: "79'", player: "Ademola Lookman" }],
      stats: {
        mu: { poss: 38, shots: 8, sot: 4, corners: 5, fouls: 13, yellow: 1, red: 1, offsides: 2, saves: 2 },
        opp: { poss: 62, shots: 9, sot: 4, corners: 2, fouls: 11, yellow: 1, red: 0, offsides: 1, saves: 4 }
      },
      lineup: ["Lammens", "Heaven", "Yoro", "Martinez", "Dalot", "Andrey Santos", "Baleba", "Fernandes", "Tielemans", "Rashford", "Mbeumo"],
      subs: ["Cunha", "Maguire"],
      ratings: { Lammens: 6.9, Dalot: 5.6, Martinez: 5.8, Yoro: 5.3, Heaven: 6.3, "Andrey Santos": 6.2, Baleba: 6.8, Tielemans: 6.6, Fernandes: 7.1, Mbeumo: 6.7, Rashford: 6.0 },
      physical: null,
      note: "Йоро 74 дэх минутад улаан хуудас авч, 10 хүнтэй үлдэв."
    },
    {
      id: "sr:sport_event:72221322", comp: "PL", round: "7-р тойрог", date: "2026-10-18T13:00:00Z",
      opponent: "Leeds United", venue: "A", stadium: "Elland Road",
      score: { mu: 1, opp: 1 },
      goals: [{ min: "35'", player: "Mbeumo", assist: "Tielemans" }],
      oppGoals: [{ min: "51'", player: "Dominic Calvert-Lewin" }],
      stats: {
        mu: { poss: 37, shots: 13, sot: 4, corners: 3, fouls: 5, yellow: 2, red: 0, offsides: 3, saves: 4 },
        opp: { poss: 63, shots: 10, sot: 6, corners: 2, fouls: 16, yellow: 2, red: 0, offsides: 2, saves: 3 }
      },
      lineup: ["Lammens", "Yoro", "Maguire", "Martinez", "Dalot", "Andrey Santos", "Baleba", "Fernandes", "Tielemans", "Amad", "Mbeumo"],
      subs: ["Mazraoui", "Cunha"],
      ratings: { Lammens: 7.0, Dalot: 8.2, Maguire: 7.5, Martinez: 6.1, Yoro: 6.9, "Andrey Santos": 6.7, Tielemans: 7.7, Fernandes: 6.9, Mbeumo: 7.1, Amad: 7.2, Baleba: 6.8, Mazraoui: 7.3 },
      physical: null,
      note: "Baleba Премьер лигт анх удаа гараанаас тоглов."
    },
    {
      id: "sr:sport_event:74165958", comp: "UCL", round: "Лигийн шат 3", date: "2026-10-21T16:45:00Z",
      opponent: "Como", venue: "A", stadium: "Stadio Giuseppe Sinigaglia",
      score: { mu: 1, opp: 4 },
      goals: [{ min: "90+1'", player: "Zirkzee" }],
      oppGoals: [{ min: "2'", player: "Nico Paz" }, { min: "49'", player: "Anastasios Douvikas" }, { min: "57'", player: "Nico Paz" }, { min: "76'", player: "Jacobo Ramón" }],
      stats: {
        mu: { poss: 46, shots: 13, sot: 4, corners: 4, fouls: 11, yellow: 3, red: 0, offsides: 1, saves: 5 },
        opp: { poss: 54, shots: 12, sot: 9, corners: 1, fouls: 10, yellow: 1, red: 0, offsides: 2, saves: 3 }
      },
      lineup: ["Lammens", "Dalot", "Maguire", "De Ligt", "Mazraoui", "Andrey Santos", "Tielemans", "Cunha", "Fernandes", "Mount", "Mbeumo"],
      subs: ["Amad", "Zirkzee", "Lacey"],
      ratings: { Lammens: 6.5, Dalot: 5.0, "De Ligt": 5.0, Maguire: 6.5, Mazraoui: 4.5, Mount: 5.5, "Andrey Santos": 6.0, Mbeumo: 6.0, Tielemans: 6.5, Cunha: 6.0, Fernandes: 6.0, Amad: 7.5, Zirkzee: 7.0 },
      physical: null,
      note: "Аваргуудын лигт анх оролцож буй Комод 1:4-өөр хожигдов."
    },
    {
      id: "sr:sport_event:72221348", comp: "PL", round: "8-р тойрог", date: "2026-10-25T14:00:00Z",
      opponent: "AFC Bournemouth", venue: "H", stadium: "Old Trafford",
      score: { mu: 0, opp: 3 },
      goals: [],
      oppGoals: [{ min: "38'", player: "Rayan" }, { min: "43'", player: "Marcus Tavernier" }, { min: "71'", player: "Evanilson" }],
      stats: {
        mu: { poss: 62, shots: 15, sot: 3, corners: 5, fouls: 13, yellow: 4, red: 0, offsides: 0, saves: 1 },
        opp: { poss: 38, shots: 9, sot: 4, corners: 4, fouls: 16, yellow: 1, red: 0, offsides: 1, saves: 3 }
      },
      lineup: ["Lammens", "Dalot", "Yoro", "Maguire", "Heaven", "Andrey Santos", "Baleba", "Amad", "Tielemans", "Mount", "Mbeumo"],
      subs: ["Cunha", "Martinez", "Zirkzee", "Lacey"],
      ratings: { Lammens: 4.5, Yoro: 5.6, Maguire: 6.0, Heaven: 6.6, Dalot: 6.7, "Andrey Santos": 7.1, Baleba: 6.0, Amad: 6.8, Tielemans: 5.2, Mount: 7.5, Mbeumo: 6.4, Cunha: 6.3, Martinez: 6.2, Zirkzee: 6.0, Lacey: 6.4 },
      physical: null,
      note: "Фернандеш ахлагчийн туузаа хасуулж, вандан дээр үлдэв. Талбай дээрээ 0:3."
    },
    {
      id: "sr:sport_event:72221358", comp: "PL", round: "9-р тойрог", date: "2026-10-31T12:30:00Z",
      opponent: "Chelsea", venue: "A", stadium: "Stamford Bridge",
      score: { mu: 0, opp: 2 },
      goals: [],
      oppGoals: [{ min: "50'", player: "Morgan Rogers" }, { min: "64'", player: "Cole Palmer (пен.)" }],
      stats: {
        mu: { poss: 41, shots: 10, sot: 4, corners: 7, fouls: 19, yellow: 5, red: 1, offsides: 2, saves: 8 },
        opp: { poss: 59, shots: 20, sot: 10, corners: 8, fouls: 8, yellow: 1, red: 0, offsides: 3, saves: 4 }
      },
      lineup: ["Lammens", "Yoro", "Maguire", "Martinez", "Dalot", "Andrey Santos", "Baleba", "Amad", "Fernandes", "Cunha", "Mbeumo"],
      subs: ["Zirkzee"],
      ratings: { Lammens: 7.7, Yoro: 6.6, Maguire: 6.4, Martinez: 4.0, Dalot: 6.8, Baleba: 5.8, "Andrey Santos": 7.2, Amad: 6.6, Fernandes: 6.8, Cunha: 6.7, Mbeumo: 6.2 },
      physical: null,
      note: "Мартинес пенальти өгч, хоёр дахь шараар талбайгаас гарав."
    },
    {
      id: "sr:sport_event:74165992", comp: "UCL", round: "Лигийн шат 4", date: "2026-11-03T20:00:00Z",
      opponent: "AS Roma", venue: "H", stadium: "Old Trafford",
      score: { mu: 3, opp: 2 },
      goals: [
        { min: "58'", player: "Fernandes", pen: true },
        { min: "83'", player: "Cunha" },
        { min: "86'", player: "Cunha", assist: "Lacey" }
      ],
      oppGoals: [{ min: "11'", player: "Matías Soulé" }, { min: "17'", player: "Donyell Malen (пен.)" }],
      stats: {
        mu: { poss: 52, shots: 15, sot: 5, corners: 3, fouls: 10, yellow: 4, red: 1, offsides: 1, saves: 2 },
        opp: { poss: 48, shots: 5, sot: 4, corners: 1, fouls: 13, yellow: 3, red: 0, offsides: 2, saves: 2 }
      },
      lineup: ["Lammens", "Yoro", "Maguire", "Heaven", "Dalot", "Mainoo", "Baleba", "Mbeumo", "Fernandes", "Amad", "Cunha"],
      subs: ["Lacey", "Mount"],
      ratings: { Lammens: 6.3, Yoro: 7.5, Maguire: 7.1, Heaven: 6.9, Dalot: 7.9, Baleba: 7.1, Mainoo: 8.1, Amad: 7.2, Cunha: 8.9, Fernandes: 8.6, Mbeumo: 7.1 },
      physical: null,
      note: "0:2-оос эргүүлж ялав. Кунья 2 гоол оруулаад хоёр дахь шараар талбайгаас гарав."
    },
    {
      id: "sr:sport_event:72221386", comp: "PL", round: "10-р тойрог", date: "2026-11-08T16:30:00Z",
      opponent: "Aston Villa", venue: "H", stadium: "Old Trafford",
      score: { mu: 4, opp: 4 },
      goals: [
        { min: "16'", player: "Fernandes", pen: true },
        { min: "44'", player: "Tielemans" },
        { min: "90+2'", player: "Zirkzee", assist: "Dorgu" },
        { min: "90+6'", player: "Dorgu", assist: "Fernandes" }
      ],
      oppGoals: [{ min: "1'", player: "Alysson" }, { min: "4'", player: "Nicolas Jackson" }, { min: "48'", player: "John McGinn" }, { min: "53'", player: "Leon Goretzka" }],
      stats: {
        mu: { poss: 54, shots: 25, sot: 9, corners: 8, fouls: 17, yellow: 1, red: 0, offsides: 3, saves: 2 },
        opp: { poss: 46, shots: 8, sot: 6, corners: 1, fouls: 8, yellow: 1, red: 0, offsides: 0, saves: 5 }
      },
      lineup: ["Lammens", "Mazraoui", "Yoro", "Maguire", "Dalot", "Tielemans", "Mainoo", "Amad", "Fernandes", "Cunha", "Mbeumo"],
      subs: ["Heaven", "Mount", "Lacey", "Dorgu", "Zirkzee"],
      ratings: { Lammens: 6.0, Dalot: 5.0, Mazraoui: 6.5, Maguire: 5.5, Yoro: 5.0, Fernandes: 8.8, Cunha: 8.0, Amad: 6.5, Tielemans: 8.5, Mainoo: 7.5, Mbeumo: 6.0, Heaven: 6.5, Mount: 7.0, Lacey: 6.5, Dorgu: 8.0, Zirkzee: 7.5 },
      physical: null,
      note: "Хоёр удаа 2 гоолоор хоцорсон ч нэмэлт цагт 4:4 болгов."
    }
  ],
  history: {
    managersSource: "The People's Person (Wikipedia, API-Football өгөгдөл; 2026-11-16-нд шинэчилсэн)",
    managers: [
      { name: "Sir Alex Ferguson", role: "", from: "1986-11", to: "2013-05", p: 1500, w: 895, d: 338, l: 267 },
      { name: "David Moyes", role: "", from: "2013-07", to: "2014-04", p: 51, w: 27, d: 9, l: 15 },
      { name: "Ryan Giggs", role: "түр", from: "2014-04", to: "2014-05", p: 4, w: 2, d: 1, l: 1 },
      { name: "Louis van Gaal", role: "", from: "2014-07", to: "2016-05", p: 103, w: 54, d: 25, l: 24 },
      { name: "José Mourinho", role: "", from: "2016-05", to: "2018-12", p: 151, w: 86, d: 34, l: 31 },
      { name: "Ole Gunnar Solskjær", role: "", from: "2018-12", to: "2021-11", p: 171, w: 93, d: 38, l: 40 },
      { name: "Michael Carrick", role: "түр (2021)", from: "2021-11", to: "2021-12", p: 3, w: 2, d: 1, l: 0 },
      { name: "Ralf Rangnick", role: "түр", from: "2021-12", to: "2022-05", p: 29, w: 11, d: 10, l: 8 },
      { name: "Erik ten Hag", role: "", from: "2022-05", to: "2024-10", p: 128, w: 70, d: 23, l: 35 },
      { name: "Ruud van Nistelrooy", role: "түр", from: "2024-10", to: "2024-11", p: 4, w: 3, d: 1, l: 0 },
      { name: "Ruben Amorim", role: "", from: "2024-11", to: "2026-01", p: 66, w: 26, d: 19, l: 21 },
      { name: "Darren Fletcher", role: "түр", from: "2026-01", to: "2026-01", p: 2, w: 0, d: 1, l: 1 },
      { name: "Michael Carrick", role: "одоогийн", from: "2026-01", to: null, p: 32, w: 15, d: 8, l: 9 }
    ],
    playersNote: "2013/14 улирлаас хойш, бүх албан ёсны тэмцээнд, зөвхөн Man United-д оруулсан. Оновчтой дамжуулалтын тоо эх сурвалжаас хамааран зөрдөг (жишээ нь Мартиал 43–55).",
    players: [
      { name: "Marcus Rashford", years: "2016–", g: 138, a: 79, src: "manutd.com / United in Focus" },
      { name: "Bruno Fernandes", years: "2020–", g: 112, a: 106, src: "2025/26-ны эцэст 106 гоол, 104 дамжуулалт (beIN, ANI) + 2026/27-д 6 гоол, 2 дамжуулалт" },
      { name: "Anthony Martial", years: "2015–2024", g: 90, a: 55, src: "manutd.com (гоол), Goal (дамжуулалт)" },
      { name: "Wayne Rooney", years: "2013–2017 (Фергюсоны дараа)", g: 56, a: null, src: "United in Focus (Фергюсоны дараах 56 гоол); дамжуулалтын нийлбэр олдсонгүй" },
      { name: "Juan Mata", years: "2014–2022", g: 51, a: 47, src: "manutd.com, Reuters" },
      { name: "Paul Pogba", years: "2016–2022", g: 39, a: 51, src: "Transfermarkt (Red Devil Armada-аар), AS Monaco" },
      { name: "Romelu Lukaku", years: "2017–2019", g: 42, a: null, src: "The Guardian (гоол)" }
    ]
  },
  fixtures: [
    { date: "2026-11-22T16:30:00Z", comp: "PL", opponent: "Liverpool", venue: "A", winProb: { mu: 26, draw: 23, opp: 51 } },
    { date: "2026-11-25T20:00:00Z", comp: "UCL", opponent: "Sporting CP", venue: "A", winProb: { mu: 44, draw: 25, opp: 32 } },
    { date: "2026-11-28T15:00:00Z", comp: "PL", opponent: "Brentford", venue: "H", winProb: { mu: 48, draw: 25, opp: 27 } },
    { date: "2026-12-02T20:15:00Z", comp: "PL", opponent: "Newcastle United", venue: "A", winProb: { mu: 42, draw: 25, opp: 34 } },
    { date: "2026-12-05T15:00:00Z", comp: "PL", opponent: "Coventry City", venue: "H", winProb: { mu: 66, draw: 20, opp: 14 } },
    { date: "2026-12-08T20:00:00Z", comp: "UCL", opponent: "RB Leipzig", venue: "H", winProb: { mu: 49, draw: 23, opp: 28 } },
    { date: "2026-12-13T19:00:00Z", comp: "PL", opponent: "Crystal Palace", venue: "A", winProb: { mu: 46, draw: 25, opp: 28 } },
    { date: "2026-12-20T16:30:00Z", comp: "PL", opponent: "Arsenal", venue: "A" },
    { date: "2026-12-27T16:30:00Z", comp: "PL", opponent: "Nottingham Forest", venue: "H" },
    { date: "2026-12-30T19:30:00Z", comp: "PL", opponent: "Sunderland", venue: "H" },
    { date: "2027-01-02T12:30:00Z", comp: "PL", opponent: "Brighton & Hove Albion", venue: "A" },
    { date: "2027-01-07T20:00:00Z", comp: "PL", opponent: "Newcastle United", venue: "H" },
    { date: "2027-01-20T20:00:00Z", comp: "UCL", opponent: "Bayern Munich", venue: "H", winProb: { mu: 24, draw: 21, opp: 55 } },
    { date: "2027-01-27T20:00:00Z", comp: "UCL", opponent: "Villarreal", venue: "A", winProb: { mu: 41, draw: 24, opp: 35 } }
  ],
  seasonPhysical: {
    topSpeed: { player: "Mbeumo", kmh: 35.4, source: "FotMob (9-р сарын сүүл)" },
    note: "Тоглогч тус бүрийн гүйлтийн мэдээг FotMob-ын өгөгдлөөс нийтэлсэн нийтлэлүүдээс авсан тул зөвхөн нийтлэгдсэн тоглогчдынх байна."
  }
};
