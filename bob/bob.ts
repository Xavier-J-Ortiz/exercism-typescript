import {isString} from "util"

class Bob {
    hey(statement: string): string {
        let answer: string = "You have a problem."
        let containsWord: boolean = false

        if (this.isSilent(statement)){
            return 'Fine. Be that way!'
        }
        else if (isString(statement)) {
            let words: string[] = statement.split(" ")
            for (let i = 0; i < words.length; i += 1) {
                let word: string = this.cleanUpWord(words[i])
                containsWord = (containsWord || this.isWord(word))
                if (!this.isUpperCase(word)) {
                    answer = "Whatever."
                    break
                }
                else {
                    answer = 'Whoa, chill out!'
                }
            }
        }

        if (!containsWord) {
            if (statement.slice(-1) === '?') {
                answer = 'Sure.'
            }
            else {
                answer = 'Whatever.'
            }
        }
        else if (answer !== 'Whoa, chill out!' && statement.slice(-1) === '?') {
            answer = "Sure."
        }
        return answer
    }

    isUpperCase(word: string) {
        if (word === word.toUpperCase()) {
            return true
        }
        return false
    }

    isWord(word: string) {
        const depunctuated_word: string = this.cleanUpWord(word)
        return isNaN(Number(depunctuated_word))
    }
    cleanUpWord(word: string) {
        return word.replace(/[.,\/#!\?$%\^&\*;:{}=\-_`~()]/g, "")
    }

    isSilent(word: string) {
        return word.replace(/\s*/, "") === ''
    }
}

export default Bob