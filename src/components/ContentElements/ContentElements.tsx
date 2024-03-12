import { h, VNode } from 'preact';

import { ContentElementsProps, Element, ElementTypes } from '../../types';
import { getUniqueId } from '../../utils/id-generator';
import Accordion from '../Accordion/Accordion';
import Chapter from '../Chapter/Chapter';
import InternalReference from '../InternalReference/InternalReference';
import List from '../ListElemennt/List';
import Paragraph from '../Paragraph/Paragraph';
import Section from '../Section/Section';
import Table from '../Table/Table';
import Text from '../Text/Text';
import Weblink from '../Weblink/Weblink';

const components = {
  chapter: Chapter,
  section: Section,
  paragraph: Paragraph,
  text: Text,
  weblink: Weblink,
  list: List,
  table: Table,
  internalReference: InternalReference,
  breakline: 'br',
};

const getKey = (type: ElementTypes) => `key-${type}-${getUniqueId()}`;

const getProps = (element: Element, isTopLevel: boolean): any => {
  if (!('type' in element)) return null;

  switch (element.type) {
    case ElementTypes.Chapter:
      return {
        title: element.title,
        contentElements: element.contentElements,
      };
    case ElementTypes.Section:
      return {
        isTopLevel,
        title: element.title,
        label: element.label,
        contentElements: element.contentElements,
      };
    case ElementTypes.Paragraph:
      return {
        isTopLevel,
        contentElements: element.contentElements,
      };
    case ElementTypes.Text:
      return {
        content: element.content,
        styles: element.styles,
      };
    case ElementTypes.Weblink:
      return {
        url: element.url,
        displayText: element.displayText,
      };
    case ElementTypes.List:
      return {
        items: element.items,
        style: element.style,
      };
    case ElementTypes.Table:
      return {
        rows: element.rows,
        label: element.label,
        captions: element.captions,
        titlePrefix: element.titlePrefix,
        title: element.title,
      };
    case ElementTypes.InternalReference:
      return {
        referencedLabel: element.referencedLabel,
        displayText: element.displayText,
      };
    default:
      return null;
  }
};
export default function ContentElements({
  contentElements,
  isTopLevel = false,
  onExpandSection,
}: ContentElementsProps) {
  const elements = contentElements.map((contentElement): VNode | null => {
    if (!('type' in contentElement)) return null;

    const Component = components[contentElement.type];
    return (
      <Component key={getKey(contentElement.type)} {...getProps(contentElement, isTopLevel)} />
    );
  });

  return isTopLevel ? (
    <Accordion onExpandSection={onExpandSection} expand>
      {elements}
    </Accordion>
  ) : (
    <span>{elements}</span>
  );
}
