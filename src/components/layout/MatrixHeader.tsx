'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, FileCode2 } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
// import { useNavStore } from '@/stores/navStore'
import { mainNavItems, secondaryNavItems, archiveItems } from '@/config/navConfig';

export function MatrixHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-matrix-medGreen/30 bg-matrix-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* System Mainframe Link (main entry point after landing page) */}
          <Link
            href="/system-mainframe"
            className="flex items-center space-x-2 text-matrix-medGreen transition-colors hover:text-matrix-neonGreen"
          >
            <FileCode2 className="h-6 w-6" />
            <span className="font-anonymous text-lg">SYSTEM_MAINFRAME</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {/* Regular Nav Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`group flex items-center space-x-1 font-shareTech text-sm ${
                  pathname === item.path ? 'text-matrix-neonGreen' : 'text-matrix-medGreen hover:text-matrix-neonGreen'
                } transition-colors duration-200`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {/* Archives Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`group flex items-center space-x-1 border-none bg-transparent font-shareTech text-sm ${
                      pathname.includes('/system-mainframe/architect/archives')
                        ? 'text-matrix-neonGreen'
                        : 'text-matrix-medGreen hover:text-matrix-brightGreen'
                    } transition-colors duration-200`}
                  >
                    <Terminal className="h-4 w-4 text-matrix-medGreen transition-colors hover:text-matrix-neonGreen" />
                    <span>SYSTEM ARCHIVES</span>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="grid w-48 gap-1 border border-matrix-medGreen/30 bg-matrix-black p-2">
                      {archiveItems.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className={`group relative flex items-center px-3 py-2 text-sm ${
                            pathname === item.path
                              ? 'bg-matrix-darkGreen/10 text-matrix-neonGreen'
                              : 'hover:bg-matrix-darkgreen/5 text-matrix-medGreen hover:text-matrix-neonGreen'
                          } transition-colors duration-200`}
                        >
                          <span className="font-shareTech">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Regular Nav Items */}
            {secondaryNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`group flex items-center space-x-1 font-shareTech text-sm ${
                  pathname === item.path ? 'text-matrix-neonGreen' : 'text-matrix-medGreen hover:text-matrix-neonGreen'
                } transition-colors duration-200`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
