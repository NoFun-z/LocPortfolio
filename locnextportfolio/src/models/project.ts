import { ObjectId } from "mongodb";

export interface Project{
    id: string,
    name: string,
    technologies: string,
    description: string,
    publishedDate: string,
    pictureURL: string,
    publishedLink: string,
    githubLink: string,
    favourite: boolean,
    videoSrc: string,   
}