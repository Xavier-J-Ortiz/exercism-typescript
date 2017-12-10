class Transcriptor {
    toRna(sequence: string) {
        const element_change: string[] = []

        sequence.split("").forEach((element) => {
            switch (element) {
                case 'A': {
                    element_change.push('U')
                    break
                }
                case 'T': {
                    element_change.push('A')
                    break
                }
                case 'C': {
                    element_change.push('G')
                    break
                }
                case 'G': {
                    element_change.push('C')
                    break
                }
                default: { throw new TypeError("Invalid input DNA.") }
            }
        })
        return element_change.join("")
    }
}

export default Transcriptor