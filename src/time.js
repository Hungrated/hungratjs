/**
 * 时间模块
 * @module src/time
 * @see module:src/time
 * @author Hungrated <zhang295415658@qq.com>
 * @access public
 */

let Time = (function () {
    let Time = function (config) {
    };

    /**
     * 将一位数字转化为两位数字的字符串
     * @function _convert
     * @access private
     * @returns {String} digitString 两位数字的字符串
     */
    let _convert = (digit) => {
        if (digit < 10) return '0' + digit;
        else return digit.toString();
    };

    /**
     * 根据参数返回相应的时间字符串
     * @function _getDate
     * @access private
     * @param {Object} time
     * @returns {String} timeString 时间字符串
     */
    let _getDate = (time) => {
        let curTime = null;

        if (!time) {
            curTime = new Date();
        } else if (typeof time === 'object') {
            curTime = new Date(time);
        } else {
            return 'time: argument format error'
        }

        let year = curTime.getFullYear();
        let month = _convert(curTime.getMonth() + 1);
        let day = _convert(curTime.getDate());
        let hour = _convert(curTime.getHours());
        let minute = _convert(curTime.getMinutes());
        let second = _convert(curTime.getSeconds());

        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' +
            second;
    };

    /**
     * 获取当前时间字符串
     * @function getDate
     * @access public
     * @returns {String} curTimeString 当前时间字符串
     */
    Time.prototype.now = () => {
        return _getDate(null);
    };

    /**
     * Get a time string.
     * @function getDate
     * @access public
     * @param {Object} time 一个Date对象
     * @returns {String} timeString 时间字符串
     */
    Time.prototype.getTimeString = (time) => {
        return _getDate(time);
    };

    return Time;
})();

module.exports = Time;
