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
    category: "mezzanine",
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
  egger: 'ЭГГЕР',
  ldsp: 'ЛДСП',
  hdf: 'ХДФ',
  kromka_fasad: "Кромка фасада",
  kromka_korpus: "Кромка корпуса",
  naves_blum: "Петли Blum",
  dovodchik: "Доводчик",
  konfirmat: "Конфирмат",
  nojki: "Ножки"
}

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

export const DIVIDER = '__'

export const FACADE_KEF = {
  "1_door__center__450": {
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    chpu: 0.45,
    shpon: 0.45,
  },
  "1_door__center__500": {
    egger: 0.1,
    agt: 0.12,
    emal: 0.5,
    chpu: 0.5,
    shpon: 0.5,
  },
  "1_door__center__600": {
    egger: 0.12,
    agt: 0.12,
    emal: 0.6,
    chpu: 0.6,
    shpon: 0.6,
  },

  "1_door__side__450": {
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    chpu: 0.45,
    shpon: 0.45,
  },
  "1_door__side__500": {
    egger: 0.1,
    agt: 0.12,
    emal: 0.5,
    chpu: 0.5,
    shpon: 0.5,
  },
  "1_door__side__600": {
    egger: 0.12,
    agt: 0.12,
    emal: 0.6,
    chpu: 0.6,
    shpon: 0.6,
  },

}

export const SIDE_KEF = {
  "1_door__center__450": {
    ldsp: 0.31,
    egger: 0.09,
    agt: 0.12,
    emal: 0.45,
    shpon: 0.45,
  },
  "1_door__center__500": {
    ldsp: 0.33,
    egger: 0.1,
    agt: 0.12,
    emal: 0.5,
    shpon: 0.5,
  },
  "1_door__center__600": {
    ldsp: 0.37,
    egger: 0.12,
    agt: 0.12,
    emal: 0.6,
    shpon: 0.6,
  },

  "1_door__side__450": {
    ldsp: 0.23,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  "1_door__side__500": {
    ldsp: 0.25,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  },
  "1_door__side__600": {
    ldsp: 0.28,
    egger: 0.12,
    agt: 0.2,
    emal: 0.6,
    shpon: 0.6,
  }
}
export const KEF = {
  "1_door__center__450": {
    hdf: 0.08,
    kromka_fasad: 4,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },
  "1_door__center__500": {
    hdf: 0.09,
    kromka_fasad: 4.2,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },
  "1_door__center__600": {
    hdf: 0.11,
    kromka_fasad: 5,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    konfirmat: 16,
    nojki: 4,
  },

  "1_door__side__450": {
    hdf: 0.08,
    kromka_fasad: 4,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
  "1_door__side__500": {
    hdf: 0.09,
    kromka_fasad: 4.2,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
  "1_door__side__600": {
    hdf: 0.11,
    kromka_fasad: 5,
    kromka_korpus: 10,
    naves_blum: 2,
    dovodchik: 2,
    styajki: 6,
    nojki: 4,
  },
};


