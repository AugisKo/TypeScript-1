var Trikampis = (function () {
    function Trikampis(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spaudintiDuomenis = function () {
        console.log("Krastine a: " + this.a);
        console.log("Krastine b: " + this.b);
        console.log("Krastine b: " + this.c);
        console.log("Perimetras: " + this.perimetras());
        console.log("---------");
    };
    Trikampis.prototype.perimetras = function () {
        return this.a + this.b + this.c;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(2, 3, 4);
var trikampis2 = new Trikampis(6, 3, 8);
trikampis1.spaudintiDuomenis();
trikampis2.spaudintiDuomenis();
