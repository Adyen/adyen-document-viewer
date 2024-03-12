import cx from 'classnames';
import { h } from 'preact';

import { TextProps, TextStyle } from '../../types';

export default function Text({ content, styles }: TextProps) {
  const classNames = cx({
    'adv-u-font-weight-semi-bold': styles?.includes(TextStyle.Bold),
    'adv-u-font-italic': styles?.includes(TextStyle.Italic),
  });

  return <span className={classNames}>{content}</span>;
}
