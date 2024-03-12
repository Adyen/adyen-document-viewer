import { h } from 'preact';

import { useReferenceContext } from '../../ReferenceContext/useReferenceContext';
import { InternalReferenceProps } from '../../types';
import { delay } from '../../utils/delay';
import { formatId } from '../../utils/format-id';
import { getScrollParent } from '../../utils/scroll';
import LinkButton from '../LinkButton/LinkButton';

export default function InternalReference({
  referencedLabel: originalReferencedLabel,
  displayText,
}: InternalReferenceProps) {
  const referencedLabel = formatId(originalReferencedLabel) ?? '';
  const label = displayText ? displayText.content : referencedLabel;
  const { references } = useReferenceContext();
  const scrollIntoView = async () => {
    if (references && referencedLabel && references[referencedLabel]) {
      references[referencedLabel].openSection();
      // leave some time for the accordion item to expand
      await delay(150);
    }
    const scrollParent = getScrollParent(document.getElementById(referencedLabel));
    const element = scrollParent !== -1 && scrollParent.querySelector('#' + referencedLabel);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return <LinkButton onClick={scrollIntoView} label={label} />;
}
