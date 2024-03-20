const MATERIALS = [
  { label: "ЛДСП", value: "ldsp" },
  { label: "ЭГГЕР", value: "egger" },
  { label: "АГТ", value: "agt" },
  { label: "ЭМАЛЬ", value: "emal" },
  { label: "ШПОН", value: "shpon" },
];

export const BLOCKS = [
  {
    name: "1_door",
    label: "1 дверь",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [450, 500, 600],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "bottom",
    category_name: "Нижние Блоки",
  },
  {
    name: "2_doors",
    label: "2 двери",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [700, 800, 900, 1000, 1100],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "bottom",
    category_name: "Нижние Блоки",
  },
  {
    name: "2_boxes",
    label: "2 ящика",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [500, 600, 700, 800, 900],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "bottom",
    category_name: "Нижние Блоки",
  },
  {
    name: "3_boxes",
    label: "3 ящика",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [500, 600, 700, 800, 900],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "bottom",
    category_name: "Нижние Блоки",
  },

  {
    name: "1_door",
    label: "1 дверь",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [450, 500, 600],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "top",
    category_name: "Верхние Блоки",
  },
  {
    name: "2_doors",
    label: "2 двери",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [700, 800, 900],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "top",
    category_name: "Верхние Блоки",
  },

  {
    name: "1_door",
    label: "1 дверь",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
    ],
    widths: [500, 600, 700, 800, 900],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "antresol",
    category_name: "Антресоль",
  },

  {
    name: "2_doors",
    label: "2 двери",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
      { label: "Отдельный", value: "individual" },
    ],
    widths: [400, 500, 600],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "penal",
    category_name: "Пенал",
  },

  {
    name: "oven",
    label: "Дух и МП",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
      { label: "Отдельный", value: "individual" },
    ],
    widths: [600],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "penal",
    category_name: "Пенал",
  },
  {
    name: "fridge",
    label: "холодильник",
    types: [
      { label: "Центр", value: "center" },
      { label: "Край", value: "side" },
      { label: "Отдельный", value: "individual" },
    ],
    widths: [670, 770, 970],
    facade: MATERIALS,
    corpus: MATERIALS,
    heights: [],
    category: "penal",
    category_name: "Пенал",
  },
];

export const MATERIAL_NAMES = {
  egger: "ЭГГЕР",
  ldsp: "ЛДСП",
  hdf: "ХДФ",
  kromka_fasad: "Кромка фасада",
  kromka_korpus: "Кромка корпуса",
  naves_blum: "Петли Blum",
  dovodchik: "Доводчик",
  konfirmat: "Конфирмат",
  nojki: "Ножки",
};

export const PRICES = {
  ldsp: 3500,
  egger: 5500,
  agt: 6000,
  emal: 4000,
  shpon: 8200,
  chpu: 500,
  kromka_korpus: 52,
  kromka_fasad: 106,
  hdf: 1200,
  naves_blum: 200,
  dovodchik: 300,
  box_blum: 3800,
  styajki: 35,
  ushki: 25,
  konfirmat: 20,
  nojki: 30,
};

export const multiply = (a, b) => {
  return a * b;
};

export const DIVIDER = "__";

export const FACADE_KEF = {
  bottom__1_door__center__450: {
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    chpu: 0.45,
    shpon: 0.45,
  },
  bottom__1_door__center__500: {
    egger: 0.1,
    agt: 0.12, // no data
    emal: 0.5,
    chpu: 0.5,
    shpon: 0.5,
  },
  bottom__1_door__center__600: {
    egger: 0.12,
    agt: 0.12, // no data
    emal: 0.6,
    chpu: 0.6,
    shpon: 0.6,
  },

  bottom__1_door__side__450: {
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    chpu: 0.45,
    shpon: 0.45,
  },
  bottom__1_door__side__500: {
    egger: 0.1,
    agt: 0.12,
    emal: 0.5,
    chpu: 0.5,
    shpon: 0.5,
  },
  bottom__1_door__side__600: {
    egger: 0.12,
    agt: 0.12,
    emal: 0.6,
    chpu: 0.6,
    shpon: 0.6,
  },
};

