export const metadata = {
  title: "Architect Profile",
  description:
    "Personal bio of Heath Babb in a matrix style theme based on the character of The Architect",
};

export default function ArchitectProfile() {
  return (
    <main className="mx-auto my-16 flex max-w-7xl flex-col items-center justify-center text-justify font-shareTech text-base text-white">
      <div className="w-4/5! mx-auto flex max-w-6xl flex-col gap-6 rounded-xl border-2 border-matrix-neonGreen bg-matrix-black p-6">
        <div className="flex w-full flex-col font-shareTech text-white">
          <div className="mb-8 border border-matrix-medGreen p-6">
            <h1 className="mb-2 font-anonymous text-4xl font-bold text-matrix-neonGreen">
              System Architect: Heath Babb
            </h1>
            <p className="font-roboto italic text-white">
              Web Developer | Full-Stack Engineer | Technical Innovator
            </p>
          </div>

          <div className="grid gap-8">
            <section className="border border-matrix-medGreen p-4">
              <h2 className="mb-4 font-anonymous text-2xl text-matrix-medGreen">
                Core System Architecture
              </h2>
              <p className="text-white">
                My matrix is built on three foundational pillars: my Christian
                faith, our family farm in Campobello, SC, and my mastery of
                technology. As an active member of Motlow Creek Baptist Church,
                my connection to Jesus Christ remains the central code that
                guides my development and drives my mission to serve others
                through digital innovation.
              </p>
            </section>

            <section className="border border-matrix-medGreen p-4">
              <h2 className="mb-4 font-anonymous text-2xl text-matrix-medGreen">
                Early System Integration
              </h2>
              <p className="mb-6">
                From age six, I initialized my training in complex systems
                alongside my father on our family farm. This wasn&apos;t just
                mere agricultural work - it was an immersion in resource
                management, mechanical operations, and community
                interconnection. These early interfaces with farm equipment and
                systems developed both my technical abilities and my
                understanding of agricultural communities&apos; core needs -
                insights that continue to drive my technological solutions
                today.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-matrix-neonGreen pl-4">
                  <h3 className="mb-2 text-xl text-matrix-medGreen">
                    Educational Protocols
                  </h3>
                  <p>
                    At Spartanburg Community College, I completed specialized
                    training in Machine Tool Technology and Civil Engineering
                    Technology. This formal education, combined with my
                    practical agricultural experience, led me to master
                    geospatial technology. For two decades, I operated as a Land
                    Survey CAD Technician and CAD Manager, perfecting precision
                    mapping and data management systems.
                  </p>
                </div>

                <div className="border-l-4 border-matrix-neonGreen pl-4">
                  <h3 className="mb-2 text-xl text-matrix-medGreen">
                    System Evolution
                  </h3>
                  <p>
                    My transition into web development was driven by recognizing
                    technology&apos;s potential to transform traditional
                    industries. While managing complex surveying projects and
                    implementing technical solutions, I discovered how web
                    technologies could revolutionize established systems.
                    I&apos;ve expanded my capabilities through comprehensive
                    full-stack development training with Codecademy,
                    freeCodeCamp, and The Odin Project; actively building
                    applications that solve real-world challenges.
                  </p>
                </div>
              </div>
            </section>

            <section className="border border-matrix-medGreen p-4">
              <h2 className="mb-4 font-anonymous text-2xl text-matrix-medGreen">
                Technical Arsenal
              </h2>
              <ul className="space-y-2">
                {[
                  "React and Next.js for dynamic frontend systems",
                  "TypeScript for enhanced code reliability",
                  "Node.js and Express for robust backend architecture",
                  "Tailwind CSS and Shadcn/UI for modern interface design",
                ].map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-matrix-medGreen">&gt;</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-matrix-medGreen p-4">
              <h2 className="mb-4 font-anonymous text-2xl text-matrix-medGreen">
                Primary Mission Objectives
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl text-matrix-medGreen">
                    Agricultural Systems Innovation
                  </h3>
                  <p>
                    I focus on creating technological solutions for agricultural
                    communities, especially family-owned farms. My mission is
                    developing tools and applications that help these operations
                    thrive in the modern era while maintaining their commitment
                    to environmental stewardship. This includes developing
                    systems for resource management, crop monitoring, and
                    sustainable farming practices that blend traditional wisdom
                    with modern technology.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl text-matrix-medGreen">
                    Faith-Based Technology Integration
                  </h3>
                  <p>
                    As a technical consultant for my local Baptist church,
                    I&apos;ve implemented solutions that enhance ministry and
                    community outreach. From audio-visual systems to web
                    presence and digital engagement tools, I&apos;m dedicated to
                    helping churches leverage technology effectively in their
                    mission.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
