var process = function (val) {
    if (typeof val === "object"
        && !!val
        && "log" in val
        && typeof val.log === "function") {
        val.log();
    }
};
process({
    log: function () {
        console.log("Passed!");
    }
});
