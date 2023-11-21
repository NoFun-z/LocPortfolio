import React from 'react'
import { MongoClient, ObjectId, WithId } from 'mongodb';

export default function ProjectDetails() {
  return (
    <div>Project Details</div>
  )

}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://hoangloc1511:Xixc3SnK8pzHH0mE@cluster0.2jdqnje.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db();
  const projectsCollection = db.collection('projects');

  // Define a type for your projection
  type Projection<T> = { [K in keyof T]?: 1 };

  const projects = await projectsCollection.find({}).project<Projection<WithId<any>>>(
    { _id: 1 }
  ).toArray() as WithId<any>[]; //cast the result to anarray of id with type any to avoid typescript type warning

  client.close();

  return {
    fallback: false,
    paths: projects.map(p => ({
      params: { projectId: p._id },
    })),
  }
}

export async function getStaticProps(context: any) {
  const projectId: ObjectId = context.params.projectId;

  const client = await MongoClient.connect(
    'mongodb+srv://hoangloc1511:Xixc3SnK8pzHH0mE@cluster0.2jdqnje.mongodb.net/?retryWrites=true&w=majority'
  );

  const db = client.db('locnextportfolio');
  const projectsCollection = db.collection('projects');

  const selectedProject = await projectsCollection.findOne({ _id: projectId });

  client.close();

  return {
    props: {
      projectData: selectedProject,
    }
  };
}
