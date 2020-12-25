const Cal = {
    
    /**
     * Forgot the functions? Use this command to get a list of them!
     */
    async help() {
        console.log();
        return Cal;
    },

    /**
     * Subtracts the given values (exact)
     * @param {String} Subtractor Subtracting Value (number that is going to subtract)
     * @param {String} Subtracted Value that is going to get subtracted from
     * @example Cal.subtract(3, 2)
     */

    async subtract(Subtracted, Subtractor) {
        const subtractResult = Subtracted - Subtractor;

        return subtractResult;
    },

    /**
     * Adds the given values (exact)
     * @param {String} Adder Adding value (number that is going to add)
     * @param {String} Added Value that is going to get added to
     * @example Cal.add(4, 1)
     */

    async add(Added, Adder) {
        const addResult = Added + Adder;

        return addResult;
    },

    /**
     * Divides the given values (exact)
     * @param {String} Divider Dividing Value (number that is going to divide)
     * @param {String} Divided Value that is going to get divided
     * @example Cal.divide(4, 2)
     */

    async divide(Divided, Divider) {
        const divideResult = Divided / Divider;

        return divideResult;
    },

    /**
    * Multiplies the given values (exact)
    * @param {String} Multiplier Multiplying Value (number that is going to multiply)
    * @param {String} Multiplied Value that is going to get multiplied
    * @example Cal.multiply(4, 2)
    */

    async multiply(Multiplied, Multiplier) {
        const multiplyResult = Multiplied * Multiplier;

        return multiplyResult;
    },

    /**
    * Gets the square root of the given value (exact)
    * @param {String} Numberr The number that you want the square root of
    * @example Cal.sqrt(81)
    */

    async sqrt(Numberr) {
        
        const square = (n, i, j) => {
            let mid = (i + j) / 2;
            let mul = mid * mid;
            if ((mul === n) || (Math.abs(mul - n) < 0.00001)) {
                return mid;
            } else if (mul < n) {
                return square(n, mid, j);
            } else {
                return square(n, i, mid);
            }
        }
        
        let i = 1;
        const found = false;
        while (!found) {
            // If n is a perfect square
            if (i * i === Numberr) {
                return i;
            } else if (i * i > Numberr) {
                let res = square(Numberr, i - 1, i);
                return res;
            };
                i++;
        }

    },

    /**
     * Returns a random number between the max and min amount
     * @param {String} Minimum The minimum amount
     * @param {String} Maximum The maximum amount
     * @example Cal.random(1, 5)
    */

    async random(Min, Max) {
        const randomResult = Math.floor(Math.random() * Max + Min);

        return randomResult;
    },

};

module.exports = Object.assign(Cal, Cal.help());