export const navigationItems = [
  {
    id: 1,
    label: "HOME",
    href: "/",
  },
  {
    id: 2,
    label: "SHOP NOW",
    href: "/shop",
    children: [
    {
      label: "Men's Wear",
      href: "/shop/mens",
    },
    {
      label: "Women's Wear",
      href: "/shop/womens",
    },
  ],
  },
  {
    id: 3,
    label: "COLLECTIONS",
    href: "/collections",
    children: [
    {
      label: "MIRZA",
      href: "/collections/mirza",
    },
    {
      label: "HERA",
      href: "/collections/hera",
    },
    {
      label: "TVAYA",
      href: "/collections/tvaya",
    },
    {
      label: "RAAH",
      href: "/collections/raah",
    },
    {
      label: "NADIRA",
      href: "/collections/nadira",
    },
    {
      label: "ANAGHA",
      href: "/collections/anagha",
    },
  ],
  },
  {
    id: 4,
    label: "CATEGORY",
    href: "/category",
    megaMenu: {
    mens: [
      {
        label: "Sherwanis",
        href: "/category/sherwanis",
      },
      {
        label: "Bandi Sets",
        href: "/category/bandi-sets",
      },
      {
        label: "Kurta Sets",
        href: "/category/kurta-sets",
      },
    ],

    womens: [
      {
        label: "Lehengas",
        href: "/category/lehengas",
      },
      {
        label: "Gowns",
        href: "/category/gowns",
      },
      {
        label: "Cape Sets",
        href: "/category/cape-sets",
      },
      {
        label: "Jacket Sets",
        href: "/category/jacket-sets",
      },
      {
        label: "Peplum Sets",
        href: "/category/peplum-sets",
      },
      {
        label: "Designer Sarees",
        href: "/category/designer-sarees",
      },
    ],

    featured: [
      {
        title: "Women's Wear",
        image: "/images/category/women.webp",
        href: "/category/women",
      },
      {
        title: "Men's Wear",
        image: "/images/category/men.webp",
        href: "/category/men",
      },
    ],
  },
  },
  {
    id: 5,
    label: "READY TO SHIP",
    href: "/ready-to-ship",
  },
  {
    id: 6,
    label: "ABOUT",
    href: "/about",
  },
  {
    id: 7,
    label: "PRANAVALI",
    href: "/pranavali",
  },
];