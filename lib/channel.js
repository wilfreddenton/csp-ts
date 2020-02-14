"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Channel = /** @class */ (function () {
    function Channel(zero) {
        this.buffer = [];
        this.waiters = [];
        this.closed = false;
        this.zero = zero;
    }
    Channel.prototype.send = function (item) {
        if (this.closed) {
            throw new Error('send on closed channel');
        }
        else if (this.waiters.length) {
            this.waiters.shift()(item);
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
                _this.waiters.push(resolve);
            }
        });
    };
    Channel.prototype.close = function () {
        this.closed = true;
        this.buffer.length = 0;
        while (this.waiters.length) {
            this.waiters.shift()(this.zero);
        }
    };
    return Channel;
}());
exports.default = Channel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFNRSxpQkFBWSxJQUFPO1FBTFgsV0FBTSxHQUFhLEVBQUUsQ0FBQTtRQUNyQixZQUFPLEdBQTBCLEVBQUUsQ0FBQTtRQUNuQyxXQUFNLEdBQUcsS0FBSyxDQUFBO1FBSXBCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBTztRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtTQUMxQzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdkI7SUFDSCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxLQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbkI7aUJBQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTthQUM3QjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNqQztJQUNILENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQyJ9