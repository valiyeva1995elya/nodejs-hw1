let fs = require("fs")
fs.writeFileSync("test.txt", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius incidunt, adipisci natus qui quibusdam magnam temporibus! Veniam ut dolorem nulla? Incidunt vitae non cumque a illo eligendi placeat obcaecati necessitatibus.")

function getFirstWord() {
    return fs.readFileSync("test.txt", { encoding: "utf-8" }).split(" ")[0]
}

function getLastWord() {
    return fs.readFileSync("test.txt", { encoding: "utf-8" }).split(" ").reverse()[0]
}
module.exports = { 
    a: getFirstWord(), 
    b: getLastWord()
}


// module.exports.a = getFirstWord();
// module.exports.b = getLastWord();