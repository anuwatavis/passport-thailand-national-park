import React from "react";

type PassportCoverProps = {
  heightOfPassport: string;
  logoWidth: number;
  logoHeight: number;
};
function PassportCover({
  heightOfPassport,
  logoHeight,
  logoWidth,
}: PassportCoverProps) {
  return (
    <div
      className={`relative mx-auto my-auto h-[${heightOfPassport}] max-h-[600px] p-4 bg-nature-green rounded-tr-3xl rounded-br-3xl`}
    >
      <div className="flex justify-center items-center m-4">
        <img
          src="/images/dnp_logo.png"
          alt="image"
          width={logoHeight}
          height={logoWidth}
        />
      </div>

      <div className="border border-white rounded-[17px] p-[3px]">
        <div className="border border-white rounded-[13px] p-4">
          <div className="text-center text-gray-50">
            <div className="text-md">หนังสือเดินทางท่องเที่ยว</div>
            <div className="text-5xl my-2">อุทยานแห่งชาติ</div>
            <div className="text-md">Passport to Thailand National Parks</div>
          </div>
        </div>
      </div>
      <div
        className="bg-center bg-cover h-[40%]"
        style={{ backgroundImage: "url('images/leaf.svg')" }}
      ></div>
    </div>
  );
}

export default PassportCover;
