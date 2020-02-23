"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var protolude_1 = require("protolude");
var BufferedChannel = /** @class */ (function () {
    function BufferedChannel(zero, length) {
        if (length === void 0) { length = Number.MAX_SAFE_INTEGER; }
        this.buffer = [];
        this.waiters = [];
        this.closed = false;
        this.zero = zero;
        this.slotsRemaining = length;
    }
    BufferedChannel.prototype.send = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.closed) {
                reject(new Error('send on closed channel'));
            }
            else if (_this.waiters.length) {
                resolve(_this.waiters.shift()(item));
            }
            else {
                if (_this.slotsRemaining > 0) {
                    resolve(protolude_1.const_(undefined, _this.buffer.push({ item: item })));
                }
                else {
                    _this.buffer.push({ item: item, resolveSender: resolve });
                }
                _this.slotsRemaining -= 1;
            }
        });
    };
    BufferedChannel.prototype.receive = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.closed) {
                resolve(_this.zero);
            }
            else if (_this.buffer.length) {
                var _a = _this.buffer.shift(), item = _a.item, resolveSender = _a.resolveSender;
                if (resolveSender !== undefined)
                    resolveSender();
                resolve(item);
                _this.slotsRemaining += 1;
            }
            else {
                _this.waiters.push(resolve);
            }
        });
    };
    BufferedChannel.prototype.close = function () {
        this.buffer.forEach(function (_a) {
            var resolveSender = _a.resolveSender;
            if (resolveSender !== undefined)
                resolveSender();
        });
        this.buffer.length = 0;
        while (this.waiters.length) {
            this.waiters.shift()(this.zero);
        }
        this.closed = true;
    };
    return BufferedChannel;
}());
exports.BufferedChannel = BufferedChannel;
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel(zero) {
        return _super.call(this, zero, 0) || this;
    }
    return Channel;
}(BufferedChannel));
exports.Channel = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUVsQztJQU9FLHlCQUFZLElBQU8sRUFBRSxNQUF3QztRQUF4Qyx1QkFBQSxFQUFBLFNBQWlCLE1BQU0sQ0FBQyxnQkFBZ0I7UUFOckQsV0FBTSxHQUE4QyxFQUFFLENBQUE7UUFDdEQsWUFBTyxHQUF1QixFQUFFLENBQUE7UUFDaEMsV0FBTSxHQUFHLEtBQUssQ0FBQTtRQUtwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQTtJQUM5QixDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQU87UUFBWixpQkFnQkM7UUFmQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7YUFDNUM7aUJBQU0sSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNyQztpQkFBTTtnQkFDTCxJQUFJLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFO29CQUMzQixPQUFPLENBQUMsa0JBQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUN2RDtxQkFBTTtvQkFDTCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO2lCQUNuRDtnQkFFRCxLQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQTthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFBQSxpQkFhQztRQVpDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ25CO2lCQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUEseUJBQThDLEVBQTVDLGNBQUksRUFBRSxnQ0FBc0MsQ0FBQTtnQkFDcEQsSUFBSSxhQUFhLEtBQUssU0FBUztvQkFBRSxhQUFhLEVBQUUsQ0FBQTtnQkFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNiLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFBO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBaUI7Z0JBQWYsZ0NBQWE7WUFDbEMsSUFBSSxhQUFhLEtBQUssU0FBUztnQkFBRSxhQUFhLEVBQUUsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQVFRLDBDQUFlO0FBTnhCO0lBQXlCLDJCQUFrQjtJQUN6QyxpQkFBWSxJQUFPO2VBQ2pCLGtCQUFNLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBeUIsZUFBZSxHQUl2QztBQUV5QiwwQkFBTyJ9