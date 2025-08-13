import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/page.jsx";
import Footer from "@/components/Footer/page.jsx";
const roboto = localFont({
    src: [
        {
            path: "../../public/fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={roboto.variable}>
            <Header />
            <body className={roboto.className}>
                <main>{children}</main>
            </body>
            <Footer />
        </html>
    );
}