import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <Header/>
        {children}
      </body>
    </html>
  );
}
