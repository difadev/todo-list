
import { Inter as FontSans, Poppins } from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})
  
export const fontPoppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-popregular'
})