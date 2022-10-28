if (process.env.NODE_ENV === 'development') {
    require('preact/debug');
}
import { h, render } from 'preact';
import DocumentViewer from './DocumentViewer';
import { target } from './types';

export default class AdyenDocumentViewer {
    private readonly target: target;

    /**
     * Initializes the library
     * @param target - The target element (HTMLElement or querySelector string)
     */
    constructor(target: target) {
        this.target = target;
    }

    private renderViewer(target: target, document: JSON): void {
        const targetElement = typeof target === 'object' && 'nodeType' in target ? target : window.document.querySelector(target);
        render(<DocumentViewer document={document} />, targetElement);
    }

    /**
     * Renders the document
     * @param document - The JSON document
     */
    render(document: JSON): void {
        this.renderViewer(this.target, document);
    }
}
