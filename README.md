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

* Colors
   ```css
    --adv-color-white
    --adv-color-black
    --adv-color-grey-10
    --adv-color-grey-20
    --adv-color-blue
   ```
* Background 
   ```css
    --adv-background-color
   ```
* Fonts
   ```css
   --adv-text-font-family
   --adv-text-color
   --adv-text-font-weight-regular
   --adv-text-font-weight-semi-bold
   --adv-text-line-height
   --adv-text-font-size-medium
   --adv-text-font-size-small
   ```
  
* Borders
   ```css
   --adv-border-width
   --adv-border-style
   --adv-border-color
   --adv-border-radius
   ```

* Transition
   ```css
   --adv-transition-duration
   --adv-transition-function
   ```
   
* Focus ring
   ```css
   --adv-focus-ring-transition-duration
   --adv-focus-ring-timing-function
   --adv-focus-ring-color
   --adv-focus-ring-distance
   --adv-focus-ring-width
   --adv-focus-ring-z-index
   --adv-focus-ring-background-color
   ```
  
* Spacing
   ```css
   --adv-spacing-0
   --adv-spacing-2
   --adv-spacing-4
   --adv-spacing-8
   --adv-spacing-12
   --adv-spacing-16
   --adv-spacing-24
   --adv-spacing-32
   --adv-spacing-40
   --adv-spacing-48
   ```
  
* Accordion
   ```css
   --adv-accordion-border-radius
   --adv-accordion-item-border-color
   --adv-accordion-item-border-width
   --adv-accordion-between-items-border-color
   --adv-accordion-header-color
   --adv-accordion-header-padding
   --adv-accordion-header-font-weight
   --adv-accordion-header-hover-background-color
   --adv-accordion-header-active-background-color
   --adv-accordion-header-border-radius
   --adv-accordion-title-color
   --adv-accordion-toggle-margin
   --adv-accordion-toggle-padding
   --adv-accordion-toggle-width
   --adv-accordion-content-margin
   --adv-accordion-content-padding
   --adv-accordion-content-closed-margin
   --adv-accordion-transition-duration
   --adv-accordion-transition-function
   --adv-accordion-transition-property
   --adv-accordion-css-animated-max-height
   --adv-accordion-css-animated-transition-duration
   --adv-accordion-css-animated-transition-property
   ``` 
  
* Heading  
   ```css
   --adv-heading-font-size
   --adv-heading-font-weight
   --adv-heading-line-height
   --adv-heading-2-font-size
   --adv-heading-2-font-weight
   --adv-heading-2-line-height
  ```

* Icon
   ```css
   --adv-icon-color
   ```

* Link
   ```css
   --adv-link-color
   --adv-link-background-color
   --adv-link-text-decoration
   --adv-link-hover-text-decoration
   --adv-link-active-color
   --adv-link-focus-outline
   --adv-link-visited-color
   --adv-link-inherit-font-size
   --adv-link-inherit-color
   --adv-link-underline-color
   ```

* List
   ```css
   --adv-list-margin
   --adv-list-padding
   --adv-list-nested-padding
   --adv-list-item-padding
   --adv-list-no-markers-padding
   --adv-list-no-markers-list-style
   ```

* Section
   ```css
   --adv-section-background-color
   --adv-section-border-radius
   --adv-section-margin
   --adv-section-padding
   ```

* Table
   ```css
   --adv-table-width
   --adv-table-margin
   --adv-table-padding
   --adv-table-border
   --adv-table-vertical-align
   --adv-table-line-height
   --adv-table-row-border-width
   --adv-table-row-border-style
   --adv-table-row-border-color
   --adv-table-row-border
   --adv-table-row-changed-background-color
   --adv-table-cell-padding-top
   --adv-table-cell-padding-right
   --adv-table-cell-padding-bottom
   --adv-table-cell-padding-left
   --adv-table-cell-padding
   --adv-table-cell-text-align
   --adv-table-first-column-padding-left
   --adv-table-condensed-cell-padding-y
   --adv-table-condensed-cell-padding
   --adv-table-condensed-font-size
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

If you have a feature request, or spotted a bug or a technical problem, [contact our support team](https://support.adyen.com/).

## License

This repository is available under the [MIT license](LICENSE).
