import React from "react";
import { educationData } from "@/config/eduConfig";

export const metadata = {
  title: "Training - Education",
};

export default function Education() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <main className="my-auto mb-16 flex w-full max-w-6xl flex-col items-center justify-center rounded-lg border border-matrix-medGreen bg-matrix-black/80 p-8 shadow-lg">
        {/* Header Section */}
        <div className="mb-8 w-full border-b border-matrix-medGreen">
          <div className="flex items-center justify-between">
            <h1 className="mb-4 font-anonymous text-4xl tracking-wider text-matrix-neonGreen">
              EDUCATIONAL CONSTRUCT RECORD
            </h1>
            <div className="animate-pulse">
              <div className="h-4 w-4 rounded-full bg-matrix-neonGreen"></div>
            </div>
          </div>
          <p className="mb-4 font-shareTech text-xl text-matrix-medGreen">
            System Training & Knowledge Matrix
          </p>
        </div>

        {/* Education Section */}
        <div className="w-full space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="rounded border border-matrix-medGreen bg-matrix-darkGreen/20 p-4"
            >
              <div className="mb-2 flex items-start justify-between">
                <h3 className="font-shareTech text-xl text-matrix-neonGreen">
                  [{edu.node} NODE]: {edu.school}
                </h3>
                <span className="font-firaCode text-sm text-matrix-medGreen">
                  {edu.status || edu.years}
                </span>
              </div>
              <p className="mb-2 font-roboto text-sm text-matrix-medGreen">
                Program Matrix: {edu.program} | {edu.location}
              </p>
              <p className="text-justify font-shareTech text-sm leading-relaxed text-white">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 w-full border-t border-matrix-medGreen pt-4">
          <p className="text-center font-firaCode text-sm text-matrix-medGreen">
            [END OF EDUCATIONAL MATRIX]
          </p>
        </div>
      </main>
    </div>
  );
}
