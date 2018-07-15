import Control from './Control';
import XType from './XType';

/**
 * 标签控件
 * @param {*} options 
 */
function Label(options) {
    Control.call(this, options);
    options = options || {};

    this.id = options.id || null;
    this.text = options.text || '';
    this.cls = options.cls || null;
    this.style = options.style || null;
};

Label.prototype = Object.create(Control.prototype);
Label.prototype.constructor = Label;

Label.prototype.render = function () {
    this.dom = document.createElement('label');

    if (this.id) {
        this.dom.id = this.id;
    }

    if (this.text) {
        this.setValue(this.text);
    }

    if (this.cls) {
        this.dom.className = this.cls;
    }

    if (this.style) {
        this.dom.style = this.style;
    }

    this.parent.appendChild(this.dom);
};

Label.prototype.getValue = function () {
    return this.dom.textContent;
};

Label.prototype.setValue = function (value) {
    if (value !== undefined) {
        this.dom.textContent = value;
    }
    return this;
};

XType.add('label', Label);

export default Label;