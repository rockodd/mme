var CycleCounter = function () {
"use strict";
var minValue = null,
maxValue = null,
value = null,
onChange = null,
onReset = null,
init = function (min, max, start, onChangeFkt, onResetFkt) {
if (isNaN(min) || isNaN(max) || isNaN(start)){
throw new Error("CycleCounter xpects numeric min, max and start values");
} else if ((min > max) || (start < min) || (start > max)) {
throw new Error("CycleCounter xpects min <= start <= max");
}
minValue = min;
maxValue = max;
value = start;
onChange = onChangeFkt;
onReset = onResetFkt;
},
addOne = function () {
if (value < maxValue) {
value++;
} else {
if (onReset) {
onReset();
}
value = minValue;
}
if (onChange) {
onChange();
}
},
reset = function () {
value = minValue;
},
getValue = function () {
return value;
};
return {
init: init,
reset: reset,
addOne: addOne,
getValue: getValue
};
};