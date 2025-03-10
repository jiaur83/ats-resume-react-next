"use client"

import { useState } from "react"
import Image from "next/image"

export default function Resume() {
  const [showControls, setShowControls] = useState(true)
  const [atsMode, setAtsMode] = useState(false)

  // Frontend skills data
  const frontendSkills = ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS"]

  // Tools & methodologies data
  const toolsSkills = ["Git", "GitHub", "Responsive Design", "RESTful APIs", "Agile/Scrum", "UI/UX"]

  // Projects data
  const projects = [
    {
      title: "HRM Application",
      description:
        "Developed a comprehensive Human Resource Management system using React.js and Next.js with RESTful API integration.",
      tags: ["React.js", "Next.js", "API"],
    },
    {
      title: "Order Management System",
      description:
        "Built a responsive order tracking and management platform with real-time updates using React.js and WebSockets.",
      tags: ["React.js", "WebSockets", "Real-time"],
    },
    {
      title: "Blood Group Store",
      description: "Created a blood donation management application with user authentication and database integration.",
      tags: ["Authentication", "Database", "React.js"],
    },
    {
      title: "Course Management",
      description:
        "Designed and implemented a learning management system with content delivery and progress tracking features.",
      tags: ["Next.js", "State Management", "UI/UX"],
    },
    {
      title: "Government Storage",
      description: "Developed a secure document storage and retrieval system with role-based access control.",
      tags: ["Security", "Authentication", "Storage"],
    },
    {
      title: "Attendance Management",
      description: "Built an automated attendance tracking system with reporting and analytics features.",
      tags: ["Analytics", "Reporting", "Dashboard"],
    },
  ]

  // const handlePrint = () => {
  //   setShowControls(false)
  //   setTimeout(() => {
  //     window.print()
  //     setShowControls(true)
  //   }, 100)
  // }

  const toggleATSMode = () => {
    setAtsMode(!atsMode)
  }

  return (
    <div
      className={`bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 ${
        atsMode ? "ats-mode" : ""
      }`}
    >
      {showControls && (
        <div className="p-4 print:hidden">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            {/* <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print / Save as PDF
            </button> */}

            <button
              onClick={toggleATSMode}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                atsMode
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {atsMode ? "ATS Mode: ON" : "ATS Mode: OFF"}
            </button>
          </div>
        </div>
      )}

      <div
        className={`p-6 md:p-8 space-y-8 @print:p-6 ${
          atsMode ? "max-w-[800px] mx-auto" : ""
        }`}
      >
        {/* Header / Contact Info with Profile Image */}
        <header
          className={`${
            atsMode ? "flex flex-col" : "flex flex-col md:flex-row"
          } items-center gap-6 pb-6 border-b border-gray-200`}
        >
          {!atsMode && (
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
              <Image
                src="https://wallpapers.com/images/high/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.webp"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          )}
          <div
            className={`flex-1 ${
              atsMode ? "text-left" : "text-center md:text-left"
            }`}
          >
            <h1
              className={
                atsMode
                  ? "text-4xl font-bold text-gray-900"
                  : "text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              }
            >
              John Doe
            </h1>
            <p className="text-xl text-gray-600 mt-1 font-semibold">
              Front-End Developer
            </p>

            <div
              className={`mt-4 ${
                atsMode
                  ? "flex flex-col gap-1"
                  : "flex flex-col md:flex-row flex-wrap gap-y-2 gap-x-4"
              } text-sm ${atsMode ? "" : "justify-center md:justify-start"}`}
            >
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>email@example.com</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>linkedin.com/in/johndoe</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>github.com/johndoe</span>
              </div>
              <div className="flex items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section
          className={
            atsMode
              ? "bg-white"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm"
          }
        >
          <h2
            className={`text-xl font-bold text-gray-900 border-b ${
              atsMode ? "border-gray-200" : "border-blue-200"
            } pb-2 mb-3 flex items-center gap-2`}
          >
            {!atsMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            )}
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Front-end developer with expertise in React.js, Next.js, JavaScript,
            HTML, and CSS. Experienced in building responsive, user-friendly web
            applications with a focus on performance and accessibility. Proven
            track record of delivering high-quality projects on time and
            collaborating effectively with cross-functional teams.
          </p>
        </section>

        {/* Technical Skills */}
        <section
          className={
            atsMode
              ? "bg-white"
              : "bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          }
        >
          <h2
            className={`text-xl font-bold text-gray-900 border-b ${
              atsMode ? "border-gray-200" : "border-blue-200"
            } pb-2 mb-4 flex items-center gap-2`}
          >
            {!atsMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            )}
            Technical Skills
          </h2>
          <div
            className={atsMode ? "" : "grid grid-cols-1 md:grid-cols-2 gap-6"}
          >
            <div
              className={
                atsMode
                  ? "mb-4"
                  : "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg"
              }
            >
              <h3
                className={`font-semibold ${
                  atsMode ? "text-gray-800" : "text-blue-700"
                } mb-2`}
              >
                Frontend Development
              </h3>
              <div className={atsMode ? "" : "flex flex-wrap gap-2"}>
                {atsMode ? (
                  <p className="text-gray-700">{frontendSkills.join(", ")}</p>
                ) : (
                  frontendSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>
            <div
              className={
                atsMode
                  ? ""
                  : "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg"
              }
            >
              <h3
                className={`font-semibold ${
                  atsMode ? "text-gray-800" : "text-blue-700"
                } mb-2`}
              >
                Tools & Methodologies
              </h3>
              <div className={atsMode ? "" : "flex flex-wrap gap-2"}>
                {atsMode ? (
                  <p className="text-gray-700">{toolsSkills.join(", ")}</p>
                ) : (
                  toolsSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm border border-blue-100"
                    >
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section
          className={
            atsMode
              ? "bg-white"
              : "bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          }
        >
          <h2
            className={`text-xl font-bold text-gray-900 border-b ${
              atsMode ? "border-gray-200" : "border-blue-200"
            } pb-2 mb-4 flex items-center gap-2`}
          >
            {!atsMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            )}
            Work Experience
          </h2>

          <div
            className={
              atsMode ? "mb-6" : "mb-6 relative pl-6 border-l-2 border-blue-200"
            }
          >
            {!atsMode && (
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            )}
            <div
              className={`${
                atsMode ? "flex flex-col" : "flex justify-between items-start"
              }`}
            >
              <h3
                className={`font-bold ${
                  atsMode ? "text-gray-900" : "text-blue-700"
                }`}
              >
                Front-End Developer
              </h3>
              <div
                className={
                  atsMode ? "flex justify-between items-center mb-2" : ""
                }
              >
                <p
                  className={`${
                    atsMode ? "font-medium" : "italic font-medium mt-1"
                  } text-gray-600`}
                >
                  Tech Solutions Inc.
                </p>
                <span
                  className={
                    atsMode
                      ? "text-sm text-gray-600"
                      : "text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1"
                  }
                >
                  {!atsMode && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  )}
                  Jan 2021 - Present
                </span>
              </div>
            </div>
            <ul
              className={`${
                atsMode ? "list-disc pl-5" : "list-disc list-inside"
              } mt-3 text-gray-700 space-y-2`}
            >
              <li>
                Developed and maintained multiple web applications using
                React.js and Next.js
              </li>
              <li>
                Implemented responsive designs using TailwindCSS, ensuring
                cross-browser compatibility
              </li>
              <li>
                Collaborated with backend developers to integrate RESTful APIs
              </li>
              <li>
                Improved application performance by 30% through code
                optimization
              </li>
            </ul>
          </div>

          <div
            className={
              atsMode ? "" : "relative pl-6 border-l-2 border-blue-200"
            }
          >
            {!atsMode && (
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            )}
            <div
              className={`${
                atsMode ? "flex flex-col" : "flex justify-between items-start"
              }`}
            >
              <h3
                className={`font-bold ${
                  atsMode ? "text-gray-900" : "text-blue-700"
                }`}
              >
                Junior Web Developer
              </h3>
              <div
                className={
                  atsMode ? "flex justify-between items-center mb-2" : ""
                }
              >
                <p
                  className={`${
                    atsMode ? "font-medium" : "italic font-medium mt-1"
                  } text-gray-600`}
                >
                  Digital Creations Co.
                </p>
                <span
                  className={
                    atsMode
                      ? "text-sm text-gray-600"
                      : "text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1"
                  }
                >
                  {!atsMode && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  )}
                  Jun 2019 - Dec 2020
                </span>
              </div>
            </div>
            <ul
              className={`${
                atsMode ? "list-disc pl-5" : "list-disc list-inside"
              } mt-3 text-gray-700 space-y-2`}
            >
              <li>
                Assisted in developing web interfaces using HTML, CSS, and
                JavaScript
              </li>
              <li>
                Participated in code reviews and implemented feedback from
                senior developers
              </li>
              <li>Contributed to the development of responsive web designs</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section
          className={
            atsMode
              ? "bg-white"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm"
          }
        >
          <h2
            className={`text-xl font-bold text-gray-900 border-b ${
              atsMode ? "border-gray-200" : "border-blue-200"
            } pb-2 mb-4 flex items-center gap-2`}
          >
            {!atsMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            )}
            Projects
          </h2>

          <div
            className={
              atsMode ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 gap-4"
            }
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={
                  atsMode
                    ? ""
                    : "bg-white p-4 rounded-lg shadow-sm border border-blue-100"
                }
              >
                <h3
                  className={`font-bold ${
                    atsMode ? "text-gray-900" : "text-blue-700"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {project.description}
                </p>
                {atsMode ? (
                  <p className="text-gray-600 text-sm mt-1">
                    Technologies: {project.tags.join(", ")}
                  </p>
                ) : (
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          className={
            atsMode
              ? "bg-white"
              : "bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          }
        >
          <h2
            className={`text-xl font-bold text-gray-900 border-b ${
              atsMode ? "border-gray-200" : "border-blue-200"
            } pb-2 mb-4 flex items-center gap-2`}
          >
            {!atsMode && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            )}
            Education
          </h2>
          <div className={atsMode ? "" : "flex justify-between items-start"}>
            <div>
              <h3
                className={`font-bold ${
                  atsMode ? "text-gray-900" : "text-blue-700"
                }`}
              >
                BSc in Computer Science and Engineering
              </h3>
              <div
                className={atsMode ? "flex justify-between items-center" : ""}
              >
                <p className="text-gray-600 italic mt-1">University Name</p>
                {atsMode && (
                  <p className="text-gray-600 text-sm">2018 - 2021</p>
                )}
              </div>
              <p className="text-gray-700 mt-2">
                Relevant coursework: Data Structures, Algorithms, Web
                Development, Database Systems
              </p>
            </div>
            {!atsMode && (
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                2018 - 2021
              </span>
            )}
          </div>
          <div
            className={
              atsMode ? "mt-10" : "flex justify-between items-start mt-10"
            }
          >
            <div>
              <h3
                className={`font-bold ${
                  atsMode ? "text-gray-900" : "text-blue-700"
                }`}
              >
                Diploma in Computer Science and Engineering
              </h3>
              <div
                className={atsMode ? "flex justify-between items-center" : ""}
              >
                <p className="text-gray-600 italic mt-1">College Name</p>
                {atsMode && (
                  <p className="text-gray-600 text-sm">2016 - 2017</p>
                )}
              </div>
              <p className="text-gray-700 mt-2">
                Relevant coursework: Data Structures, Algorithms, Web
                Development, Database Systems
              </p>
            </div>
            {!atsMode && (
              <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                2016 - 2017
              </span>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

