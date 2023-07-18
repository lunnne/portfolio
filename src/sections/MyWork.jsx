import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyWork() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('/data/projects.json').then((res) => {
      setProjects(res.data);
    });
  }, []);
  return (
    <section id="projects" className="p-10 sm:p-20">
      <main className="mb-10 sm:mb-20 text-center space-y-5">
        <h2 className="text-3xl sm:text-5xl font-bold uppercase">Projects</h2>
        <p className="text-lg sm:text-xl italic">Intruducing my web development journey</p>
      </main>
      <main className="projects md:flex space-x-8 overflow-x-auto">
        {projects.map((project, index) => (
          <Link to={project.git_url} key={index}>
            <Project project={project} />
          </Link>
        ))}
      </main>
    </section>
  );
}
