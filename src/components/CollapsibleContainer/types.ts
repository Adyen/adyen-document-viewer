import { ComponentChildren } from 'preact';

export interface CollapsibleContainerProps {
    children: ComponentChildren;
    collapsed?: boolean;
}
