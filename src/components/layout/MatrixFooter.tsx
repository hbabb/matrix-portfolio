import { RedPillLink } from "../ui/PillLink";
import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function MatrixFooter() {
  return (
    <footer className="fixed bottom-0 z-50 w-full border-t border-matrix-medGreen/30 bg-matrix-digitalBlack text-matrix-medGreen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Home Link */}
          <RedPillLink href="/" className="space-x-2">
            Exit the Matrix
          </RedPillLink>
          <div className="ml-16 flex w-full flex-row items-center justify-between">
            <p className="text-matrix-neonGreen">
              &copy; {new Date().getFullYear()} Heath Babb - All rights
              reserved.
              <br />
              <em className="font-roboto font-bold text-matrix-redPillDark">
                Site is Under Construction
              </em>
            </p>
            <div className="flex flex-row items-center justify-between space-x-10">
              <Link
                href="https://github.com/hbabb"
                aria-label="Github"
                className="hover:text-matrix-brightGreen"
                target="_blank"
              >
                <Github />
              </Link>
              <Link
                href="https://linkedin.com/in/heath-babb"
                aria-label="Linked In"
                className="hover:text-matrix-brightGreen"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
