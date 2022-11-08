import { ComponentChildren } from 'preact';
import AccordionItem from '../AccordionItem/AccordionItem';

export interface AccordionProps {
    children: ComponentChildren;
    className?: string;
    expand?: boolean;
    type?: string;
    onExpandSection?: (title: string) => void;
}

export type AccordionItem = {
    id: string;
    isOpen: boolean;
};

export type AccordionContextType = {
    expand: boolean;
    items: AccordionItem[];
    setItems: (items: AccordionItem[] | ((items) => AccordionItem[])) => void;
    onExpandSection?: (title: string) => void;
};
