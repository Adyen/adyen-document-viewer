import { h } from 'preact';
import { TextProps, TextStyle } from '../../types';
import cx from 'classnames';

export default function Text({ content, styles }: TextProps) {
  const classNames = cx({
    'adv-u-font-weight-semi-bold': styles?.includes(TextStyle.Bold),
    'adv-u-font-italic': styles?.includes(TextStyle.Italic),
  });

  return <span className={classNames}>{content}</span>;
}
