import './DocumentViewer.scss';

import cx from 'classnames';
import { h } from 'preact';

import ContentElements from './components/ContentElements/ContentElements';
import Heading from './components/Heading/Heading';
import Text from './components/Text/Text';
import { ReferenceContextProvider } from './ReferenceContext/ReferenceContextProvider';
import { DocumentViewerProps } from './types';

export default function DocumentViewer({
  document,
  className,
  onExpandSection,
}: DocumentViewerProps) {
  const classNames = cx('adyen-document-viewer', className);

  return (
    <ReferenceContextProvider>
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
    </ReferenceContextProvider>
  );
}
