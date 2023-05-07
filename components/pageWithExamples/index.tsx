import type { ReactElement, ReactNode } from 'react';
import { TwoColumnLayout } from '../columns/twoColumn';

export type PageWithExamplesProps = {
  children: ReactNode,
  examples: ReactNode,
}

export function PageWithExamples({ children, examples }: PageWithExamplesProps): ReactElement {
  return (
    <TwoColumnLayout leftChild={children} rightChild={examples} />
  );
}