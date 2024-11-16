/**
 * Styled component for the navigation bar container.
 *
 * @component
 * @styled
 *
 * @property {string} width - Calculated as 100% of the viewport width
 * @property {string} height - Fixed height of 60px
 * @property {string} background-color - Uses primary color from theme
 * @property {string} color - Uses background color from theme for text
 * @property {string} display - Flex display for content alignment
 * @property {string} align-items - Centers items vertically
 * @property {string} padding - Applies left and right padding using theme spacing
 */

import React from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <h1>Navbar</h1>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: calc(100%); /* Adjust for sidebar width */
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;
