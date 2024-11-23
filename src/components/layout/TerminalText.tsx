// components/TerminalText.tsx
"use client";
import { useEffect } from "react";
import { useTerminalStore } from "@/stores/useTerminal";

export function TerminalText() {
  const {
    displayText,
    cursorPosition,
    fullText,
    setDisplayText,
    setCursorPosition,
  } = useTerminalStore();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (cursorPosition < fullText.length) {
      timeout = setTimeout(
        () => {
          setDisplayText(fullText.slice(0, cursorPosition + 1));
          setCursorPosition(cursorPosition + 1);
        },
        Math.random() * 30 + 20,
      );
    }

    return () => clearTimeout(timeout);
  }, [cursorPosition, fullText, setDisplayText, setCursorPosition]);

  return (
    <div className="terminal-container relative min-w-full text-justify font-shareTech text-lg leading-relaxed">
      <pre className="w-full whitespace-pre-wrap font-shareTech">
        {displayText}
      </pre>
      <span
        className={`ml-1 inline-block h-4 w-2 animate-[blink_1s_step-end_infinite] bg-matrix-neonGreen ${
          cursorPosition >= fullText.length ? "opacity-0" : ""
        }`}
      />
    </div>
  );
}
