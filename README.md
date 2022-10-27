## Adyen Document Viewer

Adyen Document Viewer provides you with a flexible way of rendering Adyen-generated JSON documents, which can be embedded in your website.

## Installation

### Node package manager

1. Install the package

    ```sh
    npm install @adyen/adyen-document-viewer --save
    ```

2. Import [Adyen Document Viewer Node package](https://www.npmjs.com/package/@adyen/adyen-document-viewer) into your application

    ```js
    import AdyenDocumentViewer from '@adyen/adyen-document-viewer';
    import '@adyen/adyen-document-viewer/dist/adyen-document-viewer.min.css'; 
    ```
   
3. Initialize it using a `querySelector` string or `HTMLElement`

    ```js
    const documentViewer = new AdyenDocumentViewer('#test');
    ```

4. Call the `render` method, providing the JSON as parameter

    ```js
    documentViewer.render(jsonResponse);
    ```

### CDN (WIP)

## Development

To run the development environment:

1. Clone [this repository](https://github.com/Adyen/adyen-document-viewer).
2. Install the dependencies by running:
 
   ```sh
   npm install
   ```
3. Run the development environment, which starts a server listening on [http://localhost:8080](http://localhost:8080):
 
   ```sh
   npm start
   ```

## Support

If you have a feature request, or spotted a bug or a technical problem, [contact our support team](https://support.adyen.com/).

## License

This repository is available under the [MIT license](LICENSE).
