///<reference path="../../typings/jquery/jquery.d.ts"/>
///<reference path="../../typings/humm.d.ts"/>
// tslint:disable-next-line:no-var-requires
require('jquery');
// tslint:disable-next-line:no-var-requires
require('remodal');
// tslint:disable-next-line:no-var-requires
require('../../node_modules/remodal/dist/remodal.css');
// tslint:disable-next-line:no-var-requires
require('../../node_modules/remodal/dist/remodal-default-theme.css');
// tslint:disable-next-line:no-var-requires
require('../../css/humm-branding.css');

export class ModalInjector {
    constructor(private jQuery: JQueryStatic) {
    }

    public injectBanner(template: string, targetUrl: string, modalId: string, element?: JQuery) {
        if (!this.modalExists(modalId)) {
            this.injectModal(targetUrl, modalId);
        }

        let currentScript = document.currentScript || (function () {
            let scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })();

        // if the element isn't passed in already
        if (!element) {
            element = this.jQuery(currentScript);
        }

        // look for the id , if it exists then we replace the element
        // this could cause issues with multiple entries.. @todo make element id dynamic
        if (this.jQuery('#humm-tag-02', element).length > 0) {
            this.jQuery('#humm-tag-02', element).replaceWith(template);
        } else {
            element.first().after(template);
        }
    }

    private modalExists(modalId: string): boolean {
        return this.jQuery("#" + modalId) ? this.jQuery("#" + modalId).length > 0 : false;
    }

    private injectModal(url: string, modalId: string): void {
        const bodyTag = 'body';
        const modalDiv =
            `<div id='${modalId}' class='remodal' data-remodal-id='${modalId}'>
                <iframe class='humm-modal-iframe' src='${url}'></iframe>
                <button data-remodal-action="close" class="remodal-close"></button>
            </div>`;
        const body = this.jQuery(bodyTag);

        body.append(modalDiv);
    }
}
