Georg Schneider  Virtual Team Assistant   
Georg Schneider  

**Virtual Team Assistant**  

Intelligente Assistenzsysteme für die    
automatisierte Vorgangsbearbeitung  

Mit einem Geleitwort von    
Prof. Dr. Dr. h. c. Wolfgang Wahlster  

Springer Fachmedien Wiesbaden GmbH   
Die Deutsche Bibliothek- CIP-Einheitsoufnohme  

**Schneider, Georg:**    
Virtual teom ossistont : intelligente Assistenzsysteme für die automatisierte Vorgongs bearbeitung / Georg Schneider. Mit einem Geleitw. von Wolfgong Wohlster. \- (DUV: Wirtschaftsinformotik)    
Zugl.: Saarbrücken, Univ., Diss., 1999    
ISBN 978-3-8244-2124-4 ISBN 978-3-663-09114-1 (eBook)    
DOI 10.1007/978-3-663-09114-1  

Alle Rechte vorbehalten  

© Spnnger Fachmedien Wiesbaden 1999    
Ursprunglieh erschienen be1 Deutscher Universitäts-Verlag GmbH, Wiesboden 1999  Lektorat: Ute Wrosmonn / Moniko Mülhousen  

Das Werk einschließlich aller seiner Teile ist urheberrechtlich    
geschützt. Jede Verwertung außerhalb der engen Grenzen des    
Urheberrechtsgesetzes ist ohne Zustimmung des Verlages un 

zulässig und strafbar. Das gilt insbesondere für Vervielfältigun 

gen, Ubersetzungen, Mikroverfilmungen und die Einspeiche   
rung und Verarbeitung in elektronischen Systemen.  

http:/ /www\.duv.de  

Höchste inhaltliche und technische Qualität unserer Produkte ist unser Ziel. Bei der  Produktion und Verbreitung unserer Bücher wollen wir die Umwelt schonen. Dieses  Buch ist deshalb auf säurefreiem und chlorfrei gebleichtem Papier gedruckt. Die Ein schweißfolie besteht aus Polyäthylen und damit aus organischen Grundstoffen, die  weder bei der Herstellung noch bei der Verbrennung Schadstoffe freisetzen.  

Die Wiedergabe von Gebrauchsnomen, Handelsnomen, Warenbezeichnungen  usw. in diesem Werk berechtigt auch ohne besondere Kennzeichnung nicht zu der  Annahme, daß solche Nomen im Sinne der Warenzeichen- und Markenschutz-Ge setzgebung als frei zu betrachten wären und daher von jedermann benutzt werden  dürften.  

**ISBN** 978-3-8244-2124-4   
**Geleitwort**  

Ziel der Dissertation war die Konzeption und Entwicklung eines Systems, das Videokon ferenzen in Vorgangsbearbeitungssysteme funktional und ohne Medienbrüche integriert,  indem es automatisch geeignete Teilnehmer für eine Videokonferenz auswählt, eine Ter minabstimmung vornimmt, die Teilnehmer auf die Konferenz vorbereitet und schließlich  die Videokonferenz zum richtigen Zeitpunkt startet. Am Ende der Videokonferenz sollte  das System zusätzlich die Konferenznachbereitung und die Bewertung der Teamleistung  unterstützen. Bei der Lösung dieser sehr anspruchsvollen Problemstellung war es notwen dig, neben den relevanten Informatik-Teilgebieten der Telekooperationssysteme und der  Workflow-Management-Systeme auch Methoden der Künstlichen Intelligenz und Ergeb nisse der Sozialpsychologie zu berücksichtigen.  

Die Arbeit entstand am DFKI im Siemens Telekooperationszentrum, wo Herr Schnei der u.a. in den Projekten WoTel und Polivest arbeitete. Durch den Projektkontext war  Herr Schneider auf die Verwendung der Werkzeuge WorkParty als Workflow-Management System und GroupWin sowie NetMeeting für die Telekooperation festgelegt. Zunächst  motiviert Herr Schneider die Fragestellung der Dissertation im Umfeld automatisierter  Vorgangsbearbeitung und computerunterstützter Teamarbeit. Er arbeitet klar die Defizi te heutiger Systeme heraus und zeigt den von ihm angestrebten Mehrwert durch die Inte gration intelligenter Dienste an der Schnittstelle von Videokonferenzsystem und Workflow System auf.  

Danach werden bisherige Ansätze zur Integration synchroner und asynchroner Arbeitspro zesse analysiert. Es werden wichtige Grundbegriffe aus dem Bereich CSCW, virtuelle Un ternehmensorganisationen sowie Arbeitsgruppen und Teams diskutiert und in Hinblick  auf die vorliegende Aufgabenstellung in einen Zusammenhang gebracht. Innovativ bei  dieser Darstellung ist das Einbringen von sozialpsychologischen Erkenntnissen aus der  Kleingruppenforschung und zur Teameffizienzbewertung, die bislang in der Informatik zu  wenig berücksichtigt wurden.  

Das vorgestellte Integrationskonzept verwendet als Kernelemente die Zeit, die Mitarbeiter  und deren Wissen. Herr Schneider erarbeitet eine neuartige Klassifikation von Telekon ferenzen im Zusammenhang mit Vorgangsbearbeitung, indem er die Dimensionen sta tisch/dynamisch und geplant/ad-hoc kombiniert. Ausgezeichnet gelungen ist die Konzep tion der benutzeradaptiven Informationspräsentation bei der Vorbereitung von Telekon ferenzen. Hier arbeitet Herr Schneider mit dem in der Benutzermodeliierung bewährten  Ansatz der Stereotypisierung, wobei er zwischen fünf Benutzertypen von einem Experten  bis hin zu einem Novizen differenziert. Mithilfe von Generierungsschablonen erzielt er  unterschiedliche Ausführlichkeitsgrade bei der Zusammenfassung des aktuellen Standes  einer Vorgangsbearbeitung.  

Den Kern der Arbeit stellt die detaillierte Beschreibung der Realisierung des Virtual Team  Assistant (VTA) dar. Es handelt sich hier nicht um eine einfache Kopplung von Workflow und Konferenzsystemen sondern ein sehr umfangreiches System, das mit dem sog. Team Finder und dem Teaminformer hervorragende Mehrwertdienste für die Integration der  beiden Technologien anbietet. Gut gelungen ist die Zusammenführung von Information  über die Aufbauorganisation, mit den individuellen Benutzermodellen und den Daten zum   
VI  

Teammanagement in einem einheitlichen Datenmodell, das für eine Access-Datenbank ge nutzt wird. Sehr gut ausgearbeitet ist die situationsadaptive Versendung der Information  zur Konferenzvor- und-nachbereitungüber Email, Voicemail oder das WWW\. Es wird  anhand von verschiedenen Anwendungsbeispielen gezeigt, welche Mächtigkeit das imple mentierte System besitzt. Im Polivest-Projekt wird das System für Beratungsverfahren  im Bundesrat und für Baugenehmigungsverfahren eingesetzt. Technisch interessant ist  die automatische Einwahl über eine MCU, sobald eine Konferenz mit mehr als zwei Teil nehmern ausgelöst wird.  

Die Zusammenfassung zeigt, daß das automatische Versenden von benutzeradaptiven  Briefings- und De-Briefings sowie die automatische Teameffizienzmessung und darauf auf bauende Teamselektionsmechanismen die wesentlichen Innovationen der vorliegenden Dis sertation darstellen.    
Die Arbeit stellt eine sehr gute Ingenieursleistung in der Informatik dar. Es werden  eine Reihe von sehr anspruchsvollen Informatik-Techniken zu einem originellen System  integriert. Die Stärke der Arbeit liegt auch darin, daß einige sozialwissenschaftliche Er gebnisse so weit operationalisiert wurden, daß sie in das Assistenzsystem integriert werden  konnten.  

Prof. Dr. Dr. h. c. Wolfgang Wahlster  

Lehrstuhl für Informatik IV  

Leiter des Deutschen Forschungszentrums für Künstliche Intelligenz (DFKI)   
**Vorwort**  

Der Virtual Team Assistant ist ein System zur ganzheitlichen Prozeßbearbeitung unter  besonderer Unterstützung von Teamarbeit. Er fokussiert auf die Schnittstellen zwischen  synchroner und asynchroner computerunterstützter Arbeit, am Beispiel der Integrati on von Workfiow-Management-Systemen und multimedialen Audio/Video Desktopkonfe renzsystemen.  

In einem interdisziplinären Ansatz werden Forderungen und Erkenntnisse aus Sozialpsy chologie, CSCW (Computerunterstützter Gruppenarbeit) und Wirtschaftswissenschaften  untersucht und im System Virtual Team Assistant operationalisiert.  Im Vordergrund stehen dabei die Bereiche Integration von Teams in die Aufbauorganisa tion eines Unternehmens mit dem Ziel, ihnen Tätigkeiten zur gemeinsamen Bearbeitung  zuweisen zu können, Terminmanagement für Konferenzen, automatische Konferenzvor bereitung der Konferenzteilnehmer und Messung/Verbesserung der Leistungsfähigkeit  der Teams.  

Die Bearbeitung dieses interessanten Themas haben mir Herr Prof. Dr. Dr. h.c. Wolfgang  Wahlster und Herr Dr. Jean Schweitzer ermöglicht. Ich möchte mich bei Ihnen herzlich  dafür bedanken.  

Mein Dank gilt auch meinem Zweitkorrektor, Herrn Prof. Dr. Michael Weber, der mir  mit vielen hilfreichen Anmerkungen zur Seite stand. Ebenfalls schließe ich meine Kollegen  im "Siemens Telekooperations Zentrum" für die vorbildliche Zusammenarbeit in meinen  Dank ein, ich denke besonders an Astrid Scheller-Houy und Clemens Dietel, die mich mit  Rat und Tat bei der Erstellung dieser Arbeit unterstützt haben.  

Zu Dank verpflichtet bin ich auch meinen Diplomanden Dirk Wagner und Ruppert von  Teutul, die mich bei der Implementierung des Systems unterstützt haben, sowie Patric  Hoechst, der mich in den psychologischen Fragestellungen beraten hat.  Ich möchte mich bei Dr. Johann Schneider bedanken, er hat mir wertvolle Ratschläge  und Hinweise im Bereich "Kleingruppenforschung" gegeben.  

Ein Dankeschön auch meinen Freunden und Bekannten, unter ihnen Antonio Krüger und  Anthony Jameson; ihre guten Tips haben mir geholfen.  

Abschließend herzlichen Dank meiner Familie für ihre Mithilfe und ihr Verständnis, Dank  meiner Frau Chantal, meiner Tochter Julie und meinen Eltern.  

Georg J. Schneider   
**Inhaltsverzeichnis**  

**1 Einleitung**    
**1**    
1.1 Motivation .    
2    
1.2 Ziel der Arbeit ..    
3    
1.3 Aufbau der Arbeit    
5  

**2 Bisherige** Systeme **zur Integration**    
**7**    
2.1 Kommerzielle Systeme    
8    
2.1.1 Realtime Notes ..... .    
8    
2 .1. 2 Diskussion . . . . . . . . .    
8    
2.2 Systeme aus dem universitären Umfeld    
9    
2.2.1 PlanKo ..    
9    
2.2.2 Diskussion .    
11    
2.2.3 WAM    
11  

2.2.4 Diskussion .    
12    
2.2.5 ContAct ..   
13  

2.2.6 Diskussion .    
14    
2.2.7 Dolphin    
14  

2.2.8 Diskussion .    
15  

2.2.9 Wo Tel    
15  

16    
2.2.10 Diskussion .    
2.3 Fazit ....... .    
16  

**3 Grundlagen**    
**19**    
3.1 cscw .   
19    
3.1.1 Die Gruppe ................... .    
21  

3.1.1.1 Kommunikation innerhalb der Gruppe    
21    
3.1.1.2 Problemlösen in Gruppen ...... .    
23    
3.1.1.3 Der Facilitator ............ .    
24  

3.1.1.4 Vorteile und Gefahren der Gruppenarbeit    
25    
3.1.2 Koordination .................. .    
27    
3.1.3 Charakteristiken verschiedener Medien .... .    
27  

3.1.4 Systeme zur Unterstützung von Gruppenarbeit    
29  

3.1.4.1 Workfiow-Management-Systeme .    
29  

3.1.4.2 Videokonferenzsysteme .    
39  

46    
3.2 Aspekte der Unternehmensorganisation  

3.2.1 Virtuelle Organisationen    
47    
3.3 Arbeitsgruppen und Teams ...... .    
49   
X  

3.3.1 Teams in der Organisation  

3.3.2 Teambewertung . . . . . .  

3.4 Qualitätsstandards . . . . . . . .  

3.5 Zwischenbilanz und Forderungskatalog  

3.6 Techniken zur Unterstützung von Teams    
3.6.1 Hypertextsysteme .... .    
3.6.1.1 Grundlagen .. .    
3.6.1.2 WorldWideWeb .    
3.6.2 Benutzermodellierung ...    
3.6.2.1 Grundlegende Betrachtungen  

3.6.2.2 Anpassung von Hypertext  

3.6.3 Constraint Programmierung  

3.6.4 Graph Visualisierung  

3\. 7 Diskussion . . . . . . . . . .  

4 Integrationskonzept  

4.1 Gestaltung kooperativer Prozesse  

4.2 Der Telecooperation Werkspace  

4.3 Technisches Integrationskonzept .    
4.3.1 Konferenzdimensionen ..    
4.3.1.1 Modellierungszeitpunkt  

4.3.1.2 Koordination der Konferenz    
4.3.2 Konferenzprofile ........... .    
4.3.2.1 Dynamische geplante Konferenzen  

4.3.2.2 Statische geplante Konferenzen .  

4.3.2.3 Dynamische ad-hoc Konferenzen    
4.3.2.4 Statische ad-hoc Konferenzen ..    
4.3.3 Anforderungen aus den Konferenzprofilen .  4.4 Bestimmen von Team und Konferenzzeitpunkt ..  4.4.1 Gruppenmodelle versus Benutzermodelle .  

4.4.2 Auswahlkriterien zur Teamzusammenstellung  4.4.2.1 Der zeitliche Aspekt ..... .    
4.4.2.2 Der Aspekt der Fachkompetenz  

4.4.2.3 Der Aspekt "Bestes Team"    
4.4.2.4 Kombination der Kriterien .    
4.4.2.5 Wahl des Facilitators ....    
4.4.3 Teambewertung . . . . . . . . . . . .  

4.4.3.1 Die Erhebungsinstrumente .    
4.4.3.2 Das Teamranking .....    
4.5 Konzepte zum Informieren der Mitarbeiter .  4.5.1 Briefing und De-Briefing ...... .    
4.5.2 Wissensakquisition und \-aufbereitung .  4.5.2.1 Wissensquellen ....... .    
4.5.2.2 Repräsentation des Prozeßwissens .  

4.5.3 Benutzerabhängige Informationspräsentation  4.5.3.1 Stereotypische Benutzermodelle    
4.5.3.2 Informationsselektion . . . .....  

*INHALTSVERZEICHNIS*  

49  

51  

55  

56  

57  

57  

57  

58  

59  

59  

61  

62  

63  

64  

65  

65  

66  

68  

68  

70  

70  

71  

72  

73  

73  

74  

75  

76  

77  

78  

79  

79  

79  

80  

80  

80  

81  

81  

82  

84  

85  

85  

86  

89  

89  

90   
*INHALTSVERZEICHNIS*  

4.5.3.3 Fokussierung . . . . . .  

4.5.3.4 Generierungsschablonen    
4.6 Zusammenfassung ............ .  

**5 Realisierung** des **VTA**    
5.1 Architektur .....    
5.2 Auswahl von Personen und Konferenzterminen ..  5.2.1 Ein generisches Organisationsmanagement  

5.2.2 Integration eines Kalenders  

5.2.3 Realisierung der Teamauswahl    
5.2.4 Starten der Konferenz ...    
5.2.5 Realisierung der Befragung ..    
5.3 Briefing und De-Briefing ...... .    
5.3.1 Integration eines Systems zur Sitzungsunterstützung  5.3.2 Die Teaminformer Zwischenrepräsentation ..  5.3.3 Die systemunabhängige Workflowbeschreibung  5.3.4 Das Benutzermodell ............. .  5.3.5 Die Generierungsschablonen ......... .  5.3.6 Erstellen der Texte durch Generierungsschablonen  5.3.7 Die graphische Repräsentation des Workflows  5.3.8 Realisierung von Briefing und De-Briefing    
5.3.8.1 Realisierung als Hypertext ..    
5.3.8.2 Realisierung als Telefonanruf  

5.4 Kommunikation zwischen den Systemen  

**6 Anwendungsbeispiele**  

6.1 Beispiel Investition . . . . . . . . .  

6.2 Beispiele aus dem Projekt Polivest    
6.2.1 Überblick ......... .    
6.2.2 Das Baugenehmigungsverfahren im Rhein-Sieg-Kreis  

**7 Einsatzfelder** des **VTA**  

7.1 Der **VTA** in Polivest    
7.2 Unterstützung von ISO 9000 ....... .    
7.3 Ein Beitrag zum Knowledge Management .  

7.4 Ein Instrument der lernenden Organisation .    
7.5 **VTA** in virtuellen Unternehmen ..... .    
7.6 Experimentierumgebung für Teameffizienz  

**8 Zusammenfassung und Ausblick**    
8.1 Zusammenfassung .................... .  8.2 Ausblick ......................... .  8.2.1 Weitere Ausarbeitung der Gruppenmodeliierung    
8.2.2 Integration weiterer Dienste ........ .  8.2.3 Erweiterung von Briefing und De-Briefing .  8.2.4 Weitere Auswahlkriterien zur Teamselektion  

XI  

91  

92  

93  

95  

95  

98  

101  105  106  108  109  110  112  113  115  117  118  119  120  122  122  122  123  

**125**  125  129  129  130  

**165**  165  166  166  167  167  167  

**169**  169  171  171  171  171  172   
XII *INHALTSVERZEICHNIS*  

A Teambewertung 173  Ao1 Der Team-Review Fragebogen 0 0 o o 0 0 0 o 0 o 0 173  Ao2 Der Meeting Fragebogen o o 0 o 0 0 o 0 0 0 o o o 0 179  Ao3 Der Fragebogen zur Effizienz der Problemlösung 0 180  

B Datenquellen des Teamlnformers 181  Bo1 Die Beschreibungsdatei des Sitzungsassistenten 0 181  Bo2 Die WorkParty Repräsentation 0 o o 0 0 0 o 0 0 0 182  

C Workflow-Graph in VCG 185  D Datenaustausch 189  E Templates 193  Literaturverzeichnis 195   
**Ab bild ungsverzeichnis**  

1.1 Der Vermittler zwischen synchronen und asynchronen Systemen 4  

Bestandteile des PlanKo-Kooperationsmanagement-Systems . . 9    
2.1    
Repräsentation einer Kooperation auf der Benutzeroberfläche von PlanKo . 10    
2.2    
Workflow zur Konferenzunterstützung in WAM · 12    
2.3    
Die ContAct Benutzeroberfläche . . . . . . . . 13  2.4    
2.5  2.6  2.7    
Eine Beispielsitzung in Dolphin . . . . . . . .  Die Broker-Architektur des WoTel Prototypen  Der Vergleich der beschriebenen Systeme    
14  16  17  

3.1 Die Facetten von CSCW . . . . . . . . . 20  3.2 Kommunikationsstrukturen . . . . . . . 22  3.3 Konvergente und divergente Problemlösungsphasen 23  3.4 Die Auswirkungen der Erfahrung des Facilitators auf das Gruppenergebnis 24  3.5 Zeitbedarf einer Gruppenentscheidung versus Vorgesetztenentscheidung 26  3.6 Das aufgabenorientierte Kommunikationsmodell . . . . . . . . . . . 28  3.7 Das Referenzmodell der WfMC . . . . . . . . . . . . . . . . . . . . 31  3.8 Architektur von Engine-basierten Workflow-Management-Systemen 33  3.9 Ein Beispiel eines Definitionswerkzeuges für gerichtete Graphen 34  3.10 Die Arbeitsliste in WorkParty . . . . . . . . . . . . . . . . . 37  3.11 Auswirkungen von WfMS auf Mitarbeiter und Organisation . 38  3.12 Eine Videokonferenz mit GroupWin . . . . . . . . . . . . . . . 41  3.13 Neue Wege der Entscheidungsfindung durch Videokonferenzen 44  3.14 Vergleich zwischen Arbeitsgruppe und Team . . . . . . . . . . 50  3.15 Ein Stereotyp aus Grundy . . . . . . . . . . . . . . . . . . . . 60  3.16 Klassische "Benutzermodellierung- Adaptation" Schleife im adaptiven Sy   
stem . . . . . . . . . . . . . . 61  

4.1 Kernelemente zur Integration 68  4.2 1:1 versus 1:n Relation . . . . 69  4.3 Mögliche Konferenztypen . . . 71  4.4 Die dynamische geplante Konferenz 72  4.5 Die statische geplante Konferenz . 73  4.6 Die dynamische ad-hoc Konferenz 74  4\. 7 Die statische ad-hoc Konferenz . 75  4.8 Die Aspekte Zeit und Mitarbeiter 76  4.9 Instantiierung der Mitarbeiter und Auswahl eines Konferenztermins 77  4.10 Die Struktur der Teamrankingtabelle . . . . . . . . . . . . . . . . . 82   
XIV *ABBILDUNGSVERZEICHNIS*  

4.11 Die Aspekte Mitarbeiter und Wissen . . . . . . . . . . . . . . . . . . . . . 83  4.12 Das Referenzmodell der WfMC . . . . . . . . . . . . . . . . . . . . . . . . 84  4.13 Die verschiedenen Wissensquellen der Teamirrformer Zwischenrepräsentation 86  4.14 Fokussierung auf den lokalen Kontext einer MMC 91  

5.1 Die Architektur des Virtual Team Assistant  5.2 Die Architektur des TeamFinders ... .  5.3 Das Datenmodell von ORM ...... .  5.4 Die TeamFinder Zwischenrepräsentation  5.5 Das Datenmodell des TeamFinders ...  

97  

100  102  103  104  

5.6 Ein Teil des Datenmodells des TeamFinders für das Select-Statement 105  5.7 Die Oberfläche des Teamauswahlassistenten des TeamFinders. 106  5.8 Die Architektur des Konferenzstartmechanismus 109  5.9 Die Architektur des Teamirrformers . 111  5.10 Der Sitzungsassistent zur Buildtime . . . . . . . 113  5.11 Der Sitzungsassistent zur Laufzeit . . . . . . . . 114  5.12 Die Struktur zum Ablegen eines (Basis-)Konstruktes der Teamirrformer    
Zwischenrepräsentation ............................. 115  5.13 Die unterschiedlichen Zugriffsmechanismen auf das Workflow Management-System zur Erstellung der Zwischenrepräsentation 116  5.14 Ein Workflowgraph in VCG . . . . . . . . 121  5.15 Realisierung des Briefings als WWW-Seite 122  5.16 Realisierung des Briefings als Voice-Mail . 123  

6.1 Workflow zur Abwicklung einer Investition 126  6.2 Der Workflowgraph in VCG . . . . . . . . 128  6.3 Positionierung der Pilotfelder in der Verwaltungshierarchie 130  6.4 Prototypische Sollkonzeption des Prüfverfahrens (Beginn). 131  6.5 Prototypische Sollkonzeption des Prüfverfahrens (mittlerer Teil). 132  *6.6* Prototypische Sollkonzeption des Prüfverfahrens (Endteil). . . . 133  6.7 Realisierung der Sollkonzeption als Workflow in WorkParty (Übersicht). . 134  6.8 Realisierung der Sollkonzeption als Workflow in WorkParty (Teill). 135  6.9 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil2). 136  6.10 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil3). 136  6.11 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil4). 137  6.12 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil5). 138  6.13 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil6). 138  6.14 Realisierung der Sollkonzeption als Workflow in WorkParty (Teil7). 139  6.15 WorkParty vor Ausführung der Konferenz . 140  6.16 Das Startmenu des *Virtual Team Assistant* . . . . . . 141  6.17 Der Teamauswahlassistent des TeamFinders . . . . . 143  6.18 Anzeigen von Organisationseinheiten im TeamFinder 144  6.19 Selektion des Konferenzdatums im TeamFinder . . . 145  6.20 Anzeigen der gefundenen Team-Termin Kombinationen 147  6.21 Anzeigen der Team-Termin Details im TeamFinder . . 148  6.22 Kurzinformation des TeamFinders über die Konferenz . 149  6.23 Der Terminkalender der Organisationseinheit . . . . . . 150   
*ABBILDUNGSVERZEICHNIS* XV  

6.24 Die Mitteilung des TeamFinders über das Absagen einer Konferenz 151  6.25 Der Sitzungsassistent zur Buildtime . . . . 152  6.26 Das Briefing des Teamirrformers . . . . . . . . . . . . 154  6.27 Die Visualisierung des Workfiows in VCG . . . . . . . 155  6.28 Darstellung der hinterlegten Tätigkeitsinformationen 156  6.29 Der Sitzungsassistent zur Laufzeit . . 157  6.30 Die MMC-Konferenz . . . . . . . . . 158  6.31 Ein Fragebogen zur Teambewertung . 159  6.32 Die Auswertung des Fragebogens . . 160  6.33 Das De-Briefing . . . . . . . . . . . . 162  6.34 Das Endmenu des *Virtual Team Assistant* 163   
**Kapitel 1**  

**Einleitung**  

Die Informationsgesellschaft wird zusehends globaler, unterstützt durch die weltwei te Vernetzung, welche die Kommunikation zwischen den Menschen auf vielerlei Wei se ermöglicht. Neben Telefon und FAX sind nun auch Möglichkeiten vorhanden  über Email, Chat, Newsgroups, Web-Seiten, Videokonferenzen, Application Sharing,  Workflow-Mariagement-Systeme etc. von nahezu jedem Punkt der Welt sowohl synchron,  also zeitgleich, als auch asynchron, d.h. zeitversetzt miteinander zu kommunizieren und  zu arbeiten.  

Für Unternehmen bietet sich ein gewaltiger Gestaltungsspielraum, den sie durch den  weltweiten Zugang zu Kommunikationsmedien und Informationen nun voll ausschöpfen  können. Firmen aus verschiedenen Ländern der Erde können ohne großen technischen  Aufwand kooperieren. Global agierende Unternehmen können Dependencen in verschie 

denen Teilen eines Landes und in unterschiedlichen Ländern gründen, die trotz räumlicher  Verteilung eng mit dem Hauptsitz zusammenarbeiten. So können sowohl Standortvortei le ausgenutzt werden, als auch der Service verbessert werden, indem das Unternehmen  jeweils beim Kunden vor Ort präsent ist.  

Für Regierungen und Verwaltungen eröffnet sich ebenfalls ein großes Potential. Durch  Telekooperation kann die interne Zusammenarbeit verbessert, beschleunigt und flexibi lisiert werden. Andererseits kann der Service für den Bürger verbessert werden, indem  kleine, dezentrale Einheiten, unterstützt durch Kommunikations- und Telekooperations werkzeuge, sich vor Ort um seine Belange kümmern.  

Die oben erwähnten Szenarien benötigen jedoch eine flexible, zuverlässige, integrierte  und einfach zu bedienende technische Unterstützung durch unterschiedliche Telekoope rationswerkzeuge. Bei näherer Betrachtung stellt man fest, daß für die Bearbeitung der  meisten Fragestellungen mehr oder weniger stark ausgearbeitete und formalisierte Richt linien existieren. In Unternehmen werden diese zum Beispiel Geschäftsprozesse genannt.  Verwaltungen haben ebenfalls festgelegte Verfahrensweisen, wenn es beispielsweise um die  Bearbeitung eines Bauantrages geht. Für die Regierung sind Verfahren wie der Gesetz gebungsprozeß durch Gesetze klar geregelt (siehe hierzu auch \[Linke 98\] und Abschnitt  6.2).  

