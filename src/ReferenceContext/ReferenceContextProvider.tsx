import { ComponentChildren, h } from 'preact';
import { useMemo, useState } from 'preact/hooks';

import { ReferenceContext, ReferenceContextValue, References } from './ReferenceContext';

interface ReferenceProps {
  children?: ComponentChildren;
}

export function ReferenceContextProvider({ children }: ReferenceProps) {
  const [references, setReferences] = useState<References>({});

  const contextValue: ReferenceContextValue = useMemo(
    () => ({
      addReference: (reference: References) => {
        setReferences((prevReferences) => ({
          ...prevReferences,
          ...reference,
        }));
      },
      references,
    }),
    [references, setReferences],
  );

  return <ReferenceContext.Provider value={contextValue}>{children}</ReferenceContext.Provider>;
}
