import { useContext } from 'preact/hooks';
import { AccordionContext } from '../Accordion/AccordionContext';
import { AccordionContextType } from '../Accordion/types';

function useAccordionContext() {
    return useContext(AccordionContext) as AccordionContextType;
}

export default useAccordionContext;
