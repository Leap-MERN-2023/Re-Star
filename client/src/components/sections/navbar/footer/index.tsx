import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import FooterSection from "./footer-section";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "@/components/icons";
// import { AboutUs } from "../../aboutUs";

const Footer = () => {
  const footerDatas = [
    {
      id: 1,
      name: "About Re-Star",
      links: ["About Us", "Blog", "Work With Us", "Contact Us"],
    },

    {
      id: 3,
      name: "For Restaurants",
      links: ["Partner With Us", "Apps For You"],
    },
    {
      id: 4,
      name: "Learn More",
      links: ["Privacy", "Security", "Sitemap", "Terms"],
    },

    ,
  ];
  return (
    <div className=" w-[100%] h-[600px] pt-10 bg-secondary shadow-inner">
      <div className="container p-0">
        <div className="flex justify-between ">
          <h1 className="font-bold text-3xl">Re-Star</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Languages</SelectLabel>
                <SelectItem value="mn">Монгол</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="md:flex w-[100%] py-10 flex-wrap justify-center">
          {footerDatas.map((footerData: any, i) => (
            <FooterSection footerData={footerData} key={i} />
          ))}

          <div className=" md:flex-1 min-w-40 flex flex-col  items-center">
            <h1 className="my-5 font-semibold text-xl">Social Links</h1>
            <div className="flex gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-10">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. Since 2024 © Re-Star™
            Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
