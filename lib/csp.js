!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.csp=t():e.csp=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1));t.Channel=o.default;var i=n(r(2));t.Future=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.buffer=[],this.waiters=[],this.closed=!1,this.zero=e}return e.prototype.send=function(e){if(this.closed)throw new Error("send on closed channel");this.waiters.length?this.waiters.shift()(e):this.buffer.push(e)},e.prototype.receive=function(){var e=this;return new Promise((function(t){e.closed?t(e.zero):e.buffer.length?t(e.buffer.shift()):e.waiters.push(t)}))},e.prototype.close=function(){for(this.closed=!0,this.buffer.length=0;this.waiters.length;)this.waiters.shift()(this.zero)},e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.resolve=function(){},this.reject=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.get=function(){return this.promise},e}();t.default=n}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc3Avd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2NzcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jc3AvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL2NoYW5uZWwudHMiLCJ3ZWJwYWNrOi8vY3NwLy4vc3JjL2Z1dHVyZS50cyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ3aW5kb3ciLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX19pbXBvcnREZWZhdWx0IiwidGhpcyIsIm1vZCIsImNoYW5uZWxfMSIsIkNoYW5uZWwiLCJkZWZhdWx0IiwiZnV0dXJlXzEiLCJGdXR1cmUiLCJ6ZXJvIiwiYnVmZmVyIiwid2FpdGVycyIsImNsb3NlZCIsInNlbmQiLCJpdGVtIiwiRXJyb3IiLCJsZW5ndGgiLCJzaGlmdCIsInB1c2giLCJyZWNlaXZlIiwiX3RoaXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNsb3NlIiwicmVqZWN0IiwicHJvbWlzZSJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELElBQ1EsbUJBQVhHLFFBQXlCQSxP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QmQsS0FBS1MsUUFBUU0sT0FBYmYsQ0FBcUJZLEdBR3JCWixLQUFLUSxPQUFPUSxLQUFLSixJQUd6QlQsRUFBUVIsVUFBVXNCLFFBQVUsV0FDeEIsSUFBSUMsRUFBUWxCLEtBQ1osT0FBTyxJQUFJbUIsU0FBUSxTQUFVQyxHQUNyQkYsRUFBTVIsT0FDTlUsRUFBUUYsRUFBTVgsTUFFVFcsRUFBTVYsT0FBT00sT0FDbEJNLEVBQVFGLEVBQU1WLE9BQU9PLFNBR3JCRyxFQUFNVCxRQUFRTyxLQUFLSSxPQUkvQmpCLEVBQVFSLFVBQVUwQixNQUFRLFdBR3RCLElBRkFyQixLQUFLVSxRQUFTLEVBQ2RWLEtBQUtRLE9BQU9NLE9BQVMsRUFDZGQsS0FBS1MsUUFBUUssUUFDaEJkLEtBQUtTLFFBQVFNLE9BQWJmLENBQXFCQSxLQUFLTyxPQUczQkosRUF2Q2lCLEdBeUM1QjVDLEVBQVE2QyxRQUFVRCxHLDZCQzFDbEIxQixPQUFPQyxlQUFlbkIsRUFBUyxhQUFjLENBQUV5QixPQUFPLElBQ3RELElBQUlzQixFQUF3QixXQUN4QixTQUFTQSxJQUNMLElBQUlZLEVBQVFsQixLQUNaQSxLQUFLb0IsUUFBVSxhQUNmcEIsS0FBS3NCLE9BQVMsYUFDZHRCLEtBQUt1QixRQUFVLElBQUlKLFNBQVEsU0FBVUMsRUFBU0UsR0FDMUNKLEVBQU1FLFFBQVVBLEVBQ2hCRixFQUFNSSxPQUFTQSxLQU12QixPQUhBaEIsRUFBT1gsVUFBVWYsSUFBTSxXQUNuQixPQUFPb0IsS0FBS3VCLFNBRVRqQixFQWJnQixHQWUzQi9DLEVBQVE2QyxRQUFVRSIsImZpbGUiOiJjc3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjc3BcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3NwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjaGFubmVsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2hhbm5lbFwiKSk7XG5leHBvcnRzLkNoYW5uZWwgPSBjaGFubmVsXzEuZGVmYXVsdDtcbnZhciBmdXR1cmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9mdXR1cmVcIikpO1xuZXhwb3J0cy5GdXR1cmUgPSBmdXR1cmVfMS5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3h6UkVGQkswSTdRVUZIZEVJc2EwSkJTRVlzYVVKQlFVOHNRMEZIUlR0QlFVWm9RaXh2UkVGQk5rSTdRVUZGV0N4cFFrRkdXQ3huUWtGQlRTeERRVVZYSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIENoYW5uZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbCh6ZXJvKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gW107XG4gICAgICAgIHRoaXMud2FpdGVycyA9IFtdO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnplcm8gPSB6ZXJvO1xuICAgIH1cbiAgICBDaGFubmVsLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlbmQgb24gY2xvc2VkIGNoYW5uZWwnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLndhaXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLndhaXRlcnMuc2hpZnQoKShpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnJlY2VpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMuemVybyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5idWZmZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShfdGhpcy5idWZmZXIuc2hpZnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53YWl0ZXJzLnB1c2gocmVzb2x2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idWZmZXIubGVuZ3RoID0gMDtcbiAgICAgICAgd2hpbGUgKHRoaXMud2FpdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMud2FpdGVycy5zaGlmdCgpKHRoaXMuemVybyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDaGFubmVsO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoYW5uZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMmhoYm01bGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqYUdGdWJtVnNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdTVUZOUlN4cFFrRkJXU3hKUVVGUE8xRkJURmdzVjBGQlRTeEhRVUZoTEVWQlFVVXNRMEZCUVR0UlFVTnlRaXhaUVVGUExFZEJRVEJDTEVWQlFVVXNRMEZCUVR0UlFVTnVReXhYUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZCTzFGQlNYQkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZCTzBsQlEyeENMRU5CUVVNN1NVRkZSQ3h6UWtGQlNTeEhRVUZLTEZWQlFVc3NTVUZCVHp0UlFVTldMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU5tTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNRMEZCUVR0VFFVTXhRenRoUVVGTkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdFRRVU0xUWp0aFFVRk5PMWxCUTB3c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN1UwRkRka0k3U1VGRFNDeERRVUZETzBsQlJVUXNlVUpCUVU4c1IwRkJVRHRSUVVGQkxHbENRVlZETzFGQlZFTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGRExFOUJRVTg3V1VGRGVrSXNTVUZCU1N4TFFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5tTEU5QlFVOHNRMEZCUXl4TFFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3WVVGRGJrSTdhVUpCUVUwc1NVRkJTU3hMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlR0blFrRkROMElzVDBGQlR5eERRVUZETEV0QlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlFUdGhRVU0zUWp0cFFrRkJUVHRuUWtGRFRDeExRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdGhRVU16UWp0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJRMG9zUTBGQlF6dEpRVVZFTEhWQ1FVRkxMRWRCUVV3N1VVRkRSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUVR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVFN1VVRkRkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVR0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFNDeGpRVUZETzBGQlFVUXNRMEZCUXl4QlFYWkRSQ3hKUVhWRFF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGdXR1cmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRnV0dXJlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH07XG4gICAgICAgIHRoaXMucmVqZWN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIF90aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEZ1dHVyZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgIH07XG4gICAgcmV0dXJuIEZ1dHVyZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBGdXR1cmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lablYwZFhKbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMloxZEhWeVpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk8wbEJTMFU3VVVGQlFTeHBRa0ZQUXp0UlFVNURMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzWTBGQldTeFBRVUZCTEZOQlFWTXNSVUZCVkN4RFFVRlRMRU5CUVVFN1VVRkRjRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4alFVRlpMRTlCUVVFc1UwRkJVeXhGUVVGVUxFTkJRVk1zUTBGQlFUdFJRVU51UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwN1dVRkRla01zUzBGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVFN1dVRkRkRUlzUzBGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVFN1VVRkRkRUlzUTBGQlF5eERRVUZETEVOQlFVRTdTVUZEU2l4RFFVRkRPMGxCUlVRc2IwSkJRVWNzUjBGQlNEdFJRVU5GTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRVHRKUVVOeVFpeERRVUZETzBsQlEwZ3NZVUZCUXp0QlFVRkVMRU5CUVVNc1FVRnFRa1FzU1VGcFFrTWlmUT09Il0sInNvdXJjZVJvb3QiOiIifQ==