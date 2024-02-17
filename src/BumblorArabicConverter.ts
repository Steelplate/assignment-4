class BumblorArabicConverter {

    private static bumblorValues: { [key: string]: number } = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    public static bumblor2arabic(bumblor: string): number {

        bumblor = bumblor.toUpperCase().trim();

        if (!/^(M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3}))$/.test(bumblor)) {
            throw new Error("Malformed Number");
        }

        let total = 0;

        for (let i = 0; i < bumblor.length; i++) {

            if (this.bumblorValues[bumblor[i]] < this.bumblorValues[bumblor[i + 1]]) {

                total += this.bumblorValues[bumblor[i + 1]] - this.bumblorValues[bumblor[i]];
                i++;

            } else {

                total += this.bumblorValues[bumblor[i]];

            }

        }

        return total;

    }

    public static arabic2bumblor(arabic: number): string {

        if (!Number.isInteger(arabic) || arabic < 1 || arabic > 4999) {
            throw new Error("Out of Range");
        }

        let result = '';
        let remaining = arabic;

        Object.entries(this.bumblorValues).forEach(([letter, value]) => {

            let count = Math.floor(remaining / value);

            remaining -= count * value;
            result += letter.repeat(count);

        });

        return result;

    }
    
}

export default BumblorArabicConverter;