In fast allen diesen Prozessen wechseln sich stark strukturierte Teile und weniger stark  strukturierte Teile ab, teilweise wird unabhängig voneinander gearbeitet, teilweise gemein sam (siehe hierzu auch \[Borghoff Schlichter 95\]). Um den gesamten Bereich des koopera tiven Arbeitens vor diesem Hintergrund zu unterstützen, müssen also Werkzeuge gewählt  oder miteinander verbunden werden, die diese Arten des gemeinsamen Arbeitens in ih-  
2 *KAPITEL 1\. EINLEITUNG*  

rer Gesamtheit unterstützen. Da Systeme zur ganzheitlichen Prozeßunterstützung bisher  noch nicht existieren, Einzelsysteme aber bereits in hoher Güte verfügbar und bei vielen  Unternehmen im Einsatz sind, kann dieser Problembereich durch die Integration von Sy stemen zur Unterstützung des asynchronen Arbeitens und Systemen zur Unterstützung  des synchronen Arbeitens abgedeckt werden (siehe Kapitel4 und 5). Wichtig ist, daß wei terhin eine Möglichkeit besteht, die Richtlinien, welche zur Bearbeitung von Prozessen,  wie beispielsweise Bauanträgen, existieren, zu formalisieren, damit die Prozeßbearbei tung im integrierten System in ihrer Gesamtheit unterstützt werden kann. Ein weiterer  Vorteil ist, daß dieses Wissen über die Arbeitsprozesse dann auch zur weitergehenden  Unterstützung eines Benutzers verfügbar ist.  

Für die Unterstützung des asynchronen Bereichs sind Workflow-Management-Systeme  bestens geeignet. Eine Vielzahl dieser Systeme sind mittlerweile kommerziell verfügbar  und in den Unternehmen im Einsatz (siehe auch \[Stark Lachal 95\]; in Abschnitt 3.1.4.1  wird darauf gerrauer eingegangen).  

Multimediale Audio/Video Desktopkonferenzsysteme dienen dazu, den synchronen Be reich kooperativer Arbeit zu unterstützen. Sie bieten Audiokommunikation, Videokom munikation, gemeinsames Arbeiten an verteilten Anwendungen und sind in den Arbeits platzrechner integriert. Durch die fortschreitende Entwicklung der Technik sind diese  

Systeme heute in einer hohen Qualität und zu einem niedrigen Preis verfügbar. In der  Vergangenheit gemachte Erfahrungen und Untersuchungen haben in diesem Bereich zu  einem klaren Anforderungs- und Nutzenprofil für deren Einsatz in Unternehmen geführt  (siehe Abschnitt 3.1.4.2).  

Eine Forderung aus Benutzersicht an ein integriertes System ist die möglichst intuitive  Bedienbarkeit des Systems. Medienbrüche bei den Übergängen dürfen nicht stattfinden,  doppelte Arbeiten, also beispielsweise das Eingeben von Informationen in das eine System,  obwohl sie im anderen System verfügbar sind, sind zu vermeiden. Die mit Hilfe der  Systeme zu erledigenden Aufgaben müssen adäquat unterstützt werden.  

**1.1 Motivation**  

Bisher wurden im Bereich der Integration von Systemen zur Unterstützung automatisier ter Prozeßbearbeitung nahezu ausschließlich technische Probleme betrachtet. Es handelt  sich hierbei um Problematiken beim Systemaufruf und der Daten- und Dokumentenüber gabe.  

Inwieweit jedoch computerunterstützte Teamarbeit in einem größeren Umfang unterstützt  werden kann, wurde bisher in diesem Kontext noch nicht betrachtet. Ergebnisse aus dem  Bereich der Sozialpsychologie über die Zusammenarbeit von Teams sind daher noch nicht  in die Überlegungen zur Systemintegration mit eingeflossen. Die Herausforderung besteht  hierbei sich einen Überblick über die einschlägigen Forschungsarbeiten zu verschaffen, die  Verwendbarkeit der Ergebnisse für ein integriertes System zur automatisierten, synchro nen und asynchronen Prozeßbearbeitung zu bewerten und sie dann zu operationalisieren.  Das automatische Informieren der Mitarbeiter zur Vorbereitung einer Konferenz über  deren Kontext im Arbeitsprozeß ist ein Punkt, der bisher ebenfalls noch nicht betrach   
tet wurde. Speziell in Workflow-Management-Systemen ist dies normalerweise gar nicht  möglich, da nur der aktuelle Bearbeiter Zugriff auf Prozeßdaten hat und es keine Möglich keit gibt, mehrere Bearbeiter eine Tätigkeit gemeinsam ausführen zu lassen. Im Zusam-  
*1.2. ZIEL DER ARBEIT* 3  

menhang mit der automatisierten Prozeßbearbeitung ist sehr viel Wissen über die Prozesse  und die daran beteiligten Personen in einem Unternehmen vorhanden. Dies kann dazu  benutzt werden, die Arbeit mit einem solchen System zu unterstützen und transparenter  zu gestalten, was auch ein Beitrag zur Qualitätssicherung (beispielsweise ISO 9000\) ist.  

Gleiches gilt für die Konferenznachbereitung. Das Verschicken von Protokollen, welche  den Hintergrund für zukünftige Arbeiten darstellen, werden, wenn überhaupt, manuell  erstellt und versandt.  

Die Möglichkeit zur Selektion von mehreren Mitarbeitern, die gemeinsam und gleichzeitig  als Team eine Tätigkeit bearbeiten, ist in Workflow-Management-Systemen ebenfalls nicht  gegeben. Dies wird jedoch benötigt, wenn ein Team zu einer Konferenz zusammenkommen  soll.  

In diesem Zusammenhang sind dann gleichfalls die Selektionsmöglichkeiten der Workflow Management-Systeme für Mitarbeiter nicht mehr ausreichend, da hier ausschließlich nach  individuellen Kriterien selektiert werden kann, wie beispielsweise Rolle, Stelle oder Kom petenz. Im Kontext einer Integration gewinnen Fragestellungen an Bedeutung, inwieweit  sich Teams möglichst schnell zusammenfinden können oder ob sie gut zusammenarbeiten  oder eine Kombination aus mehreren Kriterien.  

Eine Herausforderung besteht nun darin in Hinblick auf die Nutzung eines integrierten  Systems im realen Umfeld, möglichst viele Erkenntnisse zur Unterstützung der Teamarbeit  mit Hilfe der gegebenen Ressourcen zu operationalisieren.  

Weiterhin ist bisher weder in Videokonferenz- noch in Workflow-Management-Systemen  ein umfassendes Zeitmanagement in der Form realisiert, daß beispielsweise basierend auf  elektronischen Terminkalendern Termine für gemeinsame Arbeiten oder Konferenzen ge sucht und festgelegt werden und daß diese Konferenzen zum festgelegten Zeitpunkt au tomatisch gestartet werden. Ebenso muß in diesem Umfeld ein Änderungsmanagement  realisiert werden, so daß durch Absagen des Termins durch einen Teilnehmer die anderen  Teilnehmer davon informiert werden und ein neuer Termin festgelegt wird. Für diesen  Problembereich ist sowohl ein Kalendersystem zu integrieren, als auch Dienste bereit zustellen, die die oben gestellten Anforderungen realisieren und in das Gesamtsystem  integrieren.  

Abbildung 1.1 skizziert die Folgerung aus obigen Anmerkungen für die Integration von  synchronen und asynchronen Systemen. Im Gegensatz zu den bisherigen Ansätzen, bei  denen die Systeme direkt miteinander gekoppelt wurden, wird hier ein Vermittler dazwi schengeschaltet, der zusätzliche Services für die Einzelsysteme bereit stellt.  

**1.2 Ziel der Arbeit**  

Das Ziel dieser Arbeit ist, beginnend mit der Analyse der Integration zwischen synchroner  und asynchroner computerunterstützter kooperativer Arbeit im Kontext der automatisier ten Prozeßbearbeitung Anforderungen zu untersuchen, die an den Übergängen zwischen  den Systemen zur Unterstützung der Gruppenarbeit dienen, diese zu operationalisieren  und in ein Gesamtsystem zu integrieren.  

Hierzu sollen Erkenntnisse aus unterschiedlichen Disziplinen herangezogen werden. Der  Bereich der "Computer Supported Cooperative Work" (siehe Abschnitt 3.1) bildet den  Rahmen für diese Arbeit. Erkenntnisse aus der "Sozialpsychologie" (siehe Abschnitt 3.3)  sollen untersucht werden, um den Bereich der Teamarbeit besser zu verstehen, damit   
4 *KAPITEL 1\. EINLEITUNG  ![][image1]***Vermittler**  

Abbildung 1.1: Der Vermittler zwischen synchronen und asynchronen Systemen  

dieser adäquat unterstützt werden kann. Zur Abbildung der herausgearbeiteten Verbes serungspotentiale in ein Computersystem sollen Techniken aus dem Bereich der "Künst lichen Intelligenz" (siehe Abschnitte 3.6.2 und 3.6.3) identifiziert werden, welche deren  Umsetzung ermöglichen.  

Weiterhin soll ein Konzept für eine möglichst umfassende Integration der synchronen  und asynchronen Arbeitsweise erstellt werden, welche die unterschiedlichen Systeme und  Dienste vereinigt.  

Schließlich sollen diese Anforderungen exemplarisch im System Virtual Team Assi stant operationalisiert werden, um eine nahtlose und tiefe Integration zwischen den bei den Arbeitsformen und somit eine möglichst weitgehende Unterstützung der Benutzer zu  erreichen.  

Die Realisierung soll eine generische und adaptierbare Implementierung sein, bei der die  Voraussetzungen in einem Unternehmen berücksichtigt werden und die somit an unter schiedliche Gegebenheiten und Systeme angepaßt werden kann. Sie soll daher exem plarisch an einem "typischen Vertreter" eines Workflow-Management-Systems und eines    
multimedialen Audio/Video Desktopkonferenzsystems demonstriert werden.  Zusammenfassend sollen folgende Ziele erreicht werden:  

• Es soll ein Konzept zur Integration von synchroner und asynchroner computerun terstützter Prozeßbearbeitung erstellt werden, welches exemplarisch durch die Inte gration eines Workflow-Management-Systems und eines multimedialen Audio/Video  Desktopkonferenzsystems implementiert wird.  

• Die Teammitglieder sollen über den Kontext ihrer Tätigkeiten im Arbeitsprozeß in formiert werden, speziell beim Übergang zwischen asynchroner und synchroner Ar beitsweise. Zur Konferenzvorbereitung soll hierzu ein automatisch erstelltes "Brie fing" versandt werden, zur Konferenznachbereitung ein automatisch erstelltes "Oe Briefing". Diese Dokumente sollen so gestaltet sein, daß sie zur Qualitätssicherung  

(ISO 9000\) beitragen.  

• Die multimedialen Audio/Video Desktopkonferenzen sollen durch eine automatische  Konferenzorganisation unterstützt werden.   
*1.3. AUFBAU DER ARBEIT* 5  

Es soll ein Terminmanagement integriert werden, bei dem Konferenztermine  automatisch festgelegt werden können, wobei die Konferenz zu diesem Zeit punkt weiterhin automatisch gestartet wird. Hierbei sollen auch Terminände rungen berücksichtigt werden.  

Die Selektion von Teammitglieder für Konferenzen soll halb- und vollauto matisch unter Einbeziehung mehrerer Kriterien, wie etwa der Teamleistung  stattfinden.  

Die Ermittlung der Teamleistung soll in das System integriert werden.  

**1.3 Aufbau der Arbeit**  

In dieser Arbeit werden in Kapitel 2 zuerst verwandte Ansätze vorgestellt, die sich eben falls mit der Integration von synchronen und asynchronen Systemen zur Unterstützung  von Gruppenarbeit im Kontext der automatisierten Prozeßbearbeitung beschäftigen.  Danach werden in Kapitel 3 grundlegende Erkenntnisse aus benachbarten Disziplinen her angezogen und in einer Zwischenbilanz zu einem Anforderungskatalog (siehe Abschnitt  3.5) für die Integration zusammengestellt. In Abschnitt 3.6 werden Konzepte und Werk zeuge vorgestellt, welche dazu dienen, die gestellten Anforderungen zu realisieren.  Darauf aufbauend wird das Integrationskonzept entworfen (Kapitel 4).  Zur Realisierung des Integrationskonzeptes in Kapitel 5 werden die Konzepte aus dem  vorhergehenden Kapitel mit den Techniken aus Abschnitt 3.6 in Verbindung gebracht  und die Realisierung des Virtual Team Assistant beschrieben.  

Danach folgen Einsatzbeispiele des Virtual Team Assistant (siehe Kapitel 6), unter  anderem aus dem Umfeld des Projektes Polivest \[Linke 98\]).  

Anschließend werden in Kapitel 7 weitere Einsatzmöglichkeiten des Systems erläutert.  Zum Schluß wird in Kapitel 8 ein Ausblick auf mögliche Weiterentwicklungen des Virtual  Team Assistant gegeben.   
**Kapitel 2**  

**Bisherige Systeme zur Integration  asynchroner und synchroner  Arbeitsweise zur Prozeßbearbeitung**  

In einem kommerziellen System und in einer Reihe von Forschungsprototypen wird die  Integration von asynchroner und synchroner computerunterstützter Arbeit im Kontext  der automatisierten Prozeßbearbeitung aufgegriffen.  

Zur Untersuchung der unterschiedlichen Ansätze werden folgende Kriterien betrachtet:  • Werden Videokonferenzen mit mehr als zwei Teilnehmern unterstützt?  

• Handelt es sich um eine komponentenbasierte Architektur unter Verwendung kom merzieller Teilsysteme und unter Beachtung internationaler Standardisierungs bemühungen oder handelt es sich um eine Eigenentwicklung?  

• Sind die Teilsysteme eng gekoppelt oder nur lose gekoppelt, d.h. besteht eine Ver bindung mit Austausch von Daten und Steuerinformationen oder sind sie nur auf  dem gleichen Rechner ablauffähig?  

• Werden Konferenzvor- und Nachbereitung unterstützt?  

• Ist ein Terminmanagement integriert?  

• Gibt es eine Möglichkeit die Leistungsfähigkeit eines Teams zu beurteilen?  

Die unterschiedlichen Ansätze werden im Folgenden vorgestellt und abschließend disku tiert.   
8 *KAPITEL 2\. BISHERIGE SYSTEME ZUR INTEGRATION*  2.1 Kommerzielle Systeme  

Im Bereich der kommerziellen Systeme ist eine Integration von synchronem und asynchro nem Arbeiten in einem Produkt von Lotus \[Lotus 98\] zu finden.  

2.1.1 Realtime Notes  

Lotus Notes ist ein Messaging und Groupware Programm. Es ist ein Client-Server System,  welches auf verteilten, gemeinsamen, mail-fähigen Datenbanken mit einer replizierten Ar chitektur basiert. Gemeinsames asynchrones Arbeiten ist durch Email und den Zugriff  auf gemeinsame Notes-Datenbanken möglich. Strukturierte Bearbeitung von Vorgängen  wird durch eine Makrosprache ermöglicht, in der eine bestimmte Abarbeitungsreihenfol ge, wie in einer Programmiersprache, erstellt werden kann. Weiterhin ist ein gemeinsam  nutzbares Adreßbuch integriert und ein Kalender.  

Im Produkt RealTime Notes 2.0 ist eine Integration von Lotus Notes ab Version 4.1  und dem multimedialen Audio/Video Desktopkonferenzsystem ProShare "Conferencing  Video System 200 V. 2.0" von Intel \[Intel 98\] realisiert1. Folgende zusätzlichen Merkmale  unterstützen dabei die Integration:  

Gemeinsames Adreßbuch Die Adressen für das Konferenzsystem sind in das Notes  Adreßbuch integriert.  

Anrufprotokoll Alle ein- und ausgehenden Anrufe werden protokolliert.  

Konferenzeditor Ein spezieller Editor steht zur Verfügung, um während der Konferenz  Notizen zu machen.  

Protokoll der Konferenzaktivitäten Es werden File Transfer, Application Sharing,  und das Hinzukommen und Verlassen von Konferenzteilnehmern protokolliert.  

Lotus Notes kann als eine Entwicklungsplattform für kooperative Anwendungen ange sehen werden. Durch Systemerweiterungen können auf der Basis von Notes Workflow Management-Systeme implementiert werden. Systeme, wie Prozessware \[Prozessware 98\]  oder GroupFlow \[Nastansky Hilpert 1995\], sind Workflow-Management-Systeme, welche  

auf Basis von Lotus Notes implementiert wurden. Sie werden hier nicht weiter bespro chen, da sie im Bereich der Integration mit Konferenzsystemen keine weitergehenden  Möglichkeiten, als die von Notes zur Verfügung gestellten, bieten.  

2.1.2 Diskussion  

In Lotus Notes wird eine technischen Integration von synchronem multimedialen Au dio/Video Desktopkonferenz- und asynchronem Groupwaresystem realisiert. Durch ein  gemeinsames Adreßbuch können Benutzer einheitlich für beide Systeme verwaltet wer den. Ein spezieller Editor dient dazu Notizen in der Konferenz zu machen und Ergebnisse  

1Im Produkt "LearningSpace" wird eine Integration von Lotus Notes bzw. Domino und einem in ternetbasierten multimedialen Audio/Video Desktopkonferenzsystem inklusive Terminmanagement und  der Möglichkeit von Mehrpunktverbindungen realisiert. Das Produkt es jedoch ausschließlich für den  Bereich "Fernlernen" ausgelegt und kann nicht zur automatisierten Prozeßbearbeitung verwandt werden.  Konferenzvor-und Nachbereitung, sowie Betrachtungen der Teameffizienz fehlen jedoch auch hier.   
*2.2. SYSTEME AUS DEM UNIVERSITÄREN UMFELD* 9  

festzuhalten. Ein Kalender ist in das System integriert, mit dem sich Termine für Grup pen von Benutzern festlegen lassen. Konferenzvor- und Nachbereitung, sowie Kriterien  über Teameffizienz fehlen. Die Lösung ist ohne weitere Integrationsarbeiten über ISDN  nur zweipunktfähig.  

**2.2 Systeme aus dem universitären Umfeld**  

In den folgenden Abschnitten werden die Arbeiten aus Forschungseinrichtungen und Uni versitäten dargestellt. Es handelt sich hierbei hauptsächlich um Forschungsprototypen.  

**2.2.1 PlanKo**  

PlanKo ist ein Kooperationsmanagement-System \[Schaller Schwab 97\]. Der Fokus liegt  hauptsächlich darauf unterschiedliche asynchrone CSCW-Anwendungen in einem einheit lichen System zusammenzufassen; synchrone CSCW-Anwendungen werden am Rande  auch mitbetrachtet. Die Architektur ist in Abbildung 2.1 beschrieben. Der Cooperation 

Notifikationsdienste der unterschiedlichen Anwendungen  

Workflow- \]    
Management   
C\\ Kooperations- \\\_.::\_; zugangsebene  

System    
\[ GOSS  

Datenbasis  

\]  

Konferenz   
system  

G Ebene der    
kooperativen    
Anwendungen  

Ebene der    
Datenhaltung  

Einzelne Groupware- und Workflow-Management-Systeme    
Integrationsdienste  

Abbildung 2.1: Bestandteile des PlanKo-Kooperationsmanagement-Systems  

Manager {CM) stellt die einheitliche Zugangsebene zu Definition, Verwaltung und Teilnah me an Kooperationen dar. In ihn sind ebenfalls die Notifikationsdienste der unterschied lichen Anwendungen integriert. Ablaufabhängigkeiten, welche durch Wartebeziehungen  zwischen den einzelnen Aktivitäten ausgedrückt werden, werden von der Action Flow  Control Komponente (AFC) geregelt. Der Cooperative Context Control (CCC) verwaltet   
10 *KAPITEL 2\. BISHERIGE SYSTEME ZUR INTEGRATION*  

Nutzerrechte für Datenobjekte oder den aktuellen Entscheidungsstatus von Gruppendis kussionen.  

Grundsätzlich wird bei PlanKo eine objektorientierte Sichtweise auf Kooperationen einge nommen und keine Ablaufsicht, wie bei herkömmlichen Workflow-Management-Systemen.  PlanKo kennt Basiskooperationen, komplexe Kooperationen und Kooperationsgemein schaften \[Augsburger Ludwig Schwab Wittke 96\]. Kooperationen, die durch ein einzelnes  CSCW-System direkt unterstützt werden, heißen Basiskooperationen. Ein Geschäftspro zeß, der aus mehreren Basiskooperationen zusammengesetzt ist, realisiert eine komplexe  Kooperation. Dies ist beispielsweise ein Workflow, in den eine Gruppendiskussion inte griert ist. Jede Basiskooperation gehört genau zu einer komplexen Kooperation. Komple xe Kooperationen werden durch Teilnehmer, Basiskooperationen, gemeinsame Koopera tionsgegenstände, die Menge der zwischen den Basiskooperationen definierten Abhängig keiten, ihrer Zugangsform und ein Rechtesystem beschrieben. Der äußere Rahmen für  komplexe Kooperationen bildet die Kooperationsgemeinschaft, welche aus Akteuren, ei 

nem Rechtesystem und den komplexen Kooperationen selbst besteht.  Abbildung 2.2 zeigt die grafische Benutzeroberfläche des Cooperation-Managers von Plan Ko. Die Kooperation wird durch ineinandergeschachtelte Polygone visualisiert. Die Kan ten des äußeren Polygons repräsentieren die Teilnehmer, die Kooperationsgegenstände  bilden das innere Polygon.  

**Cooperatlon lnetanca**  

**Budgetplanung**  

**Polygon mit Koopen onageg•natllnden**  

**Polygon mit Bul• koopenltion**  

Abbildung 2.2: Repräsentation einer Kooperation auf der Benutzeroberfläche von PlanKo   
*2.2. SYSTEME AUS DEM UNIVERSITÄREN UMFELD* 11  

PlanKo beinhaltet zur Zeit ein Workflow-Management-System, ein Gruppenentschei dungssystem, ein Diskussionstool und ein Präsentationswerkzeug.  

**2.2.2 Diskussion**  

Die technische Integration und die Koppelung auf den verschiedenen Ebenen ist bei  PlanKo eine enge Koppelung, da alle CSCW-Systeme, einschließlich des Workfl.ow Management-Systems, in einer gemeinsamen Umgebung implementiert wurden und auf  einen gemeinsamen Datenbestand zugreifen. Sie können somit problemlos Informationen  austauschen. Synchrone Kooperation mit mehreren Teilnehmern ist durch ein Chat-Tool  möglich, Videokonferenzen sind jedoch nicht integriert. Ein Kalender ist ebenfalls nicht  in das System integriert. Konferenzvor- und Nachbereitung, sowie Fragestellungen über  Teameffizienz werden nicht thematisiert.  

**2.2.3 WAM**  

Das Projekt WAM (Wide Area Multimedia Group Interaction) \[Faustmann 96-1\] hat die  Entwicklung eines flexiblen Workflow-Management-Systems zum Ziel. Es fokussiert auf:  

• Generische Unterstützung von Gruppenaktivitäten  

• Unterstützung von synchronen und asynchronen Aktivitäten  

• Unterstützung von vordefinierbaren und ad-hoc Aktivitäten  

WAM basiert auf einem kommunikationsorientierten Konzept, welches an die Sprech akttheorie (siehe \[Searle 69\]) angelehnt ist. Bei der Aufgabenzuweisung werden hierbei  Vereinbarungen zwischen Mitarbeitern getroffen. Ein Beispiel ist die Aufforderung ei nes Mitarbeiters eine Tätigkeit auszuführen, woraufhin der aufgeforderte Mitarbeiter die  Ausführung der Aufgabe zusagt. Es gibt verschiedene Möglichkeiten an dieser Tätigkeit  zu arbeiten. Entweder wird die Tätigkeit direkt bearbeitet oder sie wird in Untertätigkei ten zergliedert und (teilweise) delegiert oder es wird ein Bearbeitungsprozeß (Workflow)  zu deren Bearbeitung definiert. Diese Arbeitsabläufe werden dann auf Petri Netze (siehe  z.B. \[Claus Schwill 88\]) abgebildet.  

In \[Messer Faustmann 95\] wird ein Konzept zum Einbinden von multimedialen Au dio/Video Desktopkonferenzsystemen in Workflows vorgeschlagen. Gemeinschaftsaufga ben, wie sie in solchen Konferenzen zu bearbeiten sind, werden durch n-fach Expansion  eines Tätigkeitsknotens realisiert, wobein die Anzahl der Gruppenmitglieder angibt. Dar aufhin wird jedem Einzelnen die entsprechende Aufgabe gleichzeitig gestellt. Die Konfe renzvorbereitung wird dadurch unterstützt, daß die Teilnehmer auf die Umlaufmappe des  Workfl.ows, welche sämtliche zum Flow gehörenden Dokumente beinhaltet, bereits vor der  Konferenz zugreifen können. Äquivalent wird die Konferenznachbereitung gehandhabt.  Die Konferenz muß zum festgelegten Zeitpunkt von einem Teilnehmer manuell gestartet  werden, die übrigen Teilnehmer werden dann zur Konferenz eingeladen. Das Workfl.ow Management-System kann Erinnerungen versenden, falls ein Teilnehmer die Einladung  zur Konferenz nicht angenommen hat.  

Ein Beispiel, wie Konferenzvor- und Nachbereitung als Tätigkeiten eines Workfl.ows un terstützt werden können zeigt Abbildung 2.3. Die Teilnehmer werden durch eine kurze   
12 *KAPITEL 2\. BISHERIGE SYSTEME ZUR INTEGRATION*  

Nachricht davon in Kenntnis gesetzt, daß die nächste Tätigkeit eine Konferenz ist und sie  haben Zugriff auf die in der Konferenz zu bearbeitenden Dokumente. Nach der Konferenz  ist der Zugriff auf die Dokumente für eine gewisse Zeit weiterhin erlaubt.  

**VIdeokonferenz**  

**MaJ)pe bereitgestellt**  

**Termin verelnb8ren**  

**Termin vereinbart**  

**Tagesordnung und Einladung versenden**  

**Tegeaordnung und Elnllldung verMnct.t**  

**N-Tagesordnung**  

**TageilOrdnung bestlUgt**    
**notwendig**  

**Protokoll nicht  notwendig**  

**Videokonferenz**    
**Neue T41i10\$0tdnung und  Einladung versenden**  

**Protokoll notwendig**  

Abbildung 2.3: Workflow zur Konferenzunterstützung in WAM  

**2.2.4 Diskussion**  

In WAM wird ein selbstentwickeltes Workflow-Management-System mit einem multime dialen Audio/Video Desktopkonferenzsystem, basierend auf der standardisierten MMC  Architektur der DeTeBerkom (siehe beispielsweise \[WoTel 96\]) gekoppelt. Es handelt  sich um eine enge Koppelung, da das Workflow-Management-Syst em auf Ereignisse des  Konferenzsystems reagieren kann. Die Lösung ist ohne weitere Integrationsarbeiten über  ISDN nur zweipunktfähig. Tätigkeiten, wie beispielsweise Konferenzvor- **und** Nachberei tung werden unterstützt. Auf die Dokumente, welche in der Konferenz besprochen werden  sollen, kann von a llen Konferenzteilnehmern zugegriffen werden. Die Terminvereinbarung   
*2.2. SYSTEME AUS DEM UNIVERSITÄREN UMFELD* 13  

