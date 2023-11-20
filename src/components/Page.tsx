import { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type PageProps = {
  title: string;
  children: ReactNode;
};

function Page({ title, children }: PageProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{children}</div>
    </HelmetProvider>
  );
}

export default Page;
