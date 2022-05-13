import { Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, FontProvider } from '@castoredc/matter';
import { edcTheme } from '@castoredc/matter-utils';

import NavigationMenu from './layout/NavigationMenu';
import NavigationBar from './layout/NavigationBar';

import ClocScreen from './features/cloc/screens/ClocScreen';
import ClocByFileScreen from './features/cloc/screens/ClocByFileScreen';
import GraphConstellation from './features/graph/screens/GraphConstellation';
import GraphCentral from './features/graph/screens/GraphCentral';

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
              <Route path="cloc-by-file" element={<ClocByFileScreen />} />
              <Route
                path="graphConstellation"
                element={<GraphConstellation />}
              />
              <Route path="graphCentral" element={<GraphCentral />} />
              <Route path="*" element={<Navigate to="/cloc" replace />} />
            </Routes>
          </main>
        </div>
      </AppProvider>
    </FontProvider>
  );
}

export default App;
