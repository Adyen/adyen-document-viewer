import { createElement, ComponentChildren } from 'preact';
import cx from 'classnames';
import './Heading.scss';

export interface HeadingProps {
    children: ComponentChildren | string;
    level: 1 | 2;
    className?: string;
}

const headingTypes = {
    1: 'h1',
    2: 'h2'
};

export default function Heading({ className, level, children }: HeadingProps) {
    const tagName = headingTypes[level] || headingTypes[1];
    const classNames = cx('adv-heading', `adv-heading--${level}`, className);
    return createElement(tagName, { className: classNames }, children);
}
