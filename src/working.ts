import { v4 as uuid } from 'uuid';
export default async function working() {
  const u = await uuid()
  return u
}