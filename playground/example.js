import 'preact/debug';

import AdyenDocumentViewer from '../src/index';
import exampleDocument from './mock-data';

const documentViewer = new AdyenDocumentViewer('#document-viewer');
documentViewer.render(exampleDocument);
