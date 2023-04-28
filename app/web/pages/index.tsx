import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-scree flex items-center">
      <div className="mx-auto my-auto bg-nature-green p-4 rounded-md">
        <div className="border border-white rounded-md p-1">
          <div className="border border-white rounded-md p-4">
            <div className="text-center text-gray-50">
              <div className="text-md">หนังสือเดินทางท่องเที่ยว</div>
              <div className="text-5xl my-3">อุทยานแห่งชาติ</div>
              <div className="text-md">Passport to Thailand National Parks</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
