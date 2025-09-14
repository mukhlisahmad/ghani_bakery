export type Product = {
  id: string;
  name: string;
  price: number;
  desc: string;
  tags: string[]; // without '#'
  image: string; // public path
};

export const productsSeed: Product[] = [
  {
    id: "roti-tawar",
    name: "Roti Tawar",
    price: 22000,
    desc: "Roti tawar lembut cocok untuk sandwich dan sarapan.",
    tags: ["roti", "sarapan", "favorit"],
    image: "/bakery/roti-tawar.jpg",
  },
  {
    id: "croissant-butter",
    name: "Croissant Butter",
    price: 17000,
    desc: "Croissant berlapis renyah dengan aroma mentega premium.",
    tags: ["croissant", "mentega", "fresh"],
    image: "/bakery/croissant.jpg",
  },
  {
    id: "donut-cokelat",
    name: "Donut Cokelat",
    price: 12000,
    desc: "Donut empuk dengan glaze cokelat pekat favorit semua umur.",
    tags: ["donat", "cokelat", "best_seller"],
    image: "/bakery/donut-cokelat.jpg",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    price: 18000,
    desc: "Gulungan kayu manis manis legit dengan icing gula.",
    tags: ["roll", "kayu_manis"],
    image: "/bakery/cinnamon-roll.jpg",
  },
  {
    id: "cheesecake",
    name: "Cheesecake Slice",
    price: 32000,
    desc: "Cheesecake creamy dengan base biskuit gurih, lumer di mulut.",
    tags: ["cake", "keju"],
    image: "/bakery/cheesecake.jpg",
  },
  {
    id: "sourdough",
    name: "Sourdough",
    price: 35000,
    desc: "Roti sourdough bertekstur chewy dengan rasa asam alami.",
    tags: ["roti", "artisanal"],
    image: "/bakery/sourdough.jpg",
  },
  {
    id: "baguette",
    name: "Baguette",
    price: 25000,
    desc: "Baguette kulit renyah, cocok untuk sup atau sandwich.",
    tags: ["roti", "prancis"],
    image: "/bakery/baguette.jpg",
  },
  {
    id: "brownies",
    name: "Brownies Cokelat",
    price: 28000,
    desc: "Brownies fudgy dengan cokelat premium, kaya rasa.",
    tags: ["cake", "cokelat"],
    image: "/bakery/brownies.jpg",
  },
  {
    id: "muffin-blueberry",
    name: "Muffin Blueberry",
    price: 16000,
    desc: "Muffin lembut dengan potongan blueberry yang juicy.",
    tags: ["muffin", "buah"],
    image: "/bakery/muffin-blueberry.jpg",
  },
  {
    id: "eclair-cokelat",
    name: "Eclair Cokelat",
    price: 19000,
    desc: "Choux pastry isi krim vanila, topping cokelat.",
    tags: ["pastry", "cokelat"],
    image: "/bakery/eclair-cokelat.jpg",
  },
  {
    id: "tiramisu-slice",
    name: "Tiramisu Slice",
    price: 32000,
    desc: "Lapisan mascarpone dan espresso dengan taburan kakao.",
    tags: ["cake", "kopi"],
    image: "/bakery/tiramisu-slice.jpg",
  },
  {
    id: "cookies-choco-chip",
    name: "Cookies Choco Chip",
    price: 10000,
    desc: "Kue kering renyah dengan potongan cokelat melimpah.",
    tags: ["cookies", "cokelat", "snack"],
    image: "/bakery/cookies-choco-chip.jpg",
  },
  {
    id: "banana-bread",
    name: "Banana Bread",
    price: 24000,
    desc: "Roti pisang lembut, harum, tidak terlalu manis.",
    tags: ["roti", "pisang"],
    image: "/bakery/banana-bread.jpg",
  },
  {
    id: "roti-isi-cokelat",
    name: "Roti Isi Cokelat",
    price: 14000,
    desc: "Roti manis isi cokelat lumer, favorit anak.",
    tags: ["roti", "cokelat", "manis"],
    image: "/bakery/roti-isi-cokelat.jpg",
  },
  {
    id: "roti-sosis",
    name: "Roti Sosis",
    price: 15000,
    desc: "Roti lembut dengan sosis gurih dan saus.",
    tags: ["roti", "gurih"],
    image: "/bakery/roti-sosis.jpg",
  },
];
