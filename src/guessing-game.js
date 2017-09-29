class GuessingGame {
    constructor() {
        this.arr = [];
    }

    setRange(min, max) {
        this.min = min;
        for (min = 0; min <= max; min++){
            this.arr[min] = min;
        }
        this.max = this.arr.length - 1;
    }

    guess() {
        this.mid = Math.floor ((this.min + 1 + this.max) / 2.0);
        return this.arr[this.mid];
    }

    lower() {
        return this.max = this.mid;
    }

    greater() {
        return this.min = this.mid;
    }
}



    module.exports = GuessingGame;
