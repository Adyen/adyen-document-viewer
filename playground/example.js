import AdyenDocumentViewer from '../src/index';
import exampleDocument from './example.json';

const documentViewer = new AdyenDocumentViewer('#document-viewer');
documentViewer.render(exampleDocument);
