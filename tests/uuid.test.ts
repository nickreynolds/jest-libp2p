import working from "../src/working"

test (`create uuid`, () => {
    const u = working()
    console.log("uuid: ", u)
})