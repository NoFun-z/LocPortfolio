'use client';

import { EntityState, createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Project } from '@/models/project';
import { RootState } from '../../store';

const projects = [
    {
        id: "pUFavKeEZfRhmjY4XkdyGzTL",
        name: "PAC software",
        technologies: "C#, ASP.NET MVC, SQLite, Jquery, JavaScript, HTML, CSS, Bootstrap, Razor, Azure",
        description: "A dynamic C# and ASP.NET MVC application designed for seamless client management. This full-stack solution, powered by SQLite, jQuery, Bootstrap, and Razor, not only streamlines client meetings, document organization, and user data management but also features an integrated auto-mailing system. Stay effortlessly connected with clients, automate communications, and enhance overall productivity. With robust admin authentication and authorization mechanisms, this application ensures secure data access",
        mainTools: "C#, Bootsrap, Jquery",
        publishedDate: "04/15/2023",
        pictureURL: "/Images/Projects/MVC-5-Project.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/PAC_Maintainence",
        favourite: true,
        videoSrc: "/Videos/MVC-5-Project.mp4",
    },
    // {
    //   id: "UAdwVz7a2GuF4trsgJ5bE3CW",
    //   name: "Blaze Ecom",
    //   technologies: "C#, Blazor, ASP.NET REST API, SQL Server, HTML, JavaScript, Bootstrap, Syncfusion, Stripe",
    //   description: "An e-commerce app combines Blazor, C#, SQL Server, Syncfusion, Bootstrap, and ASP.NET REST API to deliver a seamless shopping experience. With a visually appealing design powered by Syncfusion and Bootstrap for responsiveness, the app offers a user-friendly interface. The ASP.NET REST API ensures efficient communication with the SQL Server backend, managing data securely. This full-stack solution provides a modern and scalable platform for selling washroom soaps and candles online",
    //   mainTools: "C#, Blazor, Bootstrap",
    //   publishedDate: "10/15/2023",
    //   pictureURL: "/Images/Projects/Blaze-Ecom.jpg",
    //   publishedLink: "",
    //   githubLink: "https://github.com/NoFun-z/EComBlaze",
    //   favourite: true,
    //   videoSrc: "/Videos/Blaze-Ecom.mp4",
    // },
    {
        id: "eYMmVW7hAugsFCw3Exk5N6LH",
        name: "Winter EStore",
        technologies: "C#, ASP.NET REST API, SQLite, React, Typescript, PostgresSQL, Docker, Flyio",
        description: "A sleek e-commerce application built with React, ASP.NET REST API, TypeScript, and PostgreSQL. Leveraging Docker for containerization and Fly.io for enhanced performance, the app offers a seamless winter shopping experience. It includes features like filtering, paging, and admin authentication for secure CRUD operations. The project demonstrates your proficiency in full-stack development, combining modern technologies to create an efficient and responsive online store for winter gear",
        mainTools: "C#, ASP.NET REST API, React",
        publishedDate: "08/26/2023",
        pictureURL: "/Images/Projects/Winter-Ecom.jpg",
        publishedLink: "https://ecomreactdev.fly.dev/",
        githubLink: "https://github.com/NoFun-z/ECommerceStore",
        favourite: true,
        videoSrc: "/Videos/Winter-Ecom.mp4",
    },
    {
        id: "7834nzDka9UyrMmGe26ScEFw",
        name: "JQTask",
        technologies: "JqueryUI, HTML, CSS, C#, ASP.NET REST API, SQLite",
        description: "A single page task and board management website app inspired by Trello, developed with HTML, CSS, jQuery UI, and JavaScript for the frontend. The backend is powered by an ASP.NET Core REST API, providing a robust infrastructure for handling task and board-related operations. This project showcases my expertise in web development, combining client-side technologies for a dynamic and interactive user interface with a powerful backend to manage tasks and boards seamlessly",
        mainTools: "C#, JqueryUI",
        publishedDate: "10/03/2023",
        pictureURL: "/Images/Projects/JQTask.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/JQTask",
        favourite: true,
        videoSrc: "/Videos/JQTask.mp4",
    },
    {
        id: "KAWxREpbNHGcC8ns79XZ5gF2",
        name: "ADO Emma",
        technologies: "C#, ASP.NET CORE, SQL Server, ADO, HTML, CSS, Bootstrap",
        description: "An inventory, employees and orders management app, employing ADO, C#, and ASP.NET Core to handle seamless CRUD operations. The app allows efficient management of inventory, orders, and employee data, providing a comprehensive solution for business needs. With a secure login system, user authentication ensures that only authorized personnel can access and manipulate sensitive information",
        mainTools: "C#, ASP.NET CORE",
        publishedDate: "12/08/2022",
        pictureURL: "/Images/Projects/ADO-Emma.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/ADO-EmmaInven",
        favourite: false,
        videoSrc: "/Videos/ADO-Emma.mp4",
    },
    {
        id: "EdqZsDtIrVc7G9bBQwThMSAW",
        name: "Portfolio Web",
        technologies: "HTML, CSS, JavaScript",
        description: "An old portfolio, designed with HTML, CSS, and JavaScript, elegantly displays your projects and resume. The clean structure and minimalistic design highlight your coding skills, offering a fast and engaging user experience",
        mainTools: "HTML, CSS",
        publishedDate: "03/05/2023",
        pictureURL: "/Images/Projects/Old-Portfolio.jpg",
        publishedLink: "https://locphamportfolio.com/",
        githubLink: "https://github.com/NoFun-z/LocPhamPortfolio",
        favourite: false,
        videoSrc: "",
    },
    {
        id: "7PDt5QgBcJ9x3AVwhs2WpIXj",
        name: "Pacman UWP",
        technologies: "C#",
        description: "Pac-Man game, crafted with C# UWP, takes the classic arcade experience to a new level. Dynamic moving obstacles ensures each playthrough is a unique challenge. The incorporation of skills, points, and levels enhances the gaming experience, adding layers of strategy and progression. The inclusion of a high-score system provides a competitive edge, motivating players to continually improve",
        mainTools: "C#",
        publishedDate: "05/02/2023",
        pictureURL: "/Images/Projects/Pacman-UWP.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/Pacman-Game",
        favourite: false,
        videoSrc: "/Videos/Pacman-UWP.mp4",
    },
    {
        id: "v9LKaJ8XB2mrw7qZnxRgHtys",
        name: "Contoso Retail",
        technologies: "PowerBI, SQL",
        description: "A Power BI app illuminating Contoso Retail data, presenting clear visuals of profits and sales over the years. It provides a user-friendly interface for easy exploration and analysis, transforming complex data into actionable insights",
        mainTools: "PowerBI",
        publishedDate: "10/23/2023",
        pictureURL: "/Images/Projects/PowerBi-Contoso.jpg",
        publishedLink: "https://app.powerbi.com/groups/me/reports/224508a1-eccf-4e77-b659-0962f0f36ce2/ReportSection?experience=power-bi",
        githubLink: "",
        favourite: true,
        videoSrc: "",
    },
    {
        id: "2T4Be7RQJMtYyr6xVLhp8GnW",
        name: "Emma-Sales",
        technologies: "HTML, CSS, JavaScript",
        description: "A sales inventory website, built with HTML, CSS, and JavaScript, facilitates easy navigation, adheres to WCAG standards, and supports CRUD operations. It efficiently manages orders, allows item modification, and features an invoice form for completed orders, providing a user-friendly platform for seamless inventory control",
        mainTools: "JavaScript",
        publishedDate: "12/15/2022",
        pictureURL: "/Images/Projects/Emma-Sales.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/Emma-Inventory",
        favourite: false,
        videoSrc: "",
    },
    {
        id: "u7BpNb3fKIF8HErqcTyCankJ",
        name: "EmpsC UWP",
        technologies: "C#",
        description: "UWP C# app streamlines employee management by efficiently handling pay rates and allowing seamless editing of employee information.  A reliable tool for managing and updating essential employee details within your organization",
        mainTools: "C#",
        publishedDate: "04/01/2022",
        pictureURL: "/Images/Projects/EmpsC-UWP.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/UWP-Client-System",
        favourite: false,
        videoSrc: "",
    },
    {
        id: "jXmgZRMPKpnWhItsa2YQCEuf",
        name: "Tech Blogs",
        technologies: "HTML, CSS",
        description: "A static AI blogs website, crafted with HTML and CSS, offers a user-friendly and informative experience with read-only data and a basic register form",
        mainTools: "CSS",
        publishedDate: "12/10/2021",
        pictureURL: "/Images/Projects/Blog-UI-Project.jpg",
        publishedLink: "",
        githubLink: "https://github.com/NoFun-z/Blogger-UI",
        favourite: false,
        videoSrc: "/Videos/Blog-UI-Project.mp4",
    },
    {
        id: "9jx36QYIMWLE5dwf7VGHguRZ",
        name: "Covid Data",
        technologies: "Python, Pandas, Jupyter NoteBook",
        description: "A simple COVID data app, implemented in Python using Pandas in a Jupyter notebook, delivers relevant information spanning 2019 to 2022. It efficiently displays key COVID data and complements it with informative charts, providing a concise and insightful overview of the pandemic trends during that period",
        mainTools: "Python",
        publishedDate: "03/16/2022",
        pictureURL: "/Images/Projects/Python-Pandas-Project.jpg",
        publishedLink: "",
        githubLink: "",
        favourite: false,
        videoSrc: "",
    },
    {
        id: "Ltrjp9nMdVE3UZ2x4cJvGDfN",
        name: "ISS web",
        technologies: "Wordpress, HTML, CSS, JavaScript, Hostinger",
        description: "A progressive platform driven by HTML, CSS, and JavaScript and built with WordPress. This responsive website combines a seamless integration of cutting-edge technologies with an easy-to-use interface. Innovative Solution Services is made to demonstrate creativity and provide a contemporary online presence, from interactive features to flexible design aspects",
        mainTools: "Wordpress, CSS",
        publishedDate: "03/18/2023",
        pictureURL: "/Images/Projects/ISS-web-page.jpg",
        publishedLink: "https://isslwebnet.com/",
        githubLink: "",
        favourite: false,
        videoSrc: "",
    },
]

// interface ProjectState extends EntityState<Project> {
//     projectsLoaded: boolean,
//     status: string,
// }

// const projectsAdapter = createEntityAdapter<Project>();

// export const fetchProjectsAsync = createAsyncThunk<Project[], void, { state: RootState }>(
//     'project/fetchProjectssAsync',
//     async (_, thunkAPI) => {
//         try {
//             return projects;
//         }
//         catch (er: any) {
//             return thunkAPI.rejectWithValue({ error: er.data })
//         }
//     }
// )

const initialState: Project[] = projects;

export const projectsSlice = createSlice({
    name: 'project',
    // initialState: projectsAdapter.getInitialState<ProjectState>({
    //     projectsLoaded: false,
    //     status: 'idle',
    // }),
    initialState,
    reducers: {
        // setProjectsState: (state, action) => {
        //     projectsAdapter.upsertOne(state, action.payload);
        //     state.projectsLoaded = false;
        // }
        setProjectsState: (state, action) => {
            return action.payload;
        }
    },
//     extraReducers: (builder => {
//         builder.addCase(fetchProjectsAsync.pending, (state) => {
//             state.status = 'pendingFetchProjects';
//         });
//         builder.addCase(fetchProjectsAsync.fulfilled, (state, action) => {
//             state.projectsLoaded = true;
//         });
//         builder.addCase(fetchProjectsAsync.rejected, (state, action) => {
//             console.log(action.payload);
//         });
//     })
})

export const { setProjectsState } = projectsSlice.actions;
export default projectsSlice.reducer;