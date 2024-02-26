import { h } from 'preact';
import { ListProps } from '../../types';
import List from '../List/List';
import ListItem from '../List/ListItem';
import ContentElements from '../ContentElements/ContentElements';

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
