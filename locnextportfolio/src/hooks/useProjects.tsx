import { Project } from '@/models/project'

export default function useProjects() {

  const projects: Project[] = [
    {
      id: "pUFavKeEZfRhmjY4XkdyGzTL",
      name: "PAC software",
      type: ["Software", "Websites"],
      technologies: "C#, ASP.NET MVC, SQLite, Jquery, JavaScript, HTML, CSS, Bootstrap, Razor, Azure",
      description: "A dynamic C# and ASP.NET MVC application designed for seamless client management. This full-stack solution, powered by SQLite, jQuery, Bootstrap, and Razor, not only streamlines client meetings, document organization, and user data management but also features an integrated auto-mailing system. Stay effortlessly connected with clients, automate communications, and enhance overall productivity. With robust admin authentication and authorization mechanisms, this application ensures secure data access",
      mainTools: "C#, Bootsrap, Jquery",
      publishedDate: "04/15/2023",
      pictureURL: ["/Images/Projects/MVC-5-Project.jpg", "/Images/Projects/MVC-5-Project-2.jpg",
        "/Images/Projects/MVC-5-Project-Responsive1.jpg",
        "/Images/Projects/MVC-5-Project-Responsive2.jpg", "/Images/Projects/MVC-5-Project-Responsive3.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/PAC_Maintainence",
      favourite: true,
      videoSrc: "/Videos/MVC-5-Project.mp4",
    },
    {
      id: "uQJ7vg2JYKUc9Mnn52RuRtws",
      name: "MangoMicro",
      type: ["Software", "Websites", "Data"],
      technologies: "C#, ASP.NET MVC, SQL Server, Jquery, JavaScript, HTML, CSS, Bootstrap, Razor, Azure DevOps, Azure Servicebus, Stripe, Data Tables",
      description: "A Mango Microservice Food App, developed with ASP.NET MVC, utilizes SQL Server and Azure SQL for production for data management, while Azure Service Bus ensures seamless communication. Hosted on Azure DevOps, the CI/CD pipeline enables continuous integration and automated deployment for ongoing improvements, ensuring a smooth and scalable food app experience",
      mainTools: "C#, ASP.NET MVC, Bootstrap, Microsoft Azure, Azure DevOps",
      publishedDate: "10/11/2023",
      pictureURL: ["/Images/Projects/MangoMicro.jpg", "/Images/Projects/MangoMicro-2.jpg",
        "/Images/Projects/MangoMicro-3.jpg", "/Images/Projects/MangoMicro-4.jpg"],
      publishedLink: "https://mangomicroserviceweb23.azurewebsites.net",
      githubLink: "https://github.com/NoFun-z/MangoMicro",
      favourite: true,
      videoSrc: "/Videos/MangoMicro.mp4",
    },
    {
      id: "UAdwVz7a2GuF4trsgJ5bE3CW",
      name: "Blaze Ecom",
      type: ["Software", "Websites"],
      technologies: "C#, Blazor, ASP.NET REST API, SQL Server, HTML, JavaScript, Bootstrap, Syncfusion, Stripe",
      description: "An e-commerce app combines Blazor, C#, SQL Server, Syncfusion, Bootstrap, and ASP.NET REST API to deliver a seamless shopping experience. With a visually appealing design powered by Syncfusion and Bootstrap for responsiveness, the app offers a user-friendly interface. The ASP.NET REST API ensures efficient communication with the SQL Server backend, managing data securely. This full-stack solution provides a modern and scalable platform for selling washroom soaps and candles online",
      mainTools: "C#, Blazor, Bootstrap",
      publishedDate: "10/15/2023",
      pictureURL: ["/Images/Projects/Blaze-Ecom.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/EComBlaze",
      favourite: true,
      videoSrc: "/Videos/Blaze-Ecom.mp4",
    },
    {
      id: "eYMmVW7hAugsFCw3Exk5N6LH",
      name: "Winter EStore",
      type: ["Websites"],
      technologies: "C#, ASP.NET REST API, SQLite, React, Typescript, PostgresSQL, Docker, Flyio",
      description: "A sleek e-commerce application built with React, ASP.NET REST API, TypeScript, and PostgreSQL. Leveraging Docker for containerization and Fly.io for enhanced performance, the app offers a seamless winter shopping experience. It includes features like filtering, paging, and admin authentication for secure CRUD operations. The project demonstrates your proficiency in full-stack development, combining modern technologies to create an efficient and responsive online store for winter gear",
      mainTools: "C#, ASP.NET REST API, React",
      publishedDate: "08/26/2023",
      pictureURL: ["/Images/Projects/Winter-Ecom.jpg", "/Images/Projects/Winter-Ecom-Responsive1.jpg",
        "/Images/Projects/Winter-Ecom-Responsive2.jpg"],
      publishedLink: "https://ecomreactdev.fly.dev/",
      githubLink: "https://github.com/NoFun-z/ECommerceStore",
      favourite: true,
      videoSrc: "/Videos/Winter-Ecom.mp4",
    },
    {
      id: "LesAKwSfVuD5kMpqXGQpE64z",
      name: "ABlog-23",
      type: ["Websites", "Data"],
      technologies: "C#, ASP.NET REST API, SQL Server, Angular, Typescript",
      description: "An Angular app with SQL Server as the backend, implementing CRUD operations for blog uploads and photo albums. Integrated authentication for secure access, ensuring a seamless and efficient user experience",
      mainTools: "C#, ASP.NET REST API, Angular",
      publishedDate: "01/15/2023",
      pictureURL: ["/Images/Projects/ABlog-23.jpg", "/Images/Projects/ABlog-23-2.jpg",
        "/Images/Projects/ABlog-23-3.jpg", "/Images/Projects/ABlog-23-4.jpg",
        "/Images/Projects/ABlog-23-5.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/ABlog-23",
      favourite: true,
      videoSrc: "",
    },
    {
      id: "cfycqsGhrqEfCw8QB75sdP44",
      name: "Admin Dashboard",
      type: ["Data", "Software", "Websites"],
      technologies: "C#, ASP.NET Core, ASP.NET MVC, Microsoft Azure, SQL Server, Syncfusion",
      description: "A financial management Azure-based MVC project. Using Azure SQL, Functions, Blob Storage, and Service Bus, this admin dashboard provides real-time insights into income and expense reports across diverse categories",
      mainTools: "ASP.NET MVC, Microsoft Azure",
      publishedDate: "12/13/2023",
      pictureURL: ["/Images/Projects/Admin-Dashboard.jpg", "/Images/Projects/Admin-Dashboard-2.jpg",
        "/Images/Projects/Admin-Dashboard-3.jpg", "/Images/Projects/Admin-Dashboard-4.jpg",
        "/Images/Projects/Admin-Dashboard-5.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/Az-PostAL-23",
      favourite: true,
      videoSrc: "/Videos/Admin-Dashboard.mp4",
    },
    {
      id: "SWj9u9WVHgn7P2bAI8fJrfFR",
      name: "RapidVids",
      type: ["Websites"],
      technologies: "React, Rapid API, Hostinger",
      description: "A responsive YouTube clone crafted with React, fetched videos from Rapid API, designed for seamless streaming of videos, engaging with channels, and interacting through comments. Experience the power of modern web technology in delivering a dynamic, user-friendly video platform",
      mainTools: "React, Rapid API",
      publishedDate: "02/05/2023",
      pictureURL: ["/Images/Projects/React-RapidVids.jpg", "/Images/Projects/React-RapidVids-2.jpg",
        "/Images/Projects/React-RapidVids-3.jpg", "/Images/Projects/React-RapidVids-4.jpg",
        "/Images/Projects/React-RapidVids-5.jpg", "/Images/Projects/React-RapidVids-6.jpg"],
      publishedLink: "https://locvtube.com/",
      githubLink: "https://github.com/NoFun-z/Youtube-Clone",
      favourite: true,
      videoSrc: "/Videos/React-RapidVids.mp4",
    },
    {
      id: "7834nzDka9UyrMmGe26ScEFw",
      name: "JQTask",
      type: ["Websites"],
      technologies: "JqueryUI, HTML, CSS, C#, ASP.NET REST API, SQLite",
      description: "A single page task and board management website app inspired by Trello, developed with HTML, CSS, jQuery UI, and JavaScript for the frontend. The backend is powered by an ASP.NET Core REST API, providing a robust infrastructure for handling task and board-related operations. This project showcases my expertise in web development, combining client-side technologies for a dynamic and interactive user interface with a powerful backend to manage tasks and boards seamlessly",
      mainTools: "C#,ASP.NET REST API, JqueryUI",
      publishedDate: "10/03/2023",
      pictureURL: ["/Images/Projects/JQTask.jpg", "/Images/Projects/JQTask-Responsive.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/JQTask",
      favourite: true,
      videoSrc: "/Videos/JQTask.mp4",
    },
    {
      id: "L5wMELzvhBL7e8KTuJ2AcpGK",
      name: "Stud-Data SSIS",
      type: ["Data", "Software"],
      technologies: "C#, SQL Server, SQL Server Integration Service",
      description: "A data warehousing solution utilizing SQL Server Integration Services (SSIS) to manage and transform student data within an educational data warehouse environment",
      mainTools: "C#, SQL Server",
      publishedDate: "11/03/2023",
      pictureURL: ["/Images/Projects/Student-Data-SSIS.jpg", "/Images/Projects/Student-Data-SSIS-2.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
    {
      id: "KAWxREpbNHGcC8ns79XZ5gF2",
      name: "ADO Emma",
      type: ["Software"],
      technologies: "C#, ASP.NET CORE, SQL Server, ADO, HTML, CSS, Bootstrap",
      description: "An inventory, employees and orders management app, employing ADO, C#, and ASP.NET Core to handle seamless CRUD operations. The app allows efficient management of inventory, orders, and employee data, providing a comprehensive solution for business needs. With a secure login system, user authentication ensures that only authorized personnel can access and manipulate sensitive information",
      mainTools: "C#, ASP.NET CORE, SQL",
      publishedDate: "12/08/2022",
      pictureURL: ["/Images/Projects/ADO-Emma.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/ADO-EmmaInven",
      favourite: false,
      videoSrc: "/Videos/ADO-Emma.mp4",
    },
    {
      id: "EdqZsDtIrVc7G9bBQwThMSAW",
      name: "Portfolio Web",
      type: ["Websites"],
      technologies: "HTML, CSS, JavaScript",
      description: "An old portfolio, designed with HTML, CSS, and JavaScript, elegantly displays your projects and resume. The clean structure and minimalistic design highlight your coding skills, offering a fast and engaging user experience",
      mainTools: "HTML, CSS",
      publishedDate: "03/05/2023",
      pictureURL: ["/Images/Projects/Old-Portfolio.jpg", "/Images/Projects/Old-Portfolio-Responsive.jpg"],
      publishedLink: "https://locphamportfolio.com/",
      githubLink: "https://github.com/NoFun-z/LocPhamPortfolio",
      favourite: false,
      videoSrc: "",
    },
    {
      id: "7PDt5QgBcJ9x3AVwhs2WpIXj",
      name: "Pacman UWP",
      type: ["Software"],
      technologies: "C#",
      description: "Pac-Man game, crafted with C# UWP, takes the classic arcade experience to a new level. Dynamic moving obstacles ensures each playthrough is a unique challenge. The incorporation of skills, points, and levels enhances the gaming experience, adding layers of strategy and progression. The inclusion of a high-score system provides a competitive edge, motivating players to continually improve",
      mainTools: "C#",
      publishedDate: "05/02/2023",
      pictureURL: ["/Images/Projects/Pacman-UWP.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/Pacman-Game",
      favourite: false,
      videoSrc: "/Videos/Pacman-UWP.mp4",
    },
    {
      id: "v9LKaJ8XB2mrw7qZnxRgHtys",
      name: "Contoso Retail",
      type: ["Data"],
      technologies: "PowerBI, SQL",
      description: "A Power BI app illuminating Contoso Retail data, presenting clear visuals of profits and sales over the years. It provides a user-friendly interface for easy exploration and analysis, transforming complex data into actionable insights",
      mainTools: "PowerBI, SQL",
      publishedDate: "10/23/2023",
      pictureURL: ["/Images/Projects/PowerBi-Contoso.jpg"],
      publishedLink: "https://app.powerbi.com/groups/me/reports/224508a1-eccf-4e77-b659-0962f0f36ce2/ReportSection?experience=power-bi",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
    {
      id: "2T4Be7RQJMtYyr6xVLhp8GnW",
      name: "Emma-Sales",
      type: ["Websites"],
      technologies: "HTML, CSS, JavaScript",
      description: "A sales inventory website, built with HTML, CSS, and JavaScript, facilitates easy navigation, adheres to WCAG standards, and supports CRUD operations. It efficiently manages orders, allows item modification, and features an invoice form for completed orders, providing a user-friendly platform for seamless inventory control",
      mainTools: "JavaScript, HTML",
      publishedDate: "12/15/2022",
      pictureURL: ["/Images/Projects/Emma-Sales.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/Emma-Inventory",
      favourite: false,
      videoSrc: "",
    },
    {
      id: "u7BpNb3fKIF8HErqcTyCankJ",
      name: "EmpsC UWP",
      type: ["Software"],
      technologies: "C#",
      description: "UWP C# app streamlines employee management by efficiently handling pay rates and allowing seamless editing of employee information.  A reliable tool for managing and updating essential employee details within your organization",
      mainTools: "C#",
      publishedDate: "04/01/2022",
      pictureURL: ["/Images/Projects/EmpsC-UWP.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/UWP-Client-System",
      favourite: false,
      videoSrc: "",
    },
    {
      id: "jXmgZRMPKpnWhItsa2YQCEuf",
      name: "Tech Blogs",
      type: ["Websites"],
      technologies: "HTML, CSS",
      description: "A static AI blogs website, crafted with HTML and CSS, offers a user-friendly and informative experience with read-only data and a basic register form",
      mainTools: "CSS",
      publishedDate: "12/10/2021",
      pictureURL: ["/Images/Projects/Blog-UI-Project.jpg"],
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/Blogger-UI",
      favourite: false,
      videoSrc: "/Videos/Blog-UI-Project.mp4",
    },
    {
      id: "KgzJPt4HBrsCEJM84TKHe5EV",
      name: "Lexer App",
      type: ["Data", "Software"],
      technologies: "Java, Android Studio",
      description: "Lexer App, crafted in Android Studio integrated with Java, simplifies fitness tracking. Mark exercises as finished, add custom workouts, and enjoy an intuitive interface for seamless navigation",
      mainTools: "Java",
      publishedDate: "12/10/2023",
      pictureURL: ["/Images/Projects/Android-Lexer.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: false,
      videoSrc: "/Videos/Android-Lexer.mp4",
    },
    {
      id: "9jx36QYIMWLE5dwf7VGHguRZ",
      name: "Flights Data",
      type: ["Data"],
      technologies: "Python, Pandas, PySpark, Jupyter NoteBook",
      description: "Explore flight data effortlessly with this Python project using PySpark and Pandas in a Jupyter notebook. The data delivers concise insights into flight patterns and delays through informative charts, offering a quick and insightful overview of aviation trends",
      mainTools: "Pandas, PySpark",
      publishedDate: "12/01/2023",
      pictureURL: ["/Images/Projects/Spark-Flights-Data.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: false,
      videoSrc: "/Videos/Spark-Flights-Data.mp4",
    },
    {
      id: "zduT5UDnknqNEF7muTEyTygG",
      name: "Students' Grades",
      type: ["Data"],
      technologies: "Python, Pandas, Numpy, Jupyter NoteBook",
      description: "A Python application, powered by Pandas in a Jupyter notebook, navigates through student grades data, covering a range of years. With clear visualizations, the app offers a quick and informative overview of academic trends, making it a valuable tool for understanding student progress over time",
      mainTools: "Python, Pandas, Numpy",
      publishedDate: "11/03/2023",
      pictureURL: ["/Images/Projects/PandaNumpy-StudentGrades.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: false,
      videoSrc: "",
    },
    {
      id: "qdqfBq6bUvQhKV4q9jKcb69I",
      name: "Hadoop Linux",
      type: ["Data"],
      technologies: "Linux, Bash Scripts, Hadoop",
      description: "A Bash script leveraging Hadoop and MapReduce efficiently processes large datasets for data calculations and word counts. This streamlined script offers quick insights, making it an effective tool for data analysis and word frequency tasks",
      mainTools: "Bash Scripts, Hadoop",
      publishedDate: "10/13/2023",
      pictureURL: ["/Images/Projects/Linux-Hadoop1.jpg", "/Images/Projects/Linux-Hadoop2.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: false,
      videoSrc: "",
    },
    {
      id: "er5CzZ3fysjKsNyRSxjhE6FL",
      name: "TicTacToe minigame",
      type: ["Data", "Software"],
      technologies: "Powershell",
      description: "A quick solo Tic-Tac-Toe showdown in this PowerShell project. Play against the computer for a classic gaming experience, all in a shell window",
      mainTools: "Powershell",
      publishedDate: "07/21/2022",
      pictureURL: ["/Images/Projects/PowerShell-TicTacToe.jpg"],
      publishedLink: "",
      githubLink: "",
      favourite: false,
      videoSrc: "/Videos/PowerShell-TicTacToe.mp4",
    },
    {
      id: "Ltrjp9nMdVE3UZ2x4cJvGDfN",
      name: "ISS web",
      type: ["Websites"],
      technologies: "Wordpress, HTML, CSS, JavaScript, Hostinger",
      description: "A progressive platform driven by HTML, CSS, and JavaScript and built with WordPress. This responsive website combines a seamless integration of cutting-edge technologies with an easy-to-use interface. Innovative Solution Services is made to demonstrate creativity and provide a contemporary online presence, from interactive features to flexible design aspects",
      mainTools: "Wordpress, CSS",
      publishedDate: "03/18/2023",
      pictureURL: ["/Images/Projects/ISS-web-page.jpg", "/Images/Projects/ISS-web-page-Responsive.jpg"],
      publishedLink: "https://isslwebnet.com/",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
  ]

  return {
    projects,
  }
}
