BR challenge
============

#### TODO: translate and format using "md" syntax (sorry, time is over)

- toto jsou me poznamky, ktere jsem si delal behem prace na zadani
- neni zde nic na oko, abych se zalibil, pouze tok myslenek, na kazdem projektu si pisi poznamky v podobne podobe
- poznamky si archivuji zazipovane na dropboxu a dle potreby se k nim vracim, bez poznamek to neumim a zaroven tato forma je velice jednoducha na udrzbu
- vytvarim v notepadu nebo jinem jednoduchem editoru, kazdy OS ma nejaky, dropbox mi umozni sync mezi win/linux/ios a zaroven zajistuje verzovani a zalohovani



Zadani: filtr formular ala wizard
=================================

- fieldy se zobrazuji/skryvaji dle hodnoty predchoziho fieldu
- formular se sklada z nekolika filtrovacich pravidel, mezi nimi bude logicke AND, pozdeji treba take OR
- jsou tam nejake controls na pridani/kopirovani/smazani filtrovaciho pravidla a submit celeho filtru
- neco podobneho uz jsem delal, kompletni reseni zabralo urcite pres jeden cloveko-mesic
- delal jsem to v backbone.js, v angularu jeste ne, no tak to zkusim
- je nekolik pristupu, jeden pres reaktivni formy, to uz jsem zkousel, pak pres ControlValueAccessor, to jsem nikdy nezkousel a zajimalo me to
- beru jako moznost zkusit neco noveho, zaroven se mi to hodi do soucasneho projektu, kde vyuzivam hotovu UI lib a musim bugfixovat ControlValueAccessor


dalsi ukoly:

- v angularu, zkusim posledni verzi, vytvorim projekt pres CLI [1hod]
- github repo, nikdy jsem nedelal, aspon zkusim, je dulezite videt jednotlive commity a komentare k nim [2hod]
- stylovani resit netreba, takze vyberu nejakou std UI knihovnu s peknymi componentami [2hod]
- submit button click => console.log(form.value)
- a pak uvidim


jak budu postupovat:

1. promyslim form.value strukturu, nejspise pole objektu
2. init commit, "hello world" bez formu, jen zkouska github a angularu, node/npm update? nevim, ted delam v ng8
3. vyberu potrebne UI fieldy a nakreslim prvni radek s testovacimi daty, vse zobrazeno
4. pridam druhy radek, udelam jednoduchy filtr typu "fulltext" a pridam submit button a console.log

tim je architektura zhruba vymyslena, muzu se zamerit na detaily

5. vymyslim mechanismus skryvaji fieldu podle vybrane hodnoty, do reduxu se mi asi nechce, zkusim jednodusse
6. clonovani/pridavani resit nebudu, tady se musim zamyslet, chtelo by to nejakou elegantni fintu, zatim nevim, neprijde ted dulezite a nestihnu to v casovem limitu
7. otestovat chrome/firefox/edge, zadne autotesty


casovy plan:

- ST: rozmyslim postup, zkusim github, angular CLI [HOTOVO]
- CT: UI knihovnu [HOTOVO]

- PA: 2hod na vyvoj [HOTOVO]
- SO: jsem pryc, vylet a volby
- NE: 1hod na testovani a posledni upravy, odevzdat



Straveny cas
============

- 1hod: analyza zadani, jak budu postupovat

- 1hod: angular+github prvni uspesny commit
- 1hod: ng-Bootstrap   => prilis HTML, malo abstrakce
- 1hod: PrimeNG+tslint => pekna UI, tslint je nutnost

- 1hod: form skeleton, getter a reset
- 1hod: implementace ControlValueAccessor
- 1hod: dynamicky pocet filter rules

- 1hod: dokumentace, testovani FF, zkusit stahnout github z jineho pc



Novy projekt
============

- https://angular.io/guide/setup-local

{{
npm install @angular/cli
ng new br-demo  // 0 router, scss
}}

- github - uz jsem nekdy zkousel, takze obnovit a vytvorit personal token
- gitextension funguje, jen nevim jak nastavit SSH, takze rucne zadavam user/pass, nechci tomu dat vice casu
- spotreboval jsem 4 pokusy, uff


Vyber UI knihovny
=================

- docela prekvapeny, ze jich moc neni
- zacal s ng-Bootstrap, protoze na ni je zalozen UI kit, ktery pouzivam v soucasnem projektu, ale nakonec me nezaujalo, prilis mala mira abstrakce u comboboxu
- o PrimeNG jsem slysel, dokumentace mi prisla komplikovana, takze jsem si stahnul zdrojaky a prvni demo vykoukal tam
- po prvnim fungujicim prikladu jsem uz pochopil, jak cist v dokumentaci, trochu skoda, mohli to udelat malinko lepe, usetrilo by mi to cas


Vysledek
========

https://github.com/marek-sykora/br-demo

- hodne novych veci, ktere jsem si ani neuvedomil pri praci na soucasnem projektu, kde vice premyslim na samotnou app flow nez na jednotlivych UI komponentach
- ale jsem docela spokojen, ze jsem to v danem casem limitu +/- zvladnul: 

* 1hod: promysleni jak postupovat, jak to casove stihnout, analyza co se budu muset doucit
* 3hod: prvni fungujici combobox, tohle bolelo, github ani UI kit v praci resit nemusim, mam hotove prostredi, ale je to dobra zkusenost
* 3hod: samotna implementace
* 1hod: dokumentace, retrospektiva


Dekuji za Vas cas
=================
marek.sykora@gmail.com