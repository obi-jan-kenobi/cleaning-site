export type ServiceImageKey = "window_big" | "construction" | "facade" | "office_furniture" | "office" | "window" | "solar" | "team" | "map";

export interface ServiceLandingEntry {
  slug: string;
  /** Matches <option> in contact form on start page */
  formServiceValue: string;
  title: string;
  description: string;
  badge: string;
  h1: string;
  lead: string;
  imageKey: ServiceImageKey;
  imageAlt: string;
  highlights: string[];
  localIntro: string;
  /** Cities & regions – local SEO */
  areas: string[];
  scenarios: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  jsonLdServiceName: string;
}

export const BRAND_AREA = "Schleswig-Holstein";

/** Einheitliches Einsatzgebiet – wie Büroreinigung, inkl. Westküste */
export const SERVICE_AREAS: string[] = [
  "Schleswig & Kreis Schleswig-Flensburg",
  "Flensburg & Grenzregion",
  "Kiel & Umgebung (Kieler Bucht)",
  "Neumünster & Mittelzentren",
  "Dithmarschen & Westküste",
  "Nordfriesland",
  "Lübeck & Lübecker Bucht",
  "Pinneberg / Norderstedt (nördlicher Großraum)",
];

export const serviceLandings: Record<string, ServiceLandingEntry> = {
  bueroreinigung: {
    slug: "bueroreinigung",
    formServiceValue: "Unterhaltsreinigung",
    title: `Büroreinigung & Gewerbereinigung in ${BRAND_AREA} | EMSIG`,
    description:
      "Professionelle Büroreinigung in Schleswig-Holstein: Kiel, Lübeck, Flensburg, Schleswig und Umgebung. Verlässliche Termine, versichertes Personal, diskrete Arbeitsweise.",
    badge: "Büro & Gewerbe",
    h1: "Büroreinigung in Schleswig-Holstein",
    lead:
      "Saubere Arbeitsplätze für Unternehmen zwischen Nordsee und Ostsee: Wir reinigen Büros, Praxen und Verwaltungsflächen – abgestimmt auf Ihre Öffnungszeiten und Sicherheitsanforderungen vor Ort.",
    imageKey: "office_furniture",
    imageAlt: "Büroreinigung in einem modernen Arbeitsraum in Schleswig-Holstein",
    highlights: [
      "Regelmäßige oder flexible Rhythmen (täglich, wöchentlich, nach Absprache)",
      "Besenreine Übergabe oder Vollservice inkl. Sanitär- und Küchenzonen",
      "Einsatz in Kiel, Lübeck, Flensburg, Neumünster, Schleswig und umliegenden Kommunen",
      "Versichertes Team, klare Ansprechpartner:innen bei EMSIG in Schleswig",
    ],
    localIntro:
      "Von Verwaltungsstandorten an der Kieler Förde bis zu Praxen in der Lübecker Altstadt: Wir kennen die Wege in SH und planen Anfahrten effizient – weniger Leerfahrten, pünktliche Teams.",
    areas: [...SERVICE_AREAS],
    scenarios: [
      {
        title: "Büroflächen & Coworking",
        text: "Staubarme Oberflächen, Küchen und Sanitärbereiche – abgestimmt auf Nutzung und Brandschutzvorgaben im Objekt.",
      },
      {
        title: "Praxen & Beratungsräume",
        text: "Diskrete Reinigung außerhalb der Sprechzeiten oder in abgestimmten Zeitfenstern.",
      },
    ],
    faqs: [
      {
        q: "Reinigen Sie auch außerhalb der Geschäftszeiten?",
        a: "Ja. Viele Kund:innen in Kiel, Lübeck oder Flensburg wünschen Einsätze früh morgens, abends oder am Wochenende – wir stimmen das mit Ihnen ab.",
      },
      {
        q: "Bringen Sie Verbrauchsmaterial mit?",
        a: "Auf Wunsch ja. Alternativ arbeiten wir mit den Mitteln, die Sie im Objekt bereitstellen.",
      },
    ],
    jsonLdServiceName: "Büroreinigung",
  },
  glasreinigung: {
    slug: "glasreinigung",
    formServiceValue: "Fenster & Glas",
    title: `Glas- & Fensterreinigung in ${BRAND_AREA} | EMSIG`,
    description:
      "Streifenfreie Glasreinigung in Schleswig-Holstein: Fenster, Schaufenster und Glasflächen innen & außen. Auch höher gelegene Scheiben – regional in Kiel, Lübeck, Flensburg und Umgebung.",
    badge: "Glas & Fenster",
    h1: "Glasreinigung in Schleswig-Holstein",
    lead:
      "Klarer Durchblick für Wohnen und Gewerbe: Wir reinigen Fenster und Glasflächen schonend und gründlich – vom Einfamilienhaus bis zum Schaufenster in der Innenstadt.",
    imageKey: "window",
    imageAlt: "Streifenfreie Fensterreinigung an einem Gebäude in Schleswig-Holstein",
    highlights: [
      "Innen- und Außenreinigung inkl. Rahmen und Fensterbänke",
      "Ideal nach Pollenflug und nach maritimer Feuchtigkeit an der Küste",
      "Termine in Schleswig, Flensburg, Kiel, Lübeck und ländlichen Gemeinden",
      "Sorgfältige Arbeitsweise – auch bei sensiblen Verglasungen",
    ],
    localIntro:
      "In Küstennähe setzen sich Salz und feiner Staub schneller auf Scheiben ab. Wir berücksichtigen das in der Reinigungsplanung – für dauerhaft gute Ergebnisse in SH.",
    areas: [...SERVICE_AREAS],
    scenarios: [
      {
        title: "Wohnhäuser & MFH",
        text: "Fenster zuverlässig und termingerecht – auch bei größeren Scheibenflächen.",
      },
      {
        title: "Einzelhandel & Bürofronten",
        text: "Repräsentative Glasfronten für einen guten ersten Eindruck bei Kund:innen.",
      },
    ],
    faqs: [
      {
        q: "Wie oft sollten Fenster an der Küste gereinigt werden?",
        a: "Das hängt von Lage und Nutzung ab. Viele Kund:innen in Küstennähe wählen 2–4 Rhythmen pro Jahr; wir beraten Sie gern objektbezogen.",
      },
      {
        q: "Reinigen Sie auch Wintergärten?",
        a: "Ja, nach Absprache – Fläche und Zugang besprechen wir vorab.",
      },
    ],
    jsonLdServiceName: "Glasreinigung",
  },
  baureinigung: {
    slug: "baureinigung",
    formServiceValue: "Baureinigung",
    title: `Baureinigung & Bauendreinigung in ${BRAND_AREA} | EMSIG`,
    description:
      "Baureinigung in Schleswig-Holstein: Grob- und Feinreinigung nach Neubau, Sanierung oder Umbau. Regional für Bauträger, Handwerk und private Bauherren in Kiel, Lübeck, Flensburg und Umgebung.",
    badge: "Bau & Sanierung",
    h1: "Baureinigung in Schleswig-Holstein",
    lead:
      "Vom Bauschutt bis zur übergabefertigen Oberfläche: Wir unterstützen Sie nach Renovierung und Neubau – damit Einzug oder Abnahme reibungslos klappen.",
    imageKey: "construction",
    imageAlt: "Professionelles Reinigungsteam bei der Objektübergabe nach Bau oder Sanierung",
    highlights: [
      "Grob- und Feinreinigung nach Absprache mit Ihrer Bauzeitplanung",
      "Erfahrung mit Wohnungsbau, Gewerbe und Sanierung in SH",
      "Koordination mit Handwerk – wir erscheinen im vereinbarten Fenster",
      "Abtransport von leichten Reststoffen nach Vereinbarung",
    ],
    localIntro:
      "Ob Neubauviertel in der Kieler Außenstadt oder Sanierung in historischer Bausubstanz in Lübeck: Wir kennen typische Objekte in der Region und arbeiten effizient mit örtlichen Gewerken zusammen.",
    areas: [...SERVICE_AREAS],
    scenarios: [
      {
        title: "Übergabe an Eigentümer:innen",
        text: "Feinreinigung für die Wohnungsabnahme – inkl. Fenster und sichtbarer Flächen.",
      },
      {
        title: "Gewerbliche Rohbau- bis Schlussreinigung",
        text: "Abgestimmt auf Abnahme-Termine mit Architekt:innen oder Bauleitung.",
      },
    ],
    faqs: [
      {
        q: "Übernehmen Sie auch nur die Schlussreinigung?",
        a: "Ja. Viele Auftraggeber buchen gezielt die Feinreinigung vor Übergabe – wir erstellen Ihnen ein passendes Paket.",
      },
      {
        q: "Sind Sie kurzfristig verfügbar, wenn der Bau verschiebt?",
        a: "Wir versuchen, uns flexibel einzubinden. Geben Sie uns frühzeitig alternative Termine mit – dann reservieren wir Kapazität in der Region.",
      },
    ],
    jsonLdServiceName: "Baureinigung",
  },
  "pv-reinigung": {
    slug: "pv-reinigung",
    formServiceValue: "PV-Reinigung",
    title: `Photovoltaik-Reinigung in ${BRAND_AREA} | EMSIG`,
    description:
      "Schonende PV-Reinigung in Schleswig-Holstein: Mehr Ertrag durch saubere Module – für Dachanlagen in Kiel, Flensburg, Schleswig und ländlichen Kommunen. Regional, versichert, terminflexibel.",
    badge: "Solar & PV",
    h1: "Photovoltaik-Reinigung in Schleswig-Holstein",
    lead:
      "Pollen, Staub und Vogelkot mindern die Leistung Ihrer Anlage. Wir reinigen PV-Module schonend und sicher – damit Ihre Investition auch im norddeutschen Klima optimal arbeitet.",
    imageKey: "solar",
    imageAlt: "Schonende Reinigung einer Photovoltaikanlage auf einem Dach",
    highlights: [
      "Materialschonende Reinigung – ohne unnötigen Druck auf Module und Rahmen",
      "Ideal nach Pollenflug und nach längeren trockenen Phasen mit Staubablagerung",
      "Einsätze in ganz SH: von Einfamilienhäusern bis landwirtschaftlichen Dachflächen",
      "Beratung zu sinnvollem Intervall je nach Lage (Küste, Feld, Waldnähe)",
    ],
    localIntro:
      "In Schleswig-Holstein wechseln Wind, Pollen und maritime Luft: Auf Dächern nahe der Küste oder freistehend in ländlichen Gebieten verschmutzen Module unterschiedlich schnell. Wir empfehlen eine standortbezogene Pflege.",
    areas: [...SERVICE_AREAS],
    scenarios: [
      {
        title: "Einfamilienhäuser",
        text: "Sichere Ausführung am Wohngebäude – inkl. Abstimmung mit Ihnen vor Ort.",
      },
      {
        title: "Gewerbe & Landwirtschaft",
        text: "Größere Flächen nach Terminplan – Koordination bei Zugang und Stromabschaltung.",
      },
    ],
    faqs: [
      {
        q: "Wie oft sollte eine PV-Anlage gereinigt werden?",
        a: "Oft reicht 1–2× pro Jahr – bei starker Verschmutzung oder Küstennähe kann mehr Sinn machen. Wir schauen uns Ihre Anlage an und empfehlen ein Intervall.",
      },
      {
        q: "Reinigen Sie auch in Höhenlagen oder schwer zugänglichen Dächern?",
        a: "Das klären wir im Vorfeld. Zugang und Sicherheit sind entscheidend; manche Objekte benötigen Hubtechnik.",
      },
    ],
    jsonLdServiceName: "Photovoltaik-Reinigung",
  },
  fassadenreinigung: {
    slug: "fassadenreinigung",
    formServiceValue: "Fassadenreinigung",
    title: `Fassadenreinigung in ${BRAND_AREA} | EMSIG`,
    description:
      "Fassadenreinigung in Schleswig-Holstein: Putz, Klinker und moderne Fassaden systematisch und materialschonend reinigen. Regional für Gebäude in Kiel, Lübeck, Flensburg und Umgebung.",
    badge: "Fassaden",
    h1: "Fassadenreinigung in Schleswig-Holstein",
    lead:
      "Algen, Ruß und Witterungsspuren prägen das Erscheinungsbild. Wir reinigen Außenwände fachgerecht – abgestimmt auf Material und Denkmalschutz, wo nötig.",
    imageKey: "facade",
    imageAlt: "Saubere Gebäudefassade in einer schleswig-holsteinischen Stadt",
    highlights: [
      "Materialgerechte Verfahren für Putz, Stein, Metall und Kunststoff",
      "Erfahrung mit maritimer Bewitterung und Feuchtigkeit an der Küste",
      "Objekte in Innenstädten (z. B. Lübeck, Flensburg) und im Umland",
      "Vorbesichtigung und klare Angebote – ohne Überraschungen",
    ],
    localIntro:
      "Von Backstein in der Lübecker Altstadt bis zu modernen Verbundplatten an Gewerbeobjekten: Wir berücksichtigen örtliche Witterung und Fassadentyp – für ein gleichmäßiges, schonendes Ergebnis.",
    areas: [...SERVICE_AREAS],
    scenarios: [
      {
        title: "Wohngebäude & MFH",
        text: "Repräsentative Außenansicht für Mieter:innen und Eigentümergemeinschaften.",
      },
      {
        title: "Gewerbe & Verwaltung",
        text: "Pflege der Außenhülle im Corporate-Design Ihres Standorts.",
      },
    ],
    faqs: [
      {
        q: "Schädigt die Reinigung die Fassade?",
        a: "Wir wählen Druck und Mittel nach Material. Kritische Fassaden besprechen wir vorab mit Ihnen oder der Verwaltung.",
      },
      {
        q: "Arbeiten Sie mit der WEG oder Hausverwaltung zusammen?",
        a: "Ja, häufig. Wir können Besichtigung, Angebot und Termin zentral abstimmen.",
      },
    ],
    jsonLdServiceName: "Fassadenreinigung",
  },
};

export const serviceLandingSlugs = Object.keys(serviceLandings);
