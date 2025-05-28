import { describe, expect, it } from 'vitest';

import { extractLabels } from '../../src/components/Section/Section';
import { ElementTypes, InternalReference, Section, Table } from '../../src/types';

describe('extractLabels', () => {
  it('should return [] for null or non-object values', () => {
    expect(extractLabels(null)).toEqual([]);
    expect(extractLabels(undefined)).toEqual([]);
    expect(extractLabels(123)).toEqual([]);
    expect(extractLabels('label')).toEqual([]);
    expect(extractLabels([])).toEqual([]);
  });

  it('should extract label from a root-level object', () => {
    const section: Section = {
      type: ElementTypes.Section,
      label: 'SectionLabel',
      title: { type: ElementTypes.Text, content: 'Introduction' },
      contentElements: [],
    };
    expect(extractLabels(section)).toEqual(['SectionLabel']);
  });

  it('should ignore labels that are empty strings', () => {
    const section = {
      type: ElementTypes.Section,
      label: '',
      title: { type: ElementTypes.Text, content: 'EmptyLabel' },
      contentElements: [],
    };
    expect(extractLabels(section)).toEqual([]);
  });

  it('should ignore null label at root', () => {
    const section: Omit<Section, 'label'> & { label: null } = {
      type: ElementTypes.Section,
      label: null,
      title: { type: ElementTypes.Text, content: 'NoLabel' },
      contentElements: [],
    };
    expect(extractLabels(section)).toEqual([]);
  });

  it('should extract label from nested section and title', () => {
    const nestedSection: Section = {
      type: ElementTypes.Section,
      label: 'ParentLabel',
      title: { type: ElementTypes.Text, content: 'Parent Title' },
      contentElements: [
        {
          type: ElementTypes.Section,
          label: 'ChildLabel',
          title: { type: ElementTypes.Text, content: 'Child Title' },
          contentElements: [],
        },
      ],
    };
    expect(extractLabels(nestedSection)).toEqual(['ParentLabel', 'ChildLabel']);
  });

  it('should extract label from a Table element', () => {
    const table: Table = {
      type: ElementTypes.Table,
      label: 'Cards_txVariant',
      rows: [],
      captions: [],
      titlePrefix: { type: ElementTypes.Text, content: '' },
      title: { type: ElementTypes.Text, content: 'Table Title' },
    };
    expect(extractLabels(table)).toEqual(['Cards_txVariant']);
  });

  it('should not extract referencedLabel from InternalReference (only label keys)', () => {
    const internalReference: InternalReference = {
      type: ElementTypes.InternalReference,
      referencedLabel: 'this_is_a_referenced_label',
      displayText: { type: ElementTypes.Text, content: '' },
    };
    expect(extractLabels(internalReference)).toEqual([]);
  });

  it('should ignore label fields that are not strings', () => {
    const section: Omit<Section, 'label'> & { label: any } = {
      type: ElementTypes.Section,
      label: null,
      title: { type: ElementTypes.Text, content: 'NoLabel' },
      contentElements: [
        {
          type: ElementTypes.Section,
          label: 123 as any,
          title: { type: ElementTypes.Text, content: 'BadLabel' },
          contentElements: [],
        },
        {
          type: ElementTypes.Section,
          label: 'ValidLabel',
          title: { type: ElementTypes.Text, content: 'GoodLabel' },
          contentElements: [],
        },
      ],
    };
    expect(extractLabels(section)).toEqual(['ValidLabel']);
  });

  it('should extract all string labels from deeply nested elements', () => {
    const section: Section = {
      type: ElementTypes.Section,
      label: 'SectionLabel',
      title: { type: ElementTypes.Text, content: 'Payment Method Fees' },
      contentElements: [
        {
          type: ElementTypes.Table,
          label: 'TableLabel',
          rows: [
            [
              {
                elements: [
                  {
                    type: ElementTypes.Section,
                    label: 'NestedSectionLabel',
                    title: { type: ElementTypes.Text, content: 'Nested' },
                    contentElements: [],
                  },
                ],
              },
            ],
          ],
          captions: [],
          titlePrefix: { type: ElementTypes.Text, content: '' },
          title: { type: ElementTypes.Text, content: 'Table Title' },
        },
      ],
    };
    expect(extractLabels(section)).toEqual(['SectionLabel', 'TableLabel', 'NestedSectionLabel']);
  });
});
