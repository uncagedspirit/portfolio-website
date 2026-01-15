import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import x from "../assets/social/x.png";
import linkedin from "../assets/social/linkedin.png";
import medium from "../assets/social/medium.png";
import github from "../assets/social/github.png";
import leetcode from "../assets/social/leetcode.png";
import discord from "../assets/social/discord.png";
import instagram from "../assets/social/instagram.png";

function BioSection() {
  const [showMore, setShowMore] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  
  const socialProfiles = {
    x: { username: "@saakshi_dev", followers: "1.2K", bio: "Full Stack Developer sharing tech insights" },
    linkedin: { username: "Saakshi Kobarne", connections: "500+", bio: "Open to freelance opportunities" },
    twitter: { username: "@saakshi_tech", followers: "850", bio: "Tech enthusiast & problem solver" },
    medium: { username: "@saakshi", followers: "340", bio: "Writing about web development" },
    github: { username: "saakshi-k", repos: "42", bio: "Building cool projects" },
    leetcode: { username: "saakshi_codes", solved: "250+", bio: "Solving DSA problems daily" },
    discord: { username: "saakshi#1234", server: "Dev Community", bio: "Always ready to help!" },
    instagram: { username: "@saakshi.codes", followers: "2.1K", bio: "Coding journey & lifestyle" }
  };
  
  const skills = [
    "JavaScript",
    "HTML/CSS",
    "Python",
    "ReactJs",
    "NodeJs",
    "Frontend development",
  ];
  const languages = ["English", "Hindi", "Marathi"];

  return (
    <div className="px-10 pt-12 bg-slate-50 h-full border-3 border-slate-200 flex flex-col">
      {/* Main content */}
      <div className="flex-1">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold">Saakshi</h1>
        <p className="text-gray-700 mb-4">
          Full Stack Developer | Open Source Enthusiast
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">ABOUT</p>
        <p>
          Hello, I am Saakshi Kobarne, interested in learning fullstack and open
          to freelancing projects
        </p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">CONTACT</p>
        <p>email: saakshi@mail.com</p>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">SKILLS</p>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-50 border-2 border-slate-200 px-2 py-1 rounded-xl text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-slate-900 mt-8 mb-2 font-semibold text-sm">
          LANGUAGES
        </p>
        <div className="flex flex-wrap gap-1">
          {languages.map((language) => (
            <span
              key={language}
              className="bg-gray-50 border-2 border-slate-200 px-2 py-1 rounded-xl text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom box */}
      <div className="mt-auto bg-slate-200 p-4 -ml-8 -mr-8 mb-2 rounded-lg">
        <div className="flex justify-between items-center px-2">
          <div 
            className="relative"
            onMouseEnter={() => setHoveredSocial('x')}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <img src={x} alt="X" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            {hoveredSocial === 'x' && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 z-10">
                <p className="font-semibold text-sm">{socialProfiles.x.username}</p>
                <p className="text-xs text-gray-600 mt-1">{socialProfiles.x.followers} followers</p>
                <p className="text-xs text-gray-700 mt-2">{socialProfiles.x.bio}</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setHoveredSocial('linkedin')}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            {hoveredSocial === 'linkedin' && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 z-10">
                <p className="font-semibold text-sm">{socialProfiles.linkedin.username}</p>
                <p className="text-xs text-gray-600 mt-1">{socialProfiles.linkedin.connections} connections</p>
                <p className="text-xs text-gray-700 mt-2">{socialProfiles.linkedin.bio}</p>
              </div>
            )}
          </div>


          <div 
            className="relative"
            onMouseEnter={() => setHoveredSocial('medium')}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <img src={medium} alt="Medium" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            {hoveredSocial === 'medium' && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 z-10">
                <p className="font-semibold text-sm">{socialProfiles.medium.username}</p>
                <p className="text-xs text-gray-600 mt-1">{socialProfiles.medium.followers} followers</p>
                <p className="text-xs text-gray-700 mt-2">{socialProfiles.medium.bio}</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setHoveredSocial('github')}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <img src={github} alt="GitHub" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            {hoveredSocial === 'github' && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 z-10">
                <p className="font-semibold text-sm">{socialProfiles.github.username}</p>
                <p className="text-xs text-gray-600 mt-1">{socialProfiles.github.repos} repositories</p>
                <p className="text-xs text-gray-700 mt-2">{socialProfiles.github.bio}</p>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setHoveredSocial('leetcode')}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <img src={leetcode} alt="LeetCode" className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
            {hoveredSocial === 'leetcode' && (
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border-2 border-slate-300 rounded-lg p-3 shadow-lg w-48 z-10">
                <p className="font-semibold text-sm">{socialProfiles.leetcode.username}</p>
                <p className="text-xs text-gray-600 mt-1">{socialProfiles.leetcode.solved} problems solved</p>
                <p className="text-xs text-gray-700 mt-2">{socialProfiles.leetcode.bio}</p>
              </div>
            )}
          </div>

        </div>
      </div> 
    </div>
  );
}

export default BioSection;