export default class Money {

    constructor(private value: number) {

    }

    getInteger(): number {
        let str = this.value.toString().replace(".", "");
        return parseInt(str);
    }

    getValue(): number {
        return this.value;
    }

    add(amount: number) {
        const factor = 1000000000;
        let a = this.value * factor;
        let b = amount * factor;
        console.log(a);
        console.log(b);


        let result = (a + b) / factor;
        this.value = result;
    }
}