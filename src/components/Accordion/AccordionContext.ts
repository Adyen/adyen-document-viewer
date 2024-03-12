import { createContext } from 'preact';

import { AccordionContextType } from './types';

export const AccordionContext = createContext<AccordionContextType | null>(null);
