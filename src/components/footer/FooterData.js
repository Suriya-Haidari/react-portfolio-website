import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export function GetFooterData() {
  const { t } = useTranslation("footer");

  return [
    {
      href: "#",
      name: t("footer.Home"),
    },
    {
      href: "#about",
      name: t("footer.About"),
    },
    {
      href: "#skill",
      name: t("footer.Skills"),
    },
    {
      href: "#projects",
      name: t("footer.Portfolio"),
    },
    {
      href: "#contact",
      name: t("footer.Contact"),
    },
  ];
}

export function GetFooterLinksData() {
  return [
    {
      name: <AiOutlineInstagram />,
      href: "https://www.instagram.com/soria_haidari_",
    },
    {
      name: <AiOutlineTwitter />,
      href: "https://www.twitter.com/Soria_Haidari",
    },
    { name: <AiFillGithub />, href: "https://www.github.com/SoriaHaidari" },
  ];
}
