import portMapper from "../src/portMapper"

test('portMapper - typescript - aegir', async () => {
    const s = await portMapper();
    console.log("s: ", s)
})