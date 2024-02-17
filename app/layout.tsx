import "./globals.css";

export const metadata = {
	title: "MrBeast's Portfolio",
	description: "The unofficial portfolio of MrBeast.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="description" content={metadata.description} />
				<title>{metadata.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body className="body">{children}</body>
		</html>
	);
}
