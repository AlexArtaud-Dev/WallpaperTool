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
         this.parsedJson = this.readJson(path);
     }

     readJson(path) {
          let json = fs.readFileSync(path, 'utf8');
          if (!json) {
               throw new Error("File not found");
          }
          return JSON.parse(json);
     }

     // method getJson
     getJson() {
          return this.parsedJson;
     }

     // method getJsonByKey
    getJsonByKey(key) {
         if (this.parsedJson[key]) {
             return this.parsedJson[key];
         }else{
             throw new Error("Key not found");
         }

     }

}
module.exports = JsonReader;
