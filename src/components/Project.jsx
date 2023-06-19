import React from 'react';

export default function Project({ project }) {
  const { title, detail, thumbnail_url, stack } = project;
  return (
    <div className="project-container w-1/4 space-y-3 border-2 p-3 rounded-lg">
      <div className="h-2/3 overflow-hidden">
        <img src={thumbnail_url} alt={title} />
      </div>
      <p className="text-xl uppercase font-bold">{title}</p>
      <hr className="text-gray-300" />
      <div className="flex space-x-2">
        {Object.values(stack).map((stack) => (
          <img className="w-7 lg:w-10" src={stack} />
        ))}
      </div>
      <div className="detail w-1/4 text-xl font-bold">
        <p>{detail}</p>
      </div>
    </div>
  );
}
