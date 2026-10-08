export type OfficialResource = {
  id: number;
  name: string;
  logo: string;
  href: string;
};

export const officialResources: OfficialResource[] = [
  {
    id: 1,
    name: "Министерство иностранных дел Республики Таджикистан",
    logo: "/images/resources/mfa.png",
    href: "https://mfa.tj/",
  },
  {
    id: 2,
    name: "Агентство по надзору в сфере образования и науки",
    logo: "/images/resources/education-agency.png",
    href: "#",
  },
  {
    id: 3,
    name: "Национальный центр тестирования",
    logo: "/images/resources/ntc.png",
    href: "#",
  },
  {
    id: 4,
    name: "Центр международных связей",
    logo: "/images/resources/international.png",
    href: "#",
  },
  {
    id: 5,
    name: "Государственные электронные ресурсы",
    logo: "/images/resources/e-government.png",
    href: "#",
  },
  {
    id: 6,
    name: "Национальный центр законодательства",
    logo: "/images/resources/legislation.png",
    href: "#",
  },
  {
    id: 7,
    name: "Иные официальные ресурсы",
    logo: "/images/resources/official.png",
    href: "#",
  },
];
