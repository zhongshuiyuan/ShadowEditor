import Control from './Control';
import UI from './Manager';

/**
 * 颜色选择器
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function Color(options) {
    Control.call(this, options);
    options = options || {};

    this.value = options.value || null;
    this.cls = options.cls || 'Color';
    this.style = options.style || null;

    this.onChange = options.onChange || null;
};

Color.prototype = Object.create(Control.prototype);
Color.prototype.constructor = Color;

Color.prototype.render = function () {
    this.dom = document.createElement('input');

    this.dom.className = this.cls;

    if (this.style) {
        Object.assign(this.dom.style, this.style);
    }

    try {
        this.dom.type = 'color';

        if (this.value && this.value.toString().startsWith('#')) { // #ffffff
            this.setValue(this.value);
        } else if (this.value) { // 0xffffff
            this.setHexValue(this.value);
        } else {
            this.dom.value = '#ffffff';
        }
    } catch (exception) {
        console.warn(exception);
    }

    this.parent.appendChild(this.dom);

    if (this.onChange) {
        this.dom.addEventListener('change', this.onChange.bind(this));
    }
};

Color.prototype.getValue = function () {
    return this.dom.value;
};

Color.prototype.getHexValue = function () {
    return parseInt(this.dom.value.substr(1), 16);
};

Color.prototype.setValue = function (value) {
    this.dom.value = value;
    return this;
};

Color.prototype.setHexValue = function (hex) {
    this.dom.value = '#' + ('000000' + hex.toString(16)).slice(- 6);
    return this;
};

UI.addXType('color', Color);

export default Color;