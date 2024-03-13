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

const extractLabels = (obj: any): string[] => {
  if (typeof obj !== 'object' || obj === null) {
    return [];
  }

  if ('label' in obj) {
    return [obj.label];
  }

  return Object.values(obj).flatMap((value: any) => extractLabels(value));
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
