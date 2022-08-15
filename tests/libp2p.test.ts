// import { createLibp2p } from "libp2p"
import something from "../src/something"
test('setup libp2p', async () => {
    const node = await something()
    console.log("node: ", node)
})