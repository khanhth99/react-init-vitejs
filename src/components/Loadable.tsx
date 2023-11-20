import { Suspense } from 'react';
// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: React.FC) =>
  function (props: any) {
    return (
      <Suspense>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
