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
