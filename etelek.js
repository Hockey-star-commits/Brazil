// Ételek tömbje: ez tartalmaz minden információt
const etelek = [
  {
    nev: "Feijoada",
    leiras: "Babos, fűszeres egytálétel különféle sertéshúsokkal.",
    kep: "kepek/feijoada.jpg",
    recept: "Feijoada (Feketebabos húsragu)\nHozzávalók:\n- 500 g fekete bab\n- 300 g füstölt kolbász (karikázva)\n- 300 g sertéslapocka (kockázva)\n- 1 vöröshagyma (finomra vágva)\n- 3 gerezd fokhagyma (zúzva)\n- 2 babérlevél\n- Só, bors ízlés szerint\n- Víz főzéshez\n- Olaj a pirításhoz\nElkészítés:\n1. A babot áztassuk be éjszakára hideg vízbe.\n2. Másnap öntsük le róla a vizet, majd friss vízzel és a babérlevéllel tegyük fel főni.\n3. Egy serpenyőben kevés olajon pirítsuk meg a hagymát, fokhagymát, majd adjuk hozzá a kolbászt és a húst, pirítsuk át.\n4. Ha a bab félig megfőtt, adjuk hozzá a húsos keveréket, és főzzük tovább együtt, amíg minden puha nem lesz.\n5. Ízesítsük sóval, borssal.\n6. Tálaljuk rizzsel, pirított káposztával és narancsgerezdekkel."
  },
  {
    nev: "Farofa",
    leiras: "Pirított maniókaliszt köret, gyakran húsételek mellé.",
    kep: "kepek/farofa.jpg",
    recept: "Farofa (Pirított maniókaliszt köret)\nHozzávalók:\n- 200 g maniókaliszt\n- 1 hagyma (apróra vágva)\n- 2 evőkanál vaj\n- Só ízlés szerint\nElkészítés:\n1. Egy serpenyőben olvasszuk meg a vajat, dinszteljük meg benne a hagymát.\n2. Adjuk hozzá a maniókalisztet, és közepes lángon folyamatos keverés mellett pirítsuk aranybarnára.\n3. Ízesítsük sóval.\n4. Tálaljuk húsok mellé köretként."
  },
  {
    nev: "Moqueca de Camarão",
    leiras: "Rákos egytálétel kókusztejjel és pálmaolajjal.",
    kep: "kepek/moqueca.jpg",
    recept: "Moqueca (Brazíl halragu kókusztejjel)\nHozzávalók:\n- 500 g fehér húsú hal (pl. tőkehal)\n- 1 lime leve\n- 2 gerezd fokhagyma (zúzva)\n- 1 hagyma (karikázva)\n- 1 piros kaliforniai paprika (csíkokra vágva)\n- 2 paradicsom (karikázva)\n- 200 ml kókusztej\n- 1 evőkanál pálmaolaj (vagy olívaolaj)\n- Friss koriander\n- Só, bors ízlés szerint\nElkészítés:\n1. A halszeleteket locsoljuk meg lime-lével, sózzuk, borsozzuk, és hagyjuk pácolódni 30 percet.\n2. Egy nagy serpenyőben rétegezzük a hagymát, paprikát, paradicsomot, halat, majd öntsük rá a kókusztejet.\n3. Locsoljuk meg pálmaolajjal, szórjuk meg korianderrel.\n4. Lefedve, közepes lángon főzzük kb. 20 percig, amíg a hal megfő.\n5. Párolt rizzsel tálaljuk."
  },
  {
    nev: "Vatapá",
    leiras: "Krémes étel garnélával, kókusztejjel és kenyérrel.",
    kep: "kepek/vatapa.jpg",
    recept: "Vatapá (Kenyérkrémes tenger gyümölcsei szósz)\nHozzávalók:\n- 3 zsemle (tejbe áztatva)\n- 200 ml kókusztej\n- 100 g földimogyoró (őrölve)\n- 100 g kesudió (őrölve)\n- 2 evőkanál garnélapaszta\n- 1 hagyma\n- 1 gerezd fokhagyma\n- 2 evőkanál pálmaolaj\nElkészítés:\n1. A beáztatott zsemlét pépesítsük, majd adjuk hozzá a kókusztejet, magokat, hagymát, fokhagymát és garnélapasztát.\n2. Egy serpenyőben melegítsük fel a pálmaolajat, és főzzük benne sűrű krémmé a masszát, gyakori keverés mellett.\n3. Tálaljuk főtt rizzsel vagy sült hallal."
  },
  {
    nev: "Acarajé",
    leiras: "Olajban sült babgombóc garnélával töltve.",
    kep: "kepek/acaraje.jpg",
    recept: "Acarajé (Babos fánk rákos töltelékkel)\nHozzávalók:\n- 250 g hántolt fekete szemű bab\n- 1 hagyma (reszelve)\n- Só, bors\n- Pálmaolaj (vagy napraforgóolaj) a sütéshez\nTöltelékhez:\n- 200 g főtt apró rák\n- 1 hagyma\n- Pálmaolaj\n- Fűszerek (chili, koriander)\nElkészítés:\n1. A babot áztassuk be, majd dörzsöljük le a héját, és pépesítsük hagymával.\n2. Sózzuk, formáljunk kanálnyi adagokat, és süssük forró olajban aranybarnára.\n3. A töltelékhez dinszteljük meg a hagymát, adjuk hozzá a rákot, fűszereket, pálmaolajat.\n4. A fánkokat vágjuk be, töltsük meg a rákos keverékkel."
  },
  {
    nev: "Pastel",
    leiras: "Olajban sült tésztabatyu különféle töltelékekkel.",
    kep: "kepek/pastel.jpg",
    recept: "Pastel (Töltött tésztabatyu különféle töltelékekkel)\nTésztához:\n- 3 csésze finomliszt (plusz egy kevés a nyújtáshoz)\n- 1 evőkanál só (vagy ízlés szerint)\n- 1 csésze meleg víz\n- 1 evőkanál étolaj\n- 1 evőkanál fehérborecet\n- 1 evőkanál cachaça (vagy rum)\n- Olaj a sütéshez\nDarált húsos töltelékhez:\n- 2 evőkanál olívaolaj\n- 1 kis fej hagyma (apróra vágva)\n- 2 gerezd fokhagyma (finomra zúzva)\n- 225 g darált marhahús\n- Só, frissen őrölt bors ízlés szerint\n- 1/3 csésze olívabogyó (szeletelve)\n- 1/3 csésze petrezselyem (apróra vágva)\nKrémes pálmaszíves töltelékhez:\n- 1 evőkanál olívaolaj\n- 2 evőkanál vaj\n- 1 kis fej hagyma (apróra vágva)\n- 2 gerezd fokhagyma (finomra zúzva)\n- 1/4 csésze liszt\n- 1 csésze tej\n- 1/2 csésze paradicsomszósz\n- 400 g konzerv pálmaszív (durvára vágva)\n- 1/3 csésze olívabogyó (apróra vágva)\n- Só, bors ízlés szerint\n- 1/4 csésze petrezselyem (apróra vágva)\nSajtos töltelékhez:\n- 225 g sajt (mozzarella, cheddar, provolone vagy ízlés szerinti sajt, szeletelve vagy kockázva)\nElkészítés – Tészta:\n1. Egy nagy tálban keverd össze a lisztet és a sót. A közepébe készíts mélyedést, és öntsd bele a vizet, olajat, ecetet és cachaçát.\n2. Kézzel gyúrd össze, majd borítsd lisztezett felületre, és gyúrd simára, amíg már nem ragad.\n3. Takard le konyharuhával, és pihentesd 30 percig.\nDarált húsos töltelék:\n1. Serpenyőben, közepes lángon, olajon dinszteld meg a hagymát és fokhagymát 2 percig.\n2. Add hozzá a darált húst, és pirítsd, először nagyobb darabokra hagyva, hogy lepiruljon.\n3. Ne kevergesd folyamatosan, így a nedvesség elpárolog és a hús megpirul.\n4. Amikor a hús szépen megpirult, fűszerezd, majd keverd hozzá az olívabogyót és a petrezselymet. Tedd félre.\nKrémes pálmaszíves töltelék:\n1. Egy serpenyőben melegítsd fel az olajat és a vajat. Dinszteld meg a hagymát és a fokhagymát.\n2. Add hozzá a lisztet, majd fokozatosan a tejet, és keverd csomómentesre, amíg besűrűsödik.\n3. Add hozzá a paradicsomszószt, pálmaszívet és olívabogyót, ízesítsd. Végül keverd bele a petrezselymet. Tedd félre.\nÖsszeállítás:\n1. Oszd ketté a tésztát. Az egyik felét nyújtsd ki vékonyra (kb. 23×30 cm).\n2. Szaggass belőle kb. 10 cm-es köröket, vagy vágd téglalapokra.\n3. Tegyél a közepére egy adag tölteléket (vagy sajtot), majd hajtsd félbe, nyomd le a széleket, és villával zárd le.\n4. Ismételd meg a másik tésztarésszel.\n5. Forrósíts fel bő olajat kb. 175°C-ra, és süsd a pastel-eket aranybarnára, kb. 2 perc alatt.\n6. Papírtörlőn lecsepegtetve, forrón tálald."
  },
  {
    nev: "Empadão",
    leiras: "Tésztában sült rakott egytálétel, leggyakrabban csirkével.",
    kep: "kepek/empadao.jpg",
    recept: "Empadão (Brazíliai csirkés pite)\nTöltelékhez:\n- 2 evőkanál olívaolaj\n- 2 közepes hagyma (apróra vágva)\n- 2 gerezd fokhagyma (összezúzva)\n- 2 paradicsom (felkockázva)\n- 900 g csirkemell (főzve, majd szálakra szedve)\n- 1/2 csésze zöld olívabogyó (apróra vágva)\n- 1 csésze kukorica (opcionális)\n- 1 csésze zöldborsó (opcionális)\n- 1 csésze pálmaszív (apróra vágva, opcionális)\n- 1 csésze paradicsomszósz\n- Néhány csepp csípős szósz\n- 2 csésze csirkehúsleves\n- 1 evőkanál liszt, 1/3 csésze tejben elkeverve\n- 1/2 csésze friss petrezselyem (apróra vágva)\n- Só és bors ízlés szerint\nTésztához:\n- 5 csésze liszt\n- 1 teáskanál só\n- 3 tojássárgája\n- 1/4–1/2 csésze hideg víz\n- 3 rúd vaj (340 g), kisebb darabokra vágva\n- 1 tojássárgája (kenéshez)\nElkészítés – Töltelék:\n1. Egy nagy serpenyőben melegítsd fel az olívaolajat közepes lángon. Dinszteld meg a hagymát és fokhagymát 2 percig.\n2. Add hozzá a paradicsomot, és főzd pár percig, amíg megpuhul.\n3. Add hozzá a csirkét, olívabogyót, kukoricát, borsót, pálmaszívet, paradicsomszószt és csípős szószt, majd keverd össze.\n4. Öntsd hozzá a csirkelevest és a lisztes tejet, majd főzd közepes-alacsony lángon 10 percig, míg a töltelék besűrűsödik.\n5. Add hozzá a petrezselymet, sózd, borsozd, majd hagyd teljesen kihűlni.\nElkészítés – Tészta:\n1. Egy nagy tálban keverd össze a lisztet és sót.\n2. Add hozzá a tojássárgákat, majd keverd fakanállal.\n3. Add hozzá a vajat, és kézzel morzsold el, míg homokos állagú nem lesz.\n4. Fokozatosan add hozzá a vizet, amíg összeáll a tészta. (Nem kell mindet hozzáadni!)\n5. Csomagold fóliába, és tedd a hűtőbe 20 percre.\nÖsszeállítás:\n1. Melegítsd elő a sütőt 175°C-ra.\n2. Vágd le a tészta 1/3-át, és tedd félre. A maradékot nyújtsd ki kb. 30 cm átmérőjű körre.\n3. Bélelj ki egy 23 cm-es kapcsos tortaformát a tésztával, úgy, hogy az oldalát is fedje. Szurkáld meg villával.\n4. Töltsd bele a kihűlt tölteléket, és simítsd el.\n5. A félretett tésztát is nyújtsd ki, és takard be vele a pitét. Nyomkodd le a széleket, zárd le.\n6. Vágj két kis nyílást a tetejére, hogy a gőz távozhasson.\n7. Kend meg a tetejét tojássárgájával.\n8. Süsd 25–35 percig, míg aranybarna nem lesz és a töltelék forró.\n9. Hűtsd pár percig, majd tálald."
  },
  {
    nev: "Bolinho de Bacalhau",
    leiras: "Tőkehalból készült sós, rántott golyók.",
    kep: "kepek/bolinho.jpg",
    recept: "Bolinho de Bacalhau (Tőkehalas fánk)\nHozzávalók:\n- 500 g főtt, sózott tőkehal (bőr és szálkák eltávolítva)\n- 1 kg burgonya\n- 1 közepes hagyma\n- 1 gerezd fokhagyma\n- 3 evőkanál aprított petrezselyem\n- 2 tojássárgája\n- 1 tojásfehérje (szükség esetén)\n- Só\n- Fekete bors\nElkészítés:\n1. Áztasd be a tőkehalat hideg vízbe 24 órára, hűtőben, és cseréld a vizet 6 óránként.\n2. Forralj vizet, és blansírozd a tőkehalat alacsony lángon 10–15 percig. Hagyd a főzővízben kihűlni, hogy ne száradjon ki. A halat szedd szét, távolítsd el a bőrt és szálkákat.\n3. A tőkehal főzővizében főzd meg a meghámozott burgonyát, amíg megpuhul.\n4. A főtt burgonyát krumplinyomón törd át egy tálba.\n5. Az apróra vágott hagymát és fokhagymát kevés olívaolajon pirítsd meg. (A hagyományos recept nyers hagymát használ, de az nehezítheti a textúrát.)\n6. Add hozzá a finomra vágott tőkehalat, a megpirított hagymát, petrezselymet, fekete borsot, áttört burgonyát és tojássárgáját. Jól keverd el. A massza legyen száraz, de puha. Ha túl száraz, adj hozzá egy tojásfehérjét. Ízlés szerint sózd.\n7. Olajos kézzel formázz golyókat, kroketteket, vagy két kanál segítségével készíts hosszúkás formákat.\n8. Forró olajban süsd ki adagonként, míg aranybarnák nem lesznek. (A hőfokot úgy ellenőrizheted, hogy egy fogpiszkálót teszel az olajba – ha buborékok képződnek, megfelelő.)\n9. Ha szeretnéd, a kroketteket beleforgathatod lisztbe vagy zsemlemorzsába.\n10. Papírtörlőre szedve itasd le a felesleges olajat, és tálald forrón."
  },
  {
    nev: "Pão de queijo",
    leiras: "Sajtos maniókalisztes pufók zsemle.",
    kep: "kepek/pao.jpg",
    recept: "Pão de queijo (Brazil sajtos puffancs)\nHozzávalók:\n- 2 bögre tápiókaliszt\n- 2 db tojás\n- 2.5 dl tej\n- 1.8 dl napraforgóolaj\n- 2 kávéskanál só\n- 10 dkg parmezán sajt\nElkészítés:\n1. Melegítsük elő a sütőt 220 fokra.\n2. A tejet, sót és olajat egy nagyobb lábasban összeforraljuk. Amint a tej elkezd buborékozni, azonnal levesszük a tűzről.\n3. Folyamatos keverés mellett hozzáadjuk a tápiókalisztet. (Fakanál ajánlott, nem habverő.)\n4. Egy ragacsos, nyúlós, de sűrű masszát kell kapnunk.\n5. A tojásokat felverjük, és fokozatosan belekeverjük a masszába. Ha van, használjunk dagasztógépet.\n6. Ha a tojásokat is felvette a tészta, hozzáadjuk a finomra reszelt sajtot.\n7. Vizes kézzel diónyinál kissé nagyobb gombócokat formázunk belőle, és sütőpapírral borított tepsire rakjuk.\n8. A tepsit betesszük a sütőbe, majd a hőfokot rögtön 175 fokra mérsékeljük.\n9. 25–30 percig sütjük, amíg aranybarna lesz, kívül ropogós, belül üreges és nyúlós.\n10. Langyosra hűtjük, majd azonnal fogyasztjuk. A maradékot légmentesen záródó dobozban tárolhatjuk pár napig."
  },
  {
    nev: "Picanha",
    leiras: "A brazilok kedvenc marhahúsrésze, grillezve.",
    kep: "kepek/picanha.jpg",
    recept: "Picanha (Grillezett brazil hátszín)\nHozzávalók:\n- 1.4 – 1.8 kg picanha marhahús (top sirloin cap)\n- 1 evőkanál + 2 teáskanál Steak King fűszerkeverék\nElkészítés:\n1. Vedd ki a húst a hűtőből 1 órával sütés előtt.\n2. Helyezd a húsdarabot vágódeszkára a zsíros oldalával felfelé. Éles késsel 1–1,5 cm-es rácsmintában vagdosd be a zsírréteget (ne vágj bele a húsba).\n3. Sózd, borsozd vagy fűszerezd meg mindkét oldalát Steak King keverékkel.\n4. Vágd hosszában három egyenlő csíkra a húst.\n5. Minden csíkot formálj „C” alakúra úgy, hogy a zsíros oldal kívülre kerüljön, majd húzd nyársra.\n6. A deszkán maradt fűszerekkel forgasd be a nyársak oldalát is, vagy ha szükséges, szórj rájuk még.\n7. Hagyd szobahőmérsékleten pácolódni, amíg előkészíted a grillt.\n8. Készíts elő két zónás grillsütést: egy forró zónát direkt hővel, és egy kevésbé forrót indirekt sütéshez. Tisztítsd és olajozd be a grillrácsot.\n9. Amikor a parázs izzik és szürkés hamu borítja, helyezd a nyársakat a direkt hő fölé. Forgasd és mozgasd őket 5 percenként az egyenletes átsülés érdekében.\n10. Addig süsd, amíg a belső hőmérséklet eléri az 52–54 °C-ot (medium rare).\n11. Pihentesd legalább 5 percig, mielőtt levágod a nyársról. Vágd keresztbe a rostokra, és tálald azonnal."
  }
];

// HTML elemek változói
const kartyakTarolo = document.getElementById("etel-kartyak");
const receptDoboz = document.getElementById("recept-megjelenito");

// Függvény kártyák generálásához
function letrehozKartya(etel) {
  const kartya = document.createElement("div");
  kartya.className = "kartya";

  kartya.innerHTML = `
    <img src="${etel.kep}" alt="${etel.nev}">
    <div class="szoveg">
      <h4>${etel.nev}</h4>
      <p>${etel.leiras}</p>
    </div>
  `;

  // Kattintásra megjelenik alul a részletes recept
  kartya.addEventListener("click", () => {
    receptDoboz.innerHTML = `
      <div class="clearfix">
        <img src="${etel.kep}" alt="${etel.nev}">
        <h2>${etel.nev}</h2>
        <p>${etel.recept}</p>
      </div>
    `;
    receptDoboz.style.display = "block";
    receptDoboz.scrollIntoView({ behavior: "smooth" });
  });

  return kartya;
}

// Kétszer tesszük be a kártyákat a végtelen scroll trükkhöz
[...etelek, ...etelek].forEach(etel => {
  const ujKartya = letrehozKartya(etel);
  kartyakTarolo.appendChild(ujKartya);
});
