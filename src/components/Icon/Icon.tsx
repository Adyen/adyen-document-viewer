import { h } from 'preact';
import cx from 'classnames';
import './Icon.scss';

interface IconProps {
    name: string;
    className?: string;
}

const Icon = ({ className = '', name }: IconProps) => {
    const iconTypes = {
        'chevron-up': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15">
                <path
                    fillRule="evenodd"
                    d="M13 10a1 1 0 0 1-1.743.669L7.5 6.495 3.743 10.67a1 1 0 0 1-1.486-1.338l4.5-5a1 1 0 0 1 1.486 0l4.5 5a.998.998 0 0 1 .257.67z"
                />
            </svg>
        ),
        'chevron-down': (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15">
                <path
                    fillRule="evenodd"
                    d="M2 5a1 1 0 0 1 1.743-.669L7.5 8.505l3.757-4.174a1 1 0 0 1 1.486 1.338l-4.5 5a1 1 0 0 1-1.486 0l-4.5-5A.998.998 0 0 1 2 4.999z"
                />
            </svg>
        )
    };

    return (
        <i className={cx('adv-icon', className)} role="img" aria-hidden={true}>
            {iconTypes[name]}
        </i>
    );
};

export default Icon;
