import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

export const metadata: Metadata = {
	title: "Hồ Tuấn Anh - MC Chuyên Nghiệp",
	description:
		"MC chuyên nghiệp với hơn 10 năm kinh nghiệm dẫn chương trình sự kiện doanh nghiệp, đám cưới và các dịp đặc biệt.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="vi">
			<body
				className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
