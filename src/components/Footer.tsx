"use client";

import LiveClock from "@/components/ui-custom/LiveClock";
import FooterCTAMobile from "@/components/layout/FooterCTAMobile";
import DesktopSocials from "@/components/layout/DesktopSocials";
import { useRef } from "react";
import PhysicsContactButtons from "@/components/layout/PhysicsContactButtons";
import useWindowSize from "@/hooks/useWindowSize";
import { useFooter } from "@/contexts/footer-context";

export default function Footer() {
  const matterContainer = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const { footerRef } = useFooter();

  return (
    <section id="footer" className="p-4">
      <footer
        ref={footerRef}
        className="flex flex-col justify-between gap-8 p-4 md:px-8 pt-8 pb-6 rounded-xl bg-stone-100 h-[600px] lg:h-[clamp(700px,95vh,900px)]"
      >
        <div className="flex justify-between w-full">
          <p className="font-bold text-[clamp(16px,1.6vw,24px)] text-[#7B3F00]">
            Colombo, LK
          </p>

          <LiveClock />
        </div>

        <div ref={matterContainer} className="h-full relative overflow-hidden">
          <h2 className="text-[clamp(50px,6vw,72px)] font-semibold text-center tracking-tight leading-[0.85] top-12 lg:top-0 left-1/2 -translate-x-1/2 absolute w-full text-[#ff950b]">
            Join <span className="text-[#111827] z-50">Web3Ceylon</span>
            <span className="text-[#111827] z-50 block">Ecosystem</span>
          </h2>

          {width > 768 && (
            <PhysicsContactButtons
              containerRef={matterContainer as React.RefObject<HTMLDivElement>}
            />
          )}

          <FooterCTAMobile />
        </div>

        {/* Mobile */}
        <div className="flex items-end justify-between md:hidden">
          <ul className="flex flex-col gap-1 w-full">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold text-[#7B3F00]">Instagram</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold text-[#7B3F00]">YouTube</p>
              </a>
            </li>
          </ul>

          <p className="font-semibold text-[#7B3F00] w-full text-center">
            ©{new Date().getFullYear()}
          </p>

          <ul className="flex flex-col items-end gap-1 w-full">
            <li>
              <a
                href="https://www.facebook.com/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold text-[#7B3F00]">Facebook</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold text-[#7B3F00]">TikTok</p>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <DesktopSocials />
      </footer>
    </section>
  );
}
