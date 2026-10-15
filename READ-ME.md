# [Projektets namn]
## Om sidan
Vad handlar sidan om, och vem är den till för? Två–tre meningar.

En bröllopssida för mig och Hanna. Det ska gå att navigera sig mellan användbar information och lite mer kul kuriosa. Det ska även gå att OSA till bröllopet.
## Skiss
Länk eller hänvisning till skissfilen i repot.
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?

Bestämde mig för att köra samma upplägg på griden, förutom att jag inte hade en footer längst ner utan lät footern vara nere till höger. Valde ett annat färgschema (med input från Hanna). Naven blir en hamburgarmeny för små skärmar.

## Funktionalitet
Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?

Framförallt få information. Så småningom ska det gå att OSA till ett Google Forms som inte finns än, samt skicka frågor till Toastmaster som inte har bestämts än. 

JS-mässigt finns det en hamburgarmeny som öppnar/stänger knappen som finns uppe till höger på små skärmar. Togglen till knappen ligger i script.js medan hur det ska se ut när menyn är uppen/stängd står i style.css. 

Jag la också in två easter-eggs, små jinglar som spelas upp om en trycker på våra namn på startsidan. Class/ID definieras i index men hanteras i script.js.

## AI-användning
Minst två exempel. För varje:
- Vad bad jag om?
- Vad fick jag?
- Vad gjorde jag med det?

- Frågade om hur en länkar till email, fick svaret href="mailto:mail@adress.com", använde till min footer

- Frågade om hur jag ska få naven för små skärmar att synas över bilden, fick svaret position:absolute, skrev in i min css för nav.open. Dock gjorde det att alla länkar hamnade på samma ställe så fick pilla vidare. Satte en div runt länkarna och såg till att det bara var de som var absolute istället för hela naven.

- Bad AIn att centrera hamburgarmenyn i naven och behålla att positionen stannar, samt att menyn syns under och överlappar mainen. Den la till "top", "left" samt "transform". Förstår inte riktigt vad transform gör men låter den vara kvar då jag inte lyckades lösa det på egen hand.

- Bad AIn att göra en knapp med ett hjärta som gjorde en liten animation när en tryckte på knappen, men blev inte som jag tänkt och förstod inte koden (framförallt pga @keyframes), så valde att ta bort det.

## Tekniska val (VG)
Vilka beslut tog jag, och varför?

Hur ska besökaren OSA: Google Forms, eftersom jag inte kan backend så kan inte lagra data utan att behöva en extern sida

Grid eller inte: Ja till grid, för att underlätta strukturen av skelettet. Kan bli att jag ändrar detta senare, men är nöjd i nuläget.

JavaScript: Hamburgarmeny för telefon samt Easter egg när en trycker på våra namn på startsidan. Funderade på att implementera Dark mode men kände inte att det var nödvändigt då användaren ska kolla på sidan för information i cirka 1 minut.

Phone first: Eftersom inbjudan kommer ske via kort och inscannad QR-kod kommer i stort sett alla som använder sidan att se den i phone-view, därför valde jag att designa den efter mobile first.

## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?

Jag försökte använda AI som hjälp när jag inte fick min hamburgarmeny att fungera (pga typos) och den började föreslå syntax som jag inte har lärt mig, så då lät jag den inte pilla i koden utan bara löste mina typos manuellt.

Kollade om det gick att göra en easter egg som spelar en truddelutt vid klick på namnen på startsidan, koden verkade inte särskilt komplicerad så beslöt mig för att testa!

I regel har jag använt AI till att fråga "varför är det inte såhär", eller "hur kan jag få det att bli så här" snarare än att låta den göra saker åt mig. Jag känner att jag lär mig bättre så. De tillfällen som jag låtit AIn pilla i koden är när jag förstår vad den gör, alternativt när jag inte hittar ett bättre sätt på egen hand (som när jag centrerade hamburgarmenyn utan att förstå vad Transform gör).

I detta projektet har jag endast använt mig av VS-codes AI-assistent. Till framtida projekt vill jag testa Claude, har fortfarande inte gjort det och jag känner att det är ett sånt centralt verktyg i branschen att det är viktigt att jag bekantar mig med det.