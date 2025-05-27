import './Section.scss';

import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { useReferenceContext } from '../../ReferenceContext/useReferenceContext';
import { SectionProps } from '../../types';
import { formatId } from '../../utils/format-id';
import AccordionItem from '../AccordionItem/AccordionItem';
import ContentElements from '../ContentElements/ContentElements';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';

export const extractLabels = (obj: any): string[] => {
  if (typeof obj !== 'object' || obj === null) return [];

  const labels: string[] = [];
  if ('label' in obj && typeof obj.label === 'string' && obj.label !== '') {
    labels.push(obj.label);
  }

  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
      labels.push(...extractLabels(value));
    }
  }

  return labels;
};

export default function Section({
  title,
  label: originalLabel,
  isTopLevel,
  contentElements,
}: SectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { addReference } = useReferenceContext();

  const label = formatId(originalLabel);

  useEffect(() => {
    if (isTopLevel) {
      const references = extractLabels(contentElements).map(formatId);
      if (label) {
        references.push(label);
      }
      if (references.length) {
        references.forEach((reference) => {
          addReference({ [reference as string]: { openSection: () => setIsOpen(true) } });
        });
      }
    }
  }, []);

  return isTopLevel ? (
    <AccordionItem
      title={title.content}
      open={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <section className="adv-section-box" id={label}>
        <ContentElements contentElements={contentElements} />
      </section>
    </AccordionItem>
  ) : (
    <section id={label}>
      <Heading level={2} className="adv-u-margin-top-24 adv-u-margin-bottom-16">
        <Text content={title.content} styles={title.styles} />
      </Heading>
      <ContentElements contentElements={contentElements} />
    </section>
  );
}
