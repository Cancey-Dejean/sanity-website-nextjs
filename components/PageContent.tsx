export const PageContent = (section: any) => {
  switch (section._type) {
    case "hero":
      return <p key={section._type}>Hero</p>;

    default:
      return (
        <div className="py-10 text-center">
          <h1>Please add Section content to page in Sanity CMS</h1>
        </div>
      );
  }
};
