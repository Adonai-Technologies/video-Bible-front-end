import React from "react";
import MainModel from "./MainModel";
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import {
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ShareVideoModel({ modelOpen, setModelOpen, movie }) {
  const shareData = [
    { icon: FaFacebook, shareButton: FacebookShareButton },
    { icon: FaTwitter, shareButton: TwitterShareButton },
    { icon: FaWhatsapp, shareButton: WhatsappShareButton },
    { icon: FaPinterest, shareButton: PinterestShareButton },
    { icon: FaTelegram, shareButton: TelegramShareButton },
    { icon: MdEmail, shareButton: EmailShareButton }
  ];

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie.name}`;

  return (
    <MainModel modelOpen={modelOpen} setModelOpen={setModelOpen}>
      <div className="inline-block sm:-4/5  border rounded-lg border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full  bg-main text-white ">
        <h2 className="text-2xl">
          Share <span className="text-xl font-bold">"{movie?.name}"</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton
              key={index}
              url={url}
              quote="VideoBible | Connect with Christ"
            >
              <div className="w-12 transitions hover:bg-submain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModel>
  );
}

export default ShareVideoModel;
