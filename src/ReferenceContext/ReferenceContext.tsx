import { createContext } from 'preact';

export interface ReferenceContextValue {
  references: References;
  addReference: (references: References) => void;
}

export interface References {
  [label: string]: { openSection: () => void };
}

export const ReferenceContext = createContext<ReferenceContextValue>({
  references: {},
  addReference: () => {},
});
