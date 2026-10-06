# [Projektets namn]
## Om sidan
Vad handlar sidan om, och vem är den till för? Två–tre meningar.
En bröllopssida för mig och Hanna. Det ska gå att navigera sig mellan användbar information och lite mer kul kuriosa. Det ska även gå att OSA till bröllopet.
## Skiss
Länk eller hänvisning till skissfilen i repot.
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför? (Om oss istället för Om paret? Notering: Promptarna tog slut)

Färger:
Bakgrund: F0C5B0
Rutor: FEDAC2
Rubriker: 351302
Brödtext: 522008
## Funktionalitet
Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?
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
Grid eller inte: Ja, för att underlätta strukturen av skelettet

JavaScript: Hamburgarmeny för telefon samt Easter egg när en trycker på våra namn på startsidan. Funderade på att implementera Dark mode men kände inte att det var nödvändigt.

Phone first: Eftersom inbjudan kommer ske via kort och inscannad QR-kod kommer i stort sett alla som använder sidan att se den i phone-view, därför valde jag att designa den efter mobile first.

## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?

Jag försökte använda AI som hjälp när jag inte fick min hamburgarmeny att fungera (pga typos) och den började föreslå syntax som jag inte har lärt mig, så då lät jag den inte pilla i koden utan bara löste mina typos manuellt.

Kollade om det gick att göra en easter egg som spelar en truddelutt vid klick på namnen på startsidan, koden verkade inte särskilt komplicerad så beslöt mig för att testa!
