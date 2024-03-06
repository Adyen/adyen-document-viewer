import { ComponentChildren } from 'preact';

export interface AccordionItemProps {
  children: ComponentChildren;
  open?: boolean;
  title?: string;
  onOpen?: () => void;
  onClose?: () => void;
}
