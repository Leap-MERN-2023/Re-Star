import React from "react";

const FooterSection = ({ footerData }: any) => {
  return (
    <footer className=" flex-1 min-w-52 flex flex-col  items-center">
      <h1 className="my-5 font-semibold text-xl"> {footerData.name}</h1>
      <div className="flex flex-col gap-2">
        {footerData.links.map((data: string, i: number) => (
          <a key={i}>{data}</a>
        ))}
      </div>
    </footer>
  );
};

export default FooterSection;