muß von den Teilnehmern selbst erledigt werden. Teameffizienzgedanken werden nicht  thematisiert.  

**2.2.5 ContAct**  

ContAct ist ein Prototyp eines Groupwaresystems zur asynchronen und synchronen örtlich  getrennten Koordination von Modellierungsaktivitäten \[Galler Hagemeyer Scheer 95-1\].  Das System unterstützt, basierend auf der Sprechakttheorie, die Koordination von semi und unstrukturierten Aktivitäten zur Transformierung von Geschäftsprozeßmodellen in  Workflows. Dieser Prozeß wird schrittweise und von unterschiedlichen Personengruppen  durchgeführt.  

\--   
\~ ..... I    
"\*'\*'\~'\*\*' ........ ,..,.....\~.,\~    
\&lf\~f'aiiOIWtalgllr\\  

Abbildung 2.4: Die ContAct Benutzeroberfläche  

Die Abbildung 2.4 zeigt die Benutzeroberfläche des Systems ContAct (aus  \[Galler Hagemeyer Scheer 95-2\]).    
ContAct dient dazu, den Prozeß der Transformierung von Geschäftsprozeßmodellen in  Workflows zu koordinieren und stellt Kommunikations- und Notifikationsdienste zur  Verfügung. Es verbindet als Basissysteme das Geschäftsprozeßmodellierungssystem ARIS  \[IDS 98\] und das Workflow-Management-System FlowMark \[IBM 98\]. Zur synchronen  Kommunikation und dem gemeinsamen Bearbeiten der Workflowmodelle ist ein multime diales Audio/Video Desktopkonferenzsystem in ContAct integriert.   
14 *KAPITEL 2\. BISHERIGE SYSTEME ZUR INTEGRATION*  **2.2.6 Diskussion**    
ContAct bildet eine Art übergeordnete Kommunikations- und Koordinationsschicht zur  Transformation von Geschäftsprozeßmodellen in Workflowmodelle. Der Prozeß, der hier bei unterstützt wird, ist folglich nicht die Ausführung des Workflows im Workflow Management-System, sondern die Modeliierung von Workflows in diesem System. Des halb steht in ContAct ein Konferenzsystem als zusätzliches Kommunikationsmedium  zur Verfügung, ist aber nicht in das Workflow-Management-System integriert, sondern  mit ContAct lose gekoppelt. Es handelt sich um eine komponentenbasierte Architek tur unter Verwendung eines kommerziellen Geschäftsprozeßmodellierungs- und Workflow Management-Systems. Das System, in welches das Konferenzsystem integriert ist , ist  jedoch eine Eigenentwicklung. Ein umfangreiches Terminmanagement für Gruppen mit  automatischem Starten einer Konferenz ist nicht realisiert. Konferenzvor- und Nachbe reitung, sowie Kriterien der Teameffizienz fehlen. Die Lösung ist ohne weitere Integrati onsarbeiten über ISDN nur zweipunktfähig.  

**2.2.7 Dolphin**  

Dolphin ist ein verteiltes Hypermedia-System zum Unterstützen von face-to\-face oder  verteilten elektronischen Sitzungen \[Haake Neuwirth Streitz 94\]. Es zielt auf die Un terstützung von formalen und informalen Sitzungen ab. In einem Editorfenster (siehe  Abbildung 2.5), welches ein Hypertextdokument enthält, kann der Benutzer verschiedene  

![][image2]Abbildung 2.5: Eine Beispielsitzung in Dolphin   
*2.2. SYSTEME AUS DEM UNIVERSITÄREN UMFELD* 15  

Hypertextknoten generieren, welche wiederum zu leeren Hypertextdokumenten führen.  Es können weiterhin Texte über die Tastatur eingegeben werden. Es werden Freihand zeichnungen unterstützt, ebenso, wie das Importieren von Graphiken, Text und den pro prietären Hypermediastrukturen.  

Mit Dolphin werden die asynchrone Konferenzvor- und Nachbereitungsphase unterstützt.  In der Vorbereitungsphase kann mit Hilfe des Systems bereits die Tagesordnung aus gearbeitet werden. Es können ebenso einige Punkte der Tagesordnung vorbereitet und  bereits ausformuliert werden. In der Nachbereitungsphase steht das System weiterhin zur  Verfügung, um Ideen aus der Konferenz zu organisieren und danach auszuarbeiten.  

**2.2.8 Diskussion**  

Dolphin ist im Gegensatz zu den erwähnten Systemen nicht auf die automatisierte Pro zeßbearbeitung ausgelegt, es kann jedoch mit gewissen Einschränkungen dazu benutzt  werden. Der Fokus von Dolphin liegt auf der Unterstützung von Gruppenarbeit in Kon ferenzen mit mehreren Teilnehmern. Im weitesten Sinne können Prozesse jedoch als vor strukturierte Dokumente oder Todo-Listen definiert werden. Das System unterstützt  Konferenzvorbereitung und Konferenznachbereitung, indem es den Teammitgliedern vor  und nach der Konferenz zur Verfügung steht, wodurch auch asynchrone Aktivitäten un terstützt werden. Von einer Koppelung unterschiedlicher Systeme kann in diesem Zu sammenhang nicht gesprochen werden. Dolphin kann auch als unabhängiges, sitzungsun terstützendes System in Videokonferenzen eingesetzt werden. Ein umfangreiches Termin management für Gruppen mit automatischem Starten einer Konferenz ist nicht realisiert.  Überlegungen hinsichtlich Teameffizienz fehlen.  

**2.2.9 WoTel**  

WoTel ist ein System zur flexiblen Vorgangsbearbeitung, wobei die Unterstützung von  kooperativen stark-, teil-, und unstrukturierten Arbeitsabläufen im Vordergrund steht  (siehe \[WoTel 95\]).  

Der Prototyp integriert asynchrones kooperatives Arbeiten durch ein Workfiow Management-System und synchrones kooperatives Arbeiten durch ein multimediales Au dio/Video Desktopkonferenzsystem. Die Integration basiert auf einer generischen Broker Architektur (siehe hierzu Abbildung 2.6), die bei der gewählten Implementierung nicht nur  

synchrone und asynchrone Systeme zusammenführt, sondern auch verschiedene Betriebs systeme. Bisher werden das Workfiow-Management-System WorkParty \[SNI 96-3\] (Win dows) und das multimediale Audio/Video Desktopkonferenzsystem GroupX \[GroupX 96\]  (UNIX) unterstützt.  

Zur Prozeßbearbeitung werden Konferenzen automatisch aus einem Workfiow aufgeru fen. Nach Beendigung der Konferenz wird der Workfiow weitergeführt. Medienbrüche  werden dadurch reduziert, daß die Daten zwischen Workfiow-Management-System und  Konferenzsystem ausgetauscht werden. Der WoTel-Prototyp kann auch im Verbund mit  

anderen Workfiow-Management-Systemen und Konferenzsystemen eingesetzt werden.  Mehrpunktkonferenzen über ISDN werden durch eine MCU2 unterstützt.  

2MCU bedeutet: Multipoint Contra\] Unit; siehe Abschnitt 3.1.4.2.   
\~    
16 *KAPITEL 2\. BISHERIGE SYSTEME ZUR INTEGRATION*  \~zeu\~    
**Konferenz beschreibung**    
**\[1\\llllMllilllar)**    
**flicbad w.Hr**    
**C.rMrd C'art.sc:h**  

**Konferenz**   
. \~    
**Protokoll**  

Abbildung 2.6: Die Broker-Architektur des WoTel Prototypen  

**2.2.10 Diskussion**  

In WoTel sind Konferenzen in die Prozeßbearbeitung durch einen Broker integriert. Es  handelt sich hierbei um eine enge Koppelung der Systeme mit dem Ziel einer ganzheitli chen Prozeßbearbeitungsplattform. Ein umfangreiches Terminmanagement für Gruppen  ist nicht realisiert. Konferenzvor- und Nachbereitung, sowie Betrachtungen über Teamef fizienz fehlen.  

**2.3 Fazit**  

Die in den vorhergehenden Abschnitten erwähnten Systeme unterstützen sowohl synchro nes als auch asynchrones computerunterstütztes Arbeiten im Kontext einer automatisier ten Prozeßbearbeitung. Da bereits eine Vielzahl kommerzieller Systeme für die Teilberei che Workftow-Management und Durchführung von Desktopkonferenzen existieren, ist es  

unwahrscheinlich, daß eines der universitären Systeme zur Produktreife entwickelt wird  und sich am Markt durchsetzen wird. Ein vielversprechender Weg ist daher die Integration  bereits etablierter Systeme.  

Im Produkt Lotus Notes werden hierzu zwei kommerzielle Standardsysteme integriert.  Dieser Ansatz wird ebenfalls in WoTel verfolgt, teilweise auch in ContAct.  Eine enge Koppelung der Systeme ist in PlanKo, WAM und WoTel realisiert, wobei   
*2.3. FAZIT* 17  

Informationen zwischen den Systemen ausgetauscht werden und auf spezielle Ereignisse  im jeweils anderen System reagiert werden kann.  

In WAM werden zur Unterstützung von Konferenzen Tätigkeiten, wie beispielsweise  Konferenzvor- und Nachbereitung, integriert. In Dolphin steht das System den Team mitgliedern zur Konferenzvor- und Nachbereitung ebenfalls zur Verfügung.  Ein Terminmanagement ist im Produkt Lotus Notes realisiert. Eine umfangreichere Funk tionalität für Gruppen, welche automatisches Starten einer Konferenz und Wiederaufruf  der Konferenzplanungsphase bei Absagen eines potentiellen Konferenzteilnehmers bein haltet, ist jedoch nicht vorhanden und muß von den Teilnehmern selbst erledigt werden.  Die Mehrpunktfähigkeit von Videokonferenzen ist in Lotus Notes, WAM und ContAct  mit Hilfe einer MCU grundsätzlich gegeben, sie wird jedoch in das Konzept nicht explizit  einbezogen.  

Eine weitergehende Unterstützung der synchronen Gruppenarbeit und der hieraus er wachsenden speziellen Anforderungen und Möglichkeiten, wie zum Beispiel Gedanken der  Teameffizienz, ist jedoch in keinem der Systeme vorgesehen.  

Das Ziel bei einem ganzheitlichen Ansatz zur automatisierten Prozeßbearbeitung besteht  darin, sämtliche Anforderungen zu erfüllen. Dies soll im System Virtual Team Assi stant realisiert werden. Abbildung 2.7 stellt die verschiedenen Ansätze nochmal in einer  Tabelle gegenüber.  

Rea\~1me Notes PlanKe WAM ContAct Dolphm Wo Tel *VTA*    
1 3 1 Konferenzen m1t Teilnehmern \>2 \- \+ \- 

1 3    
\- \+ \+ \+    
Komponentenbasierte Architektur *\+I-* 4  

VS E1genentW1ck1ung \+ \- *\+I-* 2    
Enge Koppelung \+ \+  Konferenzvor-und Nachberatung \- \- \+  lntegnertes Terminmanagement \+ \- \- TeameffiZienzbewertung \- \- \- 1  

*\+I-* 5  \-   
\-   
\-   
\-   
\- \+ \+  entfällt \+ \+  \+ \- \+  \- \- \+  \- \- \+  

MehrPJnktfählg uber ISet.J m1t e1ner MCU, Jedoch keme mult1med1alen Aud1o/V1deo  Integration der MCU Jedoch n1cht realisiert Desktopkonferenzen    
2    
Gemeinsames Adreßbuch Das Workflow-Management-System 1st ane  E1genentw1cklung, das Konferenzsystem    
bas1ert auf dem MMC Standard der    
DeTeBerkom  

E1n kommerz1eUes Workflow-Management System 1st vorhanden. das System. m  welches das mult1med1ale Aud1oiV1deo  Desktopkonferenzsystem 1ntegnert 1st,  1st Jedoch e1ne Eigenentwicklung  

Abbildung 2.7: Der Vergleich der beschriebenen Systeme   
**Kapitel 3**  

**Grundlagen**  

In diesem Kapitel wird zuerst auf den Begriff "CSCW" eingegangen. Es werden die  verschiedenen Facetten dieser Forschungsrichtung beleuchtet und die relevante Literatur  diskutiert.  

Ein zentraler Begriff ist hierbei die Gruppe (siehe Abschnitt 3.1.1). Es werden zuerst all gemeine Überlegungen zum Begriff der Gruppe angestellt. Danach wird in Abschnitt 3.1.2  das Problem der Koordination von Tätigkeiten innerhalb einer Gruppe näher betrachtet.  Anschließend werden die Auswirkungen der Charakteristiken verschiedener Medien auf  die Kommunikation und das Problemlösen innerhalb einer Gruppe diskutiert (siehe Ab schnitt 3.1.3). Danach folgt in Abschnitt 3.1.4 die Vorstellung zweier Systemklassen für  die Unterstützung kooperativer Arbeit.  

In Abschnitt 3.2 werden kurz Aspekte der Unternehmensorganisation vorgestellt, um im  folgenden Abschnitt 3.3 vor diesem Hintergrund tiefergehend auf eine spezielle Form von  Gruppen, die Arbeitsgruppen und Teams einzugehen, welche für diese Arbeit von besonde rer Bedeutung sind. Nach einer kurzen Betrachtung über Qualitätsstandards (Abschnitt  3.4) folgt in Abschnitt 3.5 eine erste Zwischenbilanz und ein Forderungskatalog an eine  integrierte Plattform zur Prozeßbearbeitung.  

Abschnitt 3.6 zeigt dann die technischen Grundlagen aus verschiedenen Disziplinen auf,  wie Künstliche Intelligenz, Graph Visualisierung und Informationssysteme, um die ge stellten Anforderungen zu operationalisieren.  

Das Kapitel schließt mit einer Diskussion ab (Abschnitt 3.7).  

**3.1 cscw**  

Der Bereich der "Computergestützten Kooperativen Arbeit" (CSCW) beschäftigt sich,  wie der Name bereits sagt, mit der Unterstützung von Gruppenarbeit durch Compu tersysteme. Hierbei arbeiten *Forscher aus den Bereichen Rechner-technologie, Kommu nikationstechnik, Informationssysteme, Soziologie und Organisationstheorie zusammen*  (Borghoff Schlichter 95\]. In Anlehnung an (Streitz Geißler Holmer 98\] können die Facet ten dieses Arbeitsgebiets wie folgt illustriert werden (siehe Abbildung 3.1). Das Zusam menspiel dieser unterschiedlichen Disziplinen führt dazu, daß das Gebiet der CSCW auf  unterschiedliche Art und Weise betrachtet wird, je nachdem, welche Sichtweise der Be trachter einnimmt oder in welcher wissenschaftlichen Tradition er steht. (überquelle 91\]  unterscheidet vier verschiedene Sichtweisen auf das Gebiet der CSCW:   
20 *KAPITEL 3\. GRUNDLAGEN*  

**Kognitiver**  

**Raum**  

**Informations**  

**Raum**  

**Sozialer**  

**Raum**  

Abbildung 3.1: Die Facetten von CSCW  

• Technikorientierte Wissenschaftler, deren Sichtweise vom technisch Machbaren ge prägt ist.  

• "Selbstanwendende" Wissenschaftler, die ihre eigene Arbeitssituation verbessern  wollen.  

• KI-orientierte Wissenschaftler, die sich für die umfassende Simulation menschlichen  Verhaltens interessieren.  

• Sozialorientierte Wissenschaftler, die sich mit Analyse und Gestaltung der Systeme  zum Nutzen der Betroffenen beschäftigen.  

Hieraus ergibt sich, daß der Begriff CSCW sehr unterschiedlich definiert wird. In  \[überquelle 91\] wird für CSCW folgende Definition vorgeschlagen:  

*Computergestützte kooperative Arbeit (CSCW) ist kooperative Arbeit, für deren Erledigung  Groupware zur Verfügung steht.*  

und weiter:    
*Groupware ist Mehrbenutzer-Sojtware, d\!e zur Unterstützung von kooperativer Arbeit ent worfen und genutzt wird und die es erlaubt, lnformatwnen und (sonstige) Materialien auf  elektronischem Wege zwischen den M1tgl\!edern einer Gruppe auszutauschen oder gemein* 

*same Materialien in gem einsamen Speichern koordimert zu bearbeiten.*  Einige Begriffe a us den obigen Definitionen die einen großen Einfluß auf diese Arbeit ha ben, werden in den folgenden Abschnitten näher beleuchtet. Speziell die psychologischen   
*3.1. cscw* 21  

Grundlagen, die mit der CSCW zusammenhängen, werden eingehend betrachtet. Der Be griff der Gruppe ist hierbei ein zentraler Punkt. Zuerst wird der Begriff der Gruppe und  die damit zusammenhängenden Prozesse veranschaulicht. Danach wird auf das Medium,  mit dessen Hilfe auf elektronischem Wege kooperiert wird, eingegangen. Die Koordinati on von Aktivitäten ist ein weiterer wichtiger Punkt im Kontext gemeinsamen Arbeitens,  der ebenfalls genauer betrachtet wird. Danach werden die in der Dissertation betrachte ten Groupware-Systemklassen "Workflow-Management-Systeme" und "multimediale Au dio/Video Desktopkonferenzsysteme" vorgestellt.  

**3.1.1 Die Gruppe**  

Die Gruppe ist eines der zentralen Themen im Bereich CSCW. Wie bereits aus den De finitionen im einführenden Abschnitt hervorgeht, bezeichnet die sogenannte Groupware  eine Form von Software, die für die Arbeit von Gruppen entworfen ist. Aus diesem Grund  

werden hier einige grundlegende Betrachtungen zum Begriff der Gruppe angestellt.  In \[McGrath 84\] wird eine Gruppe wie folgt definiert:  

*Gruppen sind soziale Systeme von zwei oder mehr Personen, die durch gegenseitige Kennt nis und potentielle gegenseitige Interaktion miteinander verbunden sind.*  In dieser Dissertation sind sogenannte Kleingruppen \[Schneider 85\] von besonderem In teresse. Eine Kleingruppe beginnt mit zwei Personen, einer "Dyade" und endet, je nach  Standpunkt des Autors und des Untersuchungsgegenstandes, bei 8 \- 30 Personen.  In den folgenden Abschnitten werden einige Punkte näher beleuchtet, die im Umfeld  der Gruppe auftreten, wie, die Kommunikation innerhalb der Gruppe, Problemlösen in  Gruppen und die Unterstützung dieser Bereiche durch einen Facilitator.  Zu einem späteren Zeitpunkt (siehe Abschnitt 3.3) werden spezielle Gruppen im Kon text der Organisation bzw. eines Unternehmens vorgestellt, das Arbeitsteam, bzw. die  Arbeitsgruppe.  

**3.1.1.1 Kommunikation innerhalb der Gruppe**  

Die Abbildung 3.2 aus \[Rosenstiel 92\] stellt die verschiedenen Kommunikationsstruktu ren innerhalb einer Gruppe dar. Eine Prüfung der Leistungsfähigkeit dieser Strukturen  zur Lösung von Problemen, die die Koordination des Wissens aller Positionsinhaber er forderte, ergab, daß zentralisierte Strukturen (z.B.: der "Stern") eine hohe Leistung und  eine klare Identifikation des Führers und eine geringe durchschnittliche Zufriedenheit nach  sich ziehen. Dezentraiisierte Strukturen haben den gegenteiligen Effekt. Abhängig vom  Schwierigkeitsgrad der Aufgabe wurde festgestellt, daß zentrale Strukturen bei einfache ren Aufgaben überlegen sind, während die Stärke dezentraler Strukturen bei komplexen  Problemen liegt.  

Die Information, über die die Gruppenmitglieder verfügen, spielt eine entscheidende Rol le um effektiv kornmunizieren zu können. In \[Barent Krcmar Lewe u.a. 95\] wird durch  Fallstudien gezeigt, daß eine gute Vorbereitung der Diskussionsteilnehmer wichtig für den  erfolgreichen Verlauf einer Konferenz ist. Das heißt, daß Information vorhanden ist und  auch von den Mitgliedern genutzt wird. Die Entscheidungsgüte in Gruppenentscheidun gen steigt jedoch nicht proportional zur Menge der relevanten Information an. Optimum  und Maximum liegen auseinander. Als Verbesserungsmöglichkeiten der Kommunikation  in Gruppen besteht daher auf strukturaler Seite die Anforderung an Informationsfilter.   
22 *KAPITEL 3\. GRUNDLAGEN*  Kriterium \+ y 0 @    
Stern y Kette Kreis Voll-Struktur  

Beurteilungs 

Zentralisation sehrhoch hoch mntel niectig sehr niedrig  

Kommunikations- sehrwenige sehrwenige kanäle  

mntel viele sehr viele  

Führung sehrhoch hoch mntel niectig sehr niedrig  Gruppenzufriedenheit niedrig niedrig mntel mittel hoch  

Individuelle    
Zufriedenheit hoch hoch mntel niectig sehrniedrig  Abbildung 3.2: Kommunikationsstrukturen  

Diese sollen dafür sorgen, daß der Einzelne nicht in der Informationsflut ertrinkt, daß  aber die relevante Information bei ihm ankommt. Weiterhin wird darauf hingewiesen,  daß sich ein bestens vorbereitetes Gruppenmitglied dann nicht durchsetzen kann, wenn  die übrigen Gruppenmitglieder nicht kompetent genug sind, diese Tatsache zu würdigen.  (Maier 63\] stellt folgende "Regeln" zur Präsentation eines Problems für die Diskussion in  der Gruppe vor:  

Situationelle Begriffe benutzen Es sollen Begriffe benutzt werden, die sich auf die  Situation und nicht auf die Verhaltensebene (Personen) beziehen. Hiermit soll eine  Konzentration auf das Problem und die Lösungsfindung erreicht werden, denn es ist  leichter, Situationen als Personen zu ändern. ·  

Keine konkreten Lösungsvorschläge Die Kreativität der Gruppe wird zu sehr einge schränkt, wenn bereits ein konkreter Lösungsvorschlag für ein Problem vorliegt.  

Interesse aller Beteiligten berücksichtigen Falls nur eine Teilmenge der Beteiligten  von der Problemstellung angesprochen wird, kann dies dazu führen, daß sich die  übrigen Gruppenmitglieder nicht an der Lösungsfindung beteiligen.  

Klares Ziel erkennen lassen Das Ziel der Diskussion sollte klar formuliert werden.  

Kurze Beschreibung Wie bereits erwähnt, liegen Informationsoptimum und \- maximum auseinander. Es sollen daher kurze Beschreibungen erstellt werden.   
*3.1. cscw* 23  

Wesentliche Informationen bei der Beschreibung mitliefern Die Teilnehmer sol len durch die Problembeschreibung mit allen benötigten Informationen versorgt  werden. Die Darstellung dieser Informationen soll wertneutral geschehen, ohne die  Teilnehmer zu beeinflussen.  

3.1.1.2 Problemlösen in Gruppen  

Problemlösen in Gruppen ist eine spezielle Form der Gruppenarbeit. Sie kann allgemein  als Prozeß mit folgenden Phasen dargestellt werden (Rosenstiel 92\]:  

• Identifikation des Problems,  

• Finden von Lösungsalternativen,  

• Abwägen der Konsequenzen nach Nutzen und Wahrscheinlichkeit und  • Wahl einer Alternative.  

In (Schwabe 95\] werden hierzu in Anlehnung an \[Van Gungy 88\] folgende konvergente  und divergente Phasen unterschieden (siehe Abbildung 3.3). Zuerst muß das Problem in  

Problemanalyse und  Redefinition    
ldeengenerierung Ideenbewertung und  \-auswahl  

Abbildung 3.3: Konvergente und divergente Problemlösungsphasen  

einer Vorbereitungs- und Planungsphase analysiert und definiert werden, um es dann der  Gruppe präsentieren zu können (siehe hierzu Abschnitt 3.1.1.1). In der nächsten Phase  sollen durch "divergentes Denken" unterschiedliche Lösungsalternativen kreiert werden  um diese anschließend durch "konvergentes Denken" zu bewerten \[Rosenstiel 92\]. Zum  Schluß wird eine Lösungsalternative ausgewählt.  

In \[Maier 63\] werden eine Reihe von Problemlösetechniken vorgestellt, die die unterschied lichen Phasen unterstützen. Diese Techniken müssen jedoch konsequent, zum richtigen  Zeitpunkt und an die Situation angepaßt im Problemlösungsprozeß eingesetzt werden.   
24 *KAPITEL 3\. GRUNDLAGEN*  

3.1.1.3 Unterstützung der Gruppe durch einen Facilitator  

Der "Facilitator" oder Diskussionsleiter ist eine Person, die eine Arbeitsaufgabe, bzw.  einen Arbeitsprozeß gestaltet \[Schwabe 95\]. Seine Aufgabe ist es ferner, den Prozeß so  zu gestalten und Problemlösungstechniken dergestalt einzusetzen, daß ein bestmögliches  Ergebnis erzielt wird.  

**Anzahl der absolvierten ProzentsalZ kreativer Prozeru•z der ZUfrieden·  lnllnlngselnhelten Lösungen helt mit der gefundenen  Löswtg**  

**Wenige oder gar keine 3,4 62,1  Mittlere Anzahl** 63,3 **72,7  HoheMzahl 85,3 100,0**  

Abbildung 3.4: Die Auswirkungen der Erfahrung des Facilitators auf das Gruppenergebnis  

In \[Schneider 85\] wird darauf hingewiesen, daß Gruppen mit erfahrenem Leiter mehr  leisten, als Gruppen, die ohne Leiter oder mit ungeübten Leitern arbeiten. Dies wird  in \[Maier 63\] durch eine Reihe von Experimenten belegt (siehe Abbildung 3.4) Für die  Person des Facilitators wird in \[Schwabe 95\] gefordert:  

Er hat genügend  

• Autorität, um den Gruppenprozeß, den er sich vorgestellt hat, zu lenken;  • Ansehen, um in strittigen Diskussionen als Schiedsrichter akzeptiert zu werden;  

• Sensibilität, um aufkeimende Konflikte so rechtzeitig zu bemerken, daß er noch  eingreifen kann;  

• rhetorische Sicherheit, so daß er von anderen Mitgliedern nicht an die Wand geredet  wird;  

• Erfahrung, um nicht von Gruppenteilnehmern manipuliert zu werden;  

• Kenntnis der Organisationskultur, um die dort üblichen Rituale einer Sitzung in  seine Planung einzubeziehen;  

• Distanz, um die Gruppe die Arbeit machen zu lassen und inhaltlich selbst möglichst  wenig einzugreifen und  

• Flexibilität, um in der Sitzung auf die Situation der Gruppe einzugehen.  

Zusammenfassend ergibt sich aus dem oben gesagten, daß der Person des Facilitators  eine äußerst wichtige Rolle im Problemlösen mit Gruppen zukommt und er die positiven  Aspekte der Gruppenarbeit gewährleisten kann.   
*3.1. cscw* 25  

In \[Szerdy McCall 97\] wird auf die speziellen Anforderungen an einen Facilitator im Be reich Groupware und zwar für "Electronic Meeting Systems" (EMS) eingegangen. Hierbei  werden drei Teilbereiche unterschieden, in deren Spannungsfeld sich der Facilitator be wegt. Auf der einen Seite stehen die Sitzungsteilnehmer, bzw. Gruppenmitglieder. Auf  der anderen Seite sind die Inhalte des Meetings zu berücksichtigen. Als dritter Faktor  kommt nun noch die Technologie hinzu, d.h. die verwendeten Werkzeuge, Netze, Be triebssysteme, Benutzerschnittstellen und die Kenntnisse der Benutzer im Umgang mit  ihnen. Somit kommen für den Facilitator weitere Aufgaben hinzu, wie z.B.:  

