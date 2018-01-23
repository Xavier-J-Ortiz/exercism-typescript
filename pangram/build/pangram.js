"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pangram {
    constructor(sentence) {
        this.answer_array = [];
        this.char_array = sentence.toLowerCase().split('');
    }
    isPangram() {
        if (this.char_array.length === 0) {
            return false;
        }
        const pattern = new RegExp("[a-z]");
        while (this.char_array.length !== 0 && this.answer_array.length !== 26) {
            const popped_char = this.char_array.pop();
            const letter = popped_char !== undefined ? popped_char : "";
            if (pattern.test(letter) && this.answer_array.indexOf(letter) === -1) {
                this.answer_array.push(letter);
            }
        }
        if (this.answer_array.length === 26) {
            return true;
        }
        return false;
    }
}
exports.default = Pangram;
//# sourceMappingURL=pangram.js.map