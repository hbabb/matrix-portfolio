import SignatureLogo from "@/app/assets/images/Heath Babb.svg";
import Image from "next/image";
import Portfolio from "@/app/assets/images/HeathBabbPortfolio-landing.png";
import Mcbc from "@/app/assets/images/mcbc-landing.png";
import OdinLogo from "@/app/assets/images/TheOdinProject-Logo.png";
import OdinRecipes from "@/app/assets/images/OdinRecipes-Landing.png";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description:
    "Odin Landing Page project displaying current web development projects by Heath Babb",
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-matrix-digitalBlack font-shareTech text-base">
      {/* Header */}
      <header className="mx-auto mb-6 flex w-4/5 flex-row items-center justify-between border-b-2 border-matrix-neonGreen px-8 py-2">
        <div className="ml-8 h-auto w-1/3 items-center justify-center">
          <figure className="text-center text-base font-normal text-matrix-neonGreen">
            <a
              href="/portfolio"
              target="_blank"
              className="align-middle transition-opacity hover:opacity-80"
            >
              <Image
                src={SignatureLogo}
                alt="signature logo"
                width={240}
                height={80}
                priority
                className="ml-32 transition-transform hover:scale-105"
              />
            </a>
            <figcaption className="text-matrix-medGreen">
              This page was created by Heath Babb
              <br />
              for The Odin Project: Landing Page CSS Project
            </figcaption>
          </figure>
        </div>

        <nav>
          <ul className="mr-8 flex">
            <li className="mr-24 list-none">
              <a
                href="#sign-up"
                className="text-base font-normal text-matrix-medGreen transition-colors hover:text-matrix-brightGreen"
              >
                Sign Up for The Odin Project
              </a>
            </li>
            <li className="mr-24 list-none">
              <a
                href="#projects"
                className="text-base font-normal text-matrix-medGreen transition-colors hover:text-matrix-brightGreen"
              >
                Current Projects
              </a>
            </li>
            <li className="list-none">
              <a
                href="#contact-form"
                className="text-base font-normal text-matrix-medGreen transition-colors hover:text-matrix-brightGreen"
              >
                Contact Form
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="w-full">
        {/* Hero Section */}
        <section className="mx-auto flex w-full flex-row items-center justify-between bg-matrix-black px-8 py-2">
          <div className="mx-20 mb-6 flex w-1/2 flex-col">
            <h1 className="mb-4 pb-5 text-left font-anonymous text-5xl font-black text-matrix-neonGreen [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
              The Odin Project:
              <br />
              Landing Page CSS Project
            </h1>
            <p className="mb-4 pb-5 text-justify font-shareTech text-lg font-light text-matrix-medGreen">
              Welcome to my development journey! This landing page, originally a
              project from The Odin Project&apos;s Foundations Course, now
              serves as the gateway to my web development portfolio. Below,
              you&apos;ll discover my progression from my first HTML project to
              my current work, including my comprehensive portfolio and the
              website I am developing for my church. I encourage you to explore
              my portfolio to learn more about my growth as a developer and see
              how The Odin Project has shaped my web development skills. Ready
              to see my transformation from student to developer? Let&apos;s
              dive in!
              <br />
              <br />
              If you are interested in The Odin Project, click the button below
              to sign up for the course! Best thing is, it&apos;s free!
            </p>
            <button id="sign-up" className="mx-auto w-1/4">
              <Link
                href="https://www.theodinproject.com/sign_up"
                target="_blank"
                className="inline-block rounded-lg bg-matrix-medGreen px-4 py-2 font-semibold text-matrix-black transition-colors hover:bg-matrix-neonGreen"
              >
                Sign Up
              </Link>
            </button>
          </div>

          <div className="mx-32 mb-6 flex h-60 w-1/2 items-center justify-center">
            <figure>
              <Image
                src={OdinLogo}
                alt="The Odin Project Logo"
                width={400}
                height={300}
                priority
                className="mb-6 h-auto w-full rounded-lg"
              />
              <figcaption className="text-center text-matrix-medGreen">
                The Odin Project Logo | courtesy of The Odin Project
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mx-auto flex w-full flex-col items-center justify-between bg-matrix-digitalBlack px-8 py-2"
        >
          <h2 className="mb-4 font-anonymous text-4xl font-black text-matrix-neonGreen [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
            Current Projects by Heath Babb
          </h2>
          <p className="mb-4 pb-5 text-lg font-light text-matrix-medGreen">
            click an image below to view the project
          </p>

          <div className="mx-auto flex w-full flex-row items-center justify-between px-8 py-2">
            {[
              {
                src: OdinRecipes,
                href: "https://hbabb.github.io/odin-recipes/index.html",
                alt: "Odin Recipes Landing Page",
                caption:
                  "The Odin Projects: 1st foundational project focusing on HTML created by Heath Babb",
              },
              {
                src: Mcbc,
                href: "https://motlowcreekministries.com/",
                alt: "Motlow Creek Ministries Landing Page",
                caption:
                  "Motlow Creek Ministries Landing Page created by Heath Babb in collaboration with Motlow Creek Baptist Church",
              },
              {
                src: Portfolio,
                href: "/portfolio",
                alt: "Heath Babb Landing Page",
                caption: "Personal website and portfolio created by Heath Babb",
              },
            ].map((project, index) => (
              <figure
                key={index}
                className="mx-20 mb-6 flex w-1/3 flex-col items-center text-center"
              >
                <Link
                  href={project.href}
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="mb-6 h-auto w-full rounded-2xl border-2 border-matrix-medGreen"
                  />
                </Link>
                <figcaption className="w-3/4 text-center text-sm font-light text-matrix-medGreen">
                  {project.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mx-auto w-4/5 items-center justify-center rounded-2xl bg-matrix-emeraldGreen p-2">
            <blockquote className="mx-auto flex w-3/5 flex-col justify-center">
              <p className="mb-4 text-4xl font-light italic text-matrix-neonGreen">
                &quot;Wise is he who knows he does not know;
                <br />
                the path to mastery is forged with
                <br />
                patience and persistence.&quot;
              </p>
              <cite className="mr-20 pb-4 text-right text-3xl font-bold text-matrix-neonGreen">
                -- Odin, All-Father (Alföðr)
                <br />
                <span className="flex flex-col text-base font-light text-matrix-medGreen">
                  God of Wisdom
                  <br />
                  from Norse Mythology
                </span>
              </cite>
              <span className="italic text-matrix-medGreen">
                Inspired by Norse mythology, from the teachings of the Hávamál
                in the Poetic Edda.
              </span>
            </blockquote>
          </div>
        </section>

        {/* Contact Section - Using your existing Matrix-themed section */}
        <section className="mx-auto my-12 flex w-7/12 flex-col gap-8 rounded-xl border border-matrix-medGreen/20 bg-gradient-to-br from-matrix-digitalBlack/80 to-matrix-darkGreen/40 p-8 shadow-lg shadow-matrix-brightGreen/30 backdrop-blur-md md:flex-row">
          <div className="z-10 flex-1 space-y-4">
            <h2 className="font-anonymous text-3xl font-bold tracking-wider text-matrix-neonGreen [text-shadow:0_0_10px_rgba(0,255,65,0.5)]">
              Let&apos;s Connect!
            </h2>
            <p className="font-shareTech text-lg leading-relaxed text-matrix-neonGreen/90">
              Looking to collaborate on your next project?
              <br />
              As a dedicated developer, I&apos;m ready to turn your ideas into
              powerful digital experiences.
              <br />
              Let&apos;s create something amazing together!
            </p>
          </div>
          <div
            id="contact-form"
            className="z-10 flex items-center justify-center md:justify-end"
          >
            <Button
              variant="redpill"
              className="relative shadow-[0_4px_0_rgba(204,0,0,0.8)] transition-all duration-300 before:absolute before:inset-0 before:scale-105 before:transform before:rounded-full before:bg-matrix-redPill/20 before:opacity-0 before:transition-all hover:before:opacity-100 active:translate-y-1 active:shadow-[0_0_0_rgba(204,0,0,0.8)]"
              asChild
            >
              <Link href="/portfolio/system-mainframe/uplink">Contact Me!</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-5 text-matrix-medGreen">
        <div className="flex items-center justify-center gap-5 text-matrix-medGreen">
          <Link
            href="https://linkedin.com/in/heath-babb"
            aria-label="Linked In"
            className="hover:text-matrix-brightGreen"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <p className="text-center font-normal">
            copyright © {new Date().getFullYear()} Heath Babb | The Odin
            Project
            <Link
              href="https://github.com/hbabb/odin-landing-page/blob/main/LICENSE.md"
              target="_blank"
              className="ml-6 text-matrix-medGreen underline transition-colors hover:text-matrix-brightGreen"
            >
              LICENSE
            </Link>
          </p>
          <Link
            href="https://github.com/hbabb"
            aria-label="Github"
            className="hover:text-matrix-brightGreen"
            target="_blank"
          >
            <Github />
          </Link>
        </div>
      </footer>
    </div>
  );
}
