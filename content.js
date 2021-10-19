var all_quotes = [
  {
    text: "Dacă timpul ar fi avut frunze, ce toamnă!",
    source: "Nichita Stănescu",
    tags: ["toamnă", "timp", "viață"],
    published: "2021-10-19"
  },
  {
    text: "Nu fi tu însuți, fii cineva puțin mai bun.",
    source: "Mignon McLaughlin",
    tags: ["bunătate", "caracter"],
    published: "2021-10-18"
  },
  {
    text: "Mergi acolo unde te simți cel mai viu.",
    source: "Anonim",
    tags: ["natură"],
    published: "2021-10-17"
  },
  {
    text: "Muzica este un răspuns căruia nu i s-a pus nici o întrebare.",
    source: "Nichita Stănescu",
    tags: ["muzică"],
    published: "2021-10-15"
  },
  {
    text: "Când faci o alegere, schimbi viitorul.",
    source: "Robin Sharma",
    tags: ["viață", "alegere", "viitor"],
    published: "2021-10-14"
  },
  {
    text: "Toamna este primăvara iernii.",
    source: "Henri de Toulouse - Lautrec",
    tags: ["toamna"],
    published: "2021-10-13"
  },
  {
    text: "Împart umbrela mea cu alţii atunci când plouă, iar dacă nu am umbrelă, împart ploaia.",
    source: "Enrique Ernesto Febbraro",
    tags: ["ploaia"],
    published: "2021-10-12"
  },
  {
    text: "Nimeni să nu plece de la tine altfel decât mai liniștit și mai fericit decât a venit.",
    source: "Anonim",
    tags: ["fericire", "liniște", "caracter"],
    published: "2021-10-11"
  },
  {
    text: "Cel care nu citeşte cărţi bune nu are niciun avantaj în faţa celui care nu ştie să citească.",
    source: "Mark Twain",
    tags: ["cărți"],
    published: "2021-10-10"
  },
  {
    text: "Credința adevărată crede incredibilul, vede invizibilul și poate imposibilul.",
    source: "Lev Tolstoi",
    tags: ["credință"],
    published: "2021-10-09"
  },
  {
    text: "Ridurile ar trebui, pur şi simplu, să arate numai unde au fost zâmbete.",
    source: "Mark Twain",
    tags: ["bucurie", "fericire", "zâmbet"],
    published: "2021-10-08"
  },
  {
    text: "Răbdarea este tovarăşul de drum al înţelepciunii.",
    source: "Sf. Augustin",
    tags: ["răbdare"],
    published: "2021-10-07"
  },
  {
    text: "Bucuria înseamnă să poți râde pe dinăuntru.",
    source: "Melba Colgrove",
    tags: ["bucurie"],
    published: "2021-10-06"
  },
  {
    text: "Îmbracă o haină veche, dar cumpără o carte nouă.",
    source: "Austin Phelps",
    tags: ["cărți"],
    published: "2021-10-05"
  },
  {
    text: "Pleacă-ți urechea la vorba folositoare, chiar dacă vine de la un copil; nu asculta vorba urâtă, chiar dacă vine de la un bătrân.",
    source: "Înțelepții antici",
    tags: ["viață", "caracter", "vorbire"],
    published: "2021-10-04"
  },
  {
    text: "Întâmplările fericite aduc prieteni, cele triste îi pun la încercare.",
    source: "Publius Syrus",
    tags: ["prietenie", "viață", "caracter"],
    published: "2021-10-03"
  },
  {
    text: "Fă tot ce poți, cu ce ai, acolo unde ești.",
    source: "Theodore Roosevelt",
    tags: ["viață", "caracter"],
    published: "2021-10-02"
  },
  {
    text: "Muzica este stenografia sentimentelor.",
    source: "Lev Nikolaevici Tolstoi",
    tags: ["muzică"],
    published: "2021-10-01"
  },
  {
    text: "Fericirea e ca sănătatea: când n-o observi atunci înseamnă că există.",
    source: "Ivan Sergheievici Turgheniev",
    tags: ["fericire"],
    published: "2021-09-30"
  },
  {
    text: "Când tragi trebuie să ochești mai sus de țintă.",
    source: "Franz Kafka",
    tags: ["succes", "viață"],
    published: "2021-09-29"
  },
  {
    text: "O carte închisă este doar o bucată de hârtie.",
    source: "Anonim",
    tags: ["cărți"],
    published: "2021-09-28"
  },
  {
    text: "O carte e un dar pe care îl poţi deschide mereu şi mereu.",
    source: "Garrison Keillor",
    tags: ["cărți"],
    published: "2021-09-27"
  },
  {
    text: "Anii ne învață multe lucruri din ceea ce zilele nu știu.",
    source: "Ralph Waldo Emerson",
    tags: ["viață", "timp"],
    published: "2021-09-26"
  },
  {
    text: "Concizia este sora talentului.",
    source: "Anton Pavlovici Cehov",
    tags: ["caracter", "talent"],
    published: "2021-09-25"
  },
  {
    text: "În lumea aceasta ne face bogați nu ceea ce primim, ci ceea ce dăm.",
    source: "Henry Ward Beercher",
    tags: ["bogăție", "viață"],
    published: "2021-09-24"
  },
  {
    text: "Viața e ca un munte: îl urci încet, îl cobori repede.",
    source: "Guy De Maupassant",
    tags: ["viață"],
    published: "2021-09-23"
  },
  {
    text: "Dacă stelele se aprind, nu înseamnă asta că cineva are nevoie de ele?",
    source: "Vladimir Vladimirovici Maiakovski",
    tags: ["stele", "noapte", "lumină"],
    published: "2021-09-22"
  },
  {
    text: "Scopul adevărat al omului este acela de a trăi, nu de a exista.",
    source: "Jack London",
    tags: ["viață"],
    published: "2021-09-21"
  },
  {
    text: "Gol este omul care este plin de sine însuși.",
    source: "Mihail Lermontov",
    tags: ["caracter"],
    published: "2021-09-20"
  },
  {
    text: "Un copil care citeşte va fi un adult care gândeşte.",
    source: "Sasha Salmina",
    tags: ["cărți", "educație", "gândire"],
    published: "2021-09-19"
  },
  {
    text: "Nu poți cumpăra fericire, dar poți cumpăra cărți, ceea ce de fapt e același lucru.",
    source: "Autor necunoscut",
    tags: ["fericire", "cărți"],
    published: "2021-09-18"
  },
  {
    text: "Prost nu e acela care nu știe, ci acel care nu vrea să știe.",
    source: "Grigori Savvici Skovoroda",
    tags: ["prostie", "știință"],
    published: "2021-09-17"
  },
  {
    text: "Unii oameni sunt faimoși, alții merită să fie faimoși.",
    source: "Gotthold Ephraim Lessing",
    tags: ["viață", "caracter"],
    published: "2021-09-16"
  },
  {
    text: "Munca este cea mai bună metodă de a savura viața.",
    source: "Immanuel Kant",
    tags: ["muncă", "hărnicie", "viață"],
    published: "2021-09-15"
  },
  {
    text: "Limba este haina gândurilor.",
    source: "Samuel Johnson",
    tags: ["vorbire"],
    published: "2021-09-14"
  },
  {
    text: "Omul nu este altceva decât șirul faptelor sale.",
    source: "Georg Wilhelm Frierich Hegel",
    tags: ["om", "viață", "caracter"],
    published: "2021-09-13"
  },
  {
    text: "Pastila longevităţii – liniştea sufletească.",
    source: "Mihai Cucereavii",
    tags: ["liniște", "viață"],
    published: "2021-09-12"
  },
  {
    text: "Atunci când puterea dragostei va depăși dragostea de putere, în lume va fi pace.",
    source: "Jimi Hendrix",
    tags: ["pace", "iubire"],
    published: "2021-09-11"
  },
  {
    text: "În inima recunoscătoare va fi vară mereu.",
    source: "Celia Thaxter",
    tags: ["recunoștință", "caracter"],
    published: "2021-09-10"
  },
  {
    text: "Răbdarea este amară, dar fructele ei sunt dulci.",
    source: "Aristotel",
    tags: ["răbdare", "caracter"],
    published: "2021-09-09"
  },
  {
    text: "Bogăţia nu înseamnă avere, ci puterea de a renunţa la ea. Cu stil.",
    source: "Alexander von Schonburg",
    tags: ["bogăție", "caracter"],
    published: "2021-09-08"
  },
  {
    text: "Speranța este credința care ne ține de mână în întuneric.",
    source: "George Iles",
    tags: ["speranță", "credință"],
    published: "2021-09-07"
  },
  {
    text: "Oamenii sunt păsări cu aripile crescute înăuntru.",
    source: "Nichita Stănescu",
    tags: ["om", "viață"],
    published: "2021-09-06"
  },
  {
    text: "Fii bun de câte ori se poate. Și întotdeauna se poate.",
    source: "Dalai Lama",
    tags: ["caracter", "bunătate"],
    published: "2021-09-05"
  },
  {
    text: "Răspândește lumina, iar întunericul se va risipi de la sine.",
    source: "Erasmus",
    tags: ["caracter", "viață", "victorie"],
    published: "2021-09-04"
  },
  {
    text: "Timpul este materialul din care este făcută viața.",
    source: "Benjamin Franklin",
    tags: ["timp", "viață"],
    published: "2021-09-03"
  },
  {
    text: "Viziunea este arta de a vedea cele nevăzute.",
    source: "Jonathan Swift",
    tags: ["viziune"],
    published: "2021-09-02"
  },
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
