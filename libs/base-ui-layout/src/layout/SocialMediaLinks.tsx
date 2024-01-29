import { FacebookIcon, YoutubeIcon } from "@libs/base-ui-components";
import { YoutubeFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";

export const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-2">
      <a
        href="https://www.youtube.com/user/ContactEnergy"
        rel="noopener noreferrer"
        title="Contact Energy on Youtube"
        target="_blank"
        className="w-[46px] h-[46px] border border-white/50 rounded-full flex justify-center items-center"
      >
        <YoutubeFilled style={{ fontSize: '24px', color: "#fff" }}/>
      </a>
      <a
        href="https://www.facebook.com/ContactEnergy/"
        rel="noopener noreferrer"
        title="Contact Energy on Facebook"
        target="_blank"
        className="w-[46px] h-[46px] border border-white/50 rounded-full flex justify-center items-center"
      >
        <FacebookIcon style={{ fontSize: '16px', color: "#fff" }} className="text-white h-[24px]"/>
      </a>
      <a
        href="https://www.instagram.com/contact_energy/"
        rel="noopener noreferrer"
        title="Contact Energy on Instagram"
        target="_blank"
        className="w-[46px] h-[46px] border border-white/50 rounded-full flex justify-center items-center"
      >
        <InstagramFilled style={{ fontSize: '24px', color: "#fff" }}/>
      </a>
      <a
        href="https://www.linkedin.com/company/contact-energy-ltd"
        rel="noopener noreferrer"
        title="Contact Energy on Linkedin"
        target="_blank"
        className="w-[46px] h-[46px] border border-white/50 rounded-full flex justify-center items-center"
      >
        <LinkedinFilled style={{ fontSize: '24px', color: "#fff" }}/>
      </a>
    </div>
  );
};
