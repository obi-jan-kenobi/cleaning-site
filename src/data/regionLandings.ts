import { BRAND_AREA, serviceLandingSlugs } from "./serviceLandings";

export type RegionImageKey = "schleswig" | "flensburg" | "kiel";

export interface RegionLandingEntry {
  slug: string;
  /** City name in the ubiquitous language of the domain */
  name: string;
  title: string;
  description: string;
  badge: string;
  h1: string;
  lead: string;
  imageKey: RegionImageKey;
  imageAlt: string;
  localIntro: string;
  postalCode: string;
  geo: { lat: number; lng: number };
  /** Districts & nearby places – local SEO */
  neighborhoods: string[];
  /** Service slugs offered here – references serviceLandings */
  serviceSlugs: string[];
  highlights: string[];
  faqs: { q: string; a: string }[];
  jsonLdName: string;
}

/** All five service landing pages are offered in every region by default. */
const ALL_SERVICES: string[] = [...serviceLandingSlugs];

export const regionLandings: Record<string, RegionLandingEntry> = {
  schleswig: {
    slug: "schleswig",
    name: "Schleswig",
    title: `Gebäudereinigung in Schleswig | EMSIG`,
    description:
      "Reinigungsservice direkt aus Schleswig: Büro-, Glas-, Fassaden-, Bau- und PV-Reinigung für die Schleistadt und das Umland. Versichert, zuverlässig, mit kurzen Wegen vor Ort.",
    badge: "Region Schleswig",
    h1: "Reinigungsservice in Schleswig",
    lead:
      "Hier ist unser Zuhause: Von unserem Standort am Husumer Baum aus betreuen wir Privathaushalte, Büros und Gewerbe in der gesamten Schleistadt – mit kurzen Wegen und festen Ansprechpartner:innen.",
    imageKey: "schleswig",
    imageAlt: "Blick über die Schlei auf den Schleswiger Dom",
    localIntro:
      "Schleswig ist unser Heimatstandort. Ob Altstadt am Hafen, Friedrichsberg oder die Gewerbeflächen am Stadtrand – wir kennen die Wege und sind oft am selben oder nächsten Tag vor Ort.",
    postalCode: "24837",
    geo: { lat: 54.5159, lng: 9.5681 },
    neighborhoods: [
      "Altstadt & Holm",
      "Friedrichsberg",
      "St. Jürgen",
      "Annettenhöh",
      "Busdorf & Umgebung",
      "Gewerbegebiete am Stadtrand",
    ],
    serviceSlugs: ALL_SERVICES,
    highlights: [
      "Heimatstandort am Husumer Baum 36 – kurze Anfahrt in ganz Schleswig",
      "Termine häufig kurzfristig, oft am selben oder nächsten Tag",
      "Erfahrung mit Altbau am Holm bis zu modernen Gewerbeflächen",
      "Feste Ansprechpartner:innen direkt vor Ort",
    ],
    faqs: [
      {
        q: "Sind Sie wirklich in Schleswig ansässig?",
        a: "Ja. Unser Büro ist am Husumer Baum 36 in 24837 Schleswig – Sie erreichen uns direkt vor Ort und wir sind schnell bei Ihnen.",
      },
      {
        q: "Reinigen Sie auch einzelne Objekte oder nur regelmäßig?",
        a: "Beides. In Schleswig übernehmen wir sowohl einmalige Einsätze als auch regelmäßige Unterhaltsreinigung nach festem Rhythmus.",
      },
    ],
    jsonLdName: "Gebäudereinigung Schleswig",
  },
  flensburg: {
    slug: "flensburg",
    name: "Flensburg",
    title: `Gebäudereinigung in Flensburg | EMSIG`,
    description:
      "Reinigungsservice für Flensburg und die Grenzregion: Büro-, Glas-, Fassaden-, Bau- und PV-Reinigung. Verlässliche Termine und versichertes Personal für die Fördestadt.",
    badge: "Region Flensburg",
    h1: "Reinigungsservice in Flensburg",
    lead:
      "Von der historischen Hafenspitze bis nach Mürwik: Wir reinigen Büros, Wohnobjekte und Gewerbeflächen in Flensburg und der Grenzregion – sorgfältig und termintreu.",
    imageKey: "flensburg",
    imageAlt: "Historischer Hafen von Flensburg mit Segelschiffen und Giebelhäusern",
    localIntro:
      "Flensburg liegt direkt an unserer Einsatzachse im Norden. Altbausubstanz in der Altstadt, maritime Bewitterung an der Förde und moderne Gewerbeobjekte – wir stellen uns auf jedes Objekt vor Ort ein.",
    postalCode: "24937",
    geo: { lat: 54.7937, lng: 9.4469 },
    neighborhoods: [
      "Altstadt & Hafenspitze",
      "Mürwik",
      "Jürgensby",
      "Weiche",
      "Fruerlund",
      "Sandberg & Umgebung",
    ],
    serviceSlugs: ALL_SERVICES,
    highlights: [
      "Regelmäßige Einsätze in der Fördestadt und der Grenzregion",
      "Erfahrung mit maritimer Bewitterung an der Förde",
      "Vom Altbau in der Altstadt bis zum modernen Gewerbeobjekt",
      "Versichertes Team mit klaren Ansprechpartner:innen",
    ],
    faqs: [
      {
        q: "Bedienen Sie auch die Grenzregion um Flensburg?",
        a: "Ja. Neben dem Stadtgebiet Flensburg betreuen wir Objekte in den umliegenden Gemeinden der Grenzregion.",
      },
      {
        q: "Wie oft sollten Fenster in Fördenähe gereinigt werden?",
        a: "In Küstennähe setzen sich Salz und Feuchtigkeit schneller ab. Viele Kund:innen wählen daher 2–4 Reinigungen pro Jahr – wir beraten Sie objektbezogen.",
      },
    ],
    jsonLdName: "Gebäudereinigung Flensburg",
  },
  kiel: {
    slug: "kiel",
    name: "Kiel",
    title: `Gebäudereinigung in Kiel | EMSIG`,
    description:
      "Reinigungsservice für Kiel und die Kieler Bucht: Büro-, Glas-, Fassaden-, Bau- und PV-Reinigung. Verlässliche Termine und versichertes Personal in der Landeshauptstadt.",
    badge: "Region Kiel",
    h1: "Reinigungsservice in Kiel",
    lead:
      "In der Landeshauptstadt an der Förde reinigen wir Büros, Praxen, Wohnobjekte und Gewerbeflächen – abgestimmt auf Ihre Öffnungszeiten und mit verlässlicher Terminplanung.",
    imageKey: "kiel",
    imageAlt: "Kieler Förde mit Segelbooten und Hafenpromenade",
    localIntro:
      "Kiel und die Kieler Bucht gehören zu unserem festen Einsatzgebiet. Von Verwaltungsstandorten an der Förde bis zu Wohnquartieren im Umland planen wir Anfahrten effizient – pünktliche Teams statt Leerfahrten.",
    postalCode: "24103",
    geo: { lat: 54.3233, lng: 10.1228 },
    neighborhoods: [
      "Innenstadt & Förde",
      "Wik & Holtenau",
      "Gaarden",
      "Schreventeich",
      "Dietrichsdorf",
      "Suchsdorf & Umgebung",
    ],
    serviceSlugs: ALL_SERVICES,
    highlights: [
      "Festes Einsatzgebiet in Kiel und der Kieler Bucht",
      "Reinigung abgestimmt auf Öffnungs- und Bürozeiten",
      "Effiziente Anfahrtsplanung – pünktliche Teams",
      "Versichertes Personal und diskrete Arbeitsweise",
    ],
    faqs: [
      {
        q: "Reinigen Sie in Kiel auch außerhalb der Geschäftszeiten?",
        a: "Ja. Viele Kund:innen in Kiel wünschen Einsätze früh morgens, abends oder am Wochenende – wir stimmen die Zeiten mit Ihnen ab.",
      },
      {
        q: "Übernehmen Sie auch größere Gewerbeobjekte in Kiel?",
        a: "Ja. Von einzelnen Büroetagen bis zu größeren Verwaltungs- und Gewerbeflächen erstellen wir Ihnen ein passendes Angebot.",
      },
    ],
    jsonLdName: "Gebäudereinigung Kiel",
  },
};

export const regionLandingSlugs = Object.keys(regionLandings);

export { BRAND_AREA };
