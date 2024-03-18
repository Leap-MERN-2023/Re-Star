import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FooterSection from "./footer-section";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "@/components/icons";

const Footer = () => {
  const footerDatas = [
    {
      id: 1,
      name: "About Re-Star",
      links: ["Who We Are", "Blog", "Wrok With Us", "Contact Us"],
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
    <div className="bg-[#fdf4ed] w-[100%] h-[500px] pt-10">
      <div className="container p-0">
        <div className="flex justify-between ">
          <h1 className=" font-bold text-3xl">Re-Star</h1>
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
        <div className="flex w-[100%] py-10 flex-wrap justify-center">
          {footerDatas.map((footerData: any) => (
            <FooterSection footerData={footerData} />
          ))}

          <div className=" flex-1 min-w-40 flex flex-col  items-center">
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
            are properties of their respective owners. 2008-2024 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
