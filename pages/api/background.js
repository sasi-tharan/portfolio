const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'LondonTec City Campus',
                degree: 'BS, Computing',
                detail: "Bachelor's Degree in Computing from LondonTEc City Campus.",
                year: '2023-2024'
            },
            {
                id: 1,
                title: 'ICBT Kandy',
                degree: 'HND in Software Engineering & Computing',
                detail: "Completed HND in Software Engineering & Computing.",
                year: '2020-2022'
            },
            {
                id: 2,
                title: 'Esoft',
                degree: 'Diploma, In Software Engineering',
                detail: "Completed Diploma, In Software Engineering",
                year: '2019-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'UlavarSandhai PVT',
                role: 'FullStack Developer',
                url: 'https://fms.uzhavarsandhai.in/',
                desc: 'As a Fullstack developer, I used Laravel and mysql to build a Livestock management system',
                year: '2023 June - 2023 December ',
                location: 'Nuwara-Eliya, Sri lanka'
            },
            {
                id: 2,
                title: 'Samsons Cash and Carry',
                role: 'FullStack Developer',
                url: 'https://crm.wie-testing.co.uk/',
                desc: 'As a Fullstack developer, I used Laravel and mysql to build a Ecommerce Website',
                year: '02/2023 - Present',
                location: 'Nuwara-Eliya, Sri lanka'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
