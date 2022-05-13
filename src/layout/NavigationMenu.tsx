import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Navigation,
  NavItem,
  NavItemGroup,
  useNavigationState,
} from '@castoredc/matter';

import { FileListIcon, NodeIcon } from '@castoredc/matter-icons';

const MatterNavigation = () => {
  const navigate = useNavigate();

  const [currentRoute, setCurrentRoute] = useState('');
  const [getNavItemProps, getNavItemGroupProps] = useNavigationState({
    active: currentRoute,
    setActive: setCurrentRoute,
  });

  useEffect(() => {
    currentRoute && navigate(currentRoute);
  }, [navigate, currentRoute]);

  return (
    <div
      style={{
        marginLeft: '48px',
        backgroundColor: '#FFFFFF',
        width: '250px',
      }}
    >
      <Navigation accessibleName="Main navigation">
        <NavItemGroup
          icon={<FileListIcon />}
          id="cloc"
          label="Count of Lines"
          separator
          {...getNavItemGroupProps('cloc')}
        >
          <NavItem {...getNavItemProps('cloc')}>Results of cloc</NavItem>
          <NavItem {...getNavItemProps('cloc-by-file')}>
            Results of cloc by file
          </NavItem>
        </NavItemGroup>
        <NavItem icon={<NodeIcon />} {...getNavItemProps('graphConstellation')}>
          Graph Constellation
        </NavItem>
        <NavItem icon={<NodeIcon />} {...getNavItemProps('graphCentral')}>
          Graph Central
        </NavItem>
      </Navigation>
    </div>
  );
};

export default MatterNavigation;
