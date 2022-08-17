import { upnpNat } from '@achingbrain/nat-port-mapper'

export default async function portMapper() {
  const client = await upnpNat({})
  console.log("client: ", client)   
}