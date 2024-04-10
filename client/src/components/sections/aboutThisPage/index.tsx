import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs, TbBrandRadixUi, TbProgressAlert } from "react-icons/tb";
import { ImFilePicture } from "react-icons/im";
import {
  SiSwiper,
  SiAxios,
  SiMomenteo,
  SiMongoose,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";
import { GrToast } from "react-icons/gr";
import { FaCloudDownloadAlt, FaNodeJs, FaUnlock } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const AboutProject = () => {
  return (
    <div className="grid grid-col-2 h-screen w-screen mx:auto container ">
      <div className="flex mt-[130px] justify-around">
        <div className="flex flex-col items-start">
          <h1 className="text-[40px] font-semibold">Client</h1>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaReact className="text-[50px]" />
            <p className="text-[30px]">React</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <TbBrandNextjs className="text-[50px]" />
            <p className="text-[30px]">Next JS</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaReact className="text-[50px]" />
            <p className="text-[30px]">ShadCN</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <TbBrandRadixUi className="text-[50px]" />
            <p className="text-[30px]">Radix UI</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <BiLogoTailwindCss className="text-[50px]" />
            <p className="text-[30px]">Tailwind</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaReact className="text-[50px]" />
            <p className="text-[30px]">Formik</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiAxios className="text-[50px]" />
            <p className="text-[30px]">Axios</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiSwiper className="text-[50px]" />
            <p className="text-[30px]">Swiper JS</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaReact className="text-[50px]" />
            <p className="text-[30px]">Lottie</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <GrToast className="text-[50px]" />
            <p className="text-[30px]">Toastify</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <TbProgressAlert className="text-[50px]" />
            <p className="text-[30px]">SweetAlert2</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiMomenteo className="text-[50px]" />
            <p className="text-[30px]">Moment JS</p>
          </div>
        </div>
        <div className="border-2 border-primary"></div>
        <div className="flex flex-col items-start">
          <h1 className="text-[40px] font-semibold">Server</h1>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaNodeJs className="text-[50px]" />
            <p className="text-[30px]">Node JS</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiExpress className="text-[50px]" />
            <p className="text-[30px]">Express JS</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaCloudDownloadAlt className="text-[50px]" />
            <p className="text-[30px]">Cloudinary</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiJsonwebtokens className="text-[50px]" />
            <p className="text-[30px]">JWT</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <SiMongoose className="text-[50px]" />
            <p className="text-[30px]">Mongoose</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <ImFilePicture className="text-[50px]" />
            <p className="text-[30px]">Multer</p>
          </div>

          <div className="flex justify-center items-center gap-3 mt-4">
            <IoMailSharp className="text-[50px]" />
            <p className="text-[30px]">Node mailer</p>
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <FaUnlock className="text-[50px]" />
            <p className="text-[30px]">Bcrypt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
