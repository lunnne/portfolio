import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import axios from 'axios';

export default function MyWork() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('/data/projects.json').then((res) => {
      setProjects(res.data);
    });
  }, []);
  return (
    <section id='projects' className="p-20">
      <h2 className="text-5xl font-bold uppercase mb-20 italic text-center">Projects</h2>
      <main className="projects flex space-x-8">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </main>
    </section>
  );
}
