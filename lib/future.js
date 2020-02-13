"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Future = /** @class */ (function () {
    function Future() {
        var _this = this;
        this.resolve = function () { return undefined; };
        this.reject = function () { return undefined; };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    Future.prototype.get = function () {
        return this.promise;
    };
    return Future;
}());
exports.default = Future;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnV0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Z1dHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBS0U7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBWSxPQUFBLFNBQVMsRUFBVCxDQUFTLENBQUE7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFZLE9BQUEsU0FBUyxFQUFULENBQVMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7WUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsb0JBQUcsR0FBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMifQ==