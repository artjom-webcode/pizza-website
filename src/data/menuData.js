import supabase from "../supabase";

const menu = [
  {
    name: "Margherita",
    unitPrice: 8.5,
    ingredients: "Tomato sauce, mozzarella cheese (fior di latte), fresh basil",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Pizza Per Bambini",
    unitPrice: 9.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), prosciutto cotto, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Grilled Chicken",
    unitPrice: 10.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), grilled chicken, gorgonzola cheese, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Salami Milano",
    unitPrice: 10.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), salami, grilled bell peppers, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Prosciutto",
    unitPrice: 11.0,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), prosciutto crudo, fresh arugula, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Quatro Formaggi",
    unitPrice: 11.0,
    ingredients:
      "Mozzarella cheese (fior di latte), gorgonzola cheese, provolone piccante cheese, parmesan cheese, pecorino with truffle",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Shrimps Pizza",
    unitPrice: 11.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), king prawns in garlic-pepper marinade, capers, olives, fresh arugula, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Panchetta",
    unitPrice: 10.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), pancetta, sun-dried tomatoes, garlic butter, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Napoli Picante",
    unitPrice: 11.0,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), pepperoni, Nduja calabrese, jalapeno, parmesan cheese",
    soldOut: true,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Pizza Al Tonno",
    unitPrice: 10.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), tuna, red onion, capers, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Napoli Fichi",
    unitPrice: 11.0,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), gorgonzola cheese, spicy salami, figs, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Meat Lover's",
    unitPrice: 11.0,
    ingredients:
      "Tomato sauce, mozzarella cheese, grilled chicken, spicy salami, grilled bell peppers",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Cotto e Funghi",
    unitPrice: 10.5,
    ingredients:
      "Tomato sauce, mozzarella cheese (fior di latte), prosciutto cotto, mixed mushrooms, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Pizza Fiocco",
    unitPrice: 11.0,
    ingredients: "Creamy parmesan sauce, cotto ham, mozzarella, potatoes with black pepper",
    soldOut: true,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Raspberry Mascarpone",
    unitPrice: 9.0,
    ingredients: "Mascarpone, raspberries, port wine sauce, powdered sugar",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Pera Gorgonzola",
    unitPrice: 9.5,
    ingredients: "Mozzarella cheese (fior di latte), pear, gorgonzola, walnuts, honey",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Formaggi Funghi",
    unitPrice: 10.0,
    ingredients:
      "Mozzarella cheese (fior di latte), provolone piccante, mixed mushrooms, pecorino with truffle",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Nduja",
    unitPrice: 9.5,
    ingredients: "Tomato sauce, mozzarella cheese, Nduja calabrese, red onion, parmesan cheese",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
  {
    name: "Сarnevale",
    unitPrice: 12.0,
    ingredients: "Pizza with delicious cheese crust",
    soldOut: false,
    imageUrl:
      "https://sqykbtxflhuybrrrjtim.supabase.co/storage/v1/object/public/menu-images/MARGHERITA.jpg",
  },
];

export async function createMenu() {
  const { error } = await supabase.from("menu").insert(menu);
  if (error) console.log(error.message);
}
