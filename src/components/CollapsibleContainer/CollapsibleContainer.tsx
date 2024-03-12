import './CollapsibleContainer.scss';

import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import { CollapsibleContainerProps } from './types';

export default function CollapsibleContainer({
  children,
  collapsed = false,
}: CollapsibleContainerProps) {
  const collapsibleContainerEl = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<number | undefined>(collapsed ? 0 : undefined);

  useEffect(() => {
    setHeight(collapsed ? 0 : collapsibleContainerEl.current?.scrollHeight);
  }, [collapsed]);

  return (
    <div
      className="adv-collapsible-container"
      aria-hidden={collapsed}
      ref={collapsibleContainerEl}
      style={{ height }}
    >
      {children}
    </div>
  );
}
