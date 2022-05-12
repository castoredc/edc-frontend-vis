import { Menu, MenuItemProps } from '@castoredc/matter';

const MatterMenu = () => {
  const demoItems: MenuItemProps[] = [
    { destination: () => console.log('Record signed'), label: 'Sign record' },
    {
      destination: () => console.log('Record verified'),
      label: 'Mark as verified',
    },
    { isSeparator: true },
    { destination: () => console.log('Record printed'), label: 'Print' },
    { isSeparator: true },
    { destination: () => console.log('Record exported'), label: 'Export' },
    { isSeparator: true },
    {
      destination: () => console.log('Survey group created'),
      label: 'Create a survey group',
    },
    {
      destination: () => console.log('Record added to a survey group'),
      label: 'Add to a survey group',
    },
    { isSeparator: true },
    {
      destination: () => console.log('Institute updated'),
      label: 'Update institute',
    },
    {
      destination: () => console.log('Email address updated'),
      label: 'Update email address',
    },
    { isSeparator: true },
    { destination: () => console.log('Record archived'), label: 'Archive' },
  ];

  return <Menu items={demoItems} />;
};

export default MatterMenu;
