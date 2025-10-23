import { Chapter, Document, Element, ElementTypes, Section } from '../types';

type NumberingContext = {
  prefix: string;
  counter: number;
  isTopLevel: boolean;
};

/**
 * Type guard to check if an element is a Chapter.
 */
function isChapter(element: Element): element is Chapter {
  return 'type' in element && element.type === ElementTypes.Chapter;
}

/**
 * Type guard to check if an element is a Section.
 */
function isSection(element: Element): element is Section {
  return 'type' in element && element.type === ElementTypes.Section;
}

/**
 * Type guard to check if an element has nested content elements.
 */
function hasContentElements(element: Element): element is Element & { contentElements: Element[] } {
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
  if (isChapter(element)) {
    const newContext: NumberingContext = { prefix: '', counter: 1, isTopLevel: true };
    return {
      ...element,
      contentElements: element.contentElements.map((child) =>
        addNumberingToSections(child, newContext),
      ),
    };
  } else if (isSection(element)) {
    const currentNumber = generateNumbering(context);

    const updatedSection: Section = {
      ...element,
      title: {
        ...element.title,
        content: generateTitle(currentNumber, element.title.content),
      },
    };

    context.counter += 1;

    const subsectionContext: NumberingContext = {
      prefix: `${currentNumber}.`,
      counter: 1,
      isTopLevel: false,
    };

    updatedSection.contentElements = element.contentElements.map((child) =>
      addNumberingToSections(child, subsectionContext),
    );

    return updatedSection;
  } else if (hasContentElements(element)) {
    return {
      ...element,
      contentElements: element.contentElements.map((child) =>
        addNumberingToSections(child, context),
      ),
    } as typeof element;
  }

  return element;
}

/**
 * Adds numbering to the sections and subsections of a document.
 * @param document - The document to process.
 * @returns A new document with updated numbering.
 */
export function addSectionNumbering(document: Document): Document {
  const initialContext: NumberingContext = { prefix: '', counter: 1, isTopLevel: true };
  return {
    ...document,
    contentElements: document.contentElements.map((element) =>
      addNumberingToSections(element, initialContext),
    ),
  };
}
