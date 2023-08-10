import { Lato, Open_Sans, Montserrat, Inter, Roboto } from "next/font/google";

export const openSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["800", "600", "400"],
});
export const latoFont = Lato({ subsets: ["latin"], weight: "900" });
export const monteserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
