import MobileSidebar from "@/components/MobileSidebar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Abhishek", lastName: "Katnoria" };
  return (
    <main className="w-full h-screen flex font-inter">
      <SideBar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="./icons/logo.svg" width={24} height={24} alt="Logo" />
          <div>
            <MobileSidebar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
