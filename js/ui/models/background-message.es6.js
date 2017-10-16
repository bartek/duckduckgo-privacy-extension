const Parent = window.DDG.base.Model;

/**
 * Background messaging is done via two methods:
 *
 * 1. Passive messages from background -> backgroundMessage model -> subscribing model
 *
 *    The background sends these messages using chrome.runtime.sendMessage({'name': 'value'})
 *    The backgroundMessage model (here) receives the message and forwards the
 *    it to the global event store via model.send(msg)
 *    Other modules that are subscribed to state changes in backgroundMessage are notified
 *
 * 2. Two-way messaging using this.model.fetch() as a passthrough
 *
 *    Each model can use a fetch method to send and receive a response from the background.
 *    Ex: this.model.fetch({'name': 'value'}).then((response) => console.log(response))
 *    Listeners must be registered in the background to respond to messages with this 'name'.
 *
 *    The common fetch method is defined in base/model.es6.js
 */
function BackgroundMessage (attrs) {
    Parent.call(this, attrs);

    // listen for messages from background and
    // notify subscribers
    chrome.runtime.onMessage.addListener((req) => {
        if (req.whitelistChanged) this.send('whitelistChanged')
        if (req.updateTrackerCount) this.send('updateTrackerCount')
        if (req.didResetTrackersData) this.send('didResetTrackersData')
    })
}

BackgroundMessage.prototype = $.extend({},
    Parent.prototype,
    {
        modelName: 'backgroundMessage'
    }
)

module.exports = BackgroundMessage
