if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}
import { h, render } from 'preact';
import DocumentViewer from './DocumentViewer';

export default class AdyenDocumentViewer {
  private readonly target: HTMLElement;

  /**
   * Initializes the library
   * @param target - The target element (HTMLElement or querySelector string)
   */
  constructor(target: HTMLElement | string) {
    if (typeof target === 'object' && 'nodeType' in target) {
      this.target = target;
    } else {
      try {
        this.target = window.document.querySelector(target);
        if (!this.target) throw Error('Target element was not found');
      } catch (e) {
        throw Error(e);
      }
    }
  }

  /**
   * Renders the document
   * @param document - The JSON document
   */
  render(document: JSON): void {
    render(<DocumentViewer document={document} />, this.target);
  }
}
