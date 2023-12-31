import BinocularsVue from '@/svg/Binoculars.vue'
import FlagVue from '@/svg/Flag.vue'


const TeamManagers = [
    {
        id: 1,
        name: "Babatunde Akin-Moses",
        designation: "Chief Executive Officer",
        img: "tunde.jpg",
        linked: "https://www.linkedin.com/in/babatundeakinmoses/"
    },
    {
        id: 2,
        name: "Onyinye Okonji",
        designation: "Chief Marketing Officer",
        img: "onyinye-okonji.jpg",
        linked: "https://www.linkedin.com/in/onyinyeokonji/"
    },
    {
        id: 3,
        name: "Mayowa Adeosun",
        designation: "Chief Operating Officer",
        img: "mayowa-adeosun.jpg",
        linked: "https://www.linkedin.com/in/mayowa-adeosun-mba-b4992754"
    },
    {
        id: 7,
        name: "Daniel Anyaegbu",
        designation: "Chief Technology Officer",
        img: "daniel-anyaegbu.jpg",
        linked: "https://www.linkedin.com/in/daniel-anyaegbu-7a1405163/"
    },
    {
        id: 9,
        name: "Mercy Dada",
        designation: "Head of Risk",
        img: "mercy-dada.jpg",
        linked: "https://www.linkedin.com/in/mercy-itua-dada-016428127/"
    },
    {
        id: 8,
        name: "Kingsley Makinde",
        designation: "Head of Product",
        img: "kingsley-makinde.jpg",
        linked: "https://www.linkedin.com/in/kingsley-makinde/"
    },
    {
        id: 10,
        name: "Mojisola Fagbohunlu",
        designation: "Head of Marketing",
        img: "mojisola-fagbohunlu.webp",
        linked: "https://www.linkedin.com/in/mojisolaoguneko"
    },
    {
        id: 6,
        name: "Adebayo Adenaike",
        designation: "Head of Investment Affairs",
        img: "adebayo-denaike.jpg",
        linked: "https://www.linkedin.com/in/bayo-adenaike-a571b220b/"
    },
    {
        id: 5,
        name: "Francis Agim",
        designation: "Head of Sales",
        img: "francis-agim.webp",
        linked: "https://www.linkedin.com/in/francis-agim-mba-micrm-mnim-mcilrm-91679592/"
    },
    {
        id: 4,
        name: "Segun Afuwape",
        designation: "Head of Collections",
        img: "segun-afuwape.jpg",
        linked: "https://www.linkedin.com/in/olusegun-afuwape-00065198"
    }
]
const BoardMembers = [
    {
        name: "Bade Aluko",
        img: "bade-aluko.jpg",
        role: "Chairman",
        linked: "https://www.linkedin.com/in/bade-aluko-90543b7/"
    },
    {
        name: "Adeola Azeez",
        img: "adeola-azeez.jpg",
        role: "Board Member",
        linked: "https://www.linkedin.com/in/adeola-azeez-6a320797/"
    },
    {
        name: "Oliver Nnona",
        img: "oliver-nnona.jpg",
        role: "Board Member",
        linked: "https://www.linkedin.com/in/olivernnona/"
    }
]

const CareReasons = [
    {
        title: "No Poverty",
        description:
            "Eradicating poverty is not a task of charity, it is an act of justice and the key to unlocking an enormous human potential.",
        color: "careColor1",
        gradient:
            "background-color:#E5233B",
        sdg: "SDG ONE"
    },
    {
        title: "Economic Growth",
        description:
            "Economic growth is the increase in the inflation-adjusted market value of the goods and services produced by an economy over time.",
        color: "careColor2",
        gradient:
            "background-color:#A21A43",
        sdg: "SDG EIGHT"
    },
    {
        title: "Reduced Inequalities",
        description:
            "Ensure equal opportunities and end discrimination. Ensure equal opportunity and reduce Inequalities of outcome and policies.",
        color: "careColor3",
        gradient:
            "background-color:#DC1768",
        sdg: "SDG TEN"
    }
]
const MissionVision = [
    {
        title: "Mission",
        icon: FlagVue,
        color: "background-image:linear-gradient(to top right, #F7FCE3, #FFFFFF)",
        description: "To ensure that individuals and businesses are financially empowered to achieve their goals.",
    },
    {
        title: "Vision",
        color: "background-image:linear-gradient(to top right, #F6F0EB, #FFFFFF)",
        icon: BinocularsVue,
        description: "To be the trusted provider of innovative financial solutions across the developing world",
    }
]
export { TeamManagers, BoardMembers, CareReasons,  MissionVision}; 
