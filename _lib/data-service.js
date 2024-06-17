import { supabase } from "./supabase";

export const getProducts = async function () {
  const { data, error } = await supabase
    .from("Products")
    .select("id, name, colour, picture, price ")
    .order("name");

  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded");
  }

  return data;
};
