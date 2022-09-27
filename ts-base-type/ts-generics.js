var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var valueMerge = function (valueOne, valueTwo) {
    return __spreadArray(__spreadArray([], valueOne, true), [valueTwo], false);
};
var studentOne = valueMerge([1, 2, 3], "name");
console.log(studentOne);
