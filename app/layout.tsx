import { getServerSession } from "next-auth";
import NextAuthSessionProvider from "./nextAuthSessionProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = getServerSession();
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
