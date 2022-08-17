import portMapper from "../src/portMapperNickreynolds"

test('portMapper - typescript - aegir', async () => {
    const s = await portMapper();
    console.log("s: ", s)
})