export type PageContentProps = {
  children?: React.ReactNode;
};

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div className="bg-white w-full p-6" style={{ minHeight: 'calc(100vh - 75px)' }}>
      {children}
    </div>
  );
};
