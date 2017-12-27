function getDate(time) {
    let curTime = null;

    if (!time) {
        curTime = new Date();
    } else if (typeof time === 'object') {
        curTime = new Date(time);
    } else {
        return 'time: argument format error';
    }

    let year = curTime.getFullYear();
    let month = convert(curTime.getMonth() + 1);
    let day = convert(curTime.getDate());
    let hour = convert(curTime.getHours());
    let minute = convert(curTime.getMinutes());
    let second = convert(curTime.getSeconds());

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

function convert(digit) {
    if (digit < 10) return '0' + digit;
    else return digit.toString();
}

module.exports = {
    now() {
        return getDate();
    },
    getTimeString(time) {
        return getDate(time);
    }
};