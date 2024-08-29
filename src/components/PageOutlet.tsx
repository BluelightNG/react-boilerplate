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
