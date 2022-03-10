"use strict";
exports.__esModule = true;
var Products_1 = require("./Products");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts();
result = _productService.getById(2);
var p = new Products_1.Product();
p.id = 2;
p.name = 'Iphone 7',
    p.price = 6000,
    p.category = 'Telefon';
_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
