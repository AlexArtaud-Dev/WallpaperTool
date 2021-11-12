const fs = require("fs");

class JsonWriter {

    constructor(filePath) {
        this.filePath = filePath;
    }

    write(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }

}


module.exports = JsonWriter;
