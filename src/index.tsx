if (process.env.NODE_ENV === 'development') {
    require('preact/debug');
}
import { h, render } from 'preact';
import DocumentViewer from './DocumentViewer';

type target = HTMLElement | string;

export default class AdyenDocumentViewer {
    private readonly target: target;

    constructor(target: target) {
        this.target = target;
    }

    private renderViewer(target: target, document: JSON): void {
        const targetElement = typeof target === 'object' && 'nodeType' in target ? target : window.document.querySelector(target);
        render(<DocumentViewer document={document} />, targetElement);
    }

    render(document: JSON): void {
        this.renderViewer(this.target, document);
    }
}
