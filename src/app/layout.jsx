import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page.jsx";
import Footer from "@/components/Footer/page.jsx";
// Configurar Google Fonts
const inter = Inter({ 
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter"
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <Header />
            <body className={inter.className}>
                <main>{children}</main>
            </body>
            <Footer />
        </html>
    );
}