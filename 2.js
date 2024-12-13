var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var ColoredShape = /** @class */ (function (_super) {
    __extends(ColoredShape, _super);
    function ColoredShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColoredShape.prototype.displayColor = function () {
        console.log("Color: ".concat(this.color));
    };
    return ColoredShape;
}(Shape));
var ColoredCircle = /** @class */ (function (_super) {
    __extends(ColoredCircle, _super);
    function ColoredCircle(radius, color) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.color = color;
        return _this;
    }
    ColoredCircle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return ColoredCircle;
}(ColoredShape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(width, height, color) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        return _this;
    }
    ColoredRectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return ColoredRectangle;
}(ColoredShape));
var circle = new ColoredCircle(3, "green");
var rectangle = new ColoredRectangle(8, 4, "yellow");
var shapes = [circle, rectangle];
shapes.forEach(function (shape) {
    console.log("Area: ".concat(shape.calculateArea()));
    shape.displayColor();
});
