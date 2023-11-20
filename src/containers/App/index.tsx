import { Helmet, HelmetProvider } from 'react-helmet-async';
import Routes from '@routes/index';
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
