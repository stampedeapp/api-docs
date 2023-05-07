import type { ReactElement, ReactNode } from 'react';

export type TwoColumnLayoutProps = {
  leftChild: ReactNode,
  rightChild: ReactNode,
}

export function TwoColumnLayout({ leftChild, rightChild}: TwoColumnLayoutProps): ReactElement {
  return (
    <div className="xl:columns-2 xl:gap-4">
      <div>{leftChild}</div>
      <div>{rightChild}</div>
    </div>
  );
}