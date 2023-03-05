import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  style: ["normal"],
  variable: "--inter",
});

export const drakCyr = localFont({
  src: [
    {
      path: "./styles/fonts/DrukCyr-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./styles/fonts/DrukCyr-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./styles/fonts/DrukCyr-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./styles/fonts/DrukCyr-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./styles/fonts/DrukCyr-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
});
