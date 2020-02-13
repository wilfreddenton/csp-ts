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
var eventemitter3_1 = require("eventemitter3");
var Emitter = /** @class */ (function (_super) {
    __extends(Emitter, _super);
    function Emitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Emitter;
}(eventemitter3_1.EventEmitter));
var Channel = /** @class */ (function () {
    function Channel(zero) {
        this.closed = false;
        this.buffer = [];
        this.emitter = new Emitter();
        this.zero = zero;
    }
    Channel.prototype.send = function (item) {
        if (this.closed) {
            throw new Error('send on closed channel');
        }
        else if (this.emitter.listenerCount('send')) {
            this.emitter.emit('send', item);
        }
        else {
            this.buffer.push(item);
        }
    };
    Channel.prototype.receive = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.closed) {
                resolve(_this.zero);
            }
            else if (_this.buffer.length) {
                resolve(_this.buffer.shift());
            }
            else {
                _this.emitter.once('send', function (item) { return resolve(item); });
            }
        });
    };
    Channel.prototype.close = function () {
        this.send(this.zero);
        this.buffer.length = 0;
        this.closed = true;
    };
    return Channel;
}());
exports.default = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE0QztBQU01QztJQUF5QiwyQkFBOEI7SUFBdkQ7O0lBQXlELENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQUExRCxDQUF5Qiw0QkFBWSxHQUFxQjtBQUUxRDtJQU1FLGlCQUFZLElBQU87UUFGWCxXQUFNLEdBQUcsS0FBSyxDQUFBO1FBR3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUssQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLElBQU87UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUE7U0FDMUM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdkI7SUFDSCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbkI7aUJBQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTthQUM3QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUE7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQyJ9