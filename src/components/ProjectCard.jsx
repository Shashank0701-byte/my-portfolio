import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({imgUrl, title, tags, githubUrl, liveDemoUrl}) => {
  return (
    <div className='h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md mx-2 cursor-pointer hover:shadow-lg transition-shadow duration-300'>
        <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 object-cover' />
        <div className="px-4 py-5">
          <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis text-gray-900 dark:text-white mb-3">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-secondary bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2 justify-center">
            {/* GitHub Link */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300 text-sm"
              >
                <FaGithub size={14} />
                <span className="font-medium">Code</span>
              </a>
            )}
            
            {/* Live Demo Link */}
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 text-sm"
              >
                <FaExternalLinkAlt size={14} />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
          </div>
        </div>
    </div>
  )
}

export default ProjectCard