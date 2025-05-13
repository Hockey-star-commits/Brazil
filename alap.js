



















//Látványosságok
const latvanyossagok = [
    {
      nev: "Cristo Redentor",
      erdekesseg: "A Megváltó Krisztus szobra (Cristo Redentor) Rio de Janeiro jelképévé vált. 1931-ben avatták fel, és 30 méter magas, a talapzattal együtt pedig eléri a 38 métert. A szobor a Corcovado-hegy tetején áll, 710 méterrel a tengerszint felett, és kitárt karjaival mintegy védelmezően öleli át a várost. A szobor a világ új 7 csodájának egyike, és évente több mint 2 millió látogató keresi fel.",
      kep: "kepek/cristo_redentor.jpg"
    },
    {
      nev: "Iguazú-vízesés",
      erdekesseg: "Az Iguazú-vízesés Brazília és Argentína határán található, és a világ egyik leglenyűgözőbb természeti csodája. A vízesésrendszer 2,7 km hosszú, több mint 270 különálló vízesésből áll, és némelyik eléri a 80 méteres magasságot is. Az egyik legismertebb része az 'Ördög torka' (Garganta do Diabo), amely egy patkó alakú, zúgó sziklaszoros. A helyszínt az UNESCO világörökség részévé nyilvánították, és sűrű esőerdők veszik körül, melyek számos ritka állatfajnak adnak otthont.",
      kep: "kepek/iguazu.jpg"
    },
    {
      nev: "Amazonas esőerdő",
      erdekesseg: "Az Amazonas esőerdő a Föld legnagyobb trópusi esőerdeje, amely 9 országon terül el, de legnagyobb része Brazíliában található. Több mint 5,5 millió km² területű, és a világ egyik legfontosabb ökoszisztémája. A régióban több mint 390 milliárd fa található, és az ismert növény- és állatfajok tízezreit rejti. Számos őslakos törzs él itt, akik a mai napig hagyományos módon élnek. Az esőerdő hatalmas szerepet játszik a globális oxigéntermelésben és a klímaszabályozásban is.",
      kep: "kepek/amazonas.jpg"
    },
    {
      nev: "Copacabana strand",
      erdekesseg: "A Copacabana strand Rio de Janeiro déli részén húzódik, és a világ egyik legismertebb városi strandja. A 4 kilométer hosszú, félhold alakú partszakaszt finom, fehér homok borítja, és a Sziklás-hegység, illetve modern felhőkarcolók szegélyezik. Napközben fürdőzőkkel és napozókkal van tele, este pedig pezsgő éjszakai élet veszi át a helyét. A strand híres a szilveszteri tűzijátékairól, valamint nemzetközi sportesemények – például a FIFA világbajnokság és az olimpia – egyes rendezvényeiről is.",
      kep: "kepek/copacabana.jpg"
    },
    {
      nev: "Sugarloaf-hegy (Pão de Açúcar)",
      erdekesseg: "A Pão de Açúcar, vagyis Sugarloaf-hegy Rio egyik legismertebb természeti látványossága, amely 396 méter magasan emelkedik a Guanabara-öböl fölé. Nevét cukorsüveg alakjáról kapta. A csúcsra két szakaszos drótkötélpályával lehet feljutni, ami már önmagában is lenyűgöző élmény. A kilátás a tetejéről lélegzetelállító: teljes panoráma nyílik Rio városára, a Copacabanára, a Krisztus-szoborra, sőt, tiszta időben még a Tijuca-erdő is jól látható. A hegy a hegymászók körében is népszerű célpont.",
      kep: "kepek/sugarloaf.jpg"
    }
  ];

  const selectElem = document.getElementById('latvanyossagSelect');
    latvanyossagok.forEach((hely, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.text = hely.nev;
      selectElem.appendChild(option);
    });

    function megjelenitLatvanyossag() {
        const index = document.getElementById('latvanyossagSelect').value;
        const hely = latvanyossagok[index];
        const eredmenyDiv = document.getElementById('eredmeny');
        eredmenyDiv.innerHTML = `
        
        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                <h3>${hely.nev}</h3>
                <p id="latvJSONleiras">${hely.erdekesseg}</p>
                </div>
                <div class="col-9">
                <img id="latvJSONkep" src=\"${hely.kep}\" alt=\"${hely.nev}\">
                </div>
            </div>
        </div>
          
        `;
      }