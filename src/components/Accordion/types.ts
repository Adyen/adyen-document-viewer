import { ComponentChildren } from 'preact';

export interface AccordionProps {
  children: ComponentChildren;
  className?: string;
  expand?: boolean;
  type?: string;
  onExpandSection?: (title: string) => void;
}

export type AccordionSection = {
  id: string;
  isOpen: boolean;
};

export type AccordionContextType = {
  expand: boolean;
  items: AccordionSection[];
  setItems: (
    items: AccordionSection[] | ((items: AccordionSection[]) => AccordionSection[]),
  ) => void;
  onExpandSection?: (title: string) => void;
};
