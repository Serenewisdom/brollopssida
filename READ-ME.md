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
## Tekniska val (VG)
Vilka beslut tog jag, och varför?
Hur ska besökaren OSA: Google Forms, eftersom jag inte kan backend så kan inte lagra data utan att behöva en extern sida
Grid eller inte: Ja, för att underlätta strukturen av skelettet
JavaScript: Hamburgare
## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?

Jag försökte använda AI som hjälp när jag inte fick min hamburgarmeny att fungera (pga typos) och den började föreslå syntax som jag inte har lärt mig, så då lät jag den inte pilla i koden utan bara löste mina typos manuellt.

Kollade om det gick att göra en easter egg som spelar en truddelutt vid klick på "Juna" på startsidan, koden verkade inte särskilt komplicerad så beslöt mig för att testa!



Idé: Bröllopssida
Syfte: En sida där det ska gå att få information och OSA till bröllopet 2027

Skiss: Figma? Canvas? Claude?
Header med titel + nav
Main main
Footer footer


Flikar: Startsida med kort info, info-flik med mer info, brudparssida, brudföljesida

Behöver välja ut i förväg vilka färger som ska vara med. 3-5st.
Bakgrund: F0C5B0
Rutor: FEDAC2
Rubriker: 351302
Brödtext: 522008
En bild på oss behövs också till startsidan, flera till brudparssidan.


Oklarheter: 
- Hur ska de OSA? Lösning: Link till Google Form
- Hur ska jag implementera JavaScript? Hamburgarmeny? Dark mode? Quiz?
- Är det värt att använda Grid?

Mobilvänlighet: Tänk på det från början!
Hamburgarmeny på mobil, vanlig nav-meny på dator

Notes to self: Använda camelCase vs kebab-case på rätt tillfällen

Användning av AI:
- Frågade om vilka möjligheter som finns för att skapa en OSA-möjlighet och kom fram till att Google Forms är lättare än att skicka data till en extern sida (eftersom jag inte har en backend)