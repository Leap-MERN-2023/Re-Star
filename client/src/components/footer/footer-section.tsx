import React from "react";

const FooterSection = ({ footerData }: any) => {
  return (
    <div className="flex-1">
      <h1 className="my-5 font-semibold text-xl"> {footerData.name}</h1>
      <div className="flex flex-col gap-2">
        {footerData.links.map((data: string) => (
          <a>{data}</a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
