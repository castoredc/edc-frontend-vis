import { Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, FontProvider } from '@castoredc/matter';
import { edcTheme } from '@castoredc/matter-utils';

import NavigationMenu from './components/NavigationMenu';
import NavigationBar from './components/NavigationBar';

import LoremIpsumScreen from './screens/LoremIpsumScreen';
import FormikScreen from './screens/FormikScreen';
import MiscScreen from './screens/MiscScreen';

function App() {
  return (
    <FontProvider>
      <AppProvider theme={edcTheme}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'stretch',
            height: '100%',
          }}
        >
          <NavigationBar />
          <NavigationMenu />
          <main style={{ padding: '10px 20px' }}>
            <Routes>
              <Route path="lorem-ipsum" element={<LoremIpsumScreen />} />
              <Route path="formik" element={<FormikScreen />} />
              <Route path="misc" element={<MiscScreen />} />
              <Route
                path="*"
                element={<Navigate to="/lorem-ipsum" replace />}
              />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </FontProvider>
  );
}

export default App;
