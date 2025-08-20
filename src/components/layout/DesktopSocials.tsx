import { socialLinks } from "@/data/socialLinks";

export default function DesktopSocials() {
  return (
    <ul className="hidden md:flex md:justify-between w-full">
      <li>
        <p className="font-semibold text-[clamp(16px,1.6vw,24px)] text-[#7B3F00] py-2">
          ©2025
        </p>
      </li>
      {socialLinks.map((social) => (
        <li key={social.title}>
          <a
            href={social.url}
            className="inline-block px-6 py-2 font-semibold text-[clamp(16px,1.6vw,24px)] text-[#7B3F00] transition-all duration-200 ease-in-out hover:scale-110 hover:blur-[1px] focus:scale-110 focus:blur-[1px]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.title}`}
          >
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
