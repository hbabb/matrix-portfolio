import Image from "next/image";
import Link from "next/link";
import spaceMan from "../../public/images/SpaceMan.svg";
import { Button } from "@/components/ui/button";
import { MoveLeft } from 'lucide-react';


export const metadata = {
    title: "Page Not Found",
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <main className="flex flex-row items-center justify-evenly">
                <div className="text-notfound-white mr-96 text-left">
                    <h1 className="text-inter font-bold text-[200px]">
                        Oops !
                    </h1>
                    <h3 className="text-inter font-bold text-[44px]">
                        something went wrong...
                    </h3>
                    <p className="text-inter font-normal text-[23px] text-notfound-gray mb-52">
                        try to reload this page or go back to the homepage
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full px-8 py-6 text-lg border-2 border-notfound-white text-notfound-white hover:text-red-600 bg-transparent"
                    >
                        
                        <Link href="/system-mainframe">
                            <MoveLeft />
                            homepage
                        </Link>
                    </Button>

                </div>
                <div>
                    <Image 
                        src={spaceMan}
                        alt="Astronaut on Moon"
                        width={477}
                        height={477}

                    />

                </div>
            </main>
        </div>
    )
}

