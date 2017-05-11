const bel = require('./../../node_modules/bel');

module.exports = function () {
    
    return bel`<div class="js-site js-menu-section">
        <ul class="js-menu-item-list">
            <li class="js-site-item">
                <span class="js-site-domain">${this.model.domain}</span>
                <div class="js-site-whitelist-toggle-bg js-site-whitelist-${this.model.isWhitelisted}"><div class="js-site-whitelist-toggle-fg js-site-whitelist-fg-${this.model.isWhitelisted}"></div></div>
                <div class="js-site-rating-${this.model.siteRating} js-site-inline-icon js-site-icon-right"></div>
            </li>
            <li class="js-site-item">
                <span class="js-site-inline-icon js-site-https-${this.model.httpsState}"></span>
                <span class="js-site-httpsStatusText">${this.model.httpsStatusText}</span>
            </li>
            <li class="js-site-item">
                <span class="js-site-trackerCount">${this.model.trackerCount}</span> Trackers Blocked
            </li>
        </ul>
    </div>`;

}

