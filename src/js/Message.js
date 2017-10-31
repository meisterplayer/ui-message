import MessageStore from './utils/MessageStore';
import Template from './template.build';
import packageJson from '../../package.json';

class Message extends Meister.UiPlugin {
    constructor(config, meister) {
        super(config, meister);

        this.wrapper = document.createElement('div');
        this.wrapper.innerHTML = Template;
        this.wrapper = this.wrapper.firstChild;

        this.headTitle = this.wrapper.querySelector('#pf-error-head-title');
        this.title = this.wrapper.querySelector('#pf-error-title');
        this.message = this.wrapper.querySelector('#pf-error-message');
        this.errorCode = this.wrapper.querySelector('#pf-error-code');

        this.defaultHeadTitle = this.config.defaultHeadTitle || meister.Localization.get('SOMETHING_WENT_WRONG');

        this.on('error', this.onError.bind(this));
        this.on('itemUnloaded', this.onItemUnloaded.bind(this));
    }

    static get pluginName() {
        return 'Message';
    }

    static get pluginVersion() {
        return packageJson.version;
    }

    onItemUnloaded() {
        this.wrapper.style.display = 'none';
    }

    onError(error) {
        if (!error) return;

        const messageOverride = MessageStore.getMessage(error.code);
        if (messageOverride) {
            error = messageOverride; // eslint-disable-line
        }

        this.wrapper.style.display = 'block';
        this.message.innerHTML = error.message;
        this.errorCode.innerHTML = error.code;
        this.title.innerHTML = (error.options.title ? error.options.title : '');
        this.headTitle.innerHTML = (error.options.headTitle ? error.options.headTitle : this.defaultHeadTitle);
    }

    // Override default
    onUiReady() {
        this.meister.defaultWrapper.insertBefore(this.wrapper, this.meister.defaultWrapper.childNodes[0]);
    }
}

Meister.registerPlugin(Message.pluginName, Message);

// Expose the MessageStore through the Meister object.
if (!window.Meister.MessageStore) window.Meister.MessageStore = MessageStore;

export default Message;
