import map from "it-map"

export default async function it_map() {
  const values = [0, 1, 2, 3, 4]
  const result = await map(values, (val) => val++)
  console.log("result: " + result)
}