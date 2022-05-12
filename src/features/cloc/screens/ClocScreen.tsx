import { Banner, TextContainer, ViewHeader } from '@castoredc/matter';

const ClocScreen = () => {
  return (
    <div>
      <ViewHeader>
        Count Lines of Code (cloc) Results for EDC Repository
      </ViewHeader>
      <div style={{ marginTop: '20px' }}>
        <Banner
          description={
            <>
              Data was collected by running <i>cloc edc/ --json</i> command on a
              directory with fresh clone of{' '}
              <a href="https://github.com/castoredc/edc">EDC</a> repository with
              head at commit 6fb6e43fe96502e31fe04f1e182b475566b2d6d6.
              <ul
                style={{ margin: 0, padding: '10px 0 0 0', listStyle: 'none' }}
              >
                <li>Date: 2022-05-12 13:50</li>
                <li>System: Ubuntu 20.04</li>
                <li>cloc: 1.82</li>
              </ul>
            </>
          }
        ></Banner>
        <TextContainer style={{ marginTop: '10px' }}>
          TODO: Add table and graph here....
        </TextContainer>
      </div>
    </div>
  );
};

export default ClocScreen;
