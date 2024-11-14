/* @typescript-eslint/no-unused-vars */
import { Terminal, MonitorUp, FileCode2, Mail, User } from 'lucide-react';
import { ReactNode } from 'react';

interface NavItem {
  path: string;
  label: string;
  icon: ReactNode;
}

interface SecondaryNavItem {
  path: string;
  label: string;
  icon: ReactNode;
}

interface ArchiveItem {
  path: string;
  label: string;
}

export const mainNavItems: NavItem[] = [
  {
    path: '/system-mainframe/architect',
    label: 'ARCHITECT PROFILE',
    icon: <User className="h-4 w-4 text-matrix-neonGreen" />,
  },
];

export const secondaryNavItems: SecondaryNavItem[] = [
  {
    path: '/system-mainframe/blueprints',
    label: 'BLUEPRINTS',
    icon: <MonitorUp className="h-4 w-4 text-matrix-neonGreen" />,
  },
  {
    path: '/system-mainframe/uplink',
    label: 'UPLINK',
    icon: <Mail className="h-4 w-4 text-matrix-neonGreen" />,
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    path: '/system-mainframe/architect/archives/constructs',
    label: 'CONSTRUCTS',
  },
  {
    path: '/system-mainframe/architect/archives/subroutines',
    label: 'SUBROUTINES',
  },
  {
    path: '/system-mainframe/architect/archives/protocols',
    label: 'PROTOCOLS',
  },
  {
    path: '/system-mainframe/architect/archives/training',
    label: 'TRAINING',
  },
];
