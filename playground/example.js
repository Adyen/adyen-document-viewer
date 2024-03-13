import 'preact/debug';

import AdyenDocumentViewer from '../src/index';
import exampleDocument from './mock-data';

const documentViewer = new AdyenDocumentViewer('#document-viewer', {
  onExpandSection: (sectionTitle) => console.log(`${sectionTitle} expanded`),
  multiple: false,
});

documentViewer.render(exampleDocument);
