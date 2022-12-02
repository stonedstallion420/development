import altissio from "./assets/altissio.jpg";
import caffeinato from "./assets/caffeinato.jpg";
import colombia from "./assets/colombia.jpg";
import diavolitto from "./assets/diavolitto.jpg";
import dolce from "./assets/dolce.jpg";
import intenso from "./assets/intenso.jpg";
import odacio from "./assets/odacio.jpg";
import peru from "./assets/peru.jpg";
import puerto_rico from "./assets/puerto_rico.jpg";
import scuro from "./assets/scuro.jpg";
import solelio from "./assets/solelio.jpg";
import voltesso from "./assets/voltesso.jpg";

export const ROAST_LABELS = {
  light: "Light",
  medium: "Medium",
  dark: "Dark",
};

export const SIZE_LABELS = {
  coffee: "Coffee",
  espresso: "Espresso",
  double_espresso: "Double Espresso",
};

export const PODS = [
  {
    id: "colombia",
    name: "Colombia",
    size: "coffee",
    roast: "light",
    intensity: 5,
    price: 1.3,
    image: colombia,
  },
  {
    id: "solelio",
    name: "Solelio",
    size: "coffee",
    roast: "light",
    intensity: 2,
    price: 1.2,
    image: solelio,
  },
  {
    id: "voltesso",
    name: "Voltesso",
    size: "espresso",
    roast: "light",
    intensity: 4,
    price: 0.95,
    image: voltesso,
  },
  {
    id: "half_caffeinato",
    name: "Half Caffeinato",
    size: "coffee",
    roast: "light",
    intensity: 5,
    price: 1.2,
    image: caffeinato,
  },
  {
    id: "peru_organic",
    name: "Peru Organic",
    size: "espresso",
    roast: "medium",
    intensity: 6,
    price: 1.1,
    image: peru,
  },
  {
    id: "double_espresso_dolce",
    name: "Double Espresso Dolce",
    size: "double_espresso",
    roast: "medium",
    intensity: 5,
    price: 1.1,
    image: dolce,
  },
  {
    id: "double_espresso_scuro",
    name: "Double Espresso Scuro",
    size: "double_espresso",
    roast: "medium",
    intensity: 11,
    price: 1.1,
    image: scuro,
  },
  {
    id: "odacio",
    name: "Odacio",
    size: "coffee",
    roast: "medium",
    intensity: 7,
    price: 1.2,
    image: odacio,
  },
  {
    id: "intenso",
    name: "Intenso",
    size: "coffee",
    roast: "dark",
    intensity: 9,
    price: 1.2,
    image: intenso,
  },
  {
    id: "altissio",
    name: "Altissio",
    size: "espresso",
    roast: "dark",
    intensity: 9,
    price: 0.95,
    image: altissio,
  },
  {
    id: "diavolitto",
    name: "Diavolitto",
    size: "espresso",
    roast: "dark",
    intensity: 11,
    price: 0.95,
    image: diavolitto,
  },
  {
    id: "cafecito_de_puerto_rico",
    name: "Cafecito de Puerto Rico",
    size: "double_espresso",
    roast: "dark",
    intensity: 10,
    price: 2,
    image: puerto_rico,
  },
];

export const PODS_ID_TO_POD = Object.fromEntries(
  PODS.map((pod) => [pod.id, pod])
);
