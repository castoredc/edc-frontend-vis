import { Card, DatePicker, Tabs, ViewHeader } from '@castoredc/matter';

import SampleCard from '../components/SampleCard';
import SampleMenu from '../components/SampleMenu';

const MiscScreen = () => {
  return (
    <div>
      <ViewHeader>Miscellaneous</ViewHeader>

      <Card style={{ marginTop: '10px' }}>
        <Tabs
          tabs={{
            card: { content: <SampleCard />, title: 'Card' },
            datePicker: {
              content: (
                <DatePicker selected={new Date('2022-03-29T12:24:42.000Z')} />
              ),
              title: 'DatePicker',
            },
            menu: { content: <SampleMenu />, title: 'Menu' },
          }}
        />
      </Card>
    </div>
  );
};

export default MiscScreen;
