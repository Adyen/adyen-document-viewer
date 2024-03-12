import { h } from 'preact';

import { ListProps } from '../../types';
import ContentElements from '../ContentElements/ContentElements';
import List from '../List/List';
import ListItem from '../List/ListItem';

export default function ListElement({ items, style }: ListProps) {
  return (
    <List ordered={style.ordered}>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ContentElements contentElements={item.content} />
          {item.subList && <ListElement style={item.subList.style} items={item.subList.items} />}
        </ListItem>
      ))}
    </List>
  );
}
