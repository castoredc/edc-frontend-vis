import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Navigation,
  NavItem,
  NavItemGroup,
  useNavigationState,
} from '@castoredc/matter';

import {
  CheckboxesIcon,
  FileListIcon,
  FormIcon,
  NodeIcon,
  QuillIcon,
} from '@castoredc/matter-icons';

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
        <NavItem icon={<NodeIcon />} {...getNavItemProps('graph')}>
          Graph
        </NavItem>
        <NavItem icon={<QuillIcon />} {...getNavItemProps('lorem-ipsum')}>
          Lorem Ipsum
        </NavItem>
        <NavItemGroup
          icon={<FormIcon />}
          id="forms"
          label="Forms"
          separator
          {...getNavItemGroupProps('forms')}
        >
          <NavItem {...getNavItemProps('formik')}>Formik</NavItem>
        </NavItemGroup>
        <NavItem icon={<CheckboxesIcon />} {...getNavItemProps('misc')}>
          Miscellaneous
        </NavItem>
      </Navigation>
    </div>
  );
};

export default MatterNavigation;
