import { h } from 'preact';
import { InternalReferenceProps } from '../../types';
import LinkButton from '../LinkButton';
import { getScrollParent } from '../../utils/scroll';

export default function InternalReference({ referencedLabel, displayText }: InternalReferenceProps) {
    const label = displayText ? displayText.content : referencedLabel;

    const scrollIntoView = () => {
        const scrollParent = getScrollParent(document.getElementById(referencedLabel));
        const element = scrollParent !== -1 && scrollParent.querySelector('#' + referencedLabel);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return <LinkButton onClick={scrollIntoView} label={label} />;
}
