import { describe, expect, it } from 'vitest';

import { Document, ElementTypes } from '../../src/types';
import { addSectionNumbering } from '../../src/utils/preprocessDocument';

describe('addSectionNumbering', () => {
  it('should add numbering to a single top-level section', () => {
    const document: Document = {
      title: { type: ElementTypes.Text, content: 'Document Title' },
      contentElements: [
        {
          type: ElementTypes.Section,
          title: { type: ElementTypes.Text, content: 'Introduction' },
          contentElements: [],
        },
      ],
    };

    const result = addSectionNumbering(document);

    expect(result.contentElements[0].title.content).toBe('1 Introduction');
  });

  it('should add numbering to nested sections', () => {
    const document: Document = {
      title: { type: ElementTypes.Text, content: 'Document Title' },
      contentElements: [
        {
          type: ElementTypes.Section,
          title: { type: ElementTypes.Text, content: 'Chapter 1' },
          contentElements: [
            {
              type: ElementTypes.Section,
              title: { type: ElementTypes.Text, content: 'Section 1.1' },
              contentElements: [],
            },
            {
              type: ElementTypes.Section,
              title: { type: ElementTypes.Text, content: 'Section 1.2' },
              contentElements: [],
            },
          ],
        },
      ],
    };

    const result = addSectionNumbering(document);

    expect(result.contentElements[0].title.content).toBe('1 Chapter 1');
    expect(result.contentElements[0].contentElements[0].title.content).toBe('1.1 Section 1.1');
    expect(result.contentElements[0].contentElements[1].title.content).toBe('1.2 Section 1.2');
  });

  it('should handle documents with no sections', () => {
    const document: Document = {
      title: { type: ElementTypes.Text, content: 'Empty Document' },
      contentElements: [],
    };

    const result = addSectionNumbering(document);

    expect(result.contentElements).toHaveLength(0);
  });

  it('should handle deeply nested sections', () => {
    const document: Document = {
      title: { type: ElementTypes.Text, content: 'Nested Document' },
      contentElements: [
        {
          type: ElementTypes.Section,
          title: { type: ElementTypes.Text, content: 'Top Level' },
          contentElements: [
            {
              type: ElementTypes.Section,
              title: { type: ElementTypes.Text, content: 'Second Level' },
              contentElements: [
                {
                  type: ElementTypes.Section,
                  title: { type: ElementTypes.Text, content: 'Third Level' },
                  contentElements: [],
                },
              ],
            },
          ],
        },
      ],
    };

    const result = addSectionNumbering(document);

    expect(result.contentElements[0].title.content).toBe('1 Top Level');
    expect(result.contentElements[0].contentElements[0].title.content).toBe('1.1 Second Level');
    expect(result.contentElements[0].contentElements[0].contentElements[0].title.content).toBe(
      '1.1.1 Third Level',
    );
  });
});
