import { alloc } from "uint8arrays/alloc";

export default async function something() {
  const lib = alloc(100)
  console.log("lib: ", lib)
}