export type OfficialResource = {
  id: number;
  name: string;
  logo: string;
  href: string;
};

export const officialResources: OfficialResource[] = [
  {
    id: 1,
    name: "Президент Республики Таджикистан",
    logo: "/images/resources/president.png",
    href: "https://www.president.tj/",
  },
  {
    id: 2,
    name: "Министерство образования и науки Республики Таджикистан",
    logo: "/images/resources/coat.png",
    href: "https://maorif.tj/",
  },

  {
    id: 3,
    name: "Агентство по надзору в сфере образования и науки",
    logo: "/images/resources/education-agency.png",
    href: "https://ansmi.tj/",
  },
  {
    id: 4,
    name: "Национальный центр тестирования",
    logo: "/images/resources/ntc.png",
    href: "https://ntc.tj/",
  },
  {
    id: 5,
    name: "Министерство иностранных дел Республики Таджикистан",
    logo: "/images/resources/mfa.png",
    href: "https://mfa.tj/",
  },
  {
    id: 6,
    name: "Агентство по государственному финансовому контролю и борьбе с коррупцией Республики Таджикистан ",
    logo: "/images/resources/anticorruption.png",
    href: "https://anticorruption.tj/",
  },
  {
    id: 7,
    name: "Национальный центр законодательства при Президенте Республики Таджикистан",
    logo: "/images/resources/mmk.png",
    href: "https://mmk.tj/",
  },
  {
    id: 8,
    name: "Национальный информационная агентство Таджикистан «Ховар»",
    logo: "/images/resources/khovar.png",
    href: "https://khovar.tj/",
  },
];
