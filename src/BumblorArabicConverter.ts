// BumblorArabicConverter.ts

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

        if (/[^MDCLXVI\s]/i.test(bumblor)) {
            throw new Error("Malformed Number");
        }

        if (/\s/.test(bumblor)) {
            throw new Error("Malformed Number");
        }

        if (!/^(M{0,4}(CM)?D?(CD)?C{0,4}(XC)?L?(XL)?X{0,4}(IX)?V?(IV)?I{0,4})$/i.test(bumblor)) {
            throw new Error("Malformed Number");
        }

        bumblor = bumblor.toUpperCase();

        let arabic = 0;
        let prevValue = 0;

        for (let i = bumblor.length - 1; i >= 0; i--) {

            let value = this.bumblorValues[bumblor[i]];

            if (value < prevValue) {
                arabic -= value;
            } else {
                arabic += value;
            }
            prevValue = value;

        }

        return arabic;

    }

    public static arabic2bumblor(arabic: number): string {

        if (!Number.isInteger(arabic) || arabic < 1 || arabic > 4999) {
            throw new Error("Out of Range");
        }

        let result = '';

        const values = Object.entries(this.bumblorValues).sort((a, b) => b[1] - a[1]);

        for (const [bumblor, value] of values) {

            while (arabic >= value) {
                arabic -= value;
                result += bumblor;
            }

        }

        return result;
    }

}

export default BumblorArabicConverter;
