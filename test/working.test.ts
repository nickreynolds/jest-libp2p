import uuidTest from "../src/uuidTest"
import uint8arrays from "../src/uint8arrays"
import it_map from "../src/it-map"
import it_all from "../src/it-all"
import portMapper from "../src/portMapper2"

test('portMapper - javascript', async () => {
    const s = await portMapper();
    console.log("s: ", s)
})

test('it-all', async () => {
    const node = await it_all()
    console.log("node: ", node)
})
test('it-map', async () => {
    const node = await it_map()
    console.log("node: ", node)
})

test (`create uuid`, () => {
    const u = uuidTest()
    console.log("uuid: ", u)
})

test('uint8arrays', async () => {
    const node = await uint8arrays()
    console.log("node: ", node)
})