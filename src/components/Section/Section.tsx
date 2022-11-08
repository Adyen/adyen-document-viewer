import { h } from 'preact';
import { SectionProps } from '../../types';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import './Section.scss';
import AccordionItem from '../AccordionItem/AccordionItem';
import ContentElements from '../ContentElements/ContentElements';

export default function Section({ title, label, isTopLevel, contentElements }: SectionProps) {
    return isTopLevel ? (
        <AccordionItem title={title.content}>
            <section className="adv-section-box" id={label}>
                <ContentElements contentElements={contentElements} />
            </section>
        </AccordionItem>
    ) : (
        <section id={label}>
            <Heading level={2} className="adv-u-margin-top-24 adv-u-margin-bottom-16">
                <Text content={title.content} styles={title.styles} />
            </Heading>
            <ContentElements contentElements={contentElements} />
        </section>
    );
}
