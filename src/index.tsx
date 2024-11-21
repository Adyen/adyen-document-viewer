import { h, render } from 'preact';

import DocumentViewer from './DocumentViewer';
import { AdyenDocumentViewerOptions, Document } from './types';

export * from './types';

export default class AdyenDocumentViewer {
  private readonly target: HTMLElement;
  private readonly options: AdyenDocumentViewerOptions;

  /**
   * Initializes the library
   * @param target - The target element (HTMLElement or querySelector string)
   * @param options - Configuration options for AdyenDocumentViewer
   */
  constructor(target: HTMLElement | string, options: AdyenDocumentViewerOptions = {}) {
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

    this.options = {
      onExpandSection: options.onExpandSection ?? undefined,
      multiple: options.multiple ?? false,
    };
  }

  /**
   * Renders the document
   * @param document - The JSON document
   */
  render(document: Document): void {
    render(
      <DocumentViewer
        document={document}
        onExpandSection={this.options.onExpandSection}
        multiple={this.options.multiple}
      />,
      this.target,
    );
  }
}
