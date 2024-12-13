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
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () {
        console.log("The washing machine is on");
    };
    WashingMachine.prototype.turnOff = function () {
        console.log("The washing machine is off");
    };
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerator.prototype.turnOn = function () {
        console.log("The refrigerator is on");
    };
    Refrigerator.prototype.turnOff = function () {
        console.log("The refrigerator is off");
    };
    return Refrigerator;
}(Appliance));
var technique = [new WashingMachine(), new Refrigerator()];
technique.forEach(function (unit) {
    unit.turnOn();
    unit.turnOff();
});
