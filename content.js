var all_quotes = [
  {
    text: "Tot ce este minunat e greu și rar.",
    source: "Baruch Spinoza",
    tags: ["viață", "caracter"],
    published: "2021-09-01"
  },
  {
    text: "Sănătatea și veselia se hrănesc una pe cealaltă.",
    source: "Joseph Addison",
    tags: ["sănătate", "bucurie", "fericire"],
    published: "2021-08-31"
  },
  {
    text: "Iubește-i pe toți, încrede-te în cei aleși, nu fă nimănui rău.",
    source: "William Shakespeare",
    tags: ["iubire", "bine", "încredere", "caracter", "viață"],
    published: "2021-08-30"
  },
  {
    text: "Nu e pe lume prieten mai dulce decât cartea.",
    source: "Ali Șir Nevai",
    tags: ["citit", "cărți"],
    published: "2021-08-29"
  },
  {
    text: "Când inima se veselește, chipul înflorește.",
    source: "Vasile cel Mare",
    tags: ["bucurie", "fericire"],
    published: "2021-08-28"
  },
  {
    text: "Tot ce știm e limitat, iar ce nu știm e nelimitat.",
    source: "Apuleius",
    tags: ["cunoaștere", "știință"],
    published: "2021-08-27"
  },
  {
    text: "Oamenii trec, exemplele rămân.",
    source: "Tacit",
    tags: ["caracter", "viață"],
    published: "2021-08-26"
  },
  {
    text: "Zilele nu trebuie numărate, ci cântărite.",
    source: "Pliniu cel Bătrân",
    tags: ["viață"],
    published: "2021-08-25"
  },
  {
    text: "Nu se obține ușor victoria împotriva acelora care sunt gata să se sacrifice.",
    source: "Marcus  Annaeus Lucanus",
    tags: ["victorie", "caracter"],
    published: "2021-08-24"
  },
  {
    text: "Adevăratul curaj nu constă în a disprețui moartea, ci în a lupta împotriva nenorocirilor.",
    source: "Seneca cel Tânăr",
    tags: ["curaj", "moarte"],
    published: "2021-08-23"
  },
  {
    text: "Viața este lungă dacă este plină. O vom măsura prin fapte, și nu prin durată.",
    source: "Seneca cel Tânăr",
    tags: ["viață"],
    published: "2021-08-22"
  },
  {
    text: "Bunăvoința reciprocă e cea mai apropiată formă de rudenie.",
    source: "Publius Syrus",
    tags: ["bunăvoință", "caracter"],
    published: "2021-08-21"
  },
  {
    text: "Tot ce e făcut nu poate deveni nefăcut.",
    source: "Plaut",
    tags: ["viață"],
    published: "2021-08-20"
  },
  {
    text: "Adaugă grijilor un strop de bucurie.",
    source: "Cato cel Bătrân",
    tags: ["bucurie", "viață"],
    published: "2021-08-19"
  },
  {
    text: "Dacă vrei să fii credincios înconjoară-te de prieteni credincioși.",
    source: "Meneandru",
    tags: ["credință"],
    published: "2021-08-18"
  },
  {
    text: "Ce e comun pentru toți? Speranța. Ea există și la cei care nu mai au nimic.",
    source: "Tales din Milet",
    tags: ["speranță"],
    published: "2021-08-17"
  },
  {
    text: "Nu da sfaturi plăcute tuturor, ci utile tuturor.",
    source: "Solon din Atena",
    tags: ["viață"],
    published: "2021-08-17"
  },
  {
    text: "În chestiunile importante nu poți fi pe placul tuturor.",
    source: "Solon din Atena",
    tags: ["viață"],
    published: "2021-08-17"
  },
  {
    text: "Ce este libertatea? O conștiință curată.",
    source: "Periandru din Corint",
    tags: ["libertate", "caracter"],
    published: "2021-08-15"
  },
  {
    text: "Ce este libertatea? O conștiință curată.",
    source: "Periandru din Corint",
    tags: ["libertate", "caracter"],
    published: "2021-08-15"
  },
  {
    text: "Fii conștient de timp.",
    source: "Hesiod",
    tags: ["timp", "viață"],
    published: "2021-08-15"
  },
  {
    text: "Dacă un lucru poate fi demonstrat prin fapte, atunci nu are rost să faci risipă de cuvinte.",
    source: "Esop",
    tags: ["viață", "vorbire"],
    published: "2021-08-15"
  },
  {
    text: "Nefericit e acela care nu poate suporta nefericirea.",
    source: "Bias din Priene",
    tags: ["nefericire", "viață"],
    published: "2021-08-10"
  },
  {
    text: "Tot ce am, eu port cu mine.",
    source: "Bias din Priene",
    tags: ["caracter", "bogăție"],
    published: "2021-08-10"
  },
  {
    text: "E mai bine să lămurești o ceartă între doi dușmani decât între doi prieteni, fiindcă se știe că după aceasta unul dintre prieteni îți va deveni dușman, iar unul dintre dușmani - prieten.",
    source: "Bias din Priene",
    tags: ["ceartă", "vorbire", "prietenie"],
    published: "2021-08-10"
  },
  {
    text: "Care e cel mai bun sfetnic? Timpul.",
    source: "Bias din Priene",
    tags: ["timp"],
    published: "2021-08-10"
  },
  {
    text: "Cucerește prin convingere, nu prin forță.",
    source: "Bias din Priene",
    tags: ["victorie", "cucerire"],
    published: "2021-08-10"
  },
  {
    text: "Învinge-te pe tine însuți - iată cel mai bun leac pentru a fi neînfrânt.",
    source: "Citate din lumea antică",
    tags: ["caracter"],
    published: "2021-08-09"
  },
  {
    text: "Există o singură cale - calea adevărului, toate celelalte nu sunt căi.",
    source: "Citate din lumea antică",
    tags: ["adevăr"],
    published: "2021-08-09"
  },
  {
    text: "Nu există prieten comparabil cu sănătatea; nu există dușman comparabil cu boala.",
    source: "Citate din lumea antică",
    tags: ["sănătate"],
    published: "2021-08-09"
  },
  {
    text: "Mai bine o clipă trăită după lege, decât un milion de ani de viață nelegiuită.",
    source: "Citate din lumea antică",
    tags: ["viață", "dreptate"],
    published: "2021-08-09"
  },
  {
    text: "Acela care nu răspunde cu mânie la mânie, salvează doi deodată - și pe sine și pe celălalt.",
    source: "Citate din lumea antică",
    tags: ["mânie"],
    published: "2021-08-09"
  },
  {
    text: "Rana făcută de săgeată se vindecă, pădurea tăiată de topor se înalță la loc, dar rana făcută de vorba urâtă e fără leac.",
    source: "Citate din lumea antică",
    tags: ["vorbire"],
    published: "2021-08-09"
  },
  {
    text: "Trăiește la tinerețe în așa fel încât să fii fericit la bătrânețe.",
    source: "Citate din lumea antică",
    tags: ["viață", "tinerețe", "bătrânețe", "fericire"],
    published: "2021-08-09"
  },
  {
    text: "Dacă ți se întâmplă să auzi o vorbă urâtă, îngroap-o în pământ la o adâncime de șapte coți.",
    source: "Citate din lumea antică",
    tags: ["vorbire", "auz"],
    published: "2021-08-09"
  },
  {
    text: "Cel impulsiv nu va cunoaște niciodată adevărul.",
    source: "Citate din lumea antică",
    tags: ["adevăr"],
    published: "2021-08-09"
  },
  {
    text: "O ceartă fără motiv - iată semnul prostiei.",
    source: "Citate din lumea antică",
    tags: ["ceartă", "vorbire", "prostie"],
    published: "2021-08-09"
  },
  {
    text: "Acela ce veghează și ia seama la inima sa și la limba sa, doarme fără grijă.",
    source: "Papirus Insinger, XXI, 14",
    tags: ["inimă", "vorbire", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Nu te supăra pe acela care este peste măsură încărcat cu treburi.",
    source: "Învățăturile lui Ptahhotep, 389",
    tags: ["supărare", "treburi", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Este mai bine să mori în lipsuri, decât să trăiești lipsit de rușine.",
    source: "Papirus Insinger, XXVII, 3",
    tags: ["rușine", "viață", "moarte", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Fii plin de răbdare în timpul în care vorbești.",
    source: "Învățăturile lui Ptahhotep, 597",
    tags: ["răbdare", "vorbire", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Povestește cele ce ai văzut și nu cele ce ai auzit.",
    source: "Învățăturile lui Ptahhotep, 353",
    tags: ["vorbire", "văz", "auz", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Fii un om liniștit și pașnic și vei găsi viața. Trupul tău va înflori pe pământ.",
    source: "Învățăturile lui Amen-em-ope, III",
    tags: ["liniște", "pace", "viață", "egiptenii-antici"],
    published: "2021-07-29"
  },
  ,{
    text: "Din pieptul tău alungă îngrijorarea.",
    source: "Inscripție pe mormântul lui Taimhotep",
    tags: ["îngrijorare", "viață", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Iertarea sporește prietenia",
    source: "Povestea țăranului bun de gură",
    tags: ["iertare", "prietenie", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Nu lăsa să stea în inima ta grija care lovește inima.",
    source: "Papirus Insinger, XX, 7",
    tags: ["inimă", "liniște", "îngrijoare", "egiptenii-antici"],
    published: "2021-07-29"
  },
  {
    text: "Întărește adevărul și dreptatea în copiii tăi.",
    source: "Învățăturile lui Ptahhotep, 597",
    tags: ["adevăr", "dreptate", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Respectă adevărul și nu trece peste el.",
    source: "Învățăturile lui Ptahhotep, 151",
    tags: ["adevăr", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Glasul tău să nu fie aspru, nu vorbi din toată tăria limbii tale.",
    source: "Papirus Insinger, XXII, 10",
    tags: ["vorbire", "blândețe", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Mai bună este pâinea mâncată cu inima fericită, decât avuție cu mâhnire.",
    source: "Învățăturile lui Amen-em-Ope, IV",
    tags: ["fericire", "viață", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Nu se poate ști ce este în inima omului.",
    source: "Povestea țăranului bun de gură",
    tags: ["inimă", "om", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Nu te simți deznădăjduit în lume când ești slab și lipsit, căci acela ce este slab poate să fie tare din nou.",
    source: "Papirus Insinger, XIX, 16-17",
    tags: ["încurajare", "motivație", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Nu răspunde la bine prin rău.",
    source: "Povestea țăranului bun de gură",
    tags: ["bine", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "Firea blândă și bună a unui om ales îi este de mare folos.",
    source: "Învățăturile lui Ptahhotep, 493",
    tags: ["blândețe", "bunătate", "egiptenii-antici"],
    published: "2021-07-28"
  },
  {
    text: "O fire blândă va lăsa o amintire fericită în lume.",
    source: "Învățăturile lui Ptahhotep, 494",
    tags: ["blândețe", "egiptenii-antici"],
    published: "2021-07-28"
  },
];
