import { h } from 'preact';
import { useState } from 'preact/hooks';
import cx from 'classnames';
import { AccordionProps, AccordionItem } from './types';
import { AccordionContext } from './AccordionContext';
import './Accordion.scss';

export default function Accordion({ children, className, expand = false, type, onExpandSection }: AccordionProps) {
    const [items, setItems] = useState<AccordionItem[]>([]);

    const classNames = cx('adv-accordion', className, {
        'adv-accordion--container': type === 'container'
    });

    return (
        <AccordionContext.Provider value={{ expand, items, setItems, onExpandSection }}>
            <div className={classNames}>{children}</div>
        </AccordionContext.Provider>
    );
}
