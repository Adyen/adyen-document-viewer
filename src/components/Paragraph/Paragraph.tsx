import './Paragraph.scss';

import cx from 'classnames';
import { h } from 'preact';

import { ParagraphProps } from '../../types';
import ContentElements from '../ContentElements/ContentElements';

export default function Paragraph({ isTopLevel, contentElements }: ParagraphProps) {
  const classNames = cx('adv-paragraph', {
    'adv-u-margin-bottom-16': isTopLevel,
  });

  return (
    <p className={classNames}>
      <ContentElements contentElements={contentElements} />
    </p>
  );
}
