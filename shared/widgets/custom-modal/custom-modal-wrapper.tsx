"use client";

import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { XIcon } from "lucide-react";
import { Button } from "@/shared/shad-cn/ui/button";

interface ICustomModal {
  id: string;
  children: ReactNode;
  zIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function CustomModal({
  id,
  children,
  zIndex = 50,
  isOpen,
  onClose,
}: ICustomModal) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      style={{ zIndex }}
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button className="absolute top-2 right-2" onClick={onClose}>
          <XIcon />
        </Button>
        {children}
      </div>
    </div>,
    document.body
  );
}
