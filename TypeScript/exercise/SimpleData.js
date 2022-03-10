"use strict";
exports.__esModule = true;
exports.SimpleData = void 0;
var Products_1 = require("./Products");
var SimpleData = /** @class */ (function () {
    function SimpleData() {
        this.products = new Array(new Products_1.Product(1, "Samsung Galaxy 7,", "Telefon", 5000), new Products_1.Product(2, "Samsung Galaxy 6,", "Telefon", 3000), new Products_1.Product(3, "Samsung Galaxy 8,", "Telefon", 7000), new Products_1.Product(4, "Samsung Galaxy 5,", "Telefon", 2000));
    }
    SimpleData.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleData;
}());
exports.SimpleData = SimpleData;
