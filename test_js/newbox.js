function unpackGiftbox(giftBox, wish) {
    let newbox = [];
    if (giftBox.length > 0) {
        for (i of giftBox) {
            if (Array.isArray(i) && i.length > 0) {
                if (unpackGiftbox(i, wish)) {
                    newbox = newbox.concat(true);
                }
            } else if (i !== "") {
                if (i === wish) {
                    newbox = newbox.concat(true);
                }
            }
        }
    }
    console.log(giftBox, newbox);
    return newbox.length > 0 ? true : false;
    // TODO: 여기에 코드를 작성합니다.
}

//const giftBox = ["pen", [[], "iphone"], ["ps5", ["book", [], "airpods"]]];
//console.log(unpackGiftbox(giftBox, "airpods"));

const giftBox = ["macbook", ["eyephone", [], ["postcard"]], "money"];
console.log(unpackGiftbox(giftBox, "iphone"));
