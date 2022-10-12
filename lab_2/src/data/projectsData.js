import {Project01, Project02, Project03} from "../assets/images";

export const data = [
    {
        id: '01',
        isLeading: true,
        image: Project01,
        name: 'Workhub office Webflow Webflow Design',
        description: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam',
        link: {
            title: 'View project ⟶',
            href: '/#',
        }
    },
    {
        id: '02',
        isLeading: false,
        image: Project02,
        name: 'Unisaas Website Design',
        link: {
            title: 'View project ⟶',
            href: '/#',
        }
    },
    {
        id: '03',
        isLeading: false,
        image: Project03,
        name: 'Another title',
        link: {
            title: 'View project ⟶',
            href: '/#',
        }
    },
];