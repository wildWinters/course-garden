"use client";
import { createPortal } from "react-dom";
import { ReactNode, useEffect, useState } from "react";
import { RefObject } from "react";

export interface IcustomModal {
  id: string;
  children: ReactNode;
  zIndex?: number;
  ref?: RefObject<HTMLDivElement>;
}

export function CustomModalWrapper({
  id,
  children,
  zIndex,
  ref,
}: IcustomModal) {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id) as HTMLElement | null;
    setContainer(el);
    requestAnimationFrame(() => setIsVisible(true));
  }, [id]);
    
  if (!container) return null;

  return createPortal(
    <div
      ref={ref}
      className={`fixed inset-0 flex items-center justify-center w-[100vw] h-[100vh] bg-black/50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: zIndex ?? 9999 }}
    >
      <div
        className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {children}
      </div>
    </div>,
    container
  );
}
