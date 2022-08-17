import all from "it-all"

export default async function it_map() {
  const values = [0, 1, 2, 3, 4]
  const result = await all(values)
  console.log("result: " + result)
}