import { Project } from '@/models/project'
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'

interface IProject {
    project: Project
}

export default function ProjectCard({ project }: IProject) {
    return (
        <Card>
            <CardHeader avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {project.name.charAt(0).toLocaleUpperCase()}
                </Avatar>
            }
                title={project.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: '#46a3b4' }
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={project.pictureURL}
                title={project.name}
            />
            <CardContent sx={{ paddingBottom: '5px' }}>
                <Typography gutterBottom sx={{ display: 'flex', alignItems: 'center', whiteSpace: 'pre-wrap' }} color='secondary' variant="h6">
                    <span style={{ textDecoration: 'line-through' }}>{project.technologies}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description.length > 80
                        ? `${project.description.substring(0, 80)}...`
                        : project.description}
                </Typography>
            </CardContent>
        </Card>
    )
}
