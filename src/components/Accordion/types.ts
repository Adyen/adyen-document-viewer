import { ComponentChildren } from 'preact';
import AccordionItem from '../AccordionItem/AccordionItem';

export interface AccordionProps {
    children: ComponentChildren;
    className?: string;
    expand?: boolean;
    type?: string;
    onExpandSection?: (title: string) => void;
}

export type AccordionItemState = {
    id: string;
    isOpen: boolean;
};

export type AccordionContextType = {
    expand: boolean;
    items: AccordionItemState[];
    setItems: (items: AccordionItemState[] | ((items) => AccordionItemState[])) => void;
    onExpandSection?: (title: string) => void;
};
