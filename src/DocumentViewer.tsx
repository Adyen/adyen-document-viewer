import { h } from 'preact';
import { DocumentViewerProps } from './types';
import './DocumentViewer.scss';
import cx from 'classnames';
import Heading from './components/Heading/Heading';
import Text from './components/Text/Text';
import ContentElements from './components/ContentElements/ContentElements';

export default function DocumentViewer({
  document,
  className,
  onExpandSection,
}: DocumentViewerProps) {
  const classNames = cx('adyen-document-viewer', className);

  return (
    <div className={classNames}>
      <Heading level={1} className="adv-u-margin-top-24 adv-u-margin-bottom-16">
        <Text content={document.title.content} styles={document.title.styles} />
      </Heading>
      <ContentElements
        contentElements={document.contentElements}
        onExpandSection={onExpandSection}
        isTopLevel
      />
    </div>
  );
}
