export const BLOCKS = [
    {
        category: 'bottom',
        label: 'Нижние Блоки',
        list: [
            {
                name: '1_door_center',
                label: '1 дверь центр',
                widths: [450, 500, 600],
                heights: [],
                category: 'bottom',
            },
            {
                name: '1_door_extreme',
                label: '1 дверь край',
                widths: [450, 500, 600],
                heights: [],
                category: 'bottom',
            }
        ]
    },
    {
        category: 'top',
        label: 'Верхние Блоки',
        list: [
            {
                name: '1_door_center',
                label: '1 дверь центр',
                widths: [400, 500, 600],
                heights: [],
                category: 'top',
            },
            {
                name: '1_door_extreme',
                label: '1 дверь край',
                widths: [400, 500, 600],
                heights: [],
                category: 'top',
            }
        ]
    },
    {
        category: 'penal',
        label: 'Пенал',
        list: [
            {
                name: '2_doors_center',
                label: '2 двери, одна над другой. ЦЕНТР',
                widths: [400, 500, 600],
                heights: [],
                category: 'penal',
            },
            {
                name: '2_doors_extreme',
                label: '2 двери, одна над другой. КРАЙ',
                widths: [400, 500, 600],
                heights: [],
                category: 'penal',
            },
            {
                name: '2_doors_separate',
                label: '2 двери, одна над другой. ОТДЕЛЬНЫЙ',
                widths: [400, 500, 600],
                heights: [],
                category: 'penal',
            }
        ]
    }
]

export const PRICES = {
    korpus: 3500,
    egger: 5500,
    agt: 6000,
    emal: 4000,
    chpu: 500,
    shpon: 8200,
    kromka_korpus: 52,
    kromka_fasad: 106,
    hdf: 1200,
    naves_blum: 200,
    dovodchik: 300,
    box_blum: 3800,
    styajki: 35,
    ushki: 25,
    konfirmat: 20,
    nojki: 30
}

export const multiply = (a, b) => {
    return a * b
}

export const CALCULATION = {
    '1_door_center-450': {
        ldsp: multiply(PRICES.korpus, 0.31),
        fasad_egger:  multiply(PRICES.egger, 0.09),
        fasad_agp:  multiply(PRICES.agt, 0.12),
        fasad_emal:  multiply(PRICES.emal, 0.45),
        fasad_chpu:  multiply(PRICES.emal, 0.45),
        fasad_shpon:  multiply(PRICES.shpon, 0.45),
        hdf: multiply(PRICES.hdf, 0.08),
        kromka_fasad:  multiply(PRICES.kromka_fasad, 4),
        kromka_korpus:  multiply(PRICES.kromka_korpus, 10),
        naves_blum:  multiply(PRICES.naves_blum, 2),
        dovodchik:  multiply(PRICES.dovodchik, 2),
        konfirmat:  multiply(PRICES.konfirmat, 16),
        nojki:  multiply(PRICES.nojki, 4),
    }
}
