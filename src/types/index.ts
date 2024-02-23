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
export interface ContentElements {
  contentElements: Element[];
}

export interface Element extends ContentElements {
  type: ElementTypes;
}

export interface TopLevelElement {
  isTopLevel?: boolean;
}

// Elements
type Chapter = ContentElements & { title: Text };
type Section = ContentElements & { title: Text; label: string };
type Paragraph = ContentElements;
type Text = { content: string; styles?: TextStyle[] };
type Weblink = { url: string; displayText: Text };
type List = { style: ListStyle; items: ListItem[] };
type ListStyle = { ordered: boolean };
type ListItem = { content: Element[]; subList: List };
type TableCell = { elements: Element[] };
type TableRow = TableCell[];
type Table = {
  rows: TableRow[];
  label: string;
  captions: Element[];
  titlePrefix: Text;
  title: Text;
};
type InternalReference = { referencedLabel: string; displayText: Text };
type DocumentViewerAnalytics = { onExpandSection?: (title: string) => void };

// Props
export type DocumentViewerProps = { document: any; className?: string } & DocumentViewerAnalytics;
export type ContentElementsProps = ContentElements & TopLevelElement & DocumentViewerAnalytics;
export type ChapterProps = Chapter;
export type SectionProps = Section & TopLevelElement;
export type ParagraphProps = Paragraph & TopLevelElement;
export type TextProps = Text;
export type WeblinkProps = Weblink;
export type ListProps = List;
export type TableProps = Table;
export type InternalReferenceProps = InternalReference;
