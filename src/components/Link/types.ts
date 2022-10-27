import { h } from 'preact';

export default interface LinkProps {
    href: string; // Required - links with no `href` are not accessible
    className?: string;

    inheritStyles?: boolean;
    underline?: boolean;
    onClick?: h.JSX.MouseEventHandler<HTMLAnchorElement>;
}
