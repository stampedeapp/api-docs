import CreatedAt from "./createdAt.mdx";
import UpdatedAt from "./updatedAt.mdx";
import Sort from "./sort.mdx";
import PageSize from "./pageSize.mdx";
import PageAfter from "./pageAfter.mdx";
import PageBefore from "./pageBefore.mdx";

export const DefaultQueryParameters = () => {
  return (
    <>
      <CreatedAt />
      <UpdatedAt />
      <Sort />
      <PageSize />
      <PageAfter />
      <PageBefore />
    </>
  );
};
