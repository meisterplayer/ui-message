const messageStore = {

};

class MessageStore {
    /**
     * Store a message by a code.
     *
     * @param {[Object.<string>] | Object.<string>} messages Either a single
     *     message or an array of messages.
     */
    static setMessages(messages) {
        if (!(Array.isArray(messages))) {
            messages = [messages];
        }

        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];

            if (!message.code) {
                console.warn('Message does not have property code, skipping message: ', message);
                continue;
            }

            messageStore[message.code] = message;
        }
    }

    /**
     * Fetch a message by its code.
     *
     * @param {string} code Code for the message you want to retrieve.
     * @return {Object.<string> | undefined} Object containing the strings for the message.
     */
    static getMessage(code) {
        return messageStore[code];
    }
}

export default MessageStore;
