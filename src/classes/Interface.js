const inquirer = require('inquirer');
const Wallpaper = require("wallpaper");

class Interface {

    constructor(availableWallpapers) {
        this.availableWallpapers = availableWallpapers;
    }

    async getWallpaper() {
        console.clear();
        const { wallpaper } = await inquirer.prompt([
            {
                type: 'list',
                name: 'wallpaper',
                message: 'Select a wallpaper',
                choices: this.availableWallpapers
            }
        ]);
        return wallpaper;
    }

    setWallpaper(availableWallpapers, wallpaper) {
        if (wallpaper){
            Wallpaper.set(availableWallpapers[wallpaper]).then(r => {
                console.clear();
                console.log(`Wallpaper set to: ${availableWallpapers[wallpaper]}`);
                process.exit(0);
            });
        }
    }

}
module.exports = Interface;
