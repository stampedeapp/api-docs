import Parameter from '../parameter';

import CreatedAtAfter from './createdAtAfter.mdx';
import CreatedAtBefore from './createdAtBefore.mdx'
import UpdatedAtAfter from './updatedAtAfter.mdx';
import UpdatedAtBefore from './updatedAtBefore.mdx';
import PageSize from './pageSize.mdx';
import PageAfter from './pageAfter.mdx';
import PageBefore from './pageBefore.mdx';

export const DefaultQueryParameters = () => {
  return (
    <>
      <CreatedAtAfter />
      <CreatedAtBefore />
      <UpdatedAtAfter />
      <UpdatedAtBefore />
      <PageSize />
      <PageAfter />
      <PageBefore />
    </>
  )
}
