// Enums
export enum ElementTypes {
  Chapter = 'chapter',
  Section = 'section',
  Paragraph = 'paragraph',
  Text = 'text',
  Weblink = 'weblink',
  List = 'list',
  Table = 'table',
  InternalReference = 'internalReference',
}

export enum TextStyle {
  Bold = 'BOLD',
  Italic = 'ITALIC',
}

// Interfaces
export interface ElementWithInnerContent {
  contentElements: Element[];
}

export interface TopLevelElement {
  isTopLevel?: boolean;
}

// Elements
export type Document = ElementWithInnerContent & { title: Text };
type Chapter = ElementWithInnerContent & { type: ElementTypes.Chapter; title: Text };
export type Section = ElementWithInnerContent & {
  type: ElementTypes.Section;
  title: Text;
  label: string;
};
type Paragraph = ElementWithInnerContent & { type: ElementTypes.Paragraph };
type Text = { type: ElementTypes.Text; content: string; styles?: TextStyle[] };
type Weblink = { type: ElementTypes.Weblink; url: string; displayText: Text };
type List = { type: ElementTypes.List; style: ListStyle; items: ListItem[] };
type ListStyle = { ordered: boolean };
type ListItem = { content: Element[]; subList: List };
type TableCell = { elements: Element[] };
type TableRow = TableCell[];
type Table = {
  type: ElementTypes.Table;
  rows: TableRow[];
  label: string;
  captions: Element[];
  titlePrefix: Text;
  title: Text;
};
type InternalReference = {
  type: ElementTypes.InternalReference;
  referencedLabel: string;
  displayText: Text;
};
type DocumentViewerAnalytics = { onExpandSection?: (title: string) => void };

export type Element =
  | Document
  | Chapter
  | Section
  | Paragraph
  | Text
  | Weblink
  | List
  | ListStyle
  | ListItem
  | TableCell
  | TableRow
  | Table
  | InternalReference
  | DocumentViewerAnalytics;

// Props
export type DocumentViewerProps = {
  document: Document;
  className?: string;
  multiple?: boolean;
} & DocumentViewerAnalytics;
export type ContentElementsProps = ElementWithInnerContent &
  TopLevelElement &
  DocumentViewerAnalytics & {
    multiple?: boolean;
  };
export type ChapterProps = Omit<Chapter, 'type'>;
export type SectionProps = Omit<Section & TopLevelElement, 'type'>;
export type ParagraphProps = Omit<Paragraph & TopLevelElement, 'type'>;
export type TextProps = Omit<Text, 'type'>;
export type WeblinkProps = Omit<Weblink, 'type'>;
export type ListProps = Omit<List, 'type'>;
export type TableProps = Omit<Table, 'type'>;
export type InternalReferenceProps = Omit<InternalReference, 'type'>;

export interface AdyenDocumentViewerOptions {
  onExpandSection?: (sectionId: string) => void;
  multiple?: boolean;
  showSectionNumbering?: boolean;
}
