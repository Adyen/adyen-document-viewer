import { h, render } from 'preact';

import DocumentViewer from './DocumentViewer';
import { Document } from './types';

export default class AdyenDocumentViewer {
  private readonly target: HTMLElement;

  /**
   * Initializes the library
   * @param target - The target element (HTMLElement or querySelector string)
   */
  constructor(target: HTMLElement | string) {
    if (typeof target === 'object' && 'nodeType' in target) {
      this.target = target as HTMLElement;
    } else {
      const element = window.document.querySelector(target);
      if (element instanceof HTMLElement) {
        this.target = element;
      } else {
        throw new Error('Target element was not found');
      }
    }
  }

  /**
   * Renders the document
   * @param document - The JSON document
   */
  render(document: Document): void {
    render(<DocumentViewer document={document} />, this.target);
  }
}
