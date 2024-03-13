import { h } from 'preact';

import { WeblinkProps } from '../../types';
import Link from '../Link/Link';
import Text from '../Text/Text';

const Weblink = ({ url, displayText }: WeblinkProps) => (
  <Link href={url}>{displayText ? <Text {...displayText} /> : url}</Link>
);

export default Weblink;
