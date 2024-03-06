import { useContext } from 'preact/hooks';

import { ReferenceContext } from './ReferenceContext';

export function useReferenceContext() {
  const context = useContext(ReferenceContext);
  if (context === undefined) {
    throw new Error('useReferenceContext must be used within a ReferenceProvider');
  }
  return context;
}
