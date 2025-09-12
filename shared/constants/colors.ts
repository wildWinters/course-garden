import type { Colors } from "../types/colors";

const COLORS: Colors = {
  SHADOW: "rgba(0, 0, 0, 0.1)",
  DARK_PURPLE: "rgba(45, 30, 99, 1)",
  MEDIUM_PURPLE: "rgba(114, 77, 247, 1)",
  PINK: "rgba(241, 120, 182, 1)",
  GRADIENT_PRIMARY:
    "linear-gradient(135deg, rgba(194, 204, 227, 1) 0%, rgba(157, 130, 253, 1) 50%, rgba(94, 78, 151, 1) 100%)",
  SHADOW_SOFT: "0 6px 20px rgba(0, 0, 0, 0.08)",
  SHADOW_GRADIENT:
    "0 6px 16px rgba(194, 204, 227, 0.45), 0 14px 32px rgba(157, 130, 253, 0.35), 0 24px 56px rgba(94, 78, 151, 0.3)",
  FILTER_SHADOW_GRADIENT:
    "drop-shadow(0 6px 12px rgba(194, 204, 227, 0.45)) drop-shadow(0 14px 28px rgba(157, 130, 253, 0.35)) drop-shadow(0 22px 48px rgba(94, 78, 151, 0.3))",
};

export default COLORS;
