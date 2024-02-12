import Money from "../src/Money";

test("Deve obter um valor inteiro", function () {
    let money = new Money(458.6541);
    expect(money.getInteger()).toBe(4586541);
});

test("Deve efetuar uma adição", function () {
    let money = new Money(0.1);
    money.add(0.2);
    expect(money.getValue()).toBe(0.3);
});

test("Deve efetuar uma adição", function () {
    let money = new Money(0.100000002);
    money.add(0.200000002);
    expect(money.getValue()).toBe(0.300000004);
});