import { Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, FontProvider } from '@castoredc/matter';
import { edcTheme } from '@castoredc/matter-utils';

import NavigationMenu from './layout/NavigationMenu';
import NavigationBar from './layout/NavigationBar';

import ClocScreen from './features/cloc/screens/ClocScreen';
import GraphScreen from './features/graph/screens/Graph';
import LoremIpsumScreen from './features/sample/screens/LoremIpsumScreen';
import FormikScreen from './features/sample/screens/FormikScreen';
import MiscScreen from './features/sample/screens/MiscScreen';

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
              <Route path="cloc" element={<ClocScreen />} />
              <Route path="graph" element={<GraphScreen />} />
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
