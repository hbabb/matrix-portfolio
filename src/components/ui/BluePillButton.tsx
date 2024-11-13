'use client';

import { useEffect } from 'react';
import { useTerminalStore } from '@/stores/useTerminal';
import { BluePillLink } from '@/components/ui/PillLink';

export function BluePillButton() {
  const { cursorPosition, fullText, showPill, setShowPill } =
    useTerminalStore();

  useEffect(() => {
    if (cursorPosition >= fullText.length) {
      const timeout = setTimeout(() => setShowPill(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [cursorPosition, fullText.length, setShowPill]);

  if (!showPill) return null;

  return (
    <BluePillLink
      href="/system-mainframe"
      className="w-1/3 animate-[fadeIn_1s_ease-in-out]"
    >
      Follow the White Rabbit
    </BluePillLink>
  );
}
