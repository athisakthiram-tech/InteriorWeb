import { site, whatsappLink } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(`Hi ${site.name}, I'd like to know more about your interior work.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-[0_10px_30px_-8px_rgb(0_0_0/0.45)] transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
