import { useContext } from 'preact/hooks';
import { AccordionContext } from '../Accordion/AccordionContext';

function useAccordionContext() {
    return useContext(AccordionContext);
}

export default useAccordionContext;
