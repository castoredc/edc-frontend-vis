import { CastorBar, CastorBarItemInteractive } from '@castoredc/matter';

const MatterCastorBar = () => {
  const castorBarItems: CastorBarItemInteractive[] = [
    {
      label: 'Castor',
      type: 'brand',
      destination: '#',
    },
    {
      items: [
        {
          isTitle: true,
          label: `${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`,
        },
        {
          destination: 'https://github.com/castoredc/edc-frontend-vis',
          target: '_blank',
          icon: 'study',
          label: 'Repository',
        },
      ],
      label: 'Info',
      type: 'support',
    },
  ];

  return <CastorBar items={castorBarItems} label="Castor navigation" />;
};

export default MatterCastorBar;
