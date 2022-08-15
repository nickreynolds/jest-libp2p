import failing from "../src/failing"

test('setup libp2p - this fails', async () => {
    const node = await failing()
    console.log("node: ", node)
})
