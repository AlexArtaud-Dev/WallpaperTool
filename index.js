const { wallpaperDirectory } = require("./config.js");
const JsonReader = require("./src/classes/JsonReader");
const JsonWriter = require("./src/classes/JsonWriter");
const FolderScanner = require("./src/classes/FolderScanner");
const Interface = require("./src/classes/Interface");



// Initialize the JsonReader and JsonWriter and the FolderScanner
const reader = new JsonReader("./src/database/data.json");
const writer = new JsonWriter("./src/database/data.json");
const scanner = new FolderScanner(wallpaperDirectory);

// Scan folder to find new wallpapers
scanner.scan().then(async (data) => {
    writer.write(data);
}).then(() => {
    let bool = true;
    while (bool){
        bool = reader.checkIfFileIsNotEmpty();
    }

    reader.getJson().then(availableWallpapers => {
        if (availableWallpapers !== null) {
            // create an array from all json keys
            const wallpaperKeys = Object.keys(availableWallpapers);

            // Initialize the Interface
            const prompt = new Interface(wallpaperKeys);

            prompt.getWallpaper().then(wallpaper => {
                prompt.setWallpaper(availableWallpapers, wallpaper);
            });

        }else{
            console.log("No wallpapers found");
            process.exit();
        }
    });

})











