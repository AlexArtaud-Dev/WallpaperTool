const fs = require("fs");


class FolderScanner {
    constructor(path) {
        this.path = path;
    }

    scan() {
        return new Promise((resolve, reject) => {
            fs.readdir(this.path, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    // create a new array to store the files absolute path with the first three letters of the file name as the key
                    let filesMap = {};
                    files.forEach(file => {
                        filesMap[file.substring(0, 3)] = this.path + "/" + file;
                    });
                    resolve(filesMap);
                }
            });
        });
    }
}

module.exports = FolderScanner;
