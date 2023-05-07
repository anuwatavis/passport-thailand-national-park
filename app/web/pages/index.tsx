import Image from "next/image";
import { Inter } from "next/font/google";
import PassportCover from "./components/PassportCover";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center">
      <PassportCover
        heightOfPassport={"75%"}
        logoHeight={150}
        logoWidth={150}
      />
    </main>
  );
}