• den Sitzungsablauf und die Agenda zu erstellen,  

• Werkzeuge und Technologie entsprechend der Agenda und den gewünschten Sit zungsresultaten auszuwählen,  

• dafür zu sorgen, daß die Werkzeuge bereit sind und reibungslos funktionieren,  

• darauf zu achten, daß die Gruppe auf dem "richtigen Weg" bleibt; evtl. eingreifen  und die Agenda anpassen,  

• die ganze Gruppe am Prozeß beteiligen und sowohl Teilnahme als auch Zustimmung  zu gemeinsamen Entscheidungen gewährleisten,  

• die Sitzung hinsichtlich ihrer Effizienz zu analysieren und den Verlauf gegebenenfalls  anzupassen,  

um nur die wichtigsten Punkte zu nennen.  

Im Bereich der Sitzungsvorbereitung wird vorgeschlagen, daß der Facilitator sich wei terhin die benötigten Hintergrundinformationen verschafft und klärt, inwieweit sie den  Sitzungsteilnehmern bekannt sind. Darauf aufbauend muß er einen Plan entwickeln, wie  alle Teilnehmer auf das gleiche Niveau gebracht werden können, um produktiv zu ar beiten. Dies kann beispielsweise erreicht werden, indem vorab bereits Material durch  Email und "Document Sharing" Werkzeuge verteilt wird. Ebenso muß er sicherstellen,  daß alle Teilnehmer den Zeitplan, die Agenda und evtl. vorzubereitende Tätigkeiten ken nen. Letztendlich soll er auch dafür sorgen, daß die Werkzeuge funktionieren und alle  Teilnehmer damit vertraut sind.  

Zur Sitzungsnachbereitung müssen Fragen geklärt werden, beispielsweise wie die nächsten  Schritte aussehen, die zu unternehmen sind. Die Resultate der Sitzung müssen ebenfalls  verteilt ·und publik gemacht werden. Weiterhin soll der Facilitator, wie bereits erwähnt,  die Sitzung Revue passieren lassen, um den Verlauf zu analysieren und gegebenenfalls  beim nächsten Mal zu verändern. Hierbei sollen ebenfalls Rückmeldungen von Kunden  und Teilnehmern mit einbezogen werden.  

**3.1.1.4 Vorteile und Gefahren der Gruppenarbeit**  

In \[Rosenstiel 92\] wird abschließend eine Diskussion über den Einsatz von Gruppenarbeit  geführt. Übersteigt die Problemkomplexität die Kapazität des qualifiziertesten einzel nen, so ist die Gruppe überlegen und die Qualität der Entscheidung verbessert sich (dies  sind sogenannte "assembly effects", vgl. \[Schneider 85\]). Eine notwendige Voraussetzung  hierfür ist das Interesse aller Beteiligter an der Problemlösung und daß diese hinsichtlich  ihres Wissens und ihrer Wissensaspekte heterogen sind. \[Barnlund 59\] führt an, daß für   
26 *KAPITEL 3\. GRUNDLAGEN*  

die bessere Leistung kooperativ arbeitender Gruppen beim Problemlösen folgende Gründe  verantwortlich sind:  

• Die Zugehörigkeit zu einer Gruppe steigert die Bereitschaft, die Aufgabe erfolgreich  zu lösen.  

• Die Zugehörigkeit zu einer Gruppe steigert die Selbstkritik der Teilnehmer, indem  sie ihre Lösungsvorschläge noch einmal überprüfen, ehe sie sie vor der Gruppe zur  Diskussion stellen.  

• Die Kombination der Fähigkeiten in der Gruppe übertrifft die Fähigkeit zur Pro blemlösung des einzelnen.  

• Fehler werden in der Gruppe eher entdeckt und eliminiert.  

Die Akzeptanz einer Entscheidung steigt weiterhin, wenn mehrere Personen an der Ent scheidungsfindung beteiligt waren (siehe \[Rosenstiel 92\]). Die Gruppenmitglieder müssen  jedoch ernsthaft und nicht "pseudopartizipativ" an der Problemlösung beteiligt gewesen  sein. Pseudopartizipation kann dadurch entstehen, daß einzelne Gruppenmitglieder sich  einen Wissensvorsprung sichern, wenn nicht klar alle Handlungsalternativen aufgezeigt  werden oder wenn die Mitsprache nur auf unwichtige Details beschränkt ist . Speziell in  kleinen Gruppen, die frei entscheiden dürfen, steigt die Zufriedenheit der Betroffenen mit  der Gruppenentscheidung.  

Der Zeitbedarf ist bei Gruppenentscheidungen oftmals kleiner, wenn die Zeit mit einbe rechnet wird, die im anderen Fall dazu benötigt würde, alle an der Entscheidung Beteilig ten zu informieren und sie dazu zu bringen die Entscheidung zu akzeptieren. \[Maier 63\]  hat hierzu folgende Aufstellung gemacht (siehe Abbildung 3.5).  

**l\!ntschelck.lngllrlg• Zelt del\!nlsct.lck.lng Zelt, um IIIIen Urnrg• Zelt. 1.111 belllllen Unterg•  zutreffen benen del\!ntsct.lck.lng b-n AkzeptanZ fllr die**    
**ver•llndlch zu machen l\!nlschelck.lng zu erzielen**  

Vor\!Jitsetzler wenige Minuten ungefilhr eine halbe Stunde un\!Jitfi\!hr eine halbe Stunde  Gruppe eine halbe Stunde oder mehr null null  

Abbildung 3.5: Zeitbedarf einer Gruppenentscheidung versus Vorgesetztenentscheidung  

Als zusätzliche positive Punkte für die Gruppenarbeit werden die Erhöhung der Mo tivation, die weitere Demokratisierung und die Erhöhung des Qualifikationsniveaus der  Mitarbeiter angeführt \[Rosenstiel 92\].  

Als Gefahr der G ruppenarbeit kann das sogenannte "Groupthink" angesehen werden. Mit  dem Begriff Groupthink wird in \[Janis 72\] ein Phänomen bezeichnet, bei dem eine starke  Gruppenkohärenz herrscht, die Gruppe den Kontakt zur Umwelt einschränkt, Außenste hende nichts von den Überlegungen der Gruppe erfahren, der Gruppenführer sich stark für  seinen eigenen Lösungsansatz einsetzt, eine bewußte Technik der Bewertung der eigenen  Vorschläge fehlt und eine starke Belastungssituation mit geringen Hoffnungen vorliegt ,  eine bessere Lösung der Probleme zu finden. Aus zeitgeschichtlichen Fallstudien (z.B. das   
*3.1. cscw* 27  

"Schweine-Bucht Desaster" der US Amerikanischen Regierung 1963\) werden acht Sym ptome des Groupthink-Syndroms abgeleitet. Dies sind beispielsweise die Ausübung von  Druck auf deviante Gruppenmitglieder, sich der Gruppenmeinung anzuschließen oder die  Neigung zur Selbstzensur jedes Gruppenmitgliedes, damit Zweifel frühzeitig unschädlich  gemacht werden, um nur einige Punkte zu nennen. Möglichkeiten, Groupthink zu verhin dern (siehe \[Rosenstiel 92\]), sind beispielsweise, daß  

• die Gruppenmitglieder über die Gefahren des Groupthink aufgeklärt werden,  • Vorgesetzte sich mit eigenen Stellungnahmen zurückhalten,  

• Gruppenmitglieder zur Kritik aufgefordert werden,  

• ein Gruppenmitglied teilweise die "Advocatus-Diaboli-Rolle" übernimmt,  

• die Handlungsalternativen und die Absichten eines möglichen Gegners sorgfältig  analysiert werden.  

**3.1.2 Koordination**  

Die Koordination von Arbeitsabläufen ist ein weiterer wichtiger Punkt, den es im  Kontext der Gruppenarbeit zu betrachten gilt. Der Begriff der Koordination wird m  \[Malone Crowston 94\] gerrauer untersucht und wie folgt definiert:  

*Coordination can be seen as the process of managing dependencies among activities.*  Um dem Begriff der Koordination näher zu kommen, werden verschiedene Disziplinen  betrachtet, wie Informatik, Organisationstheorie, Wirtschaftswissenschaften, und Biolo gie. Ein Ziel der Koordinationstheorie ist es, eine Art Handbuch aufzustellen, um die  Abhängigkeiten zwischen Aktivitäten näher zu untersuchen, die Notwendigkeit zur Ko ordination zu erheben und verschiedene Alternativen aufzuzeigen, um dieser Notwen digkeit zu begegnen. Je nachdem welches Gebiet untersucht wird und abhängig von  der Art der Problemstellung, müssen demzufolge unterschiedliche Koordinationsmetho den hinzugezogen werden. Beispiele um gemeinsam genutzte Ressourcen zu vergeben  sind Prioritäten, "first-come-first-serve", Budgets, Managerentscheidungen oder Verstei gerungen. Bei Aktivitäten- Unteraktivitäten Beziehungen, gleichzeitigen Abhängigkeiten  zwischen Aktivitäten oder Gruppenentscheidungen werden andere Mechanismen benötigt.  Da das Gebiet der Koordinationstheorie noch eine sehr junge Forschungsrichtung ist (siehe  \[Malone Crowston 94\]) existiert noch keine allgemeingültige Theorie, welche Koordinati onsmethode für welches Problem am geeignetesten ist, bzw. wie Probleme systematisch  zu untersuchen sind, um ihnen eine passende Methode zuzuordnen.  

**3.1.3 Charakteristiken verschiedener Medien**  

Die unterschiedlichen Medien, die im Bereich des CSCW genutzt werden, haben jeweils  spezifische Einflußfaktoren auf die Kommunikation. Somit sind sie auch unterschiedlich  gut für bestimmte Aufgaben geeignet. Die "Media-Richness-Theorie" \[Daft Lenge\! 84\]  betrachtet die objektiven Eigenschaften eines Mediums, woraufhin "arme" und "reiche"  Medien unterschieden werden. Ein reiches Medium ist das persönliche Gespräch, welches   
28 *KAPITEL 3\. GRUNDLAGEN*  

sich durch eine Vielzahl paralleler Kanäle auszeichnet, wie Sprache, Tonfall, Gestik, Mi mik, und ein unmittelbares Feedback ermöglicht. Ein armes Medium ist hingegen ein  "konventioneller" Postbrief oder ein Rundschreiben.  

Reiche Medien sind jedoch nicht automatisch besser als arme Medien.  *Der Bereich effektiver Kommunikation liegt gerade zwischen einer unnötigen Kompli zierung ( Overcomplication} und einer angepaßten Simplifizierung ( Oversimplification}*  \[Reichwald Möslein Sachenburger u.a. 97\].  

Die Verwendung der Medien hängt vielmehr von der Aufgabe ab \[Rice 92\]. So ist die  Verwendung reicher Medien um so effektiver, je komplexer die zugrunde liegende Aufgabe  ist, die Verwendung armer Medien ist um so effektiver, je strukturierter die Aufgabe  ist. In \[Reichwald Möslein Sachenburger u.a. 97\] wird die "Media-Richness-Theorie" zum  Modell der "Aufgabenorientierten Medienwahl" erweitert.  

**Aufgabenbezogene Grundanforderungen**  

**an Kommunikationskanäle**  

**Genauigkeit**  

• **Übertragung  des exakten**  

**Wortlauts**  

• **Dokumentier barkeit der**  

**Information**  

**·Einfache Weiter verarbeitung**  

• **Überprtlfbarkeit  der Information**    
**Schnelligkeit/  Bequemlichkeit**  

• **Kurze Übermilt·  lungszeit**  

• **Kurze Erstel lungszeit**  

• **Schnelle ROck antwort**  

• **Einfachheit des  Kommunikations vorganges**  

• **Übertragung kur zer Nachrichten**  

**Vertraulichkeit**  

· **Übertragung  vertraulicher**  

**Inhalte**  

· **Schutzvor**    
**Verfälschung**  

• **ldentifizierbarkeit  des Absenders**  

• **Interpersonelle  Vertrauens** 

**bildung**  

**Komplexität**  

• **BedOrfnis nach  eindeutigem Ver stehen des Inhalts**  

• **Übermittlung**    
**schwieriger**  

Sachzusa\~    
**menhänge**  

• **Austragen von  Kontroversen**  

• **Lösung kom**   
**plexer Probleme**  

**Grad der**  

**Aufgabenstrukturiertheit**    
**Bedarf nach sozialer  Präsenz**  

Abbildung 3.6: Das aufgabenorientierte Kommunikationsmodell  

Wie Abbildung 3.6 zeigt, stellt hierbei jeder geschäftliche Kommunikationsprozeß vier  Grundanforderungen an den Kommunikationsweg. Eine Folgerung daraus ist , daß die  Ausstattung des Arbeitsplatzes mit alternativen Kommunikationsmedien von höchster  Bedeutung für die Aufgabenunterstützung ist.  

Umgekehrt bedingen verschiedene Informationen auch entsprechende Medien. Während   
*3.1. cscw* 29  

sich Daten und Zahlen relativ leicht auch mit armen Medien transferieren lassen, können  sogenannte "Sticky Information" \[Hippe\! 94\] nur zusammen mit dem Informationsträger  transportiert werden, da sie, wie es der Begriff bereits beschreibt, an ihm "kleben". Diese  Art von Information ist oft in Innovationsprozessen und Know-How-intensiven Prozessen  zu finden. Zur Kommunikation dieser Inhalte werden also reiche Medien benötigt.  

3.1.4 Systeme zur Unterstützung kooperativer Gruppenarbeit  

In den folgenden Abschnitten werden zwei Systemklassen vorgestellt, die zur Un terstützung des computerunterstützten, kooperativen Arbeitens dienen. Workflow Management-Systeme und multimediale Audio/Video Desktopkonferenzsysteme sind in  der Art der Aufgaben, die sie unterstützen, konträr. Beim Workflow-Management steht  die Automatisierung asynchroner, gut strukturierter, langandauernder Prozesse im Vor dergrund. Durch Desktopkonferenzen wird die Abarbeitung synchroner, dynamischer,  kurzfristiger Aufgaben unterstützt.  

Workflow-Management-Systeme und multimediale Audio/Video Desktopkonferenzsyste me werden in dieser Arbeit vor dem Hintergrund der Unterstützung von (Geschäfts- )Prozessen in Organisationen gesehen. Dieser Bereich wird als "Business (Re- )Engineering" bezeichnet, womit die Neugestaltung der informatisierten Wirtschaft ver standen wird:  

*Business (Re-)Engineering transformiert die Industriegesellschaft in die Informations gesellschaft. Er basiert auf der Informatisierung von Wirtschaft und Gesellschaft*  \[Österle 95\].    
Der Begriff "Geschäftsprozeß" wird in \[Scheer 98\] wie folgt definiert:  *Allgemein ist ein Geschäftsprozeß eine zusammengehörende Abfolge von Unterneh mungsverrichtungen zum Zweck einer Leistungserstellung. Ausgang und Ergebnis des  Geschäftsprozesses ist eine Leistung, die von einem internen oder externen "Kunden"  angefordert und abgenommen wird.*  

3.1.4.1 Workflow-Management-Systeme  

Workflow-Management-Systeme (kurz: WfMS) *werden geschäftliche Vorgänge (z.B. ei ne Kundenanfrage) von der Entstehung bis zur Erledigung steuern (Vorgangssteuerung)  und damit organisatorische Abläufe standardisieren* \[Österle 95\]. Sie dienen somit dazu,  Geschäftsprozesse automatisiert durch Computerunterstützung ablaufen zu lassen. Da  die Geschäftsprozesse in den verschiedenen Branchen sehr unterschiedlich sind, existieren  eine Vielzahl von Systemen, um diese Anforderungen abzudecken (siehe Abschnitt 3.1.2  und \[Schneider Schweitzer 96\]).    
Diese Anforderungen umreißen einen großen Problembereich, der in \[Marshak 97\] als  "Workflow Continuum" bezeichnet wird. Dieser Bereich umfaßt groupwarebasierte  Ansätze, die auf Kooperation abzielen und nicht so sehr auf fest strukturierte Abläufe  und reicht bis hin zu stark strukturierten Arbeitsabfolgen mit fest vorgegebener Abarbei 

tungsreihenfolge.   
30 *KAPITEL 3\. GRUNDLAGEN*  

**3.1.4.1.1 Standardisierungsbemühungen**  

Im Folgenden werden die Standardisierungsbemühungen zweier Gremien, der Workfiow  Management Coalition und des DIN e.V. kurz beschrieben. Der mittlerweile inflationär  verwandte Begriff des Workfiow-Management wird hierin näher erläutert und somit klar  umrissen.  

**Workflow Management Coalition**  

Die "Workfiow Management Coalition" (kurz: WfMC) ist ein Zusammenschluß von Sy stemanbietern, Analysten und Anwendern von Workfiow-Management-Systemen, mit dem  Ziel, Standards zu entwickeln und zu fördern.  

Workfiow wird wie folgt definiert:  

*The automation of a business process, in whole or part, during which documents, infor mation or tasks are passed from one participant to another for action, according to a set  of procedural rules.*  

Wor kflow-Management-System:  

*A system that defines, creates and manages the execution of workflows through the use of  software, running on one or more workflow engines, which is able to interpret the process  definztion, interact with workflow participants and, where required, invoke the use of IT  tools and appllcations.*  

Das Ziel der Workflow Management Coalition ist es, Schnittstellen zu definieren, um  den Austausch von Prozeßdefinitionen zu ermöglichen, einheitliche Aufrufschnittstellen  für Applikationen zu definieren, die Interoperabilität zwischen Workfiow-Management Systemen zu gewährleisten, den Informationsaustausch zwischen Client und der soge nannten "Workflow-Engine", also dem Server, zu standardisieren und den Zugriff auf  Historiendaten zu vereinheitlichen. Die Abbildung 3.7 (aus \[WfMC 98-3\]) beschreibt die se Architektur.  

Die meisten Systemhersteller sind Mitglied in dieser Gruppe und haben sich zur Un terstützung der Schnittstellen ausgesprochen. Die Definitionen sind zur Zeit noch im  Entstehungsstadium \[WfMC 98-5\].  

Die Schnittstellen der WfMC, wenngleich die Arbeit an ihnen noch nicht vollständig  beendet ist, bieten jedoch einen guten Anhaltspunkt für generische Entwicklungen im  Bereich der Workfiow-Management-Systeme.  

**DIN** e.V.  

Zur Vollständigkeit sei hier auch auf eine deutsche Initiative hingewiesen. Im Rahmen der  Berkom-Projekte der DeTeBerkom GmbH1 wurde das "Deutsche Institut für Normung  e.V. (DIN) damit beauftragt, den Forschungs- und Entwicklungsbedarf im Rahmen der  "Entwicklungsbegleitenden Normung" (EBN) im Bereich Geschäftsprozeßmodellierung  und Workflow-Management zu untersuchen.  

Als funktionale Anforderung an ein Workflow-Management-System wird in \[DIN 96\] ge fordert:  

1 Deutsche Telekom Berkom GmbH, Goslarer Ufer 35, D-10589 Berlin   
*3.1. cscw*  

**Admini** 

**stration**  

&  

**Prozess  Definitions  Tool**  

31  

**Andere**  

**Workftow  Regelwerke**  

**Workflow  Client**  

**Anwendung**  

**Aufgerufene  Anwendungen**  

Abbildung 3.7: Das Referenzmodell der WfMC  

*Jedes Workfiow-Management-System muß die Möglichkeit der Erstellung, Modifikatwn  und Interpretation von Workfiow-Modellen bieten.*  

Workflow wird wie folgt definiert:  

*Ein Workfiow ist ein computerunterstützt administrierbarer, organisierbarer und steuer barer Prozeß.*    
*Workfiow-Management ist Administration, Organisation und Steuerung von Workfiows.  Ein Workfiow-Management-System ist ein Hard- und Software-System zur Administrati on, Organisation und Steuerung von W orkfiows.*  

Diese Definition ist jedoch sehr weit gefaßt und grenzt das Workflow-Management nicht  gegenüber ähnlichen Problemfeldern ab, wie beispielsweise PPS-Systemen2 . Die Arbeiten  im nationalen Bereich wurden bisher nicht weiter verfolgt.  

**3.1.4.1.2 Grundlegende Betrachtungen über Workfiow-Management-Systeme**  

In diesem Kapitel werden einige grundlegende Aspekte von Workflow-Management Systemen skizziert. Sie dienen dazu, den Hintergrund des Workflow-Management, so wie  

2Produkt Planungs- und Steuerungssysteme, siehe beispielsweise \[Scheer Sander 97\].   
32 *KAPITEL 3\. GRUNDLAGEN*  

es sich zur Zeit darstellt, zu beleuchten. Die für diese Arbeit wichtigen Aspekte werden  in den entsprechenden Abschnitten ausführlicher betrachtet.  

Genauere Beschreibungen, bzw. Bewertungen und Produktevaluierungen zum Bereich  Workfl.ow-Management-Systeme sind beispielsweise in \[Reinwald 93, Böhm Schulze 95,  Jablonski 95, Jablonski 96, Stark Lachal 95, Kar\! Deiters 95, Damschik Häntschel 95,  Bullinger Altenhafen Petrovic 98, Ader 98\] zu finden.  

Im Folgenden wird die Beschreibung eines Workfl.ow-Management-Systems von Reinwald  \[Reinwald 96\] benutzt, da sie intuitiv verständlich ist und die wichtigsten Aspekte der  Workfl.ow-Management-Systeme in zwei Sätzen zusammenfaßt.  

*Ein Workfiow Management System ist ein aktives System, das mit Hilfe von vielen Bear beitern in mehreren Schritten den Ablauf von Geschäftsprozessen durchführt. Es bringt die  richtigen Daten zu den richtigen Bearbeitern mit den passenden Werkzeugen zu richtigen  Zeit.*  

Diese Beschreibung zeigt einige Grundvoraussetzungen für den Einsatz von Workfl.ow Management-Systemen auf, nämlich die Zerlegbarkeit einer Aufgabe in mehrere Lösungs schritte. Diese Lösungs- oder Arbeitsschritte werden dann asynchron nach dem Arbeits schrittkonzept der Workfl.ow-Management-Systeme bearbeitet, das bisher auf dem "Eine  

Person \- gleiche Zeit \- eine Anwendung" Prinzip \[Stark Lachal 95\] basiert. Folglich sind  Workfl.ow-Management-Systeme zu den armen Medien zu zählen (siehe Abschnitt 3.1.3),  da Bearbeiter nacheinander die Arbeitsschritte ausführen und üblicherweise jeder Bear beiter nur die Resultate der Arbeit des vorherigen Bearbeiters sieht, evtl. mit einer kur zen Notiz versehen, sofern dies möglich ist und weil in Workfl.ow-Management-Systemen  keine Möglichkeit zum unmittelbaren Feedback vorgesehen ist. Folglich herrschen auch  zentralisierte Kommunikationsstrukturen vor (siehe Abschnitt 3.1.1.1), da die Systeme  

unmittelbare Kontaktaufnahme mit anderen Bearbeitern nicht unterstützen.  Die Beschreibung macht auch die verschiedenen "Sichten" deutlich, die ein Workfl.ow Management-System auf ein Unternehmen hat (siehe hierzu auch Abschnitt 3.1.4.1). Die  Aufbauorganisation einer Firma wird berücksichtigt (Bearbeiter), die zum Ablauf eines  Workfl.ows benötigten Daten werden hinzugezogen, die zu deren Bearbeitung benötigten  Werkzeuge, z.B. Texteditor werden zur Verfügung gestellt und es wird auf eine Prozeßlo gik referenziert, welche die Abarbeitungsreihenfolge vorgibt. Zusammen mit der Bemer kung "Aktives System" wird einer der Hauptaspekte der Workfl.ow-Management-Systeme  aufgezeigt. Es findet eine Koordination von Arbeitsprozessen gemäß der Geschäftsprozeß definition statt, die von einem System, dem Workfl.ow-Management-System, übernommen  wird.  

Zur Komplexitätsverringerung können diese Aspekte isoliert betrachtet werden. Damit  eine automatisierte Abarbeitung des Workfl.ows durch Workfl.ow-Management-Systeme  möglich wird, werden diese verschiedenen Sichten dann zueinander in Bezug gesetzt.  

**3.1.4.1.3 Technische Aspekte**  

Die meisten Workfl.ow-Management-Systeme lassen sich in zwei Kategorien aufteilen,  Email-basierte Systeme und Engine-basierte Systeme \[Stark Lachal 95\].  Email-basierte Systeme sind weitestgehend auf das strukturierte Weiterleiten von Emails  beschränkt. Aus diesem Grund sind die verschiedenen funktionalen Komponenten inein ander verwoben. Sämtliche Daten, wie Dokumente, Abarbeitungsreihenfolge, nachfolgen de Bearbeiter, etc. müssen in dieser Email enthalten sein.   
*3\.1\. cscw*    
33  

• Software I\<Drrj)OOerte    
0 SystemKootroll Daten    
D E:xlemes Prnduki/Oaten  

Abbildung 3.8: Architektur von Engine-basierten Workflow-Management-Systemen  

Im Gegensatz zu den Engine-basierten Systemen, basieren diese Systeme normalerweise  nicht auf Client/Server Architekturen.  

Die Abbildung 3.8 (aus \[Hollingsworth 94\]) zeigt eine generelle Architektur eines Engine basierten Workflow-Management-Systems. Anders als beim Referenzmodell der "Work flow Management Coalition" (WfMC) \[WfMC 98-1\], werden in diesem Modell die funk tionalen Komponenten betrachtet und nicht die Schnittstellen.  

In den folgenden Abschnitten wird auf die wichtigsten Teilkomponenten eines Workflow Management-Systems weiter eingegangen. Dies sind das Definitionswerkzeug zum Erstel len von Workflows, die Aufbauorganisation, welche die organisatorische Struktur eines  Unternehmens abbildet, die Applikationen welche vom Workflow-Management-System  aufgerufen werden und die Arbeitsliste, welche die auszuführenden Tätigkeiten enthält.  

Das Definitionswerkzeug  

Eine der Komponenten eines Workflow-Management-Systems ein Definitionswerkzeug  zum Erstellen der Vorgangsbeschreibung. In vielen Systemen stehen hier komfortable  grafische Vorgangseditoren zur Verfügung. Abbildung 3.9 zeigt das Definitionswerk zeug des Workflow-Management-Systems WorkParty (siehe \[SNI 96-1\]). Die Mächtig keit der Beschreibungssprache und die Handhabbarkeit der erstellten Modelle hat da bei einen Einfluß auf die Modeliierung und hängt zu einem Teil von der Art und Wei se ab, wie die Vorgänge repräsentiert werden. Gebräuchliche Formalismen zur Spe-  
34 *KAPITEL 3\. GRUNDLAGEN*  

**\-1** t; rAflhi\~r.her **Yn'lJa"'""11ilor·(t.ll l/"/.ll'I;J L•J..O**  ·J ll•l•l **tlr\!arhd". Warv1oln tlnllg". flllllno•o t...,.,., \!iUio \[0**    
***y*** ., **·M**   
**\_ \_\_r** ............ , . \~.-\~ ...    
\~    
' II : II L\~    
,  

**D** \~    
*fi* \!" **of**   
**Q \-"'f·····** I **Q** ... \~.\_ ..• ,**II** \~··· **ToaiiNoc** II **'l II** \~, 1 .. I .. ..\_ II **a** II Q I '- \~ I \~oMtn **I j** I *\-:-* } I ............ I **•I**    
**""-..** \~.t.....a., I \~+·--..,. l **YCil ....... nkAIW**  

il:T-- '--y---- . c:q\_ \~    
I **INtn'l I** I \-· I I ,. •• , . I · I II s\~ I \~ I •    
**l\_d** \_\_s \~ \~ D c:/ \-- \- **ld DIUclaa.r1411111cr** ?  X \~    
*c*    
·+'    
\~.,".\_..Nh\~•    
\~ ***6*** **IMil\>oio .... .., J**    
**ID:**    
**IIIZS. II l' lliiiiiii ...**  

**r..-m.-.). "1"1wl1 .** .:\~· **J:.**    
*, ............* \~ **jv .. g\_.....\_** \~•bd.n **J\_** .....\_\_,\_ .-   
\~ **lllt** I **1 r IIUMdoiirio:J I•** II\!: I '4 :  

