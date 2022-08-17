import { v4 as uuid } from 'uuid';
export default function uuidTest() {
  const u = uuid()
  console.log("u: ", u)
  return u
}