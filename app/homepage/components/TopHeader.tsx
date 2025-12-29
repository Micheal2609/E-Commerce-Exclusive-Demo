"use client";

import { ConfigProvider, Select } from "antd";
import Link from "next/link";

interface Props {
  languages?: LanguageOption[];
  onChange?: (value: string) => void;
}

interface LanguageOption {
  code: string;
  name: string;
}

const TopHeader = ({ languages, onChange }: Props) => {
  if (!languages) {
    languages = [
      { code: "en", name: "English" },
      { code: "es", name: "Español" },
      { code: "zh", name: "中文" },
      { code: "hi", name: "हिन्दी" },
      { code: "ar", name: "العربية" },
      { code: "pt", name: "Português" },
      { code: "ru", name: "Русский" },
      { code: "ja", name: "日本語" },
      { code: "de", name: "Deutsch" },
      { code: "fr", name: "Français" },
    ];
  }

  return (
    <ConfigProvider
      theme={{ token: { colorText: "#FAFAFA", colorBgBase: "black", colorTextBase: "#FAFAFA" } }}
    >
      <div className="bg-black flex items-center justify-center h-10 text-sm md:text-md lg:text-lg relative">
        <div className="text-white font-[12px] truncate max-w-[60%]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            href={"/homepage"}
            className="text-white font-bold hover:underline ml-1"
          >
            Shop Now
          </Link>
        </div>

        <div className="absolute right-10">
          <Select
            defaultValue={"en"}
            variant="borderless"
            onChange={onChange}
            style={{
              width: 120,
            }}
            options={languages.map((lang) => ({
              value: lang.code,
              label: lang.name,
            }))}
          ></Select>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default TopHeader;
