import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <h1 className="h-auto flex items-center justify-start mb-3" id="contact" style={{ fontSize: "30px" }}>Contat Me</h1>
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap mb-5" style={{ width: "300px" }}>
              {FOOTER_DATA.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${name}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>

        <div className="mb-[20px] text-[15px] text-center mt-5">
          &copy; Michael Leone {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
