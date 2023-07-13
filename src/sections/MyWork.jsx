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
    <section id="projects" className="p-20">
      <main className="mb-20 text-center space-y-5">
        <h2 className="text-5xl font-bold uppercase">Projects</h2>
        <p className="text-xl italic">Intruducing my web development journey</p>
      </main>
      <main className="projects flex space-x-8">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </main>
    </section>
  );
}
