import { h } from 'preact';
import useAccordionContext from './useAccordionContext';
import { AccordionItemProps } from './types';
import CollapsibleContainer from '../CollapsibleContainer/CollapsibleContainer';
import Icon from '../Icon/Icon';
import { getUniqueId } from '../../utils/id-generator';
import { useState, useEffect } from 'preact/hooks';
import { AccordionContextType, AccordionItem } from '../Accordion/types';
import './AccordionItem.scss';

export default function AccordionItem({ children, open = false, title = '' }: AccordionItemProps) {
    const { expand, items, setItems, onExpandSection } = useAccordionContext() as AccordionContextType;

    const [isOpen, setIsOpen] = useState<boolean>(open);
    const [id] = useState<string>(getUniqueId);

    const toggle = () => {
        const newValue = !isOpen;
        const newItems: AccordionItem[] = [...items];
        if (!expand) {
            setItems(newItems.map((item) => ({ ...item, isOpen: item.id === id ? newValue : false })));
        } else {
            newItems.find((item) => item.id === id).isOpen = newValue;
            setItems(newItems);
        }
    };

    useEffect(() => {
        setItems((items) => [...items, { id, isOpen }]);
    }, []);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        setIsOpen(items.find((item) => item.id === id)?.isOpen);
    }, [items]);

    useEffect(() => {
        isOpen && onExpandSection?.(title);
    }, [isOpen]);

    return (
        <div className="adv-accordion__item">
            <div role="button" className="adv-accordion__header" tabIndex={0} onClick={toggle}>
                <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} className="adv-accordion__toggle" />
                <div className="adv-accordion__title-wrapper">
                    <div className="adv-accordion__title">{title}</div>
                </div>
            </div>
            <CollapsibleContainer collapsed={!isOpen}>
                <div className="adv-accordion__content">{children}</div>
            </CollapsibleContainer>
        </div>
    );
}
