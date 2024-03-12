import './Link.scss';

import cx from 'classnames';
import { FunctionalComponent, h } from 'preact';

import LinkProps from './types';

const Link: FunctionalComponent<LinkProps> = ({
  className,
  children,
  href,
  underline,
  inheritStyles,
  onClick,
}) => {
  const classNames = cx('adv-link', className, {
    'adv-link--underline': underline,
    'adv-link--inherit': inheritStyles,
  });

  return (
    <a
      href={href}
      className={classNames}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <span className="adv-link__text">{children}</span>
    </a>
  );
};

export default Link;
