import NatAPI from "nat-api"

export default async function portMapper() {
  const client = new NatAPI()
  console.log("client: ", client)   
}