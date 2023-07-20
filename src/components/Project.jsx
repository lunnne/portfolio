import React from 'react';

export default function Project({ project }) {
  const { title, detail, thumbnail_url, stack } = project;
  return (
    <div className="project-container flex flex-col justify-between mb-5 border-2 p-3 rounded-lg">
      <div>
        <img src={thumbnail_url} alt={title} />
      </div>
      <div className='space-y-3'>
        <p className="text-xl uppercase font-bold">{title}</p>
        <hr className="text-gray-300"/>
        <div className="flex space-x-2">
          {Object.values(stack).map((stack) => (
            <img className="w-5 lg:w-8" src={stack} alt="stack" />
          ))}
        </div>
      </div>
      <div className="detail p-5 sm:text-xl leading-10">
        <div className='border-2 border-bg-grey p-5 w-full h-full text-center flex justify-center items-center'><p>{detail}</p></div>
      </div>
    </div>
  );
}
