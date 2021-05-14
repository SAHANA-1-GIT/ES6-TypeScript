var Circle = {
    radius: 5,
    Area: 50
};
var Employee = {
    name: 'sahana',
    email: 'sahana@gmail.com',
    Salary: 1000,
    onProject: false
};
function printAll() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    for (var _a = 0, objs_1 = objs; _a < objs_1.length; _a++) {
        var i = objs_1[_a];
        prints(i);
    }
}
var prints = function (i) {
    console.log(i);
};
printAll([Circle, Employee]);
