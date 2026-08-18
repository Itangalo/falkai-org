# Strukturanalys av SBN/CENE:s kursplaner

Underlag: 257 aktiva kursplaner där fältet *Kursgivare* anger Institutionen för samhällsbyggnad och naturresurser (SBN). Hämtade 2026-08-17 från LTU:s officiella kursplanearkiv (epok.ltu.se), svensk version, senaste antagningstermin. Konverterade till Markdown i `kursplaner SBN/`.

För jämförelse: LTU har 1 508 aktiva kursplaner totalt. Fördelningen mellan institutioner är ETKS 432, SRT 337, HLT 275, SBN 257, TVM 195, övriga 12. SBN står alltså för ungefär en sjättedel av LTU:s kursutbud.

## 1. Dokumentmallen

Alla kursplaner följer samma fasta mall. Avsnitten kommer alltid i samma ordning och andelen kursplaner som har respektive avsnitt är:

| Avsnitt | Andel |
|---|---|
| Behörighet | 100 % |
| Mål/Förväntat studieresultat | 100 % |
| Kursinnehåll | 100 % |
| Genomförande | 100 % |
| Examination | 100 % |
| Kursgivare | 100 % |
| Kursplanen fastställd | 100 % |
| Urval | 96 % |
| Moduler | 95 % |
| Otillåtna hjälpmedel vid prov och bedömning | 90 % |
| Revidering fastställd | 81 % |
| Studiehandledning | 72 % |
| Ingår i huvudområde | 47 % |
| Överlappning | 38 % |
| Övrigt | 31 % |
| Litteratur | 9 % |
| Examinator | 9 % |
| Övergångsbestämmelser | 1 % |

Utöver detta finns en metadatatabell överst i varje kursplan: utbildningsnivå, fördjupningskod, betygsskala, ämne och ämnesgrupp (SCB).

Kursplanerna är korta. Medianen är 617 ord för hela dokumentet, spannet 245–1 290 ord. Fördelat på de bärande avsnitten (median antal ord):

- Mål/Förväntat studieresultat: 94
- Examination: 78
- Genomförande: 67
- Kursinnehåll: 43
- Behörighet: 16

Kursinnehållet – det som faktiskt ska läras ut – är alltså det kortaste av de fyra centrala avsnitten.

## 2. Hur mycket är standardtext?

En betydande del av varje kursplan är boilerplate som återkommer ordagrant:

- 99 % innehåller standardmeningen "Kursens undervisningsspråk samt undervisningsform anges för varje kurstillfälle…"
- 99 % innehåller standardstycket om särskilt pedagogiskt stöd i examinationsavsnittet
- 90 % innehåller standardstycket om otillåtna hjälpmedel
- 72 % innehåller standardstycket om studiehandledning i Canvas

Räknat i ord utgör de fyra standardstyckena 35 % av en median-kursplan. Den kursspecifika substansen ligger i praktiken på cirka 340 ord.

Också bortom boilerplaten återanvänds text mellan kurser: 60 kursplaner har ett *Genomförande*-avsnitt som är ordagrant identiskt med minst en annan kursplan, 53 delar examinationsavsnitt och 47 delar kursinnehåll.

## 3. Lärandemålen

Här finns den största strukturella variationen, och den mest intressanta.

**Högskoleförordningens tredelning används inkonsekvent.** Bara 16 % av kursplanerna har alla tre rubrikerna *Kunskap och förståelse*, *Färdighet och förmåga* och *Värderingsförmåga och förhållningssätt*. Enskilda rubriker förekommer i 20–27 %. Majoriteten skriver alltså målen som en odifferentierad lista eller som löptext.

**Nästan hälften har inga punktsatta mål alls.** 107 av 257 kursplaner (42 %) formulerar lärandemålen i löpande prosa utan punktlista. Bland dem som punktar är medianen 4 mål per kurs (medel 4,2, max 18).

**Verbfördelningen lutar mot det lägre i taxonomin.** De vanligaste inledande verben i lärandemålen:

| Verb | Antal |
|---|---|
| beskriva | 70 |
| tillämpa | 56 |
| förklara | 44 |
| planera | 37 |
| formulera | 32 |
| bedöma | 31 |
| utforma | 26 |
| välja | 26 |
| beräkna | 24 |
| identifiera | 17 |
| analysera | 17 |
| förstå | 16 |
| redogöra | 16 |

*Beskriva*, *förklara*, *redogöra*, *förstå* – reproducerande verb – står tillsammans för fler mål än *analysera*, *bedöma*, *utforma* och *välja* tillsammans. Det är precis den typ av mål som en språkmodell klarar utan att studenten lärt sig något.

## 4. Examination

Nyckelord i examinationsavsnittet (andel av 257 kursplaner):

| Form | Andel |
|---|---|
| Muntlig presentation/redovisning | 50 % |
| Inlämningsuppgift | 35 % |
| Tentamen (någon form) | 32 % |
| Projektarbete | 32 % |
| Seminarium | 24 % |
| Skriftlig tentamen (uttryckligen) | 22 % |
| Skriftlig rapport | 18 % |
| Laboration | 18 % |
| Dugga/quiz | 17 % |
| Opposition/kamratgranskning | 14 % |
| Grupparbete | 14 % |
| Fältövning/exkursion | 13 % |
| Obligatorisk närvaro | 7 % |
| Hemtentamen | 0 % |
| Portfolio | 0 % |

Korsar man "provliknande moment" mot "moment som kräver fysisk närvaro eller muntlighet" får man:

| Kategori | Antal | Andel |
|---|---|---|
| Inget prov, men live-moment (muntligt/seminarium/laboration/fält) | 125 | 49 % |
| Prov + live-moment | 72 | 28 % |
| Prov, inga live-moment | 22 | 9 % |
| Varken prov eller live-moment | 38 | 15 % |

De 38 kurserna i sista kategorin examineras enbart genom inlämnade texter och beräkningar utan någon kontrollerad eller muntlig komponent. Det är den grupp där generativ AI redan idag gör examinationen svår att lita på. Exempel: F0019B Arkitekturhistoria, K0004B Betongteknik, K0018B Utlandsbyggande, G0001B Väg och järnvägsprojektering med datorstöd, samt hela D70-serien om industriell AI och asset management.

Samtidigt är det värt att notera att 77 % av kurserna redan har någon form av muntligt, laborativt eller fältbaserat moment. SBN har alltså strukturellt bättre förutsättningar än en typisk humanistisk eller samhällsvetenskaplig institution – examinationen är i stor utsträckning redan förankrad i något som händer i rummet.

**Ingen kursplan nämner AI i examinationsavsnittet.** Elva kursplaner nämner AI eller maskininlärning över huvud taget, och samtliga gör det som *ämnesinnehåll* (D0023B, D7001B, D7015–D7023B, O7028K, P7006B) – inte som något som påverkar hur studenter examineras. Standardstycket om otillåtna hjälpmedel, som finns i 90 % av kursplanerna, är skrivet före generativ AI och definierar otillåtna hjälpmedel negativt: allt som läraren inte i förväg angett som tillåtet. Det innebär formellt att AI-användning är förbjuden i alla dessa kurser om inte läraren aktivt säger annat – vilket sannolikt inte är vad någon avsett, och knappast vad som sker i praktiken.

## 5. Undervisningsformer

Nyckelord i *Genomförande*:

| Form | Andel |
|---|---|
| Föreläsning | 61 % |
| Projektarbete | 55 % |
| Grupparbete | 45 % |
| Övning | 38 % |
| Laboration | 25 % |
| Seminarium | 25 % |
| Studiebesök/fältövning | 19 % |
| Handledning | 15 % |
| Distans/nätbaserat | 12 % |
| Gästföreläsare | 2 % |
| Case/PBL | 0,4 % |

Projekt- och grupparbete är nästan lika vanligt som föreläsningar. Det är en pedagogisk profil som står sig relativt väl mot AI, men som också gör bedömningen av individuell prestation svårare.

## 6. Moduler och betygsskalor

244 kursplaner har en modultabell. Median 2 moduler per kurs (medel 2,5, max 9). Fördelning: 1 modul 51 kurser, 2 moduler 95, 3 moduler 42, 4 moduler 39, 5+ moduler 16.

Vanligaste modulnamn: Inlämningsuppgifter (55), Tentamen (43), Muntlig presentation (28), Skriftlig tentamen (24), Godkänd rapport (23), Projektarbete (22).

Betygsskalor: 64 % använder GU345 (graderad skala), 33 % ren godkänd/underkänd (U G# eller UG), 3 % U/G/VG. Graderad skala är vanligare på avancerad nivå (95 av 141) än på grundnivå (69 av 115).

## 7. Nivå, poäng och ämnen

- Nivå: 141 avancerad nivå, 115 grundnivå, 1 förberedande nivå.
- Poängomfattning: 7,5 hp dominerar helt (201 kurser). Därutöver 30 hp (27, i praktiken examensarbeten), 15 hp (23), 3 hp (4), 1,5 hp (2).
- Fördjupningskoder: A1N 91, G1F 52, G1N 32, A1F 28, A2E 20, G2F 16, G2E 6, G1E 2, A1E 1; 9 kursplaner saknar kod.

Ämnesfördelning: Väg- och vattenbyggnad 36, Underhållsteknik 32, Geovetenskap 20, Arkitektur 19, Brandteknik 14, Byggproduktion 13, Geoteknik 12, Berg- och mineralteknik 12, Miljöteknik 11, Konstruktionsteknik 11, Kemiteknik 10, Geografisk informationsteknologi 9, VA-teknik 9, Mineralteknik 8, Processmetallurgi 8, Kemi 7, Malmgeologi 6, Kemisk teknologi 5, Geofysik 4, Kemisk apparatteknik 3, samt nio ämnen med 1–2 kurser vardera.

## 8. Revideringsmönster

Beslutsdatum för gällande kursplan:

- 2007–2020: 43 kursplaner (17 %)
- 2021: 70 (27 %)
- 2022: 40
- 2023: 26
- 2024: 26
- 2025: 28
- 2026: 24

Toppen 2021 är en central omgång där merparten av kursplanerna reviderades samtidigt. Sedan dess ligger takten på 25–30 reviderade kursplaner per år, alltså cirka 10 % av beståndet. 34 kursplaner (13 %) har inte reviderats sedan före 2020 – de är skrivna i en värld utan användbar generativ AI och kommer i nuvarande takt inte att röras på flera år. 163 kursplaner (63 %) gäller "tills vidare" utan slutdatum.

## 9. Slutsatser inför diskussionen på plats

1. **Mallen tvingar fram examination, men inte reflektion över examination.** Kursplanen kräver att man fyller i *hur* det examineras, men det finns ingen ruta för *varför just den formen* eller *vad som förutsätts att studenten gör själv*. Det är där en AI-anpassning skulle behöva byggas in.
2. **Regelverket säger redan nej till AI – utan att någon bestämt det.** Standardstycket om otillåtna hjälpmedel gör AI förbjudet by default i 231 kursplaner. Det är en tyst policy som ingen äger och ingen följer upp.
3. **De verkligt utsatta kurserna är få och identifierbara.** 38 kurser saknar helt kontrollerade eller muntliga moment. Det är en hanterbar lista att gå igenom, inte ett systemhaveri.
4. **Lärandemålen är den svagaste länken.** 42 % saknar punktsatta mål, 84 % följer inte HF:s tredelning, och de vanligaste verben är reproducerande. Otydliga mål gör det omöjligt att avgöra vilka moment AI faktiskt underminerar.
5. **Kursplanen är fel verktyg för snabb AI-anpassning.** Med 25–30 revideringar per år tar det ett decennium att skriva om beståndet. Det som går att ändra snabbt är kurs-PM, studiehandledning och examinationspraktik – inte kursplanen. Frågan till institutionen blir därför: vad *måste* stå i kursplanen, och vad ska hanteras en nivå ned?