Abbildung 3\.9: Ein Beispiel eines Definitionswerkzeuges für gerichtete Graphen  

zifikation der Workflows, d.h. der Koordination der Arbeitsabläufe sind beispiels weise Petri Netze3 (z.B. CapWebFlow \[CapGemini 98\]), Funsoft Netze4 (z.B. LEU,  siehe \[Siaghuis 96, o.tel.o 98\]), Ereignisgesteuerte P rozeßketten5 (z.B. ARIS-Workllow  \[IDS 98\]), State and Activity Charts6 (z.B. Mentor, Universität des Saarlandes, Fach bereich Informatik, Prof. Weikum), Sprechakttheorie7 (z.B. Action Workflow, siehe  \[Greensven 96, Action Technologies 98\]) gewichtete, eingefärbte gerichtete Graphen (z.B.  

3Petri :"'etze sind gewichtete bipartite Graphen. Sie bestehen aus zwei verschiedenen Sorten von  Knoten, Stellen und Transitionen. Siehe beispielsweise \[Claus Schwill 88).    
4 Funsoft Netze \[Deiters Gruhn Striemer 95\] sind eine spezielle Art von Petri Netzen, die durch spezielle  Erweiterungen zum Software Engineering besser geeignet sind.  

5Ereignisgesteuerte Prozeßketten \[Langer Schneider Wehler 97\) bestehen aus Ereignissen und Funk tionen. Tritt ein Ereignis ein, wird die darauffolgende Funktion ausgeführt .  

6 Activity Charts beschreiben die Funktionen eines Systems und den Datenfluß zwischen diesen Funk tionen, Statecharts definieren zeitabhängige Vorgänge, die durch Zustandsübergänge modelliert werden  \[Wodtke Kotz-Dittrich Muth u.a. 95\).    
7Sprechakte stammen aus der Sprachphilosophie und beziehen sich auf die Absicht einer Äußerung.  Ein Gespräch kann als eine Abfolge von Sprechakten angesehen werden, wobei es von einem Zustand in  einen anderen übergeht \[Searle 69\).   
*3.1. cscw* 35  

MQSeries Workflow (früher Flowmark), siehe \[Leymann 96, IBM 98\]) oder nur gerichtete  Graphen (z.B. WorkParty, siehe \[Rosemann zur Mühlen 96, SNI 96-3\]).  Die mit dem Definitionswerkzeug erstellten grafischen Repräsentationen der Workflows  werden in den meisten Systemen nicht direkt interpretiert, sondern in die systemeigene  Sprache übersetzt. Durch Import und Export dieser Beschreibung können Workflow Definitionen ausgetauscht werden. Interface 1 der WfMC (siehe \[WfMC 98-6\]) soll zu  einer Standardisierung dieser Schnittstelle führen.  

**Die Aufbauorganisation**  

Ein andere Komponente ist das Organisations- und RollenmodelL Hierin wird die Aufbau organisation eines Unternehmens abgelegt. Die Palette der Werkzeuge reicht auch hier  von einer einfachen Liste, bis hin zu Systemen, die komplexe Organisationsstrukturen  aufnehmen können, mit Konzepten wie Rollen, Stellen, Kompetenzen, etc .. Zur Ablauf zeit des Workflows werden diese Attribute ausgewertet, um einen für den anstehenden  Bearbeitungsschritt passenden Mitarbeiter auszuwählen.  

In \[Rosemann zur Mühlen 97\] werden einige Workflow-Management-Systeme bezüglich  der Modeliierung der Aufbauorganisation gegenübergestellt. Grundsätzlich sind in den  heute verfügbaren, kommerziellen Systemen folgende Konzepte üblich:  

• Stelle,  

• Rolle,  

• Kompetenz und  

• Mitarbeiter  

Stellen beschreiben den Arbeitsbereich einer Person, wie er z.B. in Stellenbeschreibun gen spezifiziert wird. Sie besteht aus der sachlichen Festlegung der Aufgaben, näheren  Erläuterungen der organisatorischen Eingliederung der Stelle und Angabe organisatori scher Beziehungen, einer Anleitung zur zweckmäßigen Aufgabenlösung und der Darstel lung personeller Anforderungen aufgrund der Aufgabenübernahme durch den Stellenin haber \[Bußler 97\].  

*Rollen sind organisatorische Funktionen wie Abteilungs/eiter, Sachbearbeiter etc. und  fassen Stellen mit gleichen Kompetenzen bzw. einer gemeinsamen Tezlmenge von Kom petenzen zusammen. Eine Rolle definiert somit einen Oberbegrzff für alle Stellen mit  charakteristischen gemeinsamen Aufgaben und Zugriffsbeziehungen* \[SNI 95-1\].  Die Kompetenz wiederum legt Rechte, Befugnisse und Zuständigkeiten eines Rolleninha bers fest. Der Mitarbeiter ist schließlich der Inhaber einer Stelle.  

Ausgehend von diesen Konzepten können nun die verschiedenen "klassischen" Organisa tionsformen modelliert werden. Eine gerrauere Beschreibung dieser Formen ist beispiels weise in \[Wittlage 78\] zu finden. In einem späteren Abschnitt 3.2 wird nochmals auf  organisatorische Aspekte eingegangen.  

\[Bußler 97\] untersucht die Organisationsverwaltung in Workflow-Management-Systemen  detailliert. Aufbauend auf dieser Analyse entwirft er ein Organisationsverwaltungssystem,  welches eine umfassende Sicht auf die aufbauorganisatorischen Aspekte liefert und deren  Abbildung ermöglicht. Es können hierbei auch Gruppen definiert werden, die gemeinsam  eine Aktivität ausführen sollen.   
36 *KAPITEL 3\. GRUNDLAGEN*  

Im Bereich des "Knowledge Management" werden ebenfalls Werkzeuge entwickelt (bei spielsweise \[Blodau Schmidt-Haunschild 98\] die dazu dienen die Aufbauorganisation zu  beschreiben. Die Zielrichtung ist hierbei die in einer Organisation vorhandenen Kom petenzen möglichst vollständig zu beschreiben. In \[Jordan Goldman Eichler 98\] können  darüber hinaus auch einfache soziale Beziehungen, wie "Freund/Freund" Relationen mo delliert.  

Applikationen  

Bei den "aufzurufenden Applikationen" handelt es sich normalerweise um bereits vorhan dene Texteditoren, Tabellenkalkulationsprogramme, etc., die zur Bearbeitung eingebun den werden können und beim Bearbeiter zur Ausführung einer Tätigkeit aufgerufen wer den. In den meisten Systemen kann die Workflow-Engine selbst den Aufruf beispielsweise  

von Stapelverarbeitungsprogrammen zur automatischen Verrichtung von Tätigkeiten vor nehmen. Eine Standardisierung dieser Schnittstelle beabsichtigt die WfMC ebenfalls in  Form von Interface 3, welches kürzlich mit der Definition von Interface 2 zusammengelegt  wurde (siehe \[WfMC 98-7\]).  

Die Arbeitsliste  

Die Arbeitsliste oder der Arbeitsvorrat beinhaltet die zur Zeit zur Ausführung anste henden Tätigkeiten. Der Bearbeiter bekommt die für ihn anstehenden Tätigkeiten zu geteilt und über ein User Interface angezeigt. Für die Zuteilung von Aktivitäten gibt es  grundsätzlich zwei unterschiedliche Methoden8 . Eine Möglichkeit ist, daß jedem potenti ellen Bearbeiter eine zur Bearbeitung anstehende Aktivität angeboten wird. Derjenige,  der die Aktivität als erster annimmt, hat das Recht sie zu bearbeiten. Die Aktivität  wird aus den restlichen Arbeitslisten gelöscht. Bei der anderen Methode wird einem der  in Frage kommenden Bearbeiter die Aufgabe zugewiesen. Interface 2 der WfMC (siehe  \[WfMC 98-6\]) soll zu einer Standardisierung dieser Schnittstelle führen. Abbildung 3.10  zeigt, wie der Arbeitsvorrat beispielsweise in WorkParty präsentiert wird \[SNI 96-1\]).  

3.1.4.1.4 Psychologische Aspekte des Workflow-Management  

Ein Teil der Fragen, die sich mit den psychologischen Aspekten des Workflow-Management  beschäftigen, wurden bereits in den Abschnitten 3.1.1.1 und 3.1.3 angesprochen. In  \[Wolf Sirnon Schlick 97\] wird ebenso darauf hingewiesen, daß die Optimierung von Work flows sich von der Optimierung der Kommunikation unterscheidet. Um positive Effekte  mit der Unterstützung der Vorgangsbearbeitung zu erzielen, muß zuerst das Problem,  welches unterstützt werden soll, genau analysiert werden. Somit können dann "lästige"  Aufgaben, d.h. Aufgaben die die Person über- oder unterfordern, mit Hilfe von EDV Lösungen unterstützt werden, während "nicht-lästige" Aufgaben unangetastet bleiben,  um "Over-Engineering" zu vermeiden.  

Grundsätzlich ist es jedoch schwierig, allgemeine Betrachtungen über das Workflow Management zu machen, da sowohl die Systeme sehr unterschiedlich sind, als auch die  Anwendungen, die mit ihnen erstellt wurden. In \[Paul Maueher 97\] werden beispielsweise  

8 Eine Sammlung unterschiedlicher Mechanismen zur Zuweisung von Tätigkeiten zu Mitarbeitern ist  in \[Hagemeyer Rolles Schmidt 98\] zu finden.   
*3.1. cscw*  

