import Window from './Window';
import UI from './Manager';

/**
 * 提示输入框
 * @author tengge / https://github.com/tengge1
 * @param {*} options 选项
 */
function Prompt(options) {
    Window.call(this, options);
    options = options || {};

    this.title = options.title || L_PLEASE_INPUT;
    this.label = options.label || '';
    this.value = options.value || '';

    this.okText = options.okText || L_OK;
    this.cancelText = options.cancelText || L_CANCEL;

    this.width = options.width || '320px';
    this.height = options.height || '150px';

    this.bodyStyle = options.bodyStyle || {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: this.label == null || this.label.trim() == '' ? 'center' : 'space-around'
    };

    this.callback = options.callback || null;
}

Prompt.prototype = Object.create(Window.prototype);
Prompt.prototype.constructor = Prompt;

Prompt.prototype.render = function () {
    this.children = [{
        xtype: 'label',
        text: this.label
    }, {
        xtype: 'input',
        id: `${this.id}-input`,
        value: this.value
    }];

    this.buttons = [{
        xtype: 'button',
        text: this.okText,
        onClick: (event) => {
            var result = true;

            var value = UI.get(`${this.id}-input`).dom.value;

            if (this.callback) {
                result = this.callback.call(this, event, value);
            }

            if (result !== false) {
                this.hide();
            }
        }
    }, {
        xtype: 'button',
        text: this.cancelText,
        onClick: (event) => {
            this.hide();
        }
    }];

    Window.prototype.render.call(this);
};

UI.addXType('prompt', Prompt);

export default Prompt;