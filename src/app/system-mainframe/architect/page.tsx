
export default function SystematicBioAnalysis() {
  return (
    <main className="mx-auto my-16 flex max-w-7xl flex-col items-center justify-center text-white font-shareTech text-base text-justify">
      <div className="mx-auto flex w-4/5! max-w-6xl flex-col gap-6 rounded-xl border-2 border-matrix-neonGreen bg-matrix-black p-6">

      <div className="flex flex-col w-full text-white font-shareTech">
            <div className="border border-matrix-medGreen p-6 mb-8">
                <h1 className="text-4xl font-anonymous mb-2 text-matrix-neonGreen font-bold">
                    System Architect: Heath Babb
                </h1>
                <p className="text-white italic font-roboto">
                    Web Developer | Full-Stack Engineer | Technical Innovator
                </p>
            </div>

            <div className="grid gap-8">
                <section className="border border-matrix-medGreen p-4">
                <h2 className="text-2xl font-anonymous text-matrix-medGreen mb-4">
                    Core System Architecture
                </h2>
                <p className="text-white">
                    My matrix is built on three foundational pillars: my Christian faith, our family farm in Campobello, SC, and my mastery of technology. As an active member of Motlow Creek Baptist Church, my connection to Jesus Christ remains the central code that guides my development and drives my mission to serve others through digital innovation.
                </p>
                </section>

                <section className="border border-matrix-medGreen p-4">
                <h2 className="text-2xl font-anonymous text-matrix-medGreen mb-4">
                    Early System Integration
                </h2>
                <p className="mb-6">
                    From age six, I initialized my training in complex systems alongside my father on our family farm. This wasn&apos;t just mere agricultural work - it was an immersion in resource management, mechanical operations, and community interconnection. These early interfaces with farm equipment and systems developed both my technical abilities and my understanding of agricultural communities&apos; core needs - insights that continue to drive my technological solutions today.
                </p>
                
                <div className="space-y-6">
                    <div className="border-l-4 border-matrix-neonGreen pl-4">
                    <h3 className="text-xl text-matrix-medGreen mb-2">Educational Protocols</h3>
                    <p>At Spartanburg Community College, I completed specialized training in Machine Tool Technology and Civil Engineering Technology. This formal education, combined with my practical agricultural experience, led me to master geospatial technology. For two decades, I operated as a Land Survey CAD Technician and CAD Manager, perfecting precision mapping and data management systems.</p>
                    </div>

                    <div className="border-l-4 border-matrix-neonGreen pl-4">
                    <h3 className="text-xl text-matrix-medGreen mb-2">System Evolution</h3>
                    <p>My transition into web development was driven by recognizing technology&apos;s potential to transform traditional industries. While managing complex surveying projects and implementing technical solutions, I discovered how web technologies could revolutionize established systems. I&apos;ve expanded my capabilities through comprehensive full-stack development training with Codecademy, freeCodeCamp, and The Odin Project; actively building applications that solve real-world challenges.</p>
                    </div>
                </div>
                </section>

                <section className="border border-matrix-medGreen p-4">
                <h2 className="text-2xl font-anonymous text-matrix-medGreen mb-4">
                    Technical Arsenal
                </h2>
                <ul className="space-y-2">
                    {[
                    'React and Next.js for dynamic frontend systems',
                    'TypeScript for enhanced code reliability',
                    'Node.js and Express for robust backend architecture',
                    'Tailwind CSS and Shadcn/UI for modern interface design'
                    ].map((tech, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-matrix-medGreen mr-2">&gt;</span>
                        <span>{tech}</span>
                    </li>
                    ))}
                </ul>
                </section>

                <section className="border border-matrix-medGreen p-4">
                <h2 className="text-2xl font-anonymous text-matrix-medGreen mb-4">
                    Primary Mission Objectives
                </h2>
                <div className="space-y-6">
                    <div>
                    <h3 className="text-xl text-matrix-medGreen mb-2">Agricultural Systems Innovation</h3>
                    <p>I focus on creating technological solutions for agricultural communities, especially family-owned farms. My mission is developing tools and applications that help these operations thrive in the modern era while maintaining their commitment to environmental stewardship. This includes developing systems for resource management, crop monitoring, and sustainable farming practices that blend traditional wisdom with modern technology.</p>
                    </div>
                    <div>
                    <h3 className="text-xl text-matrix-medGreen mb-2">Faith-Based Technology Integration</h3>
                    <p>As a technical consultant for my local Baptist church, I&apos;ve implemented solutions that enhance ministry and community outreach. From audio-visual systems to web presence and digital engagement tools, I&apos;m dedicated to helping churches leverage technology effectively in their mission.</p>
                    </div>
                </div>
                </section>
            </div>
        </div>

      </div>
    </main>
  );
}