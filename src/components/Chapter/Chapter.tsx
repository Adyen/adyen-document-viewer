import { h } from 'preact';
import { ChapterProps } from '../../types';
import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import ContentElements from '../ContentElements/ContentElements';

export default function Chapter({ title, contentElements }: ChapterProps) {
    return (
        <section className="adv-u-margin-bottom-48">
            <Heading level={2} className="adv-u-margin-top-24 adv-u-margin-bottom-16">
                <Text content={title.content} styles={title.styles} />
            </Heading>
            <ContentElements contentElements={contentElements} isTopLevel />
        </section>
    );
}
