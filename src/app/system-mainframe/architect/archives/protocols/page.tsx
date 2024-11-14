import React from 'react';

export default function Skills() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <main className="my-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-lg border border-matrix-medGreen bg-matrix-black/80 p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 w-full border-b border-matrix-medGreen">
          <h1 className="mb-4 font-anonymous text-4xl tracking-wider text-matrix-neonGreen">
            SYSTEM CAPABILITY MATRIX
          </h1>
          <p className="mb-4 font-shareTech text-sm text-matrix-medGreen">[Accessing Operational Parameters...]</p>
        </div>

        {/* Technical Skills Section */}
        <div className="w-full space-y-8">
          <div className="mb-6 w-full border-b border-matrix-medGreen">
            <h2 className="mb-4 font-shareTech text-2xl text-matrix-neonGreen">[TECHNICAL PROTOCOLS]</h2>
          </div>

          {/* Web Development Section */}
          <div className="rounded border border-matrix-medGreen bg-matrix-darkGreen/20 p-4">
            <h3 className="mb-4 font-shareTech text-xl text-matrix-neonGreen">
              Digital Architecture & System Development
            </h3>
            <div className="space-y-4 text-white">
              <div>
                <span className="font-firaCode text-matrix-medGreen">Frontend Matrix:</span>
                <p className="ml-4 font-shareTech">HTML5 | CSS3 | JavaScript | React | Next.js | Tailwind CSS</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Backend Systems:</span>
                <p className="ml-4 font-shareTech">Node.js | Express | StrapiCMS</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Data Storage Protocols:</span>
                <p className="ml-4 font-shareTech">MongoDB | Xata | Neon | PostgreSQL | MySQL</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Version Control Matrix:</span>
                <p className="ml-4 font-shareTech">Git | GitHub</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Cloud Infrastructure:</span>
                <p className="ml-4 font-shareTech">DigitalOcean | AWS S3 | Netligy | Vercel | Heroku | Hostinger</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">System Cores:</span>
                <p className="ml-4 font-shareTech">Linux (Ubuntu) | macOS | Windows</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Design Interfaces:</span>
                <p className="ml-4 font-shareTech">
                  Figma | Affinity Systems | Adobe Creative Cloud | Open-Source Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Geospatial Section */}
          <div className="rounded border border-matrix-medGreen bg-matrix-darkGreen/20 p-4">
            <h3 className="mb-4 font-shareTech text-xl text-matrix-neonGreen">Geospatial Systems & Data Processing</h3>
            <div className="space-y-4 text-white">
              <div>
                <span className="font-firaCode text-matrix-medGreen">CAD Interface Protocols:</span>
                <p className="ml-4 font-shareTech">AutoCAD | Civil 3D | Trimble Business Center | Carlson</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">3D Modeling Systems:</span>
                <p className="ml-4 font-shareTech">
                  Blender | SketchUp | Revit | InfraWorks | Solidworks | Inventor | Terramodel
                </p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Data Processing Matrix:</span>
                <p className="ml-4 font-shareTech">DJI Terra | TerraSolid | TerraScan | Pix4D | TBC</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Resource Management:</span>
                <p className="ml-4 font-shareTech">Bid2Win | P6 Scheduling | Excel | Microsoft Projects</p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Project Control Systems:</span>
                <p className="ml-4 font-shareTech">
                  Agile Methodologies | Scrum | Asana | Jira | Trello | Notion | Microsoft Office Suite
                </p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Field Interface Hardware:</span>
                <p className="ml-4 font-shareTech">
                  GNSS (Trimble & Carlson) | Robotic Total Stations (Trimble, Carlson, & Lieca) | Terrestrial LiDAR |
                  UAS LiDAR and Photogrammetry Sensors
                </p>
              </div>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="mb-6 mt-12 w-full border-b border-matrix-medGreen">
            <h2 className="mb-4 font-shareTech text-2xl text-matrix-neonGreen">[OPERATIONAL PROTOCOLS]</h2>
          </div>

          {/* Project Management */}
          <div className="rounded border border-matrix-medGreen bg-matrix-darkGreen/20 p-4">
            <h3 className="mb-4 font-shareTech text-xl text-matrix-neonGreen">Project Control & System Management</h3>
            <div className="grid grid-cols-2 gap-4 text-white">
              <div>
                <span className="font-firaCode text-matrix-medGreen">Core Protocols:</span>
                <p className="ml-4 font-shareTech">
                  • Agile Methodologies
                  <br />
                  • Project Planning and Execution
                  <br />
                  • Timeline Management
                  <br />
                  • Budget Oversight
                  <br />
                  • Risk Assessment
                  <br />• Quality Control
                </p>
              </div>
              <div>
                <span className="font-firaCode text-matrix-medGreen">Interface Protocols:</span>
                <p className="ml-4 font-shareTech">
                  • Strategic Planning & Team Leadership
                  <br />
                  • Workflow Optimization & Documentation
                  <br />
                  • Training & Resource Allocation
                  <br />
                  • Technical Consulting & Problem Resolution
                  <br />
                  • Process Optimization & Service Delivery
                  <br />• Stakeholder Management & Collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 w-full border-t border-matrix-medGreen pt-4">
          <p className="text-center font-firaCode text-sm text-matrix-medGreen">[END OF CAPABILITY MATRIX]</p>
        </div>
      </main>
    </div>
  );
}
