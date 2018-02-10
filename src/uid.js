/**
 * Uid模块
 * @module uid
 * @see module:uid
 * @author Hungrated <zhang295415658@qq.com>
 */

let Uid = (function () {
    let Uid = () => {
        return this;
    };

    /**
     * 生成一个uid
     * @function generate
     * @access public
     * @returns {String} uid字符串
     */
    Uid.prototype.generate = () => {
        return (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);
    };

    return Uid;
})();

module.exports = Uid;