export const KEF_KEYS = {
  //BOTTOM
  BOTTOM_ONE_DOOR_CENTER_450: "bottom__1_door__center__450",
  BOTTOM_ONE_DOOR_CENTER_500: "bottom__1_door__center__500",
  BOTTOM_ONE_DOOR_CENTER_600: "bottom__1_door__center__600",

  BOTTOM_ONE_DOOR_SIDE_450: "bottom__1_door__side__450",
  BOTTOM_ONE_DOOR_SIDE_500: "bottom__1_door__side__500",
  BOTTOM_ONE_DOOR_SIDE_600: "bottom__1_door__side__600",

  BOTTOM_TWO_DOORS_CENTER_700: "bottom__2_doors__center__700",
  BOTTOM_TWO_DOORS_CENTER_800: "bottom__2_doors__center__800",
  BOTTOM_TWO_DOORS_CENTER_900: "bottom__2_doors__center__900",
  BOTTOM_TWO_DOORS_CENTER_1000: "bottom__2_doors__center__1000",
  BOTTOM_TWO_DOORS_CENTER_1100: "bottom__2_doors__center__1100",

  BOTTOM_TWO_DOORS_SIDE_700: "bottom__2_doors__side__700",
  BOTTOM_TWO_DOORS_SIDE_800: "bottom__2_doors__side__800",
  BOTTOM_TWO_DOORS_SIDE_900: "bottom__2_doors__side__900",
  BOTTOM_TWO_DOORS_SIDE_1000: "bottom__2_doors__side__1000",
  BOTTOM_TWO_DOORS_SIDE_1100: "bottom__2_doors__side__1100",

  BOTTOM_TWO_BOX_CENTER_500: "bottom__2_box__center__500",
  BOTTOM_TWO_BOX_CENTER_600: "bottom__2_box__center__600",
  BOTTOM_TWO_BOX_CENTER_700: "bottom__2_box__center__700",
  BOTTOM_TWO_BOX_CENTER_800: "bottom__2_box__center__800",
  BOTTOM_TWO_BOX_CENTER_900: "bottom__2_box__center__900",

  BOTTOM_TWO_BOX_SIDE_500: "bottom__2_box__side__500",
  BOTTOM_TWO_BOX_SIDE_600: "bottom__2_box__side__600",
  BOTTOM_TWO_BOX_SIDE_700: "bottom__2_box__side__700",
  BOTTOM_TWO_BOX_SIDE_800: "bottom__2_box__side__800",
  BOTTOM_TWO_BOX_SIDE_900: "bottom__2_box__side__900",

  BOTTOM_THREE_BOX_CENTER_500: "bottom__3_box__center__500",
  BOTTOM_THREE_BOX_CENTER_600: "bottom__3_box__center__600",
  BOTTOM_THREE_BOX_CENTER_700: "bottom__3_box__center__700",
  BOTTOM_THREE_BOX_CENTER_800: "bottom__3_box__center__800",
  BOTTOM_THREE_BOX_CENTER_900: "bottom__3_box__center__900",

  BOTTOM_THREE_BOX_SIDE_500: "bottom__3_box__side__500",
  BOTTOM_THREE_BOX_SIDE_600: "bottom__3_box__side__600",
  BOTTOM_THREE_BOX_SIDE_700: "bottom__3_box__side__700",
  BOTTOM_THREE_BOX_SIDE_800: "bottom__3_box__side__800",
  BOTTOM_THREE_BOX_SIDE_900: "bottom__3_box__side__900",
  //TOP

  //ANTRESOL
  CLEAN_BOTTOM_CENTER_500: "clean_bottom__center__500",
  CLEAN_BOTTOM_CENTER_600: "clean_bottom__center__600",
  CLEAN_BOTTOM_CENTER_700: "clean_bottom__center__700",
  CLEAN_BOTTOM_CENTER_800: "clean_bottom__center__800",
  CLEAN_BOTTOM_CENTER_900: "clean_bottom__center__900",

  CLEAN_BOTTOM_SIDE_500: "clean_bottom__side__500",
  CLEAN_BOTTOM_SIDE_600: "clean_bottom__side__600",
  CLEAN_BOTTOM_SIDE_700: "clean_bottom__side__700",
  CLEAN_BOTTOM_SIDE_800: "clean_bottom__side__800",
  CLEAN_BOTTOM_SIDE_900: "clean_bottom__side__900",

  //PENAL
  TWO_DOORS_ONE_ABOVE_ANOTHER_SEPARATE_400:
    "2_doors_one_above_another__separate__400",
  TWO_DOORS_ONE_ABOVE_ANOTHER_SEPARATE_500:
    "2_doors_one_above_another__separate__500",
  TWO_DOORS_ONE_ABOVE_ANOTHER_SEPARATE_600:
    "2_doors_one_above_another__separate__600",

  DUO_MP_CENTER_600: "duo_mp__center__600",
  DUO_MP_SIDE_600: "duo_mp__side__600",
  DUO_MP_SEPARATE_600: "duo_mp__separate__600",

  FRIDGE_CENTER_670: "fridge__center__670",
  FRIDGE_CENTER_770: "fridge__center__770",
  FRIDGE_CENTER_970: "fridge__center__970",

  FRIDGE_SIDE_670: "fridge__side__670",
  FRIDGE_SIDE_770: "fridge__side__770",
  FRIDGE_SIDE_970: "fridge__side__970",

  FRIDGE_SEPARATE_670: "fridge__separate__670",
  FRIDGE_SEPARATE_770: "fridge__separate__770",
  FRIDGE_SEPARATE_970: "fridge__separate__970",
};

export const SIDE_KEF = {
  [KEF_KEYS.BOTTOM_ONE_DOOR_CENTER_450]: {
    ldsp: 0.31,
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    shpon: 0.45,
  },
  [KEF_KEYS.BOTTOM_ONE_DOOR_CENTER_500]: {
    ldsp: 0.33,
    egger: 0.1,
    agt: 0.12, //NO DATA
    emal: 0.5,
    shpon: 0.5,
  },
  [KEF_KEYS.BOTTOM_ONE_DOOR_CENTER_600]: {
    ldsp: 0.37,
    egger: 0.12,
    agt: 0.12, //NO DATA
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_ONE_DOOR_SIDE_450]: {
    ldsp: 0.23,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_ONE_DOOR_SIDE_500]: {
    ldsp: 0.25,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_ONE_DOOR_SIDE_600]: {
    ldsp: 0.28,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  // TWO DOORS CENTER
  [KEF_KEYS.BOTTOM_TWO_DOORS_CENTER_700]: {
    ldsp: 0.4,
    egger: 0.13,
    agt: 0.12, // NO DATA
    emal: 0.7,
    shpon: 0.7,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_CENTER_800]: {
    ldsp: 0.43,
    egger: 0.16,
    agt: 0.12, // NO DATA
    emal: 0.8,
    shpon: 0.8,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_CENTER_900]: {
    ldsp: 0.48,
    egger: 0.18,
    agt: 0.12, // NO DATA
    emal: 0.9,
    shpon: 0.9,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_CENTER_1000]: {
    ldsp: 0.5,
    egger: 0.2,
    agt: 0.12, // NO DATA
    emal: 1,
    shpon: 1,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_CENTER_1100]: {
    ldsp: 0.53,
    egger: 0.22,
    agt: 0.12, // NO DATA
    emal: 1.1,
    shpon: 1.1,
  },
  // TWO DOORS SIDE
  [KEF_KEYS.BOTTOM_TWO_DOORS_SIDE_700]: {
    ldsp: 0.32,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_SIDE_800]: {
    ldsp: 0.34,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_SIDE_900]: {
    ldsp: 0.37,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_SIDE_1000]: {
    ldsp: 0.4,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_DOORS_SIDE_1100]: {
    ldsp: 0.43,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },

  //

  [KEF_KEYS.BOTTOM_TWO_BOX_CENTER_500]: {
    ldsp: 0.71,
    egger: 0.1,
    agt: 0.12, // NO DATA
    emal: 0.5,
    shpon: 0.5,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_CENTER_600]: {
    ldsp: 0.8,
    egger: 0.12,
    agt: 0.12, // NO DATA
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_CENTER_700]: {
    ldsp: 0.89,
    egger: 0.13,
    agt: 0.12, // NO DATA
    emal: 0.7,
    shpon: 0.7,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_CENTER_800]: {
    ldsp: 0.97,
    egger: 0.16,
    agt: 0.12, // NO DATA
    emal: 0.8,
    shpon: 0.8,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_CENTER_900]: {
    ldsp: 1.07,
    egger: 0.18,
    agt: 0.12, // NO DATA
    emal: 0.9,
    shpon: 0.9,
  },

  //

  [KEF_KEYS.BOTTOM_TWO_BOX_SIDE_500]: {
    ldsp: 0.62,
    egger: 0.1,
    agt: 0.2, // NO DATA
    emal: 0.5,
    shpon: 0.5,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_SIDE_600]: {
    ldsp: 0.71,
    egger: 0.12,
    agt: 0.2, // NO DATA
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_SIDE_700]: {
    ldsp: 0.8,
    egger: 0.13,
    agt: 0.2, // NO DATA
    emal: 0.7,
    shpon: 0.7,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_SIDE_800]: {
    ldsp: 0.89,
    egger: 0.16,
    agt: 0.2, // NO DATA
    emal: 0.8,
    shpon: 0.8,
  },
  [KEF_KEYS.BOTTOM_TWO_BOX_SIDE_900]: {
    ldsp: 0.98,
    egger: 0.18,
    agt: 0.2, // NO DATA
    emal: 0.9,
    shpon: 0.9,
  },
  //

  [KEF_KEYS.BOTTOM_THREE_BOX_CENTER_500]: {
    ldsp: 0.74,
    egger: 0.1,
    agt: 0.12, // NO DATA
    emal: 0.5,
    shpon: 0.5,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_CENTER_600]: {
    ldsp: 0.83,
    egger: 0.12,
    agt: 0.12, // NO DATA
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_CENTER_700]: {
    ldsp: 0.93,
    egger: 0.13,
    agt: 0.12, // NO DATA
    emal: 0.7,
    shpon: 0.7,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_CENTER_800]: {
    ldsp: 1.03,
    egger: 0.16,
    agt: 0.12, // NO DATA
    emal: 0.8,
    shpon: 0.8,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_CENTER_900]: {
    ldsp: 1.13,
    egger: 0.18,
    agt: 0.12, // NO DATA
    emal: 0.9,
    shpon: 0.9,
  },

  //

  [KEF_KEYS.BOTTOM_THREE_BOX_SIDE_500]: {
    ldsp: 0.65,
    egger: 0.12,
    agt: 0.2,
    emal: 0.5,
    shpon: 0.5,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_SIDE_600]: {
    ldsp: 0.74,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_SIDE_700]: {
    ldsp: 0.87,
    egger: 0.12,
    agt: 0.2,
    emal: 0.7,
    shpon: 0.7,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_SIDE_800]: {
    ldsp: 0.94,
    egger: 0.12,
    agt: 0.2,
    emal: 0.8,
    shpon: 0.8,
  },
  [KEF_KEYS.BOTTOM_THREE_BOX_SIDE_900]: {
    ldsp: 1.04,
    egger: 0.12,
    agt: 0.2,
    emal: 0.9,
    shpon: 0.9,
  },
};

export const KEF = {
  bottom__1_door__center__450: {
    hdf: 0.08,
    kromka_fasad: 4,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },
  bottom__1_door__center__500: {
    hdf: 0.09,
    kromka_fasad: 4.2,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },
  bottom__1_door__center__600: {
    hdf: 0.11,
    kromka_fasad: 5,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },

  bottom__1_door__side__450: {
    hdf: 0.08,
    kromka_fasad: 4,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
  bottom__1_door__side__500: {
    hdf: 0.09,
    kromka_fasad: 4.2,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
  bottom__1_door__side__600: {
    hdf: 0.11,
    kromka_fasad: 5,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
};

export function createKey(
  category,
  itemName,
  blockType,
  width,
  divider = "__",
) {
  return `${category}${divider}${itemName}${divider}${blockType}${divider}${width}`;
}
