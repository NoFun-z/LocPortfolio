
import { Project } from '@/models/project'
import { Skeleton } from '@mui/material'

interface IProject {
    project: Project
}

export default function ProjectCardSkeleton({ project }: IProject) {


    return (
        <div className="z-10 hover:scale-110 transition-transform duration-300 ease-out relative
             before:content-[''] before:absolute before:-z-10 before:left-0 before:w-full before:h-full 
             md:before:backdrop-blur-sm before:bg-slate-600/30 lg:before:bg-slate-800/20 p-4 pb-0 before:rounded">
            <div className="flex items-center justify-center">
                <Skeleton
                    animation="wave"
                    height={20}
                    width="50%"
                    style={{ marginBottom: 20, marginTop: 20 }}
                />
            </div>
            <Skeleton height={150}
                width="100%" animation="wave" variant="rectangular" style={{ marginBottom: 8, marginTop: 20 }}/>
            <div className="pb-5 pt-5">
                <Skeleton animation="wave" height={20} style={{ marginBottom: 12, marginTop: 6 }} />
                <Skeleton animation="wave" height={20} width="30%" />
            </div>
        </div>
    )
}
