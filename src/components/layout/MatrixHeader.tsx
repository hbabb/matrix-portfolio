'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, MonitorUp, FileCode2, Mail, User } from 'lucide-react';

export function MatrixHeader() {
  const pathname = usePathname();
  const [showCommands, setShowCommands] = useState(false);

  const navItems = [
    {
      path: '/system-mainframe/architect',
      command: '/connect --architect',
      label: 'ARCHITECT PROFILE',
      icon: <User className="h-4 w-4 text-matrix-neonGreen" />,
    },
    {
      path: '/system-mainframe/architect/archives',
      command: '/access --archives',
      label: 'SYSTEM ARCHIVES',
      icon: <Terminal className="h-4 w-4 text-matrix-neonGreen" />,
    },
    {
      path: '/system-mainframe/blueprints',
      command: '/view --blueprints',
      label: 'BLUEPRINTS',
      icon: <MonitorUp className="h-4 w-4 text-matrix-neonGreen" />,
    },
    {
      path: '/system-mainframe/uplink',
      command: '/establish --uplink',
      label: 'UPLINK',
      icon: <Mail className="h-4 w-4 text-matrix-neonGreen" />,
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-matrix-medGreen/30 bg-matrix-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Home Link */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-matrix-neonGreen transition-colors hover:text-matrix-brightGreen"
          >
            <FileCode2 className="h-6 w-6" />
            <span className="font-anonymous text-lg">SYSTEM_MAINFRAME</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {/* Help Toggle */}
            <button
              onClick={() => setShowCommands(!showCommands)}
              className="font-firaCode text-sm text-matrix-medGreen transition-colors hover:text-matrix-neonGreen"
            >
              {showCommands ? '[hide_commands]' : '[show_commands]'}
            </button>

            {/* Nav Items */}
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group relative flex items-center space-x-1 font-shareTech text-sm ${
                    pathname === item.path
                      ? 'text-matrix-neonGreen'
                      : 'text-matrix-medGreen hover:text-matrix-brightGreen'
                  } transition-colors duration-200`}
                >
                  {item.icon}
                  <span>{item.label}</span>

                  {/* Terminal Command Tooltip */}
                  {showCommands && (
                    <div className="absolute -bottom-8 left-0 w-max font-firaCode text-xs text-matrix-brightGreen opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="rounded border border-matrix-medGreen/30 bg-matrix-black/90 px-2 py-1">
                        {item.command}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu - We can add this later */}
    </header>
  );
}

// You might also want to create a mobile menu component:

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: {
    path: string;
    command: string;
    label: string;
    icon: React.ReactNode;
  }[];
}

function MobileMenu({ isOpen, setIsOpen, navItems }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <div className="fixed right-0 top-0 h-full w-64 border-l border-matrix-medGreen/30 bg-matrix-black">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex items-center justify-between">
            <span className="font-anonymous text-matrix-neonGreen">
              NAVIGATION
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-matrix-medGreen hover:text-matrix-neonGreen"
            >
              [close]
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 rounded-sm px-2 py-1.5 ${
                  pathname === item.path
                    ? 'bg-matrix-medGreen/10 text-matrix-neonGreen'
                    : 'text-matrix-medGreen hover:bg-matrix-medGreen/5 hover:text-matrix-brightGreen'
                } transition-colors duration-200`}
              >
                {item.icon}
                <span className="font-shareTech">{item.label}</span>
                <span className="font-firaCode text-xs opacity-50">
                  {item.command}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
