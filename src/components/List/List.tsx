import './List.scss';

import cx from 'classnames';
import { h } from 'preact';

import { ListProps } from './types';

function List({ className, nested, ordered, noMarkers, children }: ListProps) {
  const classNames = cx([
    'adv-list',
    nested && 'adv-list--nested',
    ordered && 'adv-list--ordered',
    noMarkers && 'adv-list--no-markers',
    className,
  ]);
  return <ul className={classNames}>{children}</ul>;
}

export default List;
