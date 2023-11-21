import { Project } from '@/models/project'

export default function useProjects() {

  const projects: Project[] = [
    {
      id: "1",
      name: "PAC software",
      technologies: "C#, ASP.NET MVC, SQLite, Jquery, JavaScript, HTML, CSS, Bootstrap, Razor, Azure",
      description: "A dynamic C# and ASP.NET MVC application designed for seamless client management. This full-stack solution, powered by SQLite, jQuery, Bootstrap, and Razor, not only streamlines client meetings, document organization, and user data management but also features an integrated auto-mailing system. Stay effortlessly connected with clients, automate communications, and enhance overall productivity. With robust admin authentication and authorization mechanisms, this application ensures secure data access",
      publishedDate: "15/4/2023",
      pictureURL: "/Images/Projects/MVC-5-Project.jpg",
      publishedLink: "",
      githubLink: "https://github.com/NoFun-z/PAC_Maintainence",
      favourite: true,
      videoSrc: "/Videos/MVC-5-Project.mp4",
    },
    {
      id: "2",
      name: "ISS web",
      technologies: "Wordpress, HTML, CSS, JavaScript, Hostinger",
      description: "A progressive platform driven by HTML, CSS, and JavaScript and built with WordPress. This responsive website combines a seamless integration of cutting-edge technologies with an easy-to-use interface. Innovative Solution Services is made to demonstrate creativity and provide a contemporary online presence, from interactive features to flexible design aspects",
      publishedDate: "02/5/2023",
      pictureURL: "/Images/Projects/ISS-web-page.jpg",
      publishedLink: "https://isslwebnet.com/",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
    {
      id: "3",
      name: "ISS web",
      technologies: "Wordpress, HTML, CSS, JavaScript, Hostinger",
      description: "A progressive platform driven by HTML, CSS, and JavaScript and built with WordPress. This responsive website combines a seamless integration of cutting-edge technologies with an easy-to-use interface. Innovative Solution Services is made to demonstrate creativity and provide a contemporary online presence, from interactive features to flexible design aspects",
      publishedDate: "02/5/2023",
      pictureURL: "/Images/Projects/ISS-web-page.jpg",
      publishedLink: "https://isslwebnet.com/",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
    {
      id: "4",
      name: "ISS web",
      technologies: "Wordpress, HTML, CSS, JavaScript, Hostinger",
      description: "A progressive platform driven by HTML, CSS, and JavaScript and built with WordPress. This responsive website combines a seamless integration of cutting-edge technologies with an easy-to-use interface. Innovative Solution Services is made to demonstrate creativity and provide a contemporary online presence, from interactive features to flexible design aspects",
      publishedDate: "02/5/2023",
      pictureURL: "/Images/Projects/ISS-web-page.jpg",
      publishedLink: "https://isslwebnet.com/",
      githubLink: "",
      favourite: true,
      videoSrc: "",
    },
  ]

  return {
    projects
  }
}
