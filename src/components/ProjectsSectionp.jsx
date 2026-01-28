import React from 'react'

function ProjectsSectionp() {
  return (
    <div>
        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">PROJECTS</p>

      <div className="w-[75%]">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="grid gap-4">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="h-60 bg-slate-50 p-6 rounded-lg shadow-md"
              >
                <p className="font-semibold">{project.title}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="grid gap-4">
            {projects.slice(2, 4).map((project, index) => (
              <div
                key={index}
                className="h-60 bg-slate-50 p-6 rounded-lg shadow-md"
              >
                <p className="font-semibold">{project.title}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 rounded-lg border border-slate-900 text-slate-900
            transition-all duration-300
            hover:bg-slate-900 hover:text-white hover:shadow-md">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSectionp