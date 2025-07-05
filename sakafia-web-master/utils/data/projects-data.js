import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'QuinSack',
        description: "An online car rental platform that allows users to browse and rent vehicles.",
        tools: ['ASP.NET Core', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        url: 'https://quinsack-car-rentals.vercel.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'CustomerBalancePlatform',
        description: 'An application for managing customer records and balances with robust backend functionality.',
        tools: ['C#', 'ASP.NET Core', 'SQL', 'SSMS', 'HTML', 'CSS', 'JavaScript'],
        role: 'Backend Engineer',
        url: 'https://github.com/SandraMine/CustomerPlatform',
        code: 'https://github.com/SandraMine/CustomerPlatform',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'E-Mechanic System (AutoNearMe)',
        description: 'A national Software platform where customers can get access to numerous mechanical services in Ghana.',
        tools: ['C#', 'ASP.NET Core', 'SQL', 'HTML', 'CSS', 'JavaScript', 'React'],
        role: 'Backend Developer',
        url: 'https://www.autonearme.online/',
        code: '',
        demo: 'https://www.autonearme.online/',
        image: travel,
    },
    {
        id: 4,
        name: 'PandoraVisit',
        description: 'An application for keeping clients visit records and managing appointments.',
        tools: ['C#', 'ASP.NET Core', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        role: 'Backend Developer',
        url: '#',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 5,
        name: 'BackOffice',
        description: 'A back office for Biz360 (SAP Software) with comprehensive administrative features.',
        tools: ['C#', 'ASP.NET Core', 'SQL', 'HTML', 'CSS', 'JavaScript'],
        role: 'Backend Engineer',
        url: '#',
        code: '',
        demo: '',
        image: realEstate,
    },
];

