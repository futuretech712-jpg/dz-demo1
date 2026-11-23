/*
 * PRAVNI TEKSTOVI – Detailerz
 * Predlošci su napisani za ovu stranicu i nisu pravni savjet.
 * Prije objave popunite podatke u [UGLATIM ZAGRADAMA] i dajte tekst na pregled pravniku ili računovođi.
 */
window.LEGAL_TEXTS = (function () {
  const F = {
    naziv: '<span class="ph">[NAZIV OBRTA / D.O.O.]</span>',
    oib: '<span class="ph">[OIB]</span>',
    adresa: '<span class="ph">[ADRESA], 10000 Zagreb</span>',
    email: 'info@detailerz.hr',
    tel: '+385 91 000 0000'
  };
  const voditelj = `${F.naziv}, ${F.adresa}, OIB: ${F.oib}, e-mail: <a href="mailto:${F.email}">${F.email}</a>, tel.: ${F.tel}`;

  return {
    "pravila-privatnosti": {
      title: "Pravila privatnosti",
      html: `
<p>Ova pravila objašnjavaju koje osobne podatke prikupljamo kad koristite stranicu Detailerz ili naše usluge, zašto ih prikupljamo, koliko ih dugo čuvamo i koja su vaša prava. Podatke obrađujemo u skladu s Općom uredbom o zaštiti podataka (EU) 2016/679 (GDPR) i Zakonom o provedbi Opće uredbe o zaštiti podataka.</p>

<h4>1. Voditelj obrade</h4>
<p>${voditelj}.</p>

<h4>2. Koje podatke prikupljamo</h4>
<ul>
  <li><b>Podaci iz forme za upit i rezervaciju:</b> ime i prezime, broj telefona, e-mail adresa, marka i model vozila, veličina vozila, odabrana usluga, željeni datum, napomena i fotografije vozila ako ih pošaljete.</li>
  <li><b>Podaci iz narudžbe:</b> naručeni poklon bonovi i proizvodi, podaci za dostavu i račun.</li>
  <li><b>Prijava na obavijesti:</b> e-mail adresa kad se prijavite na listu za merch i proizvode.</li>
  <li><b>Komunikacija:</b> sadržaj poruka koje nam pošaljete e-mailom, telefonom ili WhatsAppom.</li>
  <li><b>Tehnički podaci:</b> podaci o uređaju i posjetu (npr. IP adresa, preglednik, posjećene stranice) koje bilježe nužni kolačići te, samo uz vašu privolu, analitički i marketinški kolačići.</li>
</ul>
<p>Na fotografijama vozila mogu biti vidljive registarske pločice. Ne objavljujemo ih bez vaše izričite privole, a na objavljenim fotografijama pločice zamućujemo.</p>

<h4>3. Svrhe i pravne osnove obrade</h4>
<table>
  <tr><th>Svrha</th><th>Pravna osnova (GDPR)</th></tr>
  <tr><td>Odgovor na upit, izrada ponude i dogovor termina</td><td>Poduzimanje radnji na vaš zahtjev prije sklapanja ugovora (čl. 6. st. 1. t. b)</td></tr>
  <tr><td>Izvršenje usluge, primopredaja vozila i reklamacije</td><td>Izvršenje ugovora (čl. 6. st. 1. t. b)</td></tr>
  <tr><td>Izdavanje računa i čuvanje knjigovodstvene dokumentacije</td><td>Zakonska obveza (čl. 6. st. 1. t. c)</td></tr>
  <tr><td>Podsjetnik za održavanje i obavijesti o ponudama</td><td>Privola (čl. 6. st. 1. t. a), koju možete povući u svakom trenutku</td></tr>
  <tr><td>Analitički i marketinški kolačići</td><td>Privola (čl. 6. st. 1. t. a)</td></tr>
  <tr><td>Zaštita od zlouporabe i sigurnost stranice</td><td>Legitimni interes (čl. 6. st. 1. t. f)</td></tr>
</table>

<h4>4. Kome podatke prosljeđujemo</h4>
<p>Podatke ne prodajemo. Prosljeđujemo ih samo pružateljima usluga koji nam pomažu u radu i koji podatke obrađuju po našim uputama:</p>
<ul>
  <li>pružatelju hostinga web stranice i usluge za slanje forme <span class="ph">[npr. GitHub Pages, Formspree]</span>,</li>
  <li>pružateljima e-maila i komunikacije <span class="ph">[npr. Google Workspace]</span> te WhatsAppu (Meta) ako nas kontaktirate tim putem,</li>
  <li>knjigovodstvenom servisu <span class="ph">[NAZIV]</span>,</li>
  <li>uz vašu privolu, pružateljima analitike i oglašavanja <span class="ph">[npr. Google, Meta]</span>.</li>
</ul>
<p>Neki od tih pružatelja mogu podatke obrađivati izvan Europskog gospodarskog prostora. U tom slučaju prijenos se temelji na odluci Europske komisije o primjerenosti ili na standardnim ugovornim klauzulama.</p>

<h4>5. Koliko dugo čuvamo podatke</h4>
<ul>
  <li>Upiti koji nisu doveli do usluge: do 12 mjeseci od zadnjeg kontakta.</li>
  <li>Podaci o izvršenoj usluzi i reklamacijama: do isteka jamstvenih i zakonskih rokova.</li>
  <li>Računi i knjigovodstvena dokumentacija: u rokovima propisanima zakonom (u pravilu 11 godina).</li>
  <li>Fotografije vozila: do završetka usluge i isteka roka za reklamaciju, osim ako ste dali privolu za objavu.</li>
  <li>E-mail za obavijesti: dok se ne odjavite.</li>
</ul>

<h4>6. Vaša prava</h4>
<p>U svakom trenutku možete zatražiti pristup svojim podacima, njihov ispravak ili brisanje, ograničenje obrade i prijenos podataka. Možete uložiti prigovor na obradu koja se temelji na legitimnom interesu i povući privolu, bez utjecaja na zakonitost obrade prije povlačenja. Zahtjev pošaljite na <a href="mailto:${F.email}">${F.email}</a>. Odgovaramo bez nepotrebnog odgađanja, a najkasnije u roku od mjesec dana.</p>
<p>Ako smatrate da su vam povrijeđena prava, možete podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP), <a href="https://azop.hr" target="_blank" rel="noopener">azop.hr</a>.</p>

<h4>7. Sigurnost</h4>
<p>Podatke štitimo odgovarajućim tehničkim i organizacijskim mjerama. Pristup imaju samo osobe kojima je potreban za obavljanje posla.</p>

<h4>8. Izmjene pravila</h4>
<p>Ova pravila možemo povremeno izmijeniti. Važeća verzija uvijek je objavljena na ovoj stranici, s datumom zadnje izmjene.</p>`
    },

    "uvjeti-poslovanja": {
      title: "Uvjeti poslovanja",
      html: `
<p>Ovi uvjeti vrijede za usluge detailinga, prodaju poklon bonova i proizvoda koje nudi ${F.naziv}, ${F.adresa}, OIB: ${F.oib} (u daljnjem tekstu: Detailerz). Slanjem upita, rezervacijom termina ili narudžbom potvrđujete da ste upoznati s ovim uvjetima.</p>

<h4>1. Cijene i ponuda</h4>
<ul>
  <li>Sve cijene na stranici iskazane su u eurima i uključuju PDV <span class="ph">[ako je tvrtka u sustavu PDV-a]</span>.</li>
  <li>Cijene ovise o veličini vozila. Uz svaku cijenu navedena je i sidrena cijena, u skladu s propisima o isticanju cijena.</li>
  <li>Kalkulator na stranici daje okvirnu cijenu. Obvezujuća je pisana ponuda koju šaljemo nakon fotografija ili pregleda vozila.</li>
  <li>Ako se pri predaji vozila u studio utvrdi stanje koje nije bilo vidljivo na fotografijama (npr. jaka zaprljanost, dlake ljubimaca), dodatni rad obavljamo samo uz vašu prethodnu suglasnost.</li>
</ul>

<h4>2. Rezervacija i otkazivanje termina</h4>
<ul>
  <li>Termin je potvrđen kada prihvatite našu pisanu ponudu (e-mailom, porukom ili telefonom).</li>
  <li>Termin možete besplatno otkazati ili pomaknuti najkasnije 24 sata prije početka.</li>
  <li>Za kasnije otkazivanje ili nedolazak bez najave zadržavamo pravo naplate naknade od <span class="ph">[IZNOS] €</span>. Za usluge koje traju dulje od jednog dana (poliranje, keramika, PPF) možemo tražiti predujam od <span class="ph">[POSTOTAK] %</span>, koji se uračunava u cijenu.</li>
  <li>Ako mi moramo otkazati termin, javljamo vam se što prije i nudimo novi termin. Uplaćeni predujam vraćamo ako vam novi termin ne odgovara.</li>
</ul>

<h4>3. Predaja i preuzimanje vozila u studiju</h4>
<ul>
  <li>Prije početka rada zajedno s vama pregledavamo vozilo i fotografiramo postojeća oštećenja.</li>
  <li>Molimo vas da iz vozila izvadite osobne i vrijedne stvari. Za stvari ostavljene u vozilu ne odgovaramo, osim u slučaju naše namjere ili krajnje nepažnje.</li>
  <li>Vozilo preuzimate nakon zajedničkog pregleda pod LED svjetlom. Vozilo koje nije preuzeto u dogovorenom roku čuvamo do <span class="ph">[BROJ]</span> dana bez naknade, a nakon toga naplaćujemo čuvanje <span class="ph">[IZNOS] €</span> po danu.</li>
</ul>

<h4>4. Ograničenja usluge</h4>
<ul>
  <li>Poliranje uklanja ogrebotine koje su u sloju laka. Duboke ogrebotine do temeljne boje ili lima ne mogu se ukloniti poliranjem, o čemu vas obavještavamo prije rada.</li>
  <li>Prije poliranja mjerimo debljinu laka. Ako je lak pretanak, predlažemo blaži postupak ili odustajanje od poliranja tog dijela.</li>
  <li>Trajnost keramičke zaštite ovisi o načinu pranja, kilometraži i uvjetima vožnje. Realna trajnost navedena je u certifikatu koji dobivate uz uslugu.</li>
</ul>

<h4>5. Jamstvo i reklamacije</h4>
<ul>
  <li>Sve nedostatke uočene pri primopredaji ispravljamo besplatno, odmah ili u dogovorenom roku od najviše 7 dana.</li>
  <li>Reklamaciju na izvršenu uslugu možete podnijeti pisanim putem na <a href="mailto:${F.email}">${F.email}</a>, poštom na adresu ${F.adresa} ili osobno u studiju. Na pisani prigovor odgovaramo u roku od 15 dana od primitka.</li>
  <li>Jamstvo za keramičku zaštitu vrijedi prema uvjetima iz certifikata. Ne uvjetujemo ga održavanjem u našem studiju.</li>
</ul>

<h4>6. Plaćanje</h4>
<p>Plaćanje je moguće gotovinom, karticom ili uplatom na račun. Pakete iznad 600 € moguće je platiti u dvije rate, po dogovoru. Tvrtkama izdajemo eRačun. Račun izdajemo po završetku usluge, a vozilo predajemo nakon plaćanja.</p>

<h4>7. Poklon bonovi</h4>
<ul>
  <li>Poklon bon vrijedi 12 mjeseci od datuma kupnje i može se iskoristiti za bilo koju uslugu iz cjenika.</li>
  <li>Bon se ne može zamijeniti za novac. Ako je usluga skuplja od vrijednosti bona, razliku doplaćujete.</li>
  <li>Bon dostavljamo kao PDF na e-mail nakon uplate.</li>
</ul>

<h4>8. Kupnja proizvoda i bonova na daljinu</h4>
<ul>
  <li>Kod kupnje putem stranice, e-maila ili telefona, kao potrošač imate pravo na jednostrani raskid ugovora u roku od 14 dana od primitka proizvoda, bez navođenja razloga. Izjavu o raskidu pošaljite na <a href="mailto:${F.email}">${F.email}</a>.</li>
  <li>Proizvod vratite neotvoren i neoštećen u roku od 14 dana od izjave o raskidu. Troškove povrata snosite vi, a uplaćeni iznos vraćamo najkasnije u roku od 14 dana od primitka izjave.</li>
  <li>Pravo na raskid nemate za proizvode koji su otvoreni i zbog higijene ili zaštite zdravlja nisu prikladni za povrat. Za poklon bon pravo prestaje kada se bon iskoristi.</li>
  <li>Prednarudžba proizvoda označenih s „Uskoro” nije obvezujuća dok vam ne potvrdimo dostupnost i cijenu.</li>
</ul>

<h4>9. Rješavanje sporova</h4>
<p>Sve nesuglasice nastojimo riješiti dogovorom. Ako to ne uspije, potrošač se može obratiti tijelima za izvansudsko rješavanje potrošačkih sporova. Za sporove je nadležan stvarno nadležni sud u Zagrebu, osim ako zakon za potrošače određuje drugačije.</p>`
    },

    "politika-kolacica": {
      title: "Politika kolačića",
      html: `
<p>Kolačići (cookies) su male tekstualne datoteke koje stranica sprema u vaš preglednik. Pomažu da stranica radi, pamte vaše izbore i, uz vašu privolu, mjere posjete i učinak oglasa.</p>

<h4>1. Vrste kolačića koje koristimo</h4>
<table>
  <tr><th>Vrsta</th><th>Svrha</th><th>Privola</th></tr>
  <tr><td><b>Nužni</b></td><td>Rad stranice, sigurnost i pamćenje vašeg izbora o kolačićima.</td><td>Nije potrebna</td></tr>
  <tr><td><b>Analitički</b></td><td>Anonimna statistika: koliko posjetitelja dolazi i koje se stranice najviše gledaju.</td><td>Potrebna</td></tr>
  <tr><td><b>Marketinški</b></td><td>Mjerenje učinka oglasa na Facebooku, Instagramu i Googleu te prikaz relevantnih oglasa.</td><td>Potrebna</td></tr>
</table>

<h4>2. Popis kolačića</h4>
<table>
  <tr><th>Naziv</th><th>Pružatelj</th><th>Vrsta</th><th>Trajanje</th></tr>
  <tr><td>dz_consent</td><td>Detailerz</td><td>Nužni: pamti vaš izbor o kolačićima</td><td>6 mjeseci</td></tr>
  <tr><td>_ga, _ga_*</td><td>Google Analytics <span class="ph">[ako se koristi]</span></td><td>Analitički</td><td>do 2 godine</td></tr>
  <tr><td>_fbp</td><td>Meta Pixel <span class="ph">[ako se koristi]</span></td><td>Marketinški</td><td>3 mjeseca</td></tr>
  <tr><td>_gcl_au</td><td>Google Ads <span class="ph">[ako se koristi]</span></td><td>Marketinški</td><td>3 mjeseca</td></tr>
</table>
<p>Popis prilagodite alatima koje stvarno koristite. Analitički i marketinški kolačići ne postavljaju se dok ih ne dopustite.</p>

<h4>3. Upravljanje kolačićima</h4>
<p>Pri prvom posjetu biramo zajedno: možete prihvatiti sve kolačiće, dopustiti samo nužne ili odabrati pojedine vrste. Odbijanje je jednako jednostavno kao i prihvaćanje. Svoj izbor možete promijeniti bilo kada putem poveznice <a href="#postavke-kolacica">Postavke kolačića</a> u podnožju stranice. Nakon 6 mjeseci ponovno vas pitamo za privolu.</p>
<p>Kolačiće možete obrisati ili blokirati i u postavkama preglednika. Ako blokirate nužne kolačiće, neki dijelovi stranice možda neće raditi ispravno.</p>

<h4>4. Kontakt</h4>
<p>Za pitanja o kolačićima i zaštiti podataka pišite na <a href="mailto:${F.email}">${F.email}</a>. Više o obradi podataka pročitajte u <a href="#pravila-privatnosti">Pravilima privatnosti</a>.</p>`
    }
  };
})();
