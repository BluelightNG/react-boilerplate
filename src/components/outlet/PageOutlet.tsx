/**
 * A styled container component for the main content area.
 *
 * @component
 * @styled
 *
 * @property {number} flex-grow - Set to 1 to allow the container to expand and fill available space
 * @property {string} padding - Uses the theme's large spacing value
 * @property {string} background-color - Uses the theme's background color value
 */

import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const MainPageContent: React.FC = () => {
  return (
    <MainContentContainer>
      <Outlet />
    </MainContentContainer>
  );
};

export default MainPageContent;

const MainContentContainer = styled.div`
  flex-grow: 1;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.background};
`;
