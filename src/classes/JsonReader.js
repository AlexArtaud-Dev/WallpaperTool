const fs = require("fs");


// Comment: constructor
// Class: JsonReader
// Description: JsonReader class
// Method: constructor
// Parameters:
// - filePath: string
// Return: void
// Throws:
// - File not found error
// - Syntax error
// - Unexpected end of JSON input
// - Invalid or malformed JSON
// - JSON is not an object
class JsonReader {

     constructor(path) {
         this.path = path;
     }

     readJson(path) {
          let json = fs.readFileSync(path, 'utf8');
          return new Promise((resolve, reject) => {
               try {
                   if (json){
                       resolve(JSON.parse(json));
                   } else {
                       reject(new Error("File not found"));
                   }
               } catch (e) {
                    reject(e);
               }
          });
     }

     // method getJson
     async getJson() {
         this.parsedJson = await this.readJson(this.path);
         console.log(this.parsedJson);
         return this.parsedJson;
     }

     // method getJsonByKey
     async getJsonByKey(key) {
         this.parsedJson = await this.readJson(this.path);
         if (this.parsedJson[key]) {
             return this.parsedJson[key];
         }else{
             throw new Error("Key not found");
         }
     }

     checkIfFileIsNotEmpty(json){
         let JSON = json ? json : fs.readFileSync(this.path, 'utf8');
         return JSON.length === 0;
     }

}
module.exports = JsonReader;
