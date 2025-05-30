import { Document, Element, ElementTypes, Section } from '../types';

type NumberingContext = {
  prefix: string;
  counter: number;
  isTopLevel: boolean;
};

/**
 * Type guard to check if an element is a Section.
 */
function isSection(element: Element): element is Section {
  return 'type' in element && element.type === ElementTypes.Section;
}

/**
 * Type guard to check if an element has nested content elements.
 */
function hasContentElements(element: Element): element is Section {
  return 'contentElements' in element && Array.isArray(element.contentElements);
}

/**
 * Generates the numbering for sections or subsections.
 * @param context - The numbering context.
 * @returns The generated numbering string.
 */
function generateNumbering(context: NumberingContext): string {
  return context.isTopLevel ? `${context.counter}` : `${context.prefix}${context.counter}`;
}

/**
 * Generates the formatted title for a section.
 * @param currentNumber - The generated numbering string.
 * @param titleContent - The original title content.
 * @returns The formatted title string.
 */
function generateTitle(currentNumber: string, titleContent: string): string {
  return `${currentNumber} ${titleContent}`;
}

/**
 * Recursively adds numbering to sections and their nested content elements.
 * @param element - The current element to process.
 * @param context - The numbering context.
 * @returns A new element with updated numbering.
 */
function addNumberingToSections(element: Element, context: NumberingContext): Element {
  if (isSection(element)) {
    const currentNumber = generateNumbering(context);

    const updatedSection: Section = {
      ...element,
      title: {
        ...element.title,
        content: generateTitle(currentNumber, element.title.content),
      },
    };

    context.counter += 1;

    if (hasContentElements(element)) {
      let subsectionCounter = 1;
      updatedSection.contentElements = element.contentElements.map((child) => {
        if (isSection(child)) {
          const subsectionContext: NumberingContext = {
            prefix: `${currentNumber}.`,
            counter: subsectionCounter,
            isTopLevel: false,
          };
          subsectionCounter += 1;
          return addNumberingToSections(child, subsectionContext);
        }
        return child;
      });
    }

    return updatedSection;
  }

  if (hasContentElements(element)) {
    return {
      ...element,
      contentElements: element.contentElements.map((child) =>
        addNumberingToSections(child, context),
      ),
    };
  }

  return element;
}

/**
 * Adds numbering to the sections and subsections of a document.
 * @param document - The document to process.
 * @returns A new document with updated numbering.
 */
export function addSectionNumbering(document: Document): Document {
  const context: NumberingContext = { prefix: '', counter: 1, isTopLevel: true };
  return {
    ...document,
    contentElements: document.contentElements.map((element) =>
      addNumberingToSections(element, context),
    ),
  };
}
