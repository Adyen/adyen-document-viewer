## Adyen Document Viewer

Adyen Document Viewer provides you with a flexible way of rendering Adyen-generated documents, which can be embedded in your website.

## Installation

### Node package manager (recommended)

1. Install the package using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

   ```sh
   npm install @adyen/adyen-document-viewer --save
   ```

2. Import [Adyen Document Viewer Node package](https://www.npmjs.com/package/@adyen/adyen-document-viewer) into your application

   ```js
   import AdyenDocumentViewer from '@adyen/adyen-document-viewer';
   import '@adyen/adyen-document-viewer/dist/adyen-document-viewer.min.css';
   ```

### CDN

Include the script and stylesheet to a `.html` file

```html
<script src="https://unpkg.com/@adyen/adyen-document-viewer@^1.0.0"></script>
<link
  rel="stylesheet"
  href="https://unpkg.com/@adyen/adyen-document-viewer@^1.0.0/dist/adyen-document-viewer.min.css"
/>
```

**NOTE:** By choosing this method, `AdyenDocumentViewer` class will become available globally in your application.

## Usage

1. The component requires an HTML element to render its contents. Create an instance of `AdyenDocumentViewer` and pass the HTML element itself or a `querySelector` string value which targets it

   ```js
   const documentViewer = new AdyenDocumentViewer('#test');
   ```

2. Call the `render` method, and pass the document as parameter

   ```js
   documentViewer.render(document);
   ```

## Configuration Options

You can customize the behavior of `AdyenDocumentViewer` by passing options during initialization.

| Option                 | Description                                             | Default     |
|------------------------| ------------------------------------------------------- | ----------- |
| `onExpandSection`      | Callback function triggered when a section is expanded. | `undefined` |
| `multiple`             | Allow multiple sections to be expanded simultaneously.  | `false`     |
| `showSectionNumbering` | Enable or disable section numbering.                    | `false`     |


You can provide an object with the options as the second parameter when creating an instance of `AdyenDocumentViewer`:

```js
const options = {
  onExpandSection: (sectionTitle) => console.log(`Section ${sectionTitle} expanded`),
  multiple: true,
  showSectionNumbering: true,
};

const documentViewer = new AdyenDocumentViewer('#test', options);
```

## Styling

Adyen Document Viewer is themeable and uses CSS variables that can be overridden in order to achieve the desired style. Overrides should be added for `.adyen-document-viewer` class.

### Overriding styles example

1. Create `override.css` with the variables that you would like to style

   ```css
   .adyen-document-viewer {
     --adv-background-color: #ff8888;
     --adv-heading-font-size: 48px;
   }
   ```

2. Make sure to import the `override.css` after importing library's main CSS

   ```js
   import 'adyen-document-viewer/dist/adyen-document-viewer.min.css';
   import './override.css';
   ```

### Available CSS variables

```css
/* Colors */
--adv-color-white: #fff; /* backgrounds  */
--adv-color-black: #00112c; /* text color  */
--adv-color-grey-10: #f3f6f9; /* background, hover */
--adv-color-grey-20: #dce0e5; /* borders, active  */
--adv-color-blue: #06f; /* links */

/* Background */
--adv-background-color: var(--adv-color-white);

/* Fonts */
--adv-text-font-family: -apple-system, blinkmacsystemfont, 'Segoe UI', roboto, oxygen, ubuntu,
  cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--adv-text-color: var(--adv-color-black);
--adv-text-font-weight-regular: 400;
--adv-text-font-weight-semi-bold: 600;
--adv-text-line-height: 1.4;
--adv-text-font-size-medium: 15px;
--adv-text-font-size-small: 13px;

/* Borders */
--adv-border-width: 1px;
--adv-border-style: solid;
--adv-border-color: var(--adv-color-grey-20);
--adv-border-radius: 6px;

/* Transition */
--adv-transition-duration: 0.1s;
--adv-transition-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);

/* Focus ring */
--adv-focus-ring-transition-duration: var(--adv-transition-duration);
--adv-focus-ring-timing-function: var(--adv-transition-function);
--adv-focus-ring-color: rgba(0, 102, 255, 0.4);
--adv-focus-ring-distance: 1px;
--adv-focus-ring-width: 3px;
--adv-focus-ring-z-index: 1;
--adv-focus-ring-background-color: var(--adv-color-white);

/* Spacing */
--adv-spacing-0: 0;
--adv-spacing-2: 2px;
--adv-spacing-4: 4px;
--adv-spacing-8: 8px;
--adv-spacing-12: 12px;
--adv-spacing-16: 16px;
--adv-spacing-24: 24px;
--adv-spacing-32: 32px;
--adv-spacing-40: 40px;
--adv-spacing-48: 48px;

/* Accordion */
--adv-accordion-border-radius: var(--adv-border-radius);
--adv-accordion-item-border-color: var(--adv-border-color);
--adv-accordion-item-border-width: var(--adv-border-width);
--adv-accordion-between-items-border-color: transparent;
--adv-accordion-header-color: var(--adv-color-black);
--adv-accordion-header-padding: var(--adv-spacing-16);
--adv-accordion-header-font-weight: var(--adv-text-font-weight-semi-bold);
--adv-accordion-header-hover-background-color: var(--adv-color-grey-10);
--adv-accordion-header-active-background-color: var(--adv-color-grey-20);
--adv-accordion-header-border-radius: var(--adv-spacing-4);
--adv-accordion-title-color: inherit;
--adv-accordion-toggle-margin: var(--adv-spacing-2) var(--adv-spacing-16) 0 0;
--adv-accordion-toggle-padding: 0;
--adv-accordion-toggle-width: var(--adv-spacing-12);
--adv-accordion-content-margin: 0 0 var(--adv-spacing-24);
--adv-accordion-content-padding: 0 var(--adv-spacing-16) 0 calc(
    var(--adv-spacing-32) + var(--adv-spacing-12)
  );
--adv-accordion-content-closed-margin: 0;
--adv-accordion-transition-duration: var(--adv-transition-duration);
--adv-accordion-transition-function: var(--adv-transition-function);
--adv-accordion-transition-property: margin, height, padding;
--adv-accordion-css-animated-max-height: 500px;
--adv-accordion-css-animated-transition-duration: var(--adv-accordion-transition-duration);
--adv-accordion-css-animated-transition-property: margin, max-height;

/* Heading */
--adv-heading-font-size: 32px;
--adv-heading-font-weight: var(--adv-text-font-weight-semi-bold);
--adv-heading-line-height: 40px;
--adv-heading-text-align: left; 
--adv-heading-2-font-size: 24px;
--adv-heading-2-font-weight: var(--adv-text-font-weight-semi-bold);
--adv-heading-2-line-height: 32px;

/* Icon */
--adv-icon-color: var(--adv-color-black);

/* Link */
--adv-link-color: var(--adv-color-blue);
--adv-link-background-color: transparent;
--adv-link-text-decoration: none;
--adv-link-hover-text-decoration: underline;
--adv-link-active-color: var(--adv-link-color);
--adv-link-focus-outline: none;
--adv-link-visited-color: var(--adv-link-color);
--adv-link-inherit-font-size: inherit;
--adv-link-inherit-color: inherit;
--adv-link-underline-color: inherit;

/* List */
--adv-list-margin: 0;
--adv-list-padding: 0 0 0 18px;
--adv-list-nested-padding: var(--adv-list-padding);
--adv-list-item-padding: 0 0 0 var(--adv-spacing-4);
--adv-list-no-markers-padding: 0;
--adv-list-no-markers-list-style: none;

/* Section */
--adv-section-background-color: var(--adv-color-grey-10);
--adv-section-border-radius: var(--adv-border-radius);
--adv-section-margin: var(--adv-spacing-24) 0 0 0;
--adv-section-padding: var(--adv-spacing-16);

/* Table */
--adv-table-width: 100%;
--adv-table-margin: 0;
--adv-table-padding: 0;
--adv-table-border: none;
--adv-table-vertical-align: top;
--adv-table-line-height: 16px;
--adv-table-row-border-width: var(--adv-border-width);
--adv-table-row-border-style: var(--adv-border-style);
--adv-table-row-border-color: var(--adv-border-color);
--adv-table-row-border: var(--adv-table-row-border-width) var(--adv-table-row-border-style) var(--adv-table-row-border-color);
--adv-table-row-changed-background-color: var(--adv-color-grey-10);
--adv-table-cell-padding-top: var(--adv-spacing-12);
--adv-table-cell-padding-right: calc(var(--adv-spacing-16) + var(--adv-spacing-24));
--adv-table-cell-padding-bottom: var(--adv-spacing-12);
--adv-table-cell-padding-left: var(--adv-spacing-16);
--adv-table-cell-padding: var(--adv-table-cell-padding-top) var(--adv-table-cell-padding-right) var(
    --adv-table-cell-padding-bottom
  ) var(--adv-table-cell-padding-left);
--adv-table-cell-text-align: left;
--adv-table-first-column-padding-left: var(--adv-spacing-24);
--adv-table-condensed-cell-padding-y: var(--adv-spacing-8);
--adv-table-condensed-cell-padding: var(--adv-table-condensed-cell-padding-y) var(
    --adv-table-cell-padding-right
  )
  var(--adv-table-condensed-cell-padding-y) var(--adv-table-cell-padding-left);
--adv-table-condensed-font-size: var(--adv-text-font-size-small);
```

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

If you have a feature request, or spotted a bug or a technical problem, [contact our support team](https://www.adyen.help/hc/en-us/requests/new).

## Contributing

We strongly encourage you to contribute to our repository. Find out more in our [contribution guidelines](https://github.com/Adyen/.github/blob/master/CONTRIBUTING.md).

## License

MIT license. For more information, see the [LICENSE](LICENSE) file.