Hausm\~ss\~ l(.lel gs-1  Pizza 123-g46  \[•tschcld\~ngsvor llgc 127\!i-•JG  Mitzeichnung 1 125 gs 1  

37  

Vorg\~ngs•nlllgcn beubclten    
Vorgongaenlogcn bearbeiten  

V Akten *I* Edltl wcmlcc  

t\_Vorlzge    
Alltrag    
Mitzclc;hnt    
n catour1    
Haucme11ce    
H\~11\~m\~\~\~" Klr.l    
Antrao 1    
EDtscheidungsvorlage    
1 \~\!\>-gs\~    
175\-gs2    
Mtzl    
ncalrl    
Stgt 2".Q5.95  o\~ 1    
os\-175A    
1275·a36    
bearb\~ltbar  bearb\~ltbar  bcubcltbllr  bcerbcltbor  bearbeltbar  h\!\!arhr.ilhllr  bearbeitbar  in Bearbeitung  

Abbildung 3.10: Die Arbeitsliste in WorkParty  

zwei Fallstudien gegenübergestellt, bei denen der Einsatz eines Workfiow-Management Systems in einem Unternehmen sehr positive Effekte für alle Betroffenen hatte, in dem  anderen Unternehmen führte der Einsatz des Systems zu Mehrarbeit. Die Mitarbeiter  mußten teilweise sogar gegen das System arbeiten, um dringend benötigte Dispositions spielräume zu gewinnen. Weiterhin kommt hinzu, daß auch die Workflows selbst unter schiedlich gut modelliert sein können.  

In \[Joosten Aussems Duitshof u.a. 94\] werden Fallstudien aus 12 verschiedenen Orga nisationen beim Einsatz von Workflow-Management-Systemen beschrieben. Als gene relles Resümee wurden von den Betroffenen auf positiver Seite genannt, daß sie einen  größeren Spaß am Arbeiten haben. Hierbei wurden die Verringerung von Routinear beiten genannt, sowie die Integration unterschiedlicher Aktivitäten unter Vergrößerung  der persönlichen Verantwortung und einer erhöhten Flexibilität hinsichtlich der syste munterstützten Möglichkeiten, um auf Kundenvorschläge einzugehen. Ebenso wurde die  Verringerung von Frustrationen durch die Suche verlorengegangenen oder schwer auffind baren Akten erwähnt und die Verringerung der Arbeitslast durch den nach Einführung des  Systems besser strukturierten Arbeitsablauf. Negativ wurde bewertet, daß die Arbeits abläufe starrer geworden sind und daß eine starke Überwachung der Mitarbeiter möglich  ist. Weiterhin wird darauf hingewiesen, daß zu klein gewählte Arbeitseinheiten die Gefahr  bergen, daß die Abteilung zu einer Art "Papier Fabrik" wird.  

Eine Untersuchung in der Schweiz (siehe \[Kueng 97\]) über den Einsatz von Workflow Management-Systemen führte zu den Ergebnissen in Abbildung 3.11.   
38 *KAPITEL 3\. GRUNDLAGEN*  

**Posmv lndurere.- Negativ**  

**Kontakt mit Unternehmens- Geschäftsprozeß- *.Al* beit erhält  externen Kunden anpassungen mechanistischen Touch**  

**Modeliierung deckt Hanclungsspielraum Verletzlichkeit des  Strukturen auf Unternehmens steigt**  

**"ich weiß, was ich Taylorismus Die Mitarbeiter müssen  zu tun habe" sich anpassen**  

**Geschäftsprozeßwissen Arbeitsklima nimmt zu**  

Abbildung 3.11: Auswirkungen von WfMS auf Mitarbeiter und Organisation  

Die Integration arbeitswissenschaftlicher Analysen in die Modellierung von Work flows wird in \[Hoffmann Loser 97\] untersucht. Es wird hierin gezeigt, daß Workflow Management-Systeme die folgenden Aspekte sowohl erhöhen, bzw. verbessern als auch  erniedrigen, bzw. verschlechtern können:  

• Entscheidungsspielräume  

• Kommunikations- und Kooperationsanforderungen mit externen und internen Part nern  

• Belastung durch Arbeitsrückstände und durch mangelhafte Informationsversorgung  

• zeitliche Spielräume bei der Einteilung der Arbeit und Zeitbindung der Arbeitsauf träge  

• Durchschaubarkeit und Beeinflußbarkeit von Geschäftsprozessen  

• Abwechslungsreichturn innerhalb von Prozeßschritten und innerhalb der gesamten  Arbeitstätigkeit von Mitarbeitern  

3.1.4.1.5 Vorteile von Workfiow-Management-Systemen  

In \[Stark Lachal 95\] werden folgende Vorteile von Workflow-Management-Systemen ge nannt:  

• Prozeßstandardisierung  

• Prozeß-Management  

• Effiziente Zuteilung von informationsbasierten Aufgaben zu Bearbeitern  • Expliziter Fokus auf den Prozeß   
*3.1. cscw* 39  

Im Bereich der Standardisierung von Prozessen werden die Prozesse mit Hilfe der  Workflow-Management-Systeme spezifiziert. Die Systeme garantieren, daß die vorgegebe ne Abarbeitungsreihenfolge eingehalten wird und dokumentieren den Bearbeitungsprozeß.  Das Prozeß-Management wird dadurch erleichtert, daß zu jeder Zeit der Status eines  Prozesses abgefragt werden kann. Es können Verzögerungen entdeckt werden, die einen  Aufschluß auf Engpässe im Prozeß oder in der Organisation geben, evtl. bedingt durch  das Zusammenspiel mit anderen Prozessen.  

Die effiziente Zuteilung von Aufgaben zu Bearbeitern wird dadurch erreicht, daß nicht  nur spezielle Mitarbeiter einer Aufgabe als Bearbeiter zugewiesen werden können, son dern auch abstrakte Konzepte, wie Kompetenzen (beispielsweise "spricht englisch") oder  Rollen (beispielsweise , ,Systemadministrator").  

Der explizite Fokus auf den Prozeß wird dadurch erreicht, daß der Prozeß das zentrale  Konzept der Workflow-Management-Systeme ist und folglich im Vordergrund steht.  Darüberhinaus haben Workflow-Management-Systeme unterschiedliche Sichten auf ein  Unternehmen, nämlich Prozeßlogik, Informationsressourcen (mit Dokumenten, Daten und  Anwendungen) und "Human Resources", die getrennt betrachtet werden können. Dies  führt somit zu einer Komplexitätsverminderung. Im System werden diese Sichten zur  Abarbeitung eines Workflows wieder zusammengeführt.  

Weiterhin führt die elektronische Weiterleitung von Daten auch im Bereich des Dokumen tentransportes zu einer hohen Effizienzsteigerung und der Reduktion von Durchlaufzeiten,  verglichen mit der herkömmlichen Hauspost.  

**3.1.4.2 Videokonferenzsysteme**  

Eine allgemeine Definition des Begriffs "Videoconferencing" wird in \[Lautz 95\] wie folgt  gegeben:  

*Videoconferencing bezeichnet generell diejenige Form der Verständigung, bei der Personen  miteinander sprechen und sich gleichzeitig gegenseitig sehen, obwohl sie nicht* im *gleichen  Raum sitzen.*  

Diese Arbeit wird sich jedoch im Hinblick auf die Integration von synchroner und asyn chroner computerunterstützter Gruppenarbeit am Arbeitsplatz eines Mitarbeiters auf eine  spezielle Form des Videoconferencing beziehen. Hierbei handelt es sich um "multimediale  Audio/Video Desktopkonferenzen" oder kurz "MMC". Im Unterschied zu "allgemeinen"  Videokonferenzen handelt es sich hierbei um eine Integration der Videokonferenzen in den  Arbeitsplatzrechner des Mitarbeiters, so daß keine zusätzlichen Geräte benötigt werden.  Ebenso ist neben der Audio- und Videoverbindung das sogenannte "Joint Working" ein  weiterer Bestandteil des Systems. Joint Warking erlaubt das gemeinsame Arbeiten meh rerer Konferenzteilnehmer an einer Anwendung. So kann beispielsweise ein Teilnehmer  sein Textverarbeitungsprogramm in der Konferenz verteilen, so daß der/die Partner die  Ausgaben dieses Systems ebenfalls sehen kann/können (WYSIWIS) 9 Der "eingeladene"  Konferenzteilnehmer, kann, sofern er die Berechtigung hierzu hat, ebenfalls die Kontrolle  über Maus und Tastatur übernehmen und das Dokument mit Hilfe der verteilten Text verarbeitung verändern.  

Weiterhin ist das sogenannte "Gruppen-Videoconferencing" \[Lautz 95\] von besonderem  Interesse, bei dem im Gegensatz zu 1:1 Verbindungen, mehrere Personen an unterschied lichen Standorten miteinander konferieren.  

9WYSIWIS bedeutet What You See Is What I See.   
40 *KAPITEL 3\. GRUNDLAGEN*  

Videokonferenzsysteme zählen zu den reichen Medien (siehe Abschnitt 3.1.3), da eine  Vielzahl paralleler Kanäle übertragen werden, wie Sprache, Tonfall, Gestik, Mimik, und  ein unmittelbares Feedback möglich ist. Weiterhin ermöglichen sie dezentralisierte Korn munikationsstrukturen (siehe Abschnitt 3.1.1.1), da eine unmittelbare Kontaktaufnahme  mit anderen Mitarbeitern möglich ist.  

**3.1.4.2.1 Technik**  

In diesem Abschnitt werden beispielhaft einige Videokonferenzsysteme mit der zugrunde liegenden Technik vorgestellt. Ausgehend von der zugrundeliegenden Netzinfrastruktur  können ISDN-basierte, ATM-basierte und Internet-basierte Systeme unterschieden wer den, die entsprechend der zur Verfügung stehenden Übertragungskapazitäten auch unter schiedlich gute Übertragungsqualitäten bieten. Teilweise unterstützt ein System mehrere  unterschiedliche Netze, wie ATM, Internet, ISDN10 oder es nutzt eine Kombination aus  ihnen (z.B. ISDN für Audio/Video und Internet für das Verteilten von Applikationen, das  sogenannte "Application Sharing" 11 ).  

Weiterhin unterscheiden sich die Systeme hinsichtlich der Unterstützung von Joint Wor king. Einige Systeme exportieren sogenannte Telepointer, d.h. der Mauszeiger jedes Kon ferenzteilnehmers wird bei den übrigen Teilnehmern sichtbar und beispielsweise farblieh  gekennzeichnet oder mit den Initialen versehen. Bei einigen Systemen findet man spezi elle Notizblöcke, sogenannte "Whiteboards" (beispielsweise ProShare von Intel \[Intel 98\])  oder es steht eine spezielle Anwendung zur Verfügung, die es jedem Konferenzteilnehmer  erlaubt, für alle sichtbar auf einer Art durchsichtigen Folie an der verteilten Applika tion Anmerkungen zu machen, ohne deren Daten zu verändern (beispielsweise GroupX  \[GroupX 96\]).  

Im Zusammenhang mit Videokonferenzen sind ebenfalls bestimmte Standards von Inter esse (siehe \[Hewitt 96\], \[Rettinger 95\], \[Blundell 97\]), wie  

**H.320** Schmalbandige visuelle Telefonsysteme und Endgeräte \[ITU-T 93-2\]. Dies ist eine  Sammlung mehrerer Standards, darin enthalten ist ebenfalls der Standard H.261  "Video codec für audiovisuelle Services zu p x 64 kbit/s". Dieser Standard wurde  ursprünglich für ISDN entwickelt.  

**H.323** Visuelle Telefonsysteme und Ausrüstung für LAN's, die über keine garantierte  "Quality of service" verfügen \[ITU-T 96-1\].  

**H.324** Endgeräte für multimediale Kommunikation über geringe Bandbreiten  \[ITU-T 96-2\] (hierbei handelt es sich um eine Anpassung des H.323 Standards).  

**T.120** Datenprotokoll für multimediale Konferenzen \[ITU-T 96-1\]. Dieser Standard be zieht sich auf das Application Sharing.  

**MBONE** Der Internet Standard RFC-1112 wurde als MBONE (Abkürzung für Multicast  backBONE) bekannt.  

Die folgenden Punkte sind keine offiziellen Standards, sie sind jedoch sehr stark verbreitet  und erfreuen sich großer Beliebtheit.  

10 beispielsweise GroupX \[GroupX 96\].    
11 beispielsweise TeCoüffice \[TeCoOffice 98\].   
*3.1. cscw* 41  

CU-SeeMe CU-SeeMe ist kein offizieller Standard, er hat sich jedoch als Internet-de faeta-Standard für Videokonferenzen entwickelt. CU-SeeMe kann in Verbindung mit  MBONE verwendet werden \[Blundell 97\].  

NetMeeting NetMeeting ist ein Produkt von Microsoft \[Microsoft 98-1\], welches  lauffähig unter den Betriebssystemen Windows 95, Windows 98 und Windows NT  4.0 ist. Es ermöglicht Audio/Video Verbindungen über das Internet und das Arbei ten an verteilten Applikationen. NetMeeting 2.0 unterstützt den H.323\-Standard  für Audio- und Videokonferenzen und den T.l20 Standard für Datenkonferenzen.  

In \[Urbanczyk 98\] findet sich beispielsweise eine Beschreibung verschiedener internetba sierter Videokonferenzsysteme. \[Hewitt 96\] bietet eine ausführliche Übersicht verschiede ner Produkte für unterschiedliche Plattformen und Netzwerke.  

Wichtig für den Einsatz des Videokonferenzsystems sind sowohl die Standards, als auch die  Konsequenzen, die sich aus der Wahl des Systems ergeben. So ist NetMeeting beispiels weise ohne Erweiterungen mehrpunktfähig, jedoch nur für Datenkonferenzen (T.l 20).  ISDN-basierte Systeme, wie zum Beispiel GroupWin \[GroupWin 98\] benötigen die Hilfe  einer speziellen Hardware, einer MCU12 Die MCU übernimmt die Verteilung von Ton  und Video zwischen den verschiedenen Teilnehmern, die sich dort einwählen (H.320). Der  Zugang zu einem solchen System kann beispielsweise auch bei einem externen Dienstean bieter gebucht werden.  

**A team orlented approach towards the Integralion of**    
**workftow mana,gemant and mulllmedla AV dasktop**    
**conference systems ln tha context of publlc**    
**GhliilhOi'f'fiUifj**  

**Silllll'lilll'lt *w:;***    
**C'IIIIMillfi•Diitll•l**   
**Cor»r\*I•Ruta.rcl'l**    
\~•\~\~"\~•\~"\~• **Te'-C.OCP\<IIIItWOft C•tt•1 (JT.Z: StuNc anen••u....,.a l**  1\~1/·S••mrii"JI ••    
**o.n,lilllfl\!**  

\~t: cc\~\!h '::\~:\~\~::.   
**enu11: di"'IQSU.dlk.de**  

\~    
**e.o.**  

Abbildung 3.12: Eine Videokonferenz mit GroupWin  12MCU bedeutet: Multipoint Control Unit .   
42 *KAPITEL 3\. GRUNDLAGEN*  

Abbildung 3.12 zeigt eine multimediale Audio/Video Desktopkonferenz mit dem System  GroupWin (GroupWin 98\]. Im großen Fenster ist das gemeinsame Arbeiten an einem  Microsoft-Ward-Dokument (Microsoft 98-1\] zu sehen. Die Datenkonferenz wird durch das  System NetMeeting (Microsoft 98-3\] realisiert, welches in GroupWin integriert wurde.  An der oberen Ecke des Ward-Fensters wird angezeigt, wer die Anwendung freigegeben  hat. Der Mauszeiger wird mit den Initialen des Teilnehmers gekennzeichnet, der aktuell  das Eingaberecht besitzt und Änderungen am Dokument vornehmen kann. Rechts, im  kleineren Fenster, ist das Videobild des Gesprächspartners zu sehen, oben links in diesem  Fenster ist das eigene Bild eingeblendet.  

3.1.4.2.2 Psychologische Aspekte von Videokonferenzen  

Als besonderes Merkmal von Videokonferenzen wird in (Lautz 95\] die gleichzeitige Be nutzung der Kommunikationskanäle von Bewegtbild und Sprache hervorgehoben und den  damit verbundenen Sinnesmodalitäten, Auge und Ohr, welche die menschliche Kapazität  zur Informationsaufnahme weitgehend ausschöpfen und zu einer hohen Behaltensquote  der übermittelten Information führen. Zusammen decken Auge und Ohr 80 % des Ge samtinformationsgehaltes zwischenmenschlicher Kommunikation ab (Gerfen 96\]. Somit  sind Videokonferenzen zu den reichen Medien zu zählen (siehe Abschnitt 3.1.3). Im Ge gensatz jedoch zum reichsten Medium, der persönlichen "Face-ta-face" Kommunikation,  weisen Videokonferenzen Grenzen im Bereich der sozialen Interaktion auf. Dies kann je doch auch als Vorteil gewertet werden (Egido 90\], da die Konferenzteilnehmer sich stärker  auf Fakten und die Aufgabe konzentrieren und nicht so anfällig für Groupthink (siehe  Abschnitt 3.1.1.4) sind.  

Als positive Merkmale von Videokonferenzen, speziell bedingt durch den visuellen Kanal,  werden in (Perey 97\] folgende Punkte herausgearbeitet:  

• Übermittlung von Aufrichtigkeit und Autorität  

• Hilfe bei der Bewertung von Daten (durch die zusätzliche non-verbale Information)  • Unterstützung bei der Bildung von Gemeinschaften  

• Förderung von kreativem Denken mit Hilfe gemeinsamer Informationsräume (Joint  Working)  

• Schnelleres Erreichen von Übereinkünften  

(Lautz 95\] sagt zudem, daß der Einsatz von Videokonferenzen sich besonders eignet, wenn  • unstrukturierte Daten (Bilder, gesprochene Worte, Bewegungen, etc.) vorliegen,  • komplexe Aufgaben zu erledigen sind,  

• zur Klärung des Sachverhalts direkte Rückfragen gestellt werden müssen,  

• die Aufgaben eher einen improvisatorischen Einzelfallcharakter aufweisen, statt  einen hohen Formalisierungsgrad, sowie  

• die Beziehungsebene der Kommunikation stärker in den Vordergrund tritt als die  Inhaltsebene.   
*3.1. cscw* 43  

Als Resultat der Überlegungen kann zusammenfassend weiterhin gesagt werden, daß Vi deokonferenzen wegen fehlender sozialer Interaktion und geringen Möglichkeiten zu infor meller Kommunikation nicht als Ersatz für face-to-face Kommunikation angesehen werden  können (siehe \[Egido 90, Reichwald Möslein Sachenburger u.a. 97, Lautz 95\]), sondern als  zusätzliches Kommunikationsmittel. Es wird in der Realität nur ein geringer Prozentsatz  der face-to-face Meetings ersetzt. Überraschend in diesem Zusammenhang ist auch eine  Untersuchung, die das Reiseverhalten von Top-Managern betrachtet hat. Hier ergab sich,  daß Top-Manager, die intensiv Telekooperationssysteme nutzen, sogar mehr reisen als ih re "konventionell" arbeitenden Kollegen \[Reichwald Goecke Möslein 96\]. Eine Erklärung  hierfür konnte noch nicht gefunden werden, es wird aber vermutet, daß die Manager die  durch Videokonferenzen eingesparte Zeit für die Intensivierung und den Aufbau persönli cher Kontakte nutzen.  

3.1.4.2.3 Vorteile von Videokonferenzen  

Einige Vorteile der Videokonferenzen wurden bereits im vorangehenden Abschnitt ge nannt. Im Rahmen von Gruppen wurden ebenfalls schon einige Punkte angesprochen  (siehe Abschnitt 3.1.1.4). Die Akzeptanz von Entscheidungen kann durch Gruppenarbeit  gesteigert werden und Videokonferenzen sind ein Mittel, verschiedene Teilnehmer ohne  größeren Reiseaufwand auch ad-hoc zusammenzuführen. In \[Lautz 95\] wird zusammen gefaßt, daß durch Videokonferenzen  

• Sachverhalte sofort durch Rückfragen geklärt werden können.  

• verschiedenen Meinungen unmittelbar diskutiert werden können,  • was zu einer schnellen Konsenstindung führt und  

• eine breite Informationsstreuung gesichert wird, da viele Personen an der Bespre chung teilnehmen.  

Weiterhin können Produktivitätssteigerungen erreicht werden, da  

• Experten schnell und einfach hinzugezogen werden können,  

• mit der Anzahl der Teilnehmer auch die Anzahl der Ideen und Meinungen steigt,  was die Qualität der Entscheidung positiv beeinf\!ußt,  

• die Teilnehmer sich auf Videokonferenzen besser vorbereiten als auf face-to-face  Sitzungen, weil sie sich strikt auf die Arbeitsinhalte beschränken und  

• durch die eingeschränkte soziale Interaktion persönliche Themen ausgeblendet wer den, die sich nicht unmittelbar positiv auf die Qualität der Entscheidung auswirken.  

Der Einsatz von Videokonferenzen ermöglicht zusätzlich, daß, im Vergleich zu herkömmli chen Prozessen in einem Unternehmen, mehrere Personen an einer Entscheidungstindung  teilnehmen können, da sie unmittelbar zur Videokonferenz hinzugezogen werden können.  Anderenfalls müßte beispielsweise eine gesamte Abteilung verreisen. Das Sammeln und  Komprimieren von Informationen für den Entscheidungsträger entfällt ebenfalls, da die 

44  

Standort A  

Verwaltungsrat    
*KAPITEL 3\. GRUNDLAGEN*  

Klassischer Weg der Entscheldungsflndung:    
Face-to-tace Sitzungen und Geschäftsreisen Standort B  i En\!Schetdungssilzung i Verwaltungsrat  

Generaldirektion  Direktion  

Mittleres Kader  

Unteres Kader  

Sachbearbeiter  

Verw a 1tu ng sr at  

Oberes Management  Unteres Management    
"' 5" c    
:\> Ö'  \! 3 ;;: .. " *a.*  \!5 g .... \~ "' E ".  \~ .2 c  ..E :\>  

10  

\~ \~ 

Neuer Weg der Entscheldungsflndung:  Vldeoconferenclng  

General cirektion  Direktion  

Mittleres Kader  

Unteres Kader  

Sachbearbe\~er  

Verwaltungsrat  

Oberes Management  Unteres Management  

Sachbearbeiter    
VideoconferencingZ'IIIischen D    
Sachbearbeiter  

GNppen von M\~rbeitern    
mehrerer Hierarchieebenen  

Abbildung 3.13: Neue Wege der Entscheidungsfindung durch Videokonferenzen  

entsprechenden Mitarbeiter selbst an der Konferenz teilnehmen können. Umgekehrt er halten sie Informationen aus erster Hand, was eine bewußte oder unbewußte Information filterung verhindert. Die Abbildung 3.13 (aus \[Lautz 95\]) verdeutlicht die Unterschiede  zwischen der Entscheidungsfindung herkömmlicher Art und dem Einsatz von Videokon ferenzen.  

3.1.4.2.4 Videokonferenzen in Arbeitsprozessen  

Multimediale Audio/Video Desktopkonferenzen können in Arbeitsprozessen entlang der  gesamten Wertschöpfungskette eingesetzt werden \[Schweitzer Schneider 97\].  In \[WoTel 96\] wird exemplarisch an einem Vorgang im Umweltministerium der Bundes republik Deutschland gezeigt, wie Aktivitäten durch den Einsatz einer multimedialen  Audio/Video Desktopkonferenz eingespart und wie Schleifen in der Prozeßbearbeitung  aufgelöst werden können. Somit können Prozesse verschiankt werden, was zu Effizienz steigerung und zur Verringerung der Durchlaufzeiten führt .  

Der Einsatz von Videokonferenzen im Kundendienstprozeß wird in \[Lautz 95\] illustriert.  Beim herkömmlichen Kundendienstprozeß können Probleme, bzw. Mißverständnisse bei spielsweise bei der telefonischen Kommunikation zwischen Kunden und Kundendienst mitarbeitern entstehen, ebenso, wie zwischen Kundendienstmitarbeitern und Speziali sten. Videokonferenzen helfen diese Probleme durch die zusätzlichen Informationskanäle   
*3.1. cscw* 45  

zu beseitigen. Zusammenfassend können daher folgende Vorteile im "reenginierten" Kun dendienstprozeß, d.h. im veränderten Prozeß nach Einsatz von Videokonferenzen hervor gehoben werden:  

• Der Kundendienstmitarbeiter arbeitet verstärkt von seinem Arbeitsplatz und steht  somit einer größeren Anzahl von Kunden zur Verfügung.  

• Die visuelle Information unterstützt die Problemerkennung entscheidend.  

• Kleinere Probleme können vom Kunden selbst, nach Anleitung in der Videokonfe renz, behoben werden. Der Kundendienstmitarbeiter muß nur noch bei schwerwie genden Problemen zum Kunden reisen.  

• Der neue Kundendienstprozeß hilft Zeit, sowohl beim Kunden als auch beim Bereit steiler des Kundendienstes, zu sparen.  

• Sowohl der Kunde, als auch der Kundendienst sparen Geld, da teure Anfahrtszeiten  und Stundenlöhne entfallen.  

**3.1.4.2.5 Durchführung von Videokonferenzen**  

Die Durchführung von Videokonferenzen stellt ebenfalls einen organisatorischen Aufwand  dar. Einige Aspekte wurden bereits in Abschnitt 3.1.1.3 im Zusammenhang mit EMS Sy stemen erwähnt. \[Lautz 95\] hat mehrere Interviews mit Experten durchgeführt, in denen  *die sorgfältige inhaltliche Vorbereitung als elementare Voraussetzung einer erfolgreichen  Videokonferenz* herausgestellt wird. Weiterhin wird gefordert: *Insbesondere müssen die  Arbeitsinhalte eindeutig festgelegt sein und eine genaue Zeitplanung vorgenommen werden.  Die inhaltlichen Besprechungspunkte sowie umfassende Schriftstücke sollten unbedingt vor  der Sitzung an alle Besprechungsteilnehmer über Post Kurier oder FAX geschickt werden.*  Als Nachbereitung der Konferenz sind in den Unternehmen unterschiedliche Verfahrens weisen bekannt (vgl. \[Lautz 95\]):  

• die sofortige Rückkehr zum Arbeitsplatz,  

• eine kurze Nachbesprechung der Teilnehmergruppen,  

• anschließende Telefonate zwischen den Teilnehmern,  

• eine intensive Nachbesprechung, unterstützt durch das Videokonferenzprotokoll,  

• eine nachträgliche, schriftliche Protokollierung der Sitzung anhand der Videoauf zeichnung.  

Videoaufzeichnungen der Konferenz werden hauptsächlich zur Information von nicht an  der Konferenz beteiligten Mitarbeitern genutzt.   
46 *KAPITEL 3\. GRUNDLAGEN*  **3.2 Aspekte der Unternehmensorganisation**  

Zuerst soll der Begriff Organisation näher erläutert werden. In (Wittlage 78\] wird der  Begriff wie folgt beschrieben:  

*Instrumental gesehen ist die Organisation die Gesamtheit der zielgerichteten menschlichen  Handlungen (bzw. deren Ergebnis), durch die*  

• *ein soziales System strukturiert wird,*  

• *die Aktivitäten der zum System gehörenden Elemente (Menschen, Sachmittel) ge ordnet, der Einsatz dieser sowie das Informations-Handling geregelt werden.*  

*Im Gegensatz zu technischen Systemen oder biologischen Systemen ist in einem sozialen  System der Mensch das wesentliche Element. Daher sind die Interaktionsbeziehungen zwi schen den Systemmitgliedern, deren Leistungsvermögen, Wertvorstellungen und Bedürf nisse sowie die Verhaltenserwartungen (Rollen), die den einzelnen Mitgliedern zugeordnet  werden, von großer Bedeutung.*  

*Dieses so charakterisierte System wird sozio-technisches System bezeichnet.  Der Objektbereich der Unternehmensorganisation umfaßt nur den Teilbereich (System klasse) der sozio-technischen Systeme, der durch die Spezifizierung folgender Kategorien  gebildet wird:*  

• *eine begrenzte Anzahl grundlegender Systemeigenschaften*  

• *Zweck- und Zielorientierung*  

• *spezifisches Organisationsgepräge.*  

Die bekanntesten "klassischen" Organisationstrukturen sind Einliniensystem, Mehrlini ensystem, Stabliniensystem, divisionalisierte Organisation, Projektorganisation und tea morientierte Organisationsstrukturen (siehe beispielsweise (Wittlage 78\]). Von besonde rem Interesse sind in dieser Arbeit die teamorientierten Organisationsstrukturen. Hierbei  

wird die Entscheidungsbefugnis an Gruppen übertragen und nicht an einzelne Personen.  Im Bereich gruppenorientierter Gesamtstrukturen ist das "System überlappender Grup pen" anzutreffen, bei dem eine Vielzahl horizontal und vertikal überlappender Gruppen  gebildet werden. Diese sind durch "linking pins" verbunden, welche Mitglieder zweier  Gruppen sind. Der Projektleiter ist dabei das linking pin zur übergeordneten Gruppe,  ein anderer Mitarbeiter nimmt diese Funktion beispielsweise in einer hierarchisch gleich geordneten Gruppe wahr. Diese Konzeption soll die Kommunikation und Arbeitszufrie denheit innerhalb einer Organisation verbessern. In partiellen Gruppenstrukturen werden  Teams zur Unterstützung der traditionellen Struktur benutzt, beispielsweise als Ausschuß  \[Wittlage 78\].  

\[Reichwald Möslein Sachenburger u.a. 97\] fordert, daß Organisationen sich ständig  verändern müssen um sich den ändernden Randbedingungen anzupassen. Gründe hierfür  sind die Globalisierung der Märkte, die höhere Marktunsicherheit und die steigende Pro duktkomplexität. Dieser Herausforderung wird durch die Entwicklung neuer Konzepte  und durch den verstärkten Einsatz von Technologie begegnet, die den Wandel von Orga nisationsstrukturen ermöglicht, initiiert oder unterstützt.   
*3.2. ASPEKTE DER UNTERNEHMENSORGANISATION* 47  

Ein neues Konzept diesen Anforderungen zu begegnen, ist das der "lernenden Organisa tion" \[Senge 92\]. Es zielt darauf ab, daß Unternehmen sich selbstständig an Veränderun gen anpassen und weiterentwickeln. Neben der Weiterentwicklung und dem "Lernen" des  Einzelnen (Personal Mastery) ist das Lernen der Gruppe (Team Learning) eine weiterer  Bestandteil der lernenden Organisation \[Hongo Stone 97\].    
Technikeinsatz ist ein anderer Weg, die gewachsenen Anforderungen zu meistern.  Neue Technologie macht neue Organisationsformen möglich, wie beispielsweise verteil te und hybride Organisationsstrukturen. Im Bereich der teamorientierten Organisa tionsstrukturen wird durch den Einsatz von Telekooperation eine weltweit verteilte  Struktur, das sogenannte "globale Team" möglich \[Schwarzer Zerbe Krcmar 97\]. Ein  weiterer Trend sind Modularisierungskonzepte, wobei das Unternehmen mit Hinblick  auf die Prozesse in kleine Einheiten mit eigener Entscheidungskompetenz und Er gebnisverantwortung und nicht-hierarchischen Koordinationsformen umstrukturiert wird  \[Reichwald Möslein Sachenburger u.a. 97\].  

\[Fuchs-Kittowski Fuchs-Kittowski Sandkuhl 98\] sehen die Organisation als lebendiges,  kreatives Gebilde, welches Informationstechnologie und Konzepte der lernenden Orga nisation integriert. Als Ziel sollen hierbei nicht nur Informationstransformation sondern  auch Informationsentstehung und Wertbildung berücksichtigt werden, um eine höhere  Anpassungsfähigkeit an den permanenten Wandel zu erreichen.  

Weiterhin können sich Organisationen auch kurzfristig mit wechselnden Partnern zusam menschließen, was zu organisatorischen Netzwerken führt und somit zu einer "Virtuali sierung" der Unternehmen.  

**3.2.1 Virtuelle Organisationen**  

Virtuelle Unternehmen werden in \[Davidow Malone 93\] folgendermaßen beschrieben:  *Der außenstehende Betrachter sieht ein fast konturloses Gebilde mit durchlässigen und  ständig wechselnden Trennlinien zwischen Unternehmen, Lieferanten und Kunden. Von  innen ist das Bild nicht weniger formlos: Herkömmliche Arbeitsgruppen, Abteilungen und  Unternehmensbereiche reformieren sich ständig je nach Bedarf.*  

Das Konzept der virtuellen Organisation macht die Trennung zwischen Management und  Ausführung von Aktivitäten explizit. \[Mowshowitz 97\] charakterisiert eine virtuelle Orga nisation durch vier grundlegende Management-Aktivitäten, die zwischen Anforderungen  und Bereitstellen der Leistung unterscheiden.  

• Formulierung der abstrakten Anforderungen,  

• Beobachtung und Analyse der konkreten Leistungsersteller,  

• Dynamische Zuordnung von konkreten Leistungserstellern zu abstrakten Anforde rungen auf der Basis expliziter Kriterien und  

• Untersuchung und Analyse der Zuordnungskriterien.  

Dies bietet die Möglichkeit, die konkreten Leistungsersteller auszutauschen, um den Pro zeß der Leistungserstellung zu optimieren. Als Vorteil von virtuellen Organisationen ist  daher das explizite Formulieren von Zielen anzusehen, was zu stärkerer Transparenz und  zu größerer Objektivität in den Entscheidungen führt \[Faucheux 97\]. Nachfrager und An bieter können räumlich und bis zu einem gewissen Grad auch zeitlich voneinander getrennt   
48 *KAPITEL 3\. GRUNDLAGEN*  

sein. Diese Art der Unternehmensorganisation ist jedoch nur durch den Einsatz von Tele kooperation ökonomisch effizient realisierbar \[Reichwald Möslein Sachenburger u.a. 97\].  Grundsätzlich können mit dieser Technologie zwar alle Organisationsformen virtuali siert werden, da Kontrollstrukturen sowohl zentral als auch dezentral eingerichtet werden  können, \[Faucheux 97\] weist jedoch darauf hin, daß die Dynamik von virtuellen Unter nehmen eng mit dem Konzept der "Selbstorganisation" zusammenhängt, da objektive  Faktoren für die Entscheidungen des Unternehmens zugrunde liegen und somit die Lei stungerstellung regeln (siehe hierzu auch Abschnitt 3.3.1).  

\[Reichwald Möslein Sachenburger u.a. 97\] nennen als Charakteristika virtueller Organi sationen:  

Modularität Hiermit sind kleine, überschaubare Systeme mit dezentraler Entschei dungskompetenz und Ergebnisverantwortung gemeint.  

Heterogenität Die Module weisen unterschiedliche Leistungsprofile hinsichtlich ihrer  Kompetenzen auf.  

Räumliche **und** zeitliche Verteiltheit Die Grundbausteine der virtuellen Unterneh mung sind räumlich und zeitlich verteilt.  

Als Realisierungsprinzipien werden betrachtet:  

Offen-Geschlossen-Prinzip Das virtuelle Unternehmen präsentiert sich einem Kunden  als Einheit (geschlossen), es bildet sich jedoch erst im Prozeß der Aufgabenbewälti gung (offen).  

Komplementaritätsprinzip Es sind komplementäre Kompetenzen für die Bildung der  virtuellen Unternehmung notwendig.  

Transparenzprinzip Das verteilte System ist für Außenstehende transparent.  

Als oberstes Gestaltungsziel für virtuelle Organisationen gilt die Flexibilität.  \[Hoffmann 96\] sieht die Entwicklung hin zu virtuellen Unternehmen in vier Stufen13 .  

Virtuelle Arbeitsplätze Hierunter sind Telearbeitsformen zu  wie zum Beispiel Teleheimarbeit, alternierende Telearbeit, etc.  \[Hoechst Schneider Merschjan u.a. 98\]).  

verstehen,  (siehe  

Virtuelle Teams Dies sind Teams aus Mitarbeitern verschiedener Unternehmen mit un terschiedlichen Standorten, die sich für die Dauer eines Projektes zusammenfinden  (siehe hierzu auch Abschnitt 3.3.1).  

Virtuelle Organisationseinheiten Beispiele hierfür sind Großunternehmen mit ver zweigten Werks- und Niederlassungsstrukturen.  

Virtuelle Unternehmen Eine Struktur aus verschiedenen Unternehmen oder Einzel personen, die als eigenständiges Unternehmen agieren.  

13Sie unterscheidet hierbei zwischen virtuellen Organisationen und virtuellen Unternehmen. In der  Literatur werden diese Begriffe, zusammen mit den Begriffen "fraktale Unternehmen" und "Netzwerke"  teilweise synonym benutzt. Eine eindeutige Sprachregelung hat sich noch nicht durchgesetzt und ist von  Autor zu Autor verschieden.   
*3.3. ARBEITSGRUPPEN UND TEAMS* 49  

Als technologische Basis werden hier ebenfalls Telekooperationswerkzeuge, wie Video konferenzen, Application Sharing, gemeinsame Dokumenten- und lnformationsbestände,  Email, Groupware und Workflow-Management-Systeme genannt. In diesem Zusammen hang wird in (Hoffmann Hanebeck Scheer 96\] eine Kooperationsbörse gefordert, an der  jedes Unternehmen gemäß seiner Kernkompetenz standardisierte (Teil-) Geschäftsprozes se anbietet, die im Baukastenprinzip zu einem "virtuellen Geschäftsprozeß" zusammen gesetzt werden können, um so ein virtuelles Unternehmen schnell und effizient entstehen  zu lassen. (Scholz 96\] bezeichnet die ( telekooperative) Informationstechnologie sogar als  "Driving Force" für virtuelle Unternehmen.  

**3.3 Arbeitsgruppen und Teams**  

In den folgenden Abschnitten werden die Begriffe "Team" und "Arbeitsgruppe" genauer  untersucht. Die Begriffe sind von zentraler Bedeutung für das computergestützte Arbeiten  in modernen Organisationen.  

**3.3.1 Teams in der Organisation**  

Von besonderem Interesse in dieser Arbeit sind die Gruppen, die sich in Organisationen  bilden, bzw. gebildet werden. Aus diesem Grunde wird hier eine einschränkendere Defi nition gewählt als die in Abschnitt 3.1.1. Wesentliche Bestandteile sind \[Rosenstiel 92\]:  

• Mehrzahl von Personen in  

• direkter Interaktion über eine  

• längere Zeitspanne bei  

• Rollendifferenzierung und  

• gemeinsamen Normen, verbunden durch  

• ein Wir-Gefühl.  

Bei dieser Definition wird bereits auf Rollendifferenzierungen hingewiesen, die in einer  Gruppe auftreten. Individuen, die sich zur Gruppe zusammenschließen, organisieren sich  trotz möglich gleicher Zielsetzung arbeitsteilig. Somit gewinnt jeder einen Status, aus  dem sich entsprechendes Rollenverhalten ableitet. In organisierten Gruppen ergibt sich  die Struktur durch den Organisationsplan.  

In (Schwabe 95\] wird eine Arbeitsgruppe wie folgt definiert:  

*Eine Arbeitsgruppe ist eine Gruppe innerhalb einer Organisation, die gemeinsam an einer  Aufgabe oder an dem Erreichen eines gemeinsamen Ziels arbeitet.*  

In \[Teufel Sauter Mühlherr u.a. 95\] wird dann noch weiter zwischen Arbeitsgruppe und  Team unterschieden. Gruppen werden zu Teams, *wenn die Mitglieder des Teams den  Willen haben, ihre Leistungen zugunsten des erfolgreichen Erreichens eines Zieles zu ko ordinieren und zu optimieren.* In Abbildung 3.14 (nach (Teufel Sauter Mühlherr u.a. 95\])  werden die beiden Konzepte gegenübergestellt.  

Eine gruppenorientierte Struktur, die hinsichtlich der Kompetenz und Verantwortung der  Gruppenmitglieder weiter über die bereits vorgestellten Konzepte hinausgeht, sind die   
50 *KAPITEL 3\. GRUNDLAGEN*  

Aspekte Arbeitsgruppe Team  FOhrung: Vorbestimmte. meist hietarchisc:h Abwec:hsoinde Führungsrollen. Jedes Team aufgebaute Führung cbc:h eine Person. m\~glied kann in einer bestirrmten Situation dwc:h  fachliche Qualifikation die Führung übernehmen .    
Verantwortung: lndivic1Jelie Vetontwortung. lnd"IVic1Jelie und gegensMige Vetantworrung. Da.s  Führungsposition ist nac:h außen verantwortlich. Team ist aisGanzu noch außen vetantwortllc:h.  

Das Ziel det Gruppe wird c1Jrc:h Obergeordnete    
Ziel: Ziele des Untetnehmens bestimmt. Die Ziel\- Das Team bestirrmt sein eigenes Zielsystem.  verfolgungwird c1Jrc:h die FOhrungspenon Alle Teorrm\~gl\]eder stimmen in desem Obetoin.  wahrgenommen.  

Arbeit: lndivic1Jelle Arbeitsprodukta. Gemeinsame Albe\~sproc1Jkte .  

Sitzungen:    
Dor Gruppenleitet fUhrt etli2ienta Sitzungen. Diskussion m\~ offenem Ende und aktive vorwiegend lnlorma.tionssitzungen. Problemlösungssitzungen. Die Sitzungsteilnehmer sind vorwiegend pessiv.  Die Gruppenetli2ienz wird c1Jrch Vergleich\~ Die Teamleistungwirddwc:h dasMaßder Zie\~    
Maß det Effizienz: anderen Gruppen oder \~ be\!riebswirtsc:haft- errelchung. also anhand des gemeinsamen End i chen Leistungs\~\!lßen gemessen. proc1Jktes gemessen.  Die Gruppeneffizienz wird c1Jrch Vergleich m\~ Gemeinsame Diskussion. Entscheidung FUhrungsstü: anderen Gruppen oder m\~ batriobswlrtschaft\- und Erorba\~ng. Iichen Leistungssr\!lßen gemessen.  Abbildung 3.14: Vergleich zwischen Arbeitsgruppe und Team  

"teilautonomen Arbeitsgruppen" (Rosenstiel 92\] (im englischsparehigen Raum als "Self directed Work Teams" oder "Self-managed workteams" 14 ). Es sind führerlose Arbeits gruppen, deren Mitglieder bei der Lösung der wesentlichen Aufgabe der Gruppe eigen verantwortlich zusammenarbeiten. Die Gruppe hat dabei Einfluß auf ihre Ziele, die Or ganisation und Durchführung ihrer Arbeit. Sie kann ihre Zusammensetzung und die  

geltenden "Spielregeln" selbst entscheiden. In Untersuchungen wurde gezeigt, daß durch  die Einführung von teilautonomen Arbeitsgruppen Arbeitsqualität und Zufriedenheit ge steigert werden können 15 .  

Als weitere Möglichkeit zur Verbesserung der Qualität in einem Unternehmen wird in  \[Dilg 95\] "Kaizen" genannt. Kaizen stammt aus dem Japanischen und bedeutet ständige  Verbesserung in kleinen Schritten. Der Kundenwunsch besitzt oberste Priorität. Der  Erfolg von Mitarbeitern und Managern wird daran gemessen, wie erfolgreich sie diese  Verbesserungen herbeiführen. Die Philosophie von Kaizen stellt den Menschen und die  Teamarbeit (Self-managed Teams) in der Vordergrund; Einzelkämpfer sind hierbei nicht  gefragt.  

In \[Lipnack Stamps 97\] wird darauf verwiesen, daß Mitarbeiter (ohne die Unterstützung  von Telekommunikationstechnologie) selten zusammenarbeiten, wenn sie mehr als 50  Fuß16 voneinander entfernt sind. Der Begriff "virtuelles Team" wird dort wie folgt defi 

14 siehe z.B. Center for the Study of Work Teams, University of North Texas,  http:/ Jwww.workteams.unt.edu/.    
15Eine Qualitäts- und Produktivitätssteigerung von 30% bis 40% ist normalerweise zu erwarten, in  besonderen Fällen können 200% erreicht werden (gemäß einer Aussage von Dr. David Chaudron, Inter national Consultants in Organizational Change, San Diego, CA, USA).  

16 50 Fuß sind 15.24 Meter.   
*3.3. ARBEITSGRUPPEN UND TEAMS* 51  

niert:  

*Anders als konventionelle Teams, arbeitet ein virtuelles Team über Raum- Zeit- und* Or *ganisationsgrenzen hinweg, mit Verbindungen, die durch Kommunikationstechnologienetz werke verstärkt werden.*  

Die drei grundlegenden Bestandteile eines virtuellen Teams sind nach  (Lipnack Stamps 97\]:  

**Menschen** Virtuelle Teams bestehen aus unabhängigen Mitgliedern. Die Teamleitung  ist normalerweise informal und verteilt, da jedes der Mitglieder eine bestimmte Ex pertise hat und zu dem Zeitpunkt, zu dem diese gefragt ist, die Leitung übernimmt.  Weiterhin müssen die Teammitglieder verschiedene organisatorische Ebenen inte grieren, da sie zu verschiedenen Teams innerhalb, bzw. außerhalb der Organisation  gehören und selbst ein Team bilden.  

**Zweck** Für Teams existieren kooperative Ziele, voneinander abhängige Aufgaben und  konkrete Resultate. Kooperative Ziele stellen den Grund der Teamarbeit dar.  

**Verbindungen** Für die Verbindungen sind unterschiedliche Medien, Interaktionen über  (Unternehmens- bzw. Abteilungs-)Grenzen hinweg und Vertrauensbeziehungen von  besonderer Wichtigkeit.  

Gerade der letzte Punkt ist von großer Bedeutung, da er das "soziale Kapital" eines  Unternehmens bildet, da ein neues Team  

• Vertrauen unter den Teammitgliedern benötigt, um mit der Arbeit zu beginnen,  • Vertrauen während schwieriger Projektphasen benötigt, um diese zu bewältigen und  

• ein Gefühl des Vertrauens gegenüber den Projektpartnern in das eigene Unterneh men einbringt.  

Dieses über die Zeit wachsende soziale Kapital ist wichtig um mit den unterschiedlichsten  Partnern schnell ein virtuelles Team zu gründen, um gemeinsam Aufgaben zu bewältigen,  die alleine nicht bewältigt werden können.  

**3.3.2 Teambewertung**  

Die Bewertung der Teameffizienz ermöglicht es, sowohl möglichst gute Teams für die  Erfüllung gewisser Aufgaben zu ermitteln, als auch Schwachstellen bei existierenden  Teams aufzudecken, die beispielsweise durch Training verbessert werden können (siehe  hierzu auch das Konzept "lernende Organisation" in Abschnitt 3.2).  

Um bereits im voraus eine möglichst gute Teamarbeit zu garantieren, könnten beispiels weise die Mitglieder bereits entsprechend selektiert werden. (Schneider 85\] sagt, daß  hinsichtlich der Zusammensetzung der Gruppe die Gleichheit der Persönlichkeitsmerk male oder Einstellungen von Gruppenmitgliedern eine geringere Leistung zu ermöglichen  scheint (siehe hierzu auch (Katzenbach Smith 93\]). Es handelt sich dabei jedoch um ein  "labiles Phänomen", da es durch die Variation von Zusatzeinflüssen umgekehrt werden  kann. Somit können diese Merkmale nicht generell herangezogen werden, um ein lei stungsfähiges Team zusammenzustellen.   
52 *KAPITEL 3\. GRUNDLAGEN*  

In \[Stöger 96\] wird eine Klassifikation in verschiedene Persönlichkeitstypen vorge stellt (basierend auf den Typenindikatoren von Myers-Briggs \[Briggs-Myers Myers 86,  Briggs-Myers Myers 95\]). Aufbauend auf dieser Klassifikation werden mögliche Team zusammensetzungen für unterschiedliche Aufgabentypen vorgeschlagen. Die Zuordnung  zu einzelnen Persönlichkeitstypen ist jedoch nicht konstant über einen längeren Zeitraum;  Persönlichkeiten können sich ändern.  

Grundsätzlich kann über die oben beschriebenen Ansätze gesagt werden, daß sie sich in ei nem Unternehmen aus mehreren Gründen höchstwahrscheinlich nicht durchsetzen lassen.  Einerseits müssen sämtliche potentiellen Teammitglieder dieser Persönlichkeitsklassifika tion unterzogen werden, was zu einem erheblichen Aufwand führt und zu einer Erfassung  von hochsensiblen, persönlichen Daten. Diese Klassifikation müßte weiterhin in bestimm ten Abständen wiederholt werden. Speziell die Erfassung dieser persönlichen Daten wird  garantiert zu Akzeptanzproblemen in einem Unternehmen führen, sowohl bei den Mit arbeitern, als auch bei den Betriebsräten und Gewerkschaften. Andererseits kann durch  diese Klassifikation nicht die Art und Höhe eines positiven oder negativen Gruppeneffek tes (vgl. assembly effect in Abschnitt 3.1.1.4) für ein Team ermittelt werden, vielmehr  würde davon ausgegangen werden, daß alle Teams mit äquivalenten Persönlichkeitstypen  gleiche Leistung erbringen würden. Die Gruppeneffekte könnten somit auch nicht als  Kriterium in den Selektionsprozeß aufgenommen werden. Weiterhin können persönliche  Freundschaften und Feindschaften, welche offensichtlich einen Einfluß auf die Arbeit eines  Teams haben, durch solche Klassifikationen nicht erfaßt werden.  

Umgekehrt kann, nachdem die Teamarbeit stattgefunden hat, eine Evaluation dieser Ar beit durchgeführt werden, um zu einer Leistungsbewertung des Teams zu gelangen. Hier bei soll das Team als Einheit im Sinne der teilautonomen Arbeitsgruppen (siehe Abschnitt  3.3.1) betrachtet werden. Grundsätzlich kann zwischen mehreren Faktoren unterschieden  werden, die einen Einfluß auf die Leistungsfähigkeit eines Teams haben und die zur Be wertung herangezogen werden können.  

Die Art der Aufgabe stellt beispielsweise einen Einflußfaktor auf die Gruppenarbeit dar.  \[Schneider 85\] stellt eine Unterscheidung in Aufgaben vor,  

• deren Lösung mit einem Zufallsfehler behaftet ist, so daß die Nutzung mehrerer  Schätzungen wie z.B. Längenschätzen zu einer Fehlerreduktion führt.  

• die Informationslieferung voraussetzen, wie z.B. kreative Entwicklungen oder  Gedächtnisleistungen.  

• die eine Vermehrung des Einsatzes und der Arbeitsteilung verlangen, wie z.B. das  Ausheben einer Grube oder Trennung von Produktion und Vertrieb.  

Je nach Aufgabentyp sind auch die Anforderungen an das Team und die Teammitglieder  unterschiedlich. Es kann somit kein uniformes Bewertungsprofil für eine Gruppe erstellt  werden.  

Ein eindeutig positiver Einfluß auf die Teameffizienz geht von der Dauer der Gruppenar beit aus. Bei Aufgaben, die Gruppenentscheidungen forderten, erwiesen sich schon länger  bestehende Gruppen als effizienter und kreativer \[Schneider 85\].    
Andere Aspekte, die zur Effizienzmessung von Gruppenarbeit herangezogen werden  können, wurden bereits im Abschnitt 3.1.1 erwähnt. So korreliert die Zufriedenheit des  einzelnen mit der Akzeptanz der Gruppenentscheidung (d.h. es handelt sich nicht um  Pseudopartizipation; siehe Abschnitt 3.1.1.4 und \[Rosenstiel 92\]).   
*3.3. ARBEITSGRUPPEN UND TEAMS* 53  

Weiterhin wurde ein "optimaler" Problemlöseverlauf bei der Kommunikation in Gruppen  vorgestellt, bei der zuerst Ideen in einem breiten Spektrum (divergente Phase) verfolgt  werden um sie in einer zweiten Phase (konvergente Phase) zu vertiefen (siehe Abschnitt  3.1.1.2 und \[Schwabe 95\]).  

In \[Perey 97\] wird beispielsweise eine Checkliste vorgestellt, anhand derer der Facilita tor eines EMS die Effektivität der Sitzung evaluieren soll. Beispiele für Fragen dieser  Checkliste sind:  

• Hat das Team bzw. die Sitzung zu den erwarteten Resultaten geführt?  • War der Kunde zufrieden mit den Resultaten?  

• Welches der Ziele haben wir erreicht?  

• Welches der Ziele haben wir nicht erreicht?  

• Wie gut war der Verlauf?  

• Inwieweit unterstützten oder verhinderten die Werkzeuge Effektivität und Produk tivität der Gruppe?  

• Wurden die Aufgaben in der dafür vorgesehenen Zeit erledigt?  

• Was erreichte die Gruppe durch die Unterstützung des Facilitators?  • Was hätte die Gruppe ohne Facilitator erreicht?  

\[Dilg 95\] schlägt als Messung der Effektivität von Projektmeetings vor, das Verhältnis  zwischen Aktivitäten vs. Teilnehmer und Zeit zu betrachten. Dieses Maß ist jedoch nur  bedingt aussagekräftig, wenn man die Zeit für die Nachbereitung der Konferenz und das  Verteilen der Information mitberücksichtigt (siehe Abschnitt 3.1.1.4).  

\[Just 96\] und \[Zigon 98\] beschreiben jeweils ein Verfahren zur Ermittlung von spezifi schen Performanzkriterien, bzw. der Anpassung existierender Kriterien auf die spezielle  Problemstellung und die betrachtete Domäne.  

\[ICASE 98\] haben, basierend auf ihren Erfahrungen, einen Fragebogen zur Messung der  Leistungsfähigkeit von "Techniker-Teams", die im Bereich Design oder Fertigung arbeiten,  entwickelt, welcher folgende sechs Faktoren überprüft:  

• Die Herangehensweise des Teams an das Problem oder die Aufgabe.  • Die Führung des Teams.  

• Koordination der Tätigkeitsverantwortlichkeiten.  

• Unterstützung seitens der Organisation.  

• Kommunikation und Rückmeldung zwischen den Teammitgliedern.  • Teamrollen und \-normen.  

• Die Rolle des einzelnen im Team.   
54 *KAPITEL 3\. GRUNDLAGEN*  

Im wissenschaftlichen Umfeld sind Expertengremien zur Messung der Performanz von  Forschergruppen üblich. Sie evaluieren die Arbeiten dieser Gruppen und geben danach  ein Votum über Inhalte und Fortschritte ab. Es handelt sich hierbei um "wissenschaftliche  Beiräte" ein "Scientific Advisory Board" oder ein sogenanntes "Benchmarking Commit   
tee".  

\[Francis Young 79, Francis Young 89, Francis Young 96\] haben mehrere Fragebögen zur  Teambewertung entwickelt, welche, im Gegensatz zur vorherigen Herangehensweise,  abhängig von der zu lösenden Aufgabe und nicht von der Domäne sind. Das Instru ment zur Messung der Leistungsfähigkeit und Stärken/Schwächenanalyse eines Teams ist  im Anhang A.1 aufgeführt. Die Äußerungen beziehen sich auf 12 Faktoren:  

• Inkompetente Führung  

• Unzureichende Qualifikation  

• Fehlendes Engagement  

• Schlechtes Gruppenklima  

• Niedrige Leistungsstandards  

• Unklare Rolle im Unternehmen  

• Ineffektive Arbeitsmethoden  

• Schlechte Organisation  

• Destruktive Kritik  

• Vernachlässigte Weiterentwicklung  

• Fehlende Kreativität  

• Negative Beziehungen zu anderen Gruppen  

Ausgehend von dieser Bewertung kann dann ein "Team-Aufbau"  (Schulungs/Weiterbildungs-) Programm entwickelt, damit sich eine Gruppe zu ei nem effektiven Team entwickelt (was ebenfalls ein Beitrag zur lernenden Organisation  ist, siehe Abschnitt 3.2).  

Die Autoren haben weiterhin einen Fragenbogen zur Bewertung von Meetings entwickelt,  bestehend aus 12 Fragen mit jeweils drei Ausprägungen (siehe Anhang A.2).  Ein weiteres Instrument bezieht sich auf die Bewertung des effektiven Problemlösens. Es  besteht aus 10 Fragen mit einer siebenstufigen Skala (siehe Anhang A.3).  Die Messung der Leistungsfähigkeit von Teams ist Stand der Forschung. Es gibt vor allem  in Deutschland bisher keine systematische Erhebung von Faktoren zu deren Ermittlung.  Die Arbeiten von \[Francis Young 96\] stellen ein weit verbreitetes Instrumentarium dar  und haben sich in der Praxis bewährt \[Knoblauch 98\], wurden jedoch bisher noch nicht  systematisch untersucht \[Fischer 98\]. Im Rahmen des "Forschungsprojektes Teamdiagno se" \[Feuerstein 98\] wird der Fragebogen zum Team-Aufbau (siehe Anhang A.1) momentan  mit einer Stichprobe von über 200 Personen validiert.   
*3.4. QUALITÄTSSTANDARDS* 55  **3.4 Qualitätsstandards**  

Einer der heute für Unternehmen am wichtigsten Qualitätsstandards ist die DIN  EN ISO 9000-Familie, deren Ziel es ist, die Kundenzufriedenheit zu erhöhen  \[Hering Steparsch Linder 97\]. Sie gliedert sich in drei grundlegende Standards und zwei  Richtlinien:  

**ISO 9001** umfaßt den gesamten Produktlebenszyklus, vom Design über die Entwicklung,  Produktion, Inbetriebnahme bis hin zum Kundenservice.  

**ISO 9002** betrifft nur Produktion, Montage und Kundendienst.  

**ISO 9003** bezieht sich auf die Endprüfung.  

**ISO 9000** gibt Hilfestellungen für Auswahl und Benutzung des Qualitätssystems.  **ISO 9004** enthält Richtlinien für die Implementierung des Qualitätsstandards.  \[Taormina 96\] faßt den Inhalt von ISO 9000 in folgenden Kernaussagen zusammen:  • Dokumentiere was Du tust.  

• Tue, was Du dokumentierst.  

• Verifiziere, daß Du es tust.  

Etwas detaillierter wird in \[Hering Steparsch Linder 97\] als Element des Qualitätsmana gementsystems die Forderung nach *Regelung der Verantwortung, Befugnisse und Schnitt stellen aufgestellt.* Hierbei werden Organisationspläne erstellt und Aufgaben und Funk tionen (Verantwortungen, Befugnisse) beschrieben (siehe hierzu auch \[Brauer Kühme 96\]  und \[Lang 96\]). Ein weiteres Element ist die *Bereitstellung von qualifiziertem Personal*  

*und angemessenen Mitteln.* Hierunter fällt die Prüfung und Verfolgung der Abläufe und  der Ergebnisse von Entwicklung, Produktion, Montage und Kundendienst.  Geschäftsprozeßoptimierung ist dabei ein Werkzeug, welches zur Qualitätsverbesserung  in einem Unternehmen dient \[Taormina 96\] (siehe hierzu auch Abschnitt 3.1.4).  Zur Verbesserung der Qualität von Meetings wird in \[Dilg 95\] eine Regelung aus einem  Softwarehaus angeführt. Wöchentliche Projektteam-Meetings wurden auf Montag 09:00  gelegt. Jeder Teilnehmer mußte vorbereitet erscheinen, d.h.  

• Er mußte einen Plan für die kommenden Woche und einen Rückblick auf die ver gangene Woche vorbereiten,  

• den Status und die Unterlagen zu den ihm übertragenen Aufgaben aus dem letzten  Meeting bereit halten,  

• seine Diskussionspunkte so vorbereiten, daß sie in 10 Minuten besprochen werden  konnten.  

Als Verhaltensregeln während des Meetings galten:  

• Keine Unterbrechungen der Redner.   
56 *KAPITEL 3\. GRUNDLAGEN*  

• Pünktlicher Beginn, Absage mehrere Tage im voraus. Bei Verspätung eines Teil nehmers wurde das Meeting abgesagt, der entsprechende Mitarbeiter mußte einen  Ausweichtermin organisieren.  

• Jedes Meeting hat einen Moderator und Protokollführer. Die Aufgaben werden  abwechselnd vergeben.  

• Aufgaben werden einer Person zugewiesen und mit Endtermin versehen.  • Die Meetings werden so kurz wie möglich gehalten.  

3.5 **Zwischenbilanz und Forderungskatalog**  

Es werden nun einige Schlüsse aus den obigen Abschnitten gezogen, indem die Ergebnisse  zueinander in Relation gesetzt werden.  

Es besteht ein offensichtlicher Zusammenhang zwischen Komplexität der Aufgabe, Orga nisation der Kommunikation und dem Kommunikationsmittel (siehe Abschnitte 3.1.1 und  3.1.3). Je komplexer die Aufgabe ist, desto wichtiger ist es, daß alle Beteiligten zusammen arbeiten und an der Lösungstindung beteiligt sind. Dies muß durch die Kommunikations struktur (dezentrale Struktur) und durch die Kommunikation über das Medium (reiches  Medium) unterstützt werden. Handelt es sich jedoch um ein einfaches, gut strukturier tes Problem, so kann dies effizient durch zentralisierte Kommunikationsstrukturen unter  Verwendung armer Medien gelöst werden. Es wurde gezeigt, daß die falsche Wahl der Me dien für beide Fälle schädlich ist (Overcomplication, Oversimplification). Da beim Ziel  einer ganzheitlichen Unterstützung von Arbeitsprozessen in einem Unternehmen sowohl  gut strukturierte Aufgaben als auch weniger gut strukturierte Aufgaben auftreten, muß  eine integrierte Lösung geschaffen werden, die die passenden Bausteine, wie multimediale  Audio/Video Desktopkonferenzsysteme und Workfiow-Management-Systeme, welche den  unterschiedlichen Klassen angehören, integriert. Aus der Sichtweise der Koordinations theorie (siehe Abschnitt 3.1.2) müssen diese unterschiedlichen Arbeitsformen auch durch  unterschiedliche Werkzeuge koordiniert werden. Die Forderung nach Unterstützung von  Arbeitsprozessen in weltweit verteilten Organisationen (Virtual Organisations, Teamar beit, teilautonome Arbeitsgruppen), unterstreicht diesen Ansatz.  

Die Integration von Teamarbeit in das Unternehmen wurde ebenfalls als wichtiges In strument zur Anpassung der Unternehmensorganisation an den gestiegenen und globalen  Wettbewerb und zur Steigerung von Flexibilität und Effizienz der Organisation heraus gestellt (teamorientierte Organisationsstrukturen, Learning Organization, Self-directed  Work Teams). In den Abschnitten 3.1.1.4 und 3.2 wurde die Überlegenheit von Grup pen allgemein und Gruppen/Teams als Teil der Organisation herausgearbeitet. Es fehlen  jedoch aus technischer Sicht Möglichkeiten, Teams in die Aufbauorganisation von Unter nehmen zu integrieren, so daß Workfiow-Management-Systeme (siehe Abschnitt 3.1.4.1)  oder Videokonferenzsysteme darauf zugreifen können.  

Da die Teamarbeit in einen Arbeitsprozeß eingebettet ist, von dem Vergangenheit  (durch die Historiendaten des Workfiow-Management-Systems) und Zukunft (durch die  Workfiow-Definition) bekannt sind, ist es weiterhin möglich, die Gruppenarbeit in ganz  besonderer Weise zu unterstützen. Haben die Teammitglieder genügend und passende  Informationen für die (synchrone) Teamarbeit, so können sie ihre Arbeit besser und ef 

fizienter erledigen (siehe Abschnitte 3.1.1.1, 3.1.1.2, 3.1.1.4). Vor dem hier behandelten   
*3.6. TECHNIKEN ZUR UNTERSTÜTZUNG VON TEAMS* 57  

Hintergrund eröffnet sich folglich eine vollständig neue Perspektive zur Verstärkung dieser  Effekte, indem das "Informieren" automatisiert wird. Zusätzlich wird damit ein Beitrag  zur Qualitätssicherung gemacht (ISO 9000).  

Die Gruppenleistung kann zusätzlich durch den Einsatz eines Facilitators verbessert wer den (siehe Abschnitt 3.1.1.3).  

Da die Teamarbeit in einen Arbeitsprozeß eingebettet ist, der weiterhin mehrmals, d.h.  bei jeder Instantiierung desselben Workfl.owmodells in gleicher Weise durchlaufen wird,  eröffnet sich noch eine weitere Möglichkeit für die Unterstützung der Gruppenarbeit.  Durch die Bewertung der Konferenzen kann ein Rückschluß auf die Effizienz der Teamar beit gezogen werden (siehe Abschnitt 3.3.2). Durch mehrmaliges Durchlaufen des gleichen  Workflows mit unterschiedlichen Teammitgliedern kristallisiert sich ein besonders effizien 

tes Team für diesen Flow heraus, welches in Zukunft für die Bearbeitung dieser Aufgabe  erneut herangezogen werden kann. Dadurch, daß eine Gruppe über eine längere Zeitdau er zusammenarbeitet, kann wiederum ein positiver Effekt auf die Teameffizienz verstärkt  werden. Hiermit wird auch ein Beitrag zum "Knowledge Management" im Unternehmen  geleistet (siehe Abschnitte 3.1.4.1 und 3.3.1 "soziales Kapital").  

In den folgenden Abschnitten werden nun Techniken aus der Informatik, im besonderen  der "Künstlichen Intelligenz" vorgestellt, die zur Operationalisierung der oben beschrie benen Anforderungen und Konzepte dienen.  

3.6 Techniken zur intelligenten Modeliierung und  Unterstützung von virtuellen Teams  

In den folgenden Abschnitte werden die Werkzeuge vorgestellt, die zur Operationalisierung  der Konzepte des Virtual Team Assistant herangezogen werden.  

3.6.1 Hypertextsysteme  

Zu Beginn wird die Philosophie von Hypertext erklärt, um danach auf die bekannteste  Ausprägung dieses Konzeptes einzugehen, das WorldWideWeb.  

Es wird in der Literatur oftmals nicht zwischen Hypertext und Hypermedia unterschieden.  Im Gegensatz zu Hypertext- sind Hypermediasysteme nicht nur auf textuelle Medien be schränkt, es können auch Graphiken, Videos, Töne, etc. integriert werden. Im Folgenden  werden die Begriffe ebenfalls synonym benutzt.  

3.6.1.1 Grundlagen  

\[Kuhlen 91\] unterscheidet zwischen Wissen, als Bestand an gesicherten Modellen über  Objekte und Sachverhalte, die ein Individuum oder eine Gruppe als kognitive Struktur  besitzt und Information. Er betrachtet Information nicht als frei verfügbaren und objektiv  definierbaren Teil des Wissens. Information muß vielmehr unter Berücksichtigung vieler  pragmatischer Rahmenbedingungen, wie Zeit, Geld, soziale Umgebung, organisationeile  Ziele, individuelle Informationsverarbeitungskapazität und Lernstile jeweils neu erarbei tet werden. Information wird daher in \[Kuhlen 91\] auch als *Wissen in Aktion* bezeichnet.  Charakteristiken von Information sind Neuheit und Handlungsrelevanz. Information muß   
58 *KAPITEL 3\. GRUNDLAGEN*  

weiterhin in der richtigen Menge abgegeben werden, da sie nicht in beliebigen Mengen auf genommen werden kann (vgl. auch die Forderung nach Informationsfiltern in Abschnitt  3.1.1.1). Der Prozeß der Transformation von Wissen in Information ist ein informations verarbeitender Prozeß. Hypertextsysteme können diesen Prozeß durch ihre Adaptivität  und Flexibilität unterstützen, da sie Information, gemäß den oben gemachten Bemer kungen produzieren. Hypertextsysteme können daher mit Recht als Informationssysteme  bezeichnet werden. Bei der Entwicklung eines Hypertextsystems muß daher diesem Punkt  besondere Aufmerksamkeit geschenkt werden.  

In \[Kuhlen 91\] wird Hypertext wie folgt charakterisiert:  

*Die Grundidee von Hypertext besteht darin, daß informationeile Einheiten, in denen Ob jekte und Vorgänge des einschlägigen Weltausschnitts auf textuelle, graphische oder audio visuelle Weise dargestellt werden, flexibel über Verknüpfungen manipuliert werden können.*  Manipulieren ist hierbei vor allem das flexible Ändern der Kontexte dieser Einheiten  (auch Knoten genannt). Dabei dienen diese Einheiten oder Teile der Einheiten als Aus gangspunkt für Verknüpfungen, die direkt aktiviert werden können. Das System geht  dann dieser Verknüpfung (auch Links genannt) nach und stellt den Endpunkt der Ver knüpfung, welche eine andere informationelle Einheit (oder ein Teil dieser Einheit) ist,  dar. Es existieren ersetzende, parallele oder eingebettete Anzeigen.  

\[Gerdes 97\] klassifiziert weiterhin Links, je nachdem ob sie innerhalb eines Knotens, zwi schen zwei Knoten desselben Hypertextes oder zwischen unterschiedlichen Hypertexten  referenzieren (intra- vs. inter- vs. extrahypertextuell) und ob sie auf Knoteninhalte oder  den Knoten selbst zeigen (global vs. lokal). Ebenso wird die Struktur der Dokumente in  linear, hierarchisch und vernetzt unterteilt.  

Als Architektur eines Hypertextsystems wird in \[Kuhlen 91\] eine Dreiteilung in Navigati onskomponente, Hypertextbasis und Autorenkomponente vorgeschlagen. In \[Gerdes 97\]  wird ein Hypertextsystem ähnlich definiert, als  

*alle Softwarehilfsmittel, mit denen Hypertexte erstellt, verwaltet und genutzt werden  können.*    
Ein weiteres grundlegendes Merkmal, welches aus der oben beschriebenen Struktur her vorgeht, ist die Nichtlinearität von Hypertext (im Gegensatz zu Büchern).  

**3.6.1.2 WorldWideWeb**  

Das WorldWideWeb (kurz: WWW), welches auf dem Hypertext-Konzept basiert, ist  das heute bekannteste und meistgenutzte Werkzeug zum weltweiten Informationszugriff.  Die Sprache, welche den Aufbau von Hypertextdokumenten im WWW ermöglicht, heißt  "Hypertext Markup Language" oder kurz: HTML (siehe hierzu beispielsweise \[Münz 98\]).  Zum Navigieren dienen sogenannte Web-Browser, wie beispielsweise der "Netscape Na 

vigator;' von Netscape (siehe \[Netscape 98\]). Zum Verwalten können Systeme, wie der  Apache WWW-Server (siehe \[Apache 98\]), benutzt werden. Zum Erstellen dienen nor male Texteditoren oder komfortablere Systeme, wie "Frontpage" von Microsoft (siehe  \[Microsoft 98-1\]). Das Navigieren im WWW erfolgt dann durch das Anzeigen von Hyper textdokumenten, welche (üblicherweise farblieh markierte) Links in Form von Graphiken  oder Wörtern enthalten. Durch das Aktivieren dieser Links gelangt man zu weiteren  Hypertexten.  

Seit der HTML-Version 2.0 sind weitere Funktionen im WWW möglich, die über das Navi gieren in Texten hinausgehen \[Batinic Bosnjak 97\]. Für Interaktionen mit dem Benutzer   
*3.6. TECHNIKEN ZUR UNTERSTÜTZUNG VON TEAMS* 59  

können Eingaben auf einer WWW-Seite vorgenommen werden, durch:  • Textfelder, in die Texte eingegeben werden können,  

• Buttons, mit denen Werte ausgewählt werden können und die zum Rücksetzen und  Abschicken von Eingaben auf einer Web-Seite dienen,  

• Listenfelder und Drop-down Menüs zur Auswahl mehrerer Alternativen und  

• Sensitivity Maps, mit denen bestimmte Bereiche einer Graphik mit Operationen  verknüpft werden können.  

Die Online-Auswertung der Daten erfolgt durch sogenannte "Common Gateway Interface  (CGI)-Skripte", die auf dem WWW-Server installiert sind. Die CGI-Skripte können dabei  in jeder Sprache geschrieben sein, die der WWW-Server unterstützt (beispielsweise Perl  oder TCL).    
Mit Hilfe eines Hypertextsystems kann beispielsweise effektiv ein Fragebogen für firmen interne Befragungen realisiert werden \[Batinic Bosnjak 97\].  

Zusätzlich lassen die meisten WWW-Browser die Definition sogenannter Helper Applikationen zu, welche vom Benutzer eingetragen werden müssen. Somit kann eine  Verknüpfung von Dateitypen auf einem WWW-Server zu lokalen Anwendungen beim Be nutzer erzeugt werden. Führt ein Link auf einer WWW-Seite zu einer Datei dieses Typs,  wird die entsprechende Anwendung beim Benutzer aufgerufen, um die selektierten Daten  zu interpretieren.  

**3.6.2 Benutzermodellierung**  

Das Ziel der Benutzermodeliierung ist es, ein kooperatives und adaptives Verhalten einer  Anwendung zu ermöglichen, wobei die individuellen Eigenschaften und Ziele des Benutzers  berücksichtigt werden \[Blank 96\].  

**3.6.2.1 Grundlegende Betrachtungen zu Benutzermodellen**  

Der Begriff "Benutzermodell" ist wie folgt definiert:    
*Ein Benutzermodell ist eine Wissensquelle in einem natürlichsprachigen Dialogsystem,  welche explizite Annahmen über alle Aspekte des Benutzers enthält, welche relevant für  das Dialogverhalten des Systems sein können* \[Wahlster Kobsa 89\].    
Es werden hierin auch verschiedene Wissensquellen aufgeführt, die zur Erstellung eines  Benutzermodells benutzt werden können:  

• Default Annahmen, die über jeden Benutzer des Systems gemacht werden können.  • Extraktion von Informationen aus bereits existierende Benutzermodellen.  • Annahmen, die aus Benutzereingaben geschlossen werden.  

• Annahmen aus Informationen, die das System dem Benutzer bereits geliefert hat.  

• Annahmen aus nichtlinguistischen Benutzereingaben, beispielsweise durch Befra gung des Benutzers nach seinen charakteristischen Eigenschaften.   
60 *KAPITEL 3\. GRUNDLAGEN*  

Zur Repräsentation von Benutzermodellen werden folgende Konzepte herangezogen:  

• lineare Parameter, welche das Niveau bezüglich einer Ausprägung der Persönlichkeit  des Benutzers angeben.  

• Markieren der vom Benutzer erwähnten Konzepte.  

• Überlagerungstechniken, welche für einen Benutzer bezüglich der im System be kannten Konzepte angeben, ob er sie kennt oder nicht.  

• Logische Beschreibung der Inhalte von Annahmen und Zielen eines Benutzers.  

Ausführliche Betrachtungen zum Gebiet der Benutzermodellierung sind in  \[Wahlster Kobsa 89\] und \[Maybury Wahlster 98\] zu finden.  

Von besonderem Interesse für diese Arbeit ist das Konzept des "Stereotyps". Ein Stereo typ ist in \[Rich 89\] definiert als:  

• Ein Körper, welcher Informationen enthält, welche typischerweise auf den Benutzer  zutreffen, welcher dem Stereotyp zugeordnet wird und  

• eine Menge von "Auslösern", welche beobachtbare Werte von Attributen sind. Die  Auslöser können Untermengen der Werte des Stereotyps sein oder es können spezielle  Eingaben oder Aktionen sein, die nicht zum Stereotyp gehören. Durch Beobachtung  der Auslöser werden die Stereotypen, zu denen sie gehören, aktiviert.  

**Sports-Person**  

**Triggers** (Used description .,athletic")  

**Facets**  

Name Value Rating  

Motivations *excitement* 600  

Character-Strengths *physica 1-strength* 900  

*preseverance* 600  

lnterests *sports* 800  

Thrill *5* 700  

Tolerate-violence *4* 600  

**Generallzatlons**  

**Any-Person** (a canonical user model\]  

Abbildung 3.15: Ein Stereotyp aus Grundy   
*3.6. TECHNIKEN ZUR UNTERSTÜTZUNG VON TEAMS* 61  

Ein Beispiel für den Stereotyp "Sports-Person" aus dem System Grundy ist in Abbildung  3.15 (aus \[Rich 89\]) zu sehen. Mit Hilfe dieses Stereotyps werden einem Leser Novellen zur  Lektüre vorzuschlagen. Die Werte werden durch explizite Befragung des Benutzers und  durch Ableitungen aus anderen Benutzermodellen (beispielsweise Generalisierungen) er   
mittelt. Stereotypen werden hierbei als lineare Parameter repräsentiert. In \[Rich 98\] wird  die Definition für Stereotyp erweitert in *eine Menge von Eigenschaften, die oft zusammen  auftreten.*  

Das Stereotypen-Konzept wird neben Grundy auch in vielen anderen Systemen ver wandt, wie z.B. KN-AHS \[Kobsa Müller Nil\! 98\], HYNECOSUM \[Vassileva 96\], Hypa dapter \[Hohl Böcker Gunzenhäuser 96\], UMIE \[Benaki Karkaletsis Spyropoulos 97\] oder  ARGUS \[Blank 96\].  

3.6.2.2 Der Einsatz von Benutzermodellen zur Anpassung von Hypertext  

Hypertext ist ein Gebiet, in dem Methoden der Benutzermodeliierung in letzter Zeit  häufig verwandt werden. Im Bereich der benutzeradaptiven Systeme ist daher ein neu er Forschungszweig entstanden, "Adative Hypermedia" \[Brusilovsky 96\]. Benutzer mit  unterschiedlichen Zielen und unterschiedlichem Vorwissen sind an anderen Informatio nen in einem Hypertext interessiert und benutzen daher andere Links. Adaptive Hy pertext versucht dieses Problem dadurch zu lösen, indem die Hypertexte auf den Be nutzer zugeschnitten werden. Somit kann ein Informationssystem (wie z.B. KN-AHS  \[Kobsa Müller Nil\! 98\]) sowohl für Laien, als auch für Experten passende Hilfestellungen  leisten, ohne sie zu über-, bzw. unterfordern. Abbildung 3.16 (aus \[Brusilovsky 96\]) zeigt  die Verwendung von Benutzermodellen zum Anpassen der Information.  

System ·l·- Benutzermodeliierung    
Daten über den Benutzer .\]  

Benutzermodell  

Anpassung  

Effekt der Anpassung  

Abbildung 3.16: Klassische "Benutzermodellierung- Adaptation" Schleife im adaptiven  System  

Ein zusätzlicher Vorteil von Hypertext ist, daß weitergehende Informationen als Link  im Hintergrund zur Verfügung gestellt werden können \[Hohl Böcker Gunzenhäuser 96\],  wodurch eine adaptierte Beschreibung bezüglich ihres Informationsgehaltes nie schlech ter werden kann, als eine vollständige Beschreibung \[Jameson 98\]. Dies führt zu   
62 *KAPITEL 3\. GRUNDLAGEN*  

stärkerer Fehlertoleranz, falls sich das System bei der Einordnung eines Benutzers irrt  \[Höök Karlgren Wrern u.a. 96\].  

3.6.3 Constraint Programmierung  

*Ein Constraint Satisfaction Problem (CSP) ist ein Problem, welches aus einer endlichen  Menge von Variablen besteht, von denen jede mit einem endlichen Wertebereich und einer  Menge von Constraints, welches die Werte beschränkt, welche die Variablen gleichzeitig  annehmen können* \[Tsang 93\].  

Unterschieden wird in CSP-Probleme, welche  

• irgendeine Lösung finden  

• alle Lösungen finden  

• die optimale Lösung finden, gemäß einer domänenspezifischen Bewertungsfunktion.  

Formal wird ein CSP wie folgt definiert:    
Gegeben sei eine Menge von n Variablen, wobei jede Variable einer eigenen Domäne  möglicher Werte zugeordnet ist. Auf speziellen Teilmengen der Variablen existieren Re lationen, die durch Teilmengen des Kartesischen Produkts der Domänen der beteiligten  Variablen erfüllt werden können. Diese Relationen nennt man Constraints. Die Domänen  selbst können unendlich viele Werte (z.B. Mengen wie die ganzen Zahlen, die rationalen  Zahlen etc.) oder eine endliche Anzahl von Werten beinhalten. Im letzten Fall spricht  man von Finite Domains (siehe z.B. \[Zimmermann 97\]). Die Constraints werden in einem  Constraint-N etz repräsentiert.  

Ein CSP wird gelöst, indem die Constraint Satisfaction Phase und die Constraint Propa gation Phase abwechselnd wiederholt durchlaufen werden. In der Constraint Satisfaction  Phase werden Werte für Variablen gesucht, die ein Constraint erfüllen. In der Cons traint Propagation Phase werden diese Variablenbelegungen auf andere Constraints an gewendet, welche die gleichen Variablen des in der ersten Phase betrachteten Constraints  enthalten, um so frühzeitig den Wertebereich einzuschränken. Dieser Mechanismus wird  als das "Propagieren der Werte durch das Constraint Netz" bezeichnet. Eine konsisten te Variablenbelegung ist dann gefunden, wenn alle Constraints erfüllbar sind (siehe z.B.  \[Schulte Smolka Würtz 98\]).  

Grundsätzlich existieren zwei Strategien zur Lösung des CSP, d.h. zur Suche einer konsi stenten Variablenbelegung.  

Generate and Test Die Tupel des Kartesischen Produkts der beteiligten Wertebereiche  werden solange getestet, wie Kandidaten für die Belegungen der Constraints vorhan den sind. Das Verfahren endet, wenn eine konsistente Variablenbelegung gefunden  wurde oder alle Tupel durchgetestet sind.  

Backtracking Die Variablen werden sequentiell mit Werten der beteiligten Werteberei che belegt. Wenn nach einer Belegung die Verletzung eines Constraints auftritt,  wird zur letzten Auswahlmöglichkeit zurückgegangen und die Variable wird mit  einem neuen Wert belegt. Dieser Vorgang wird wiederholt, bis eine konsistente  Variablenbelegung gefunden wurde.   
*3.6. TECHNIKEN ZUR UNTERSTÜTZUNG VON TEAMS* 63  

Den meisten heutigen Programmen liegt der zweite Algorithmus zugrunde.  Ein Constraint-Netz gilt als unerfüllbar, wenn keine konsistente Variablenbelegung gefun den werden kann. Bei diesen "over-constrained" Problemen sind oftmals partielle Lösun gen von Interesse, welche einen Teil des Problems erfüllen. Hierbei können als Strategien  angewandt werden, entweder alle Variablen zu belegen, jedoch nicht alle Constraints zu  erfüllen oder alle Constraints zu erfüllen aber nur eine Belegung für einige Variablen zu  finden. Eine Gewichtung der Bedeutung der einzelnen Variablen und der Kosten der Ver letzung eines bestimmten Constraints helfen hierbei die Suche zielgerichtet zu gestalten.  Zur Effizienzsteigerung bei der Suche wird Backtracking oftmals durch bestimmte Such strategien modifiziert. Diese Suchstrategien definieren eine Ordnung, in der die Variablen  nacheinander belegt werden. Sie bestimmen ebenfalls eine Reihenfolge, in der die einzel nen Werte durchgetestet werden.  

Da die Reihenfolge der Variablenbelegung nicht zwangsläufig mit dem Ziel gewählt wur de, die Anzahl der Lösungsschritte zu reduzieren, muß sie mit der Art des Problems in  Zusammenhang gebracht werden. Dies wird durch "First Fail" (die Variable mit den  wenigsten Auswahlmöglichkeiten wird zuerst belegt) und "Most Constrained First" (die  Variablen werden nach der Anzahl der Constraints an denen sie beteiligt sind geordnet;  

die Variable mit den meisten Constraints wird zuerst belegt) erreicht.  Weiterhin kann zusätzlich zur Suchstrategie eine Suchheuristik festgelegt werden. Hierbei  dient die Verbesserung der Bewertung durch ein erreichbares Teilergebnisses als Kriterium  für die Wahl der nachfolgend zu belegenden Variable und des zu testenden Wertes. Wie  oben bereits bei den partiellen Lösungen erwähnt, kann diese Bewertung festgelegen,  wie wichtig ein bestimmtes Constraint ist. Die Constraints, denen Gewichte zugewiesen  werden können, werden "gewichtete Constraints" genannt.  

**3.6.4 Graph Visualisierung**  

Der Bereich des Compilerbaus beschäftigt sich seit längerer Zeit mit dem Problem Gra phen zu visualisieren, da in diesem Bereich oft komplexe, Graphstrukturen und Bäume  anzutreffen sind, wie Syntaxgraphen, Kontrollflußgraphen etc.. Eine einfache, textuelle  Beschreibung hat sich als zu kompliziert und zu verwirrend erwiesen. Aus diesem Grun de hat \[Sander 95\) ein System zum Visualisieren von Bäumen und Graphen entwickelt,  das "Visualization of Compiler Graphs tool" (VCG tool). Es basiert auf der von ihm  entwickelten GDL (Graph Description Language), welche hauptsächlich Knoten und Ver bindungen zwischen den Knoten, die Kanten, kennt (siehe beispielsweise Anhang C).  VCG berücksichtigt folgende Kriterien für die Generierung des Layouts:  

• Plazierung von Knoten in einer Hierarchie von Ebenen.  

• Knoten ohne Überlappung zu plazieren.  

• Vermeidung von Überschneidungen zwischen den Kanten.  

• Die Kanten kurz und gerade zu halten.  

• Eine balancierte Plazierung zu berücksichtigen.  

• Zusammengehörige Knoten nah beieinander zu plazieren.   
64 *KAPITEL 3\. GRUNDLAGEN*  

Das Layout des Graphen kann dabei vorgegeben oder automatisch generiert werden.  Im Bereich der Workflow-Management-Systeme ist aus Gründen der Lesbarkeit ebenfalls  meist ein graphischer Vorgangseditor vorhanden, um die Struktur, bzw. Kontroll- und  Datenfluß zu visualisieren. Somit kann die Erstellung von Workflows vereinfacht werden  und übersichtlich gewährleistet werden (siehe Abschnitt 3.1.4.1).  

**3\. 7 Diskussion**  

Im Abschnitt 3.5 wurden bereits einige Anforderungen aus Sicht der Unterstützung der  Gruppenarbeit gestellt. Die oben vorgestellten Techniken dienen dazu, diese Anforderun gen zu operationalisieren.  

Die Benutzermodelle können dazu benutzt werden, Teilnehmern von Konferenzen Infor mationen zu liefern, welche auf den Kenntnisstand des einzelnen Benutzers zugeschnitten  sind. Die Benutzermodelle müssen dann Informationen hinsichtlich der Vorkenntnisse des  Benutzers enthalten.  

Hypertexte sind ein leistungsfähige Technik, um adaptierte Beschreibungen darzustellen.  Gründe hierfür sind die Möglichkeit zur Einbindung mehrerer Medien und die Möglichkeit  zur verlustfreien Informationsfilterung durch weiterführende Links.  Die Graphvisualisierung kann dazu benutzt werden, Workflows graphisch darzustellen  und weiterhin ausgezeichnete Pfade (z.B. den Pfad der abgearbeiteten Tätigkeiten) und  Knoten (z.B. die aktuelle Tätigkeit) zu markieren.  

CSP, speziell die Verwendung von gewichteten Constraints, ermöglicht die Operationa lisierung der Teammitgliederselektion. Eine Realisierung kann in einer Art und Weise  erstellt werden, daß bei der Selektion mehrere Ziele gleichzeitig verfolgt werden können.  In den folgenden Kapiteln werden sowohl Konzepte als auch die Realisierung eines Systems  zur ganzheitlichen, teambasierten Unterstützung der Prozeßbearbeitung in Organisatio nen im Detail beschrieben.   
**Kapitel 4**  

**Integrationskonzept**  

Dieses Kapitel beginnt mit einem kurzen Exkurs über die Gestaltung kooperativer Ar beitsprozesse, um dann den Rahmen zu definieren, in dem diese Arbeitsprozesse ablau fen. Danach wird eine Klassifizierung herausgearbeitet, wie multimediale Audio/Video  Desktopkonferenzen (MMC) grundsätzlich in Workflows einzubetten sind. Durch diese  Überlegungen wird die Problematik der Integration transparent. Die Systematik bildet  die Grundlage zur Analyse der Anforderungen für die Unterstützung an der Schnittstelle  zwischen diesen Systemen, mit dem Ziel ein integriertes System benutzbar und bediener freundlich zu gestalten.  

**4.1 Gestaltung kooperativer Prozesse**  

Die Gestaltung kooperativer, computerunterstützter Prozesse stellt mehrere Anforderun gen an eine Plattform zu deren Unterstützung. \[überquelle 91\] unterscheidet vier Stufen  hinsichtlich der Interaktion von Personen:  

**Informing** Hierbei können Informationen anonym ausgetauscht werden, ohne daß die  Beteiligten sich kennen müssen.  

**Coordinating** Die Kommunikation dient der gemeinsamen Nutzung von Informationen  und anderen Ressourcen. Es ist notwendig, gemeinsame Arbeitsziele zu verfolgen.  Arbeitstätigkeiten können ineinandergreifen, um den Zugriff auf gemeinsam zu nut zende Ressourcen zu regeln. Die Beteiligten müssen sich flüchtig kennen.  

**Collaborating** Die Beteiligten nehmen an demselben Arbeitsprozeß teil, sie sind un ter Umständen jedoch nicht gleichberechtigt. Die Leistung jedes Einzelnen wird  getrennt bewertet, er ist meistens auch Mitglied in mehreren Gruppen.  

**Cooperating** Die Beteiligten arbeiten an einem gemeinsamen Ergebnis, wobei indivi duelle Ziele dem Ziel der Gruppe untergeordnet werden und Entscheidungen ge meinsam getroffen werden. Die Leistung der Gruppe (des "Teams") wird insgesamt  bewertet.  

Während für die einfachen Formen der Kooperation Email-Systeme oder News-Gruppen  ausreichen würden, zielt diese Arbeit auf die ganzheitliche Unterstützung der Koope rationsprozesse, speziell mit Hinblick auf die weitergehende Unterstützung der zuletzt   
66 *KAPITEL 4\. INTEGRATIONSKONZEPT*  

genannten beiden Stufen der Zusammenarbeit ab, da erst hier "echte" Teamarbeit statt findet (vgl. hierzu auch Abschnitt 3.3.1).  

Es müssen dabei die passenden Systeme zur Unterstützung dieser Zusammenarbeit zur  Verfügung stehen, sowie Konzepte zur Integration dieser Systeme.  

Eine integrierende Plattform muß sowohl Möglichkeiten zur Unterstützung synchroner als  auch asynchroner Arbeitsweisen berücksichtigen (vgl. Abschnitt 3.1.3). Zur gemeinsa men Teilnahme an Arbeitsprozessen spielen neben Kommunikationsmöglichkeiten auch  die adäquate Unterstützung der Koordination der Prozeßtätigkeiten eine Rolle (siehe Ab schnitt 3.1.2). Ein Zugriff auf gemeinsam genutzte Daten ist ebenfalls von großer Be deutung (z.B. für die Zusammenarbeitsformen, welche in der Stufe Informing beschrieben  werden). Bei entsprechender Systemwahl können die meisten Arbeitsprozesse durch die  Integration von Workfiow-Management- und MMC-System unterstützt werden, da die  Systeme diesen Anforderungen genügen.  

Wichtig ist, die Arbeitsprozesse und eine Plattform zu deren Unterstützung, in einer Weise  zu gestalten, daß sie der bisherigen Arbeitsweise der Benutzer nahekommt. Sie soll ihnen  dort weitergehende Unterstützung anbieten, wo dies entweder in den einzelnen Systemen  nicht vorgesehen war oder aber wegen der isolierten Betrachtung der einzelnen Systeme  nicht möglich war. Die Integration muß ein nahtloses Ineinandergreifen der Arbeitsweisen  garantieren.  

Einige Anforderungen, speziell aus der Sicht der Gruppenarbeit, wurden hierzu bereits in  Abschnitt 3.5 formuliert. Im Folgenden wird ein Konzept zur Integration von Workfiow Management- und MMC-Systemen erarbeitet, welches diese Anforderungen operationali siert.  

**4.2 Der Telecooperation Workspace**  

Telekooperation wird von \[Reichwald 97\] wie folgt definiert:  

*Telekooperation bezeichnet* die *mediengestützte arbeitsteilige Leistungserstellung von indi viduellen Aufgabenträgern, Organisationseinheiten und Organisationen, die über mehrere  Standorte verteilt sind.*  

Darauf aufbauend sei der Telecooperation Workspace wie folgt definiert:  *Der Telecooperation Workspace ist der "Raum" in* dem die *Telekooperation stattfindet.  Er beinhaltet Werkzeuge und Methoden zur telekooperativen Gruppenarbeit.*  Die Betrachtung des Integrationsproblems aus verschiedenen Perspektiven ist eine Me thode, welche mit Hinblick auf die ganzheitliche Integration synchroner und asynchroner  Systeme zur Unterstützung der Gruppenarbeit zielführend ist (siehe auch \[Schneider 98\]).  Grundlegende Perspektiven sind:  

• die technische Sicht  

• die organisatorische Sicht  

• die sozialpsychologische Sicht  

Die technische Sicht stellt Probleme der Systemintegration in den Vordergrund. Ver schiedene Benutzer mit unterschiedlichen Systemvoraussetzungen müssen zusammenar beiten können. Bei Systemen der gleichen Systemklasse bezieht sich diese Forderung auf  die Interoperabilität beispielsweise von Workfiow-Management-Systemen. Es kommen   
*4.2. DER TELEGOOPERATION WORKSPACE* 67  

weiterhin unterschiedliche Systeme zur Unterstützung der Gruppenarbeit zum Einsatz.  Hierbei müssen Systemaufrufe, Dokument- und Parameterübergabe, etc. geregelt werden  \[Weber Schneider Partsch u.a. 97\].  

Die organisatorische Sicht orientiert sich an den Arbeitsabläufen. Beispielsweise müssen  die benötigten Ressourcen zur Bearbeitung von Tätigkeiten zum richtigen Zeitpunkt zur  Verfügung stehen.  

Die sozialpsychologische Sicht beschäftigt sich mit dem Team und der Interaktion zwischen  seinen Mitgliedern.  

Eine besondere Herausforderung bei der ganzheitlichen Betrachtung kooperativer Arbeit,  ist der Übergang zwischen Systemgrenzen, wenn beispielsweise ein Wechsel von der asyn chronen Arbeitsform, bei der jeder Bearbeiter für sich alleine arbeitet, hin zur synchronen  Arbeitsform stattfindet, bei der im Team gearbeitet wird. Somit müssen Elemente zur  Synchronisation der Arbeitsprozesse ebenso Teil dieses Raumes sein. Zur synchronen  Teamarbeit müssen sich die Mitarbeiter nicht nur zur gleichen Zeit zu einer Konferenz  zusammenfinden, sie müssen sich auch auf dem gleichen Wissensstand befinden, um die  Konferenz erfolgreich durchführen zu können. Es muß folglich auch eine "Synchronisation  des Wissens" stattfinden (siehe Abschnitt 3.1.1.1).  

Am Beispiel des Übergangs zwischen den Systemgrenzen lassen sich die drei Sichten gut  verdeutlichen. Die sozialpsychologische Herausforderung besteht darin, das Wissen des  Systems den verschiedenen Benutzern so zur Verfügung zu stellen, daß diese sich das  Wissen durch Informationserarbeitung zu eigen machen können. Die Information, die den  Benutzern geliefert wird, muß auf das Ziel der gemeinsamen Gruppenarbeit zugeschnitten  sein, sowohl Unter- als auch Überinformation ist zu vermeiden (siehe \[Kuhlen 91\] und die  Abschnitte 3.1.1.1 und 3.6.1.1). Die organisatorische Herausforderung besteht darin, den  richtigen Mitgliedern diese Information zur richtigen Zeit zur Verfügung zu stellen. Die  technische Herausforderung ist, diese Information zu erzeugen, "auszuliefern" und die  Voraussetzungen zu schaffen, daß auf sie zugegriffen werden kann.  

Die folgenden drei Elemente (siehe Abbildung 4.1) kristallisieren sich als Kernpunk te zur Integration von synchronen und asynchronen Systemen/ Arbeitsweisen heraus  \[Schneider Schweitzer 97-1\], es handelt sich um "Zeit", "Mitarbeiter" und "Wissen".  Diese Elemente müssen miteinander in Einklang gebracht werden. Hierbei sind die ver schiedenen Sichten, wie das obige Beispiel gezeigt hat, von besonderer Wichtigkeit, um  bei der Konzeptionierung und beim Systementwurf alle relevanten Einflüsse zu berück sichtigen und eine ganzheitliche Perspektive zu wahren. Die drei Elemente bilden das  "magische Dreieck" der Integration. Dabei besteht jeweils eine Verbindung zwischen zwei  Elementen. Die Kante zwischen Kalender und Mitarbeitern bezieht sich auf die zeitliche  Synchronisation, die Kante zwischen Wissen und Mitarbeitern bezieht sich auf die Syn chronisation des Wissens und die Kante zwischen Kalender und Wissen bezieht sich auf  das zeitlich abgestimmte Aufbereiten und Ausliefern der Information.  In den folgenden Abschnitten wird zunächst ein allgemeines Integrationskonzept herge leitet, wobei eine Klassifikation für unterschiedliche Arten der Integration synchroner  Systeme (Konferenztypen) in asynchrone Systeme (Workflow-Management-Systeme) er arbeitet wird. Hierbei stehen primär technische und organisatorische Fragestellungen im  Vordergrund. Die Vorgehensweise, synchrone in asynchrone Systeme zu integrieren, wur de deshalb gewählt, weil in Arbeitsprozessen üblicherweise der asynchrone Teil sowohl  zeitlich als auch prozentual zur Anzahl der Arbeitsschritte vorherrscht. Grundsätzlich ist  es für die folgenden Überlegungen und die hierbei erarbeiteten Konzepte irrelevant, ob   
68 *KAPITEL 4\. INTEGRATIONSKONZEPT*  

**Zelt Mitarbeiter  ![]()![]()![]()![]()Wissen**  

Abbildung 4.1: Kernelemente zur Integration  

von einer Integration synchroner in asynchrone Systeme gesprochen wird oder umgekehrt.  Vor dem Hintergrund der Integration werden dann weitergehende Unterstützungsmöglich keiten für Teams durch Operationalisierung der Anforderungen aus den vorhergehenden  Kapiteln und unter Einbeziehung der sozialpsychologischen Sichtweise erarbeitet . Da nach wird gezeigt, wie diese Operationalisierungen in die verschiedenen Konferenztypen  mit dem Ziel der Teamunterstützung integriert werden können.  

**4.3 Technisches Integrationskonzept**  

Die Integration von Workflow-Management- und MMC-Systemen ist aus Sicht der Work flow Management Coalition \[WfMC 98-1\] eine rein technische Fragestellung (siehe auch  Abschnitt 3.1.4.1). Die Integration des MMC-Systems muß die Übergabe von Doku menten und je nach gewählter Vorgehensweise, auch des Kontrollflusses berücksichtigen.  Weiterhin muß das MMC-System konfiguriert werden, um die Konferenz auszuführen  (Beispiele hierfür sind das Festlegen, welche Teilnehmer angerufen werden sollen, das  Übertragen von Dateien in ein spezielles Arbeitsverzeichnis des Konferenzsystems oder  die Übergabe von Steuerungsdaten zur Koordination der Konferenz). Ebenso muß der  Rückfluß von Daten aus der Konferenz geregelt sein.  

**4.3.1 Konferenzdimensionen**  

Um einen Formalismus zu schaffen, wie ein MMC-System hinsichtlich seiner Integration  in Workflow-Management-Systerne und hinsichtlich der Arbeitsweise in den Konferenzen  und den damit verbundenen Auswirkungen auf den Workflow zu charakterisieren sind,  wird zwischen Prozeßaktivitäten und Konferenzaktivitäten unterschieden. Prozeßakti 

vität wird in \[WfMC 98-2\] wie folgt definiert: 

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>