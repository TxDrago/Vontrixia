"use client";

import { useEffect, useState } from "react";

import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";
import useCursor from "./useCursor";

const Cursor = () => {
  const cursor = useCursor();

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    setEnabled(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setEnabled(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <CursorRing cursor={cursor} />
      <CursorDot cursor={cursor} />
    </>
  );
};

export default Cursor;