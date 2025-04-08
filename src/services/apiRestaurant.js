import supabase from "../supabase";

export async function getMenu() {
  /* По этому имени будут приходить данные с таблицы menu  */
  let { data: menu, error } = await supabase.from("menu").select("*");

  if (error) {
    console.log(error);
    throw new Error("Menu could not loaded");
  }

  return menu;
}

export async function getOrder(id) {
  /* тут другое имя orders */
  let { data: orders, error } = await supabase.from("orders").select("*").eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Order could not loaded");
  }
  return orders[0];
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase.from("orders").insert(newOrder).select();

  if (error) {
    console.log(error);
  }

  return data[0];
}
