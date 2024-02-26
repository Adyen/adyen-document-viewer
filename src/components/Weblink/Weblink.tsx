import { h } from 'preact';
import { WeblinkProps } from '../../types';
import Text from '../Text/Text';
import Link from '../Link/Link';

const Weblink = ({ url, displayText }: WeblinkProps) => (
  <Link href={url}>{displayText ? <Text {...displayText} /> : url}</Link>
);

export default Weblink;
