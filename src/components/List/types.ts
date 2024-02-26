import { ComponentChildren } from 'preact';

export interface ListItemProps {
  children?: ComponentChildren;
  className?: string;
  noMarkers?: boolean;
}

export interface ListProps {
  children?: ComponentChildren;
  className?: string;
  nested?: boolean;
  ordered?: boolean;
  noMarkers?: boolean;
}
