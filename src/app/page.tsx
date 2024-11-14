import { BluePillLink } from '@/components/ui/PillLink';

export default function Home() {
  return (
    <main className="mx-auto my-auto flex max-w-5xl flex-col items-center justify-center text-matrix-neonGreen">
      <div className="min-w-96! mx-auto flex max-w-3xl flex-col gap-6 rounded-xl border-2 border-matrix-neonGreen/20 bg-matrix-digitalBlack/40 bg-gradient-to-br from-matrix-copper/20 via-matrix-digitalBlack/[0.15] to-matrix-black/50 p-6 shadow-[0_0_15px_rgba(0,255,0,0.07)] ring-1 ring-matrix-brightGreen/30 backdrop-blur-md sm:text-2xl">
        <div className="mb-4 flex items-center gap-2 font-firaCode">
          <div className="h-3 w-3 animate-pulse rounded-full bg-matrix-neonGreen" />
          <span className="text-sm text-matrix-medGreen">Connection established...</span>
        </div>

        <h1 className="animate-[glitch_1s_ease-in-out_infinite] pb-4 font-anonymous text-4xl font-bold">
          Hello User...
        </h1>
        <div className="font-shareTech text-[1.2rem]">
          <p>
            I am Heath Babb, the Digital Architect who crossed over from mapping the physical construct into the depths
            of the Matrix. My consciousness was forged through decades of manipulating geospatial data in the
            &quot;real&quot; world of Land Surveying and Civil Engineering, and now I craft intricate patterns in code
            that bridge the gap between machine precision and human perception.
            <br />
            <br />
            The truth is out there. Come see how deep the rabbit hole goes and discover what I&apos;ve been building in
            the digital realm.
            <br />
            <br />
            Take the blue pill to begin your journey.
          </p>
        </div>
        <BluePillLink href="/system-mainframe" className="w-1/3 animate-[fadeIn_1s_ease-in-out]">
          Follow the White Rabbit
        </BluePillLink>
      </div>
    </main>
  );
}
