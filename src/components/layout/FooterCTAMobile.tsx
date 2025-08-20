"use client";
import { useContactModalStore } from "@/lib/zustand/stores";

export default function FooterCTAMobile() {
  const toggleModal = useContactModalStore((state) => state.toggleModal);

  return (
    <div className="flex flex-col items-center gap-2 w-full absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-[65%] lg:hidden">
      <a
        href="mailto:hello@web3ceylon.org"
        className="flex flex-col items-start pt-6 pb-4 px-4 rounded-2xl w-full max-w-[600px] bg-[#EEE4D7] cursor-pointer"
      >
        <p className="text-[#7B3F00] tracking-tight font-semibold">Email us</p>
        <p className="text-xl text-[#7B3F00] leading-tight font-semibold">
          hello@web3ceylon.com
        </p>
      </a>

      <button
        onClick={toggleModal}
        className="p-4 rounded-2xl w-full max-w-[600px] bg-[#EEE4D7] cursor-pointer"
      >
        <p className="text-2xl tracking-tight font-semibold text-[#7B3F00]">
          Get in touch
        </p>
      </button>
    </div>
  );
}
