"use client";

import { useEffect, useState } from "react";

export interface CursorState {
  x: number;
  y: number;
  isPointer: boolean;
  isVisible: boolean;
  isPressed: boolean;
}

const useCursor = (): CursorState => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isPointer: false,
    isVisible: false,
    isPressed: false,
  });

  useEffect(() => {
    const updatePointerState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;

      const isInteractive = !!target.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor]'
      );

      setCursor((prev) => ({
        ...prev,
        isPointer: isInteractive,
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
        isVisible: true,
      }));

      updatePointerState(e.target);
    };

    const handleMouseDown = () => {
      setCursor((prev) => ({
        ...prev,
        isPressed: true,
      }));
    };

    const handleMouseUp = () => {
      setCursor((prev) => ({
        ...prev,
        isPressed: false,
      }));
    };

    const handleMouseLeave = () => {
      setCursor((prev) => ({
        ...prev,
        isVisible: false,
      }));
    };

    const handleMouseEnter = () => {
      setCursor((prev) => ({
        ...prev,
        isVisible: true,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return cursor;
};

export default useCursor;