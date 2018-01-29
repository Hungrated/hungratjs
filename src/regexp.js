function addCommaFormat(num) {
    return num.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
}

module.exports = {
    addCommaFormat
};

