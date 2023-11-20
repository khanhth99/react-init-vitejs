import { Helmet, HelmetProvider } from 'react-helmet-async';
// routing
import Routes from '@routes/index';

// project imports
import Layouts from '@layouts/index';

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - Airflex Admin" defaultTitle="Welcome back - Airflex Admin">
        <meta name="description" content="Admin - Airflex" />
      </Helmet>
      <Layouts>
        <Routes />
      </Layouts>
      {/* {showLoading && <Loading />} */}
      {/* <Loading /> */}
    </HelmetProvider>
  );
}

export default App;
