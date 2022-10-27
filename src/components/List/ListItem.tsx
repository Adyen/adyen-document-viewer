import { h } from 'preact';
import cx from 'classnames';
import { ListItemProps } from './types';

function ListItem({ className, children, noMarkers }: ListItemProps) {
    const classNames = cx(['adv-list__item', noMarkers && 'adv-list__item--no-markers', className]);

    return <li className={classNames}>{children}</li>;
}

export default ListItem;
