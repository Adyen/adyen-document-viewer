import './Accordion.scss';

import cx from 'classnames';
import { h } from 'preact';
import { useState } from 'preact/hooks';

import { AccordionContext } from './AccordionContext';
import { AccordionProps, AccordionSection } from './types';

export default function Accordion({
  children,
  className,
  expand = false,
  type,
  onExpandSection,
}: AccordionProps) {
  const [items, setItems] = useState<AccordionSection[]>([]);

  const classNames = cx('adv-accordion', className, {
    'adv-accordion--container': type === 'container',
  });

  return (
    <AccordionContext.Provider value={{ expand, items, setItems, onExpandSection }}>
      <div className={classNames}>{children}</div>
    </AccordionContext.Provider>
  );
}
