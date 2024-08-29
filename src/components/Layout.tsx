import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainPageContent from './PageOutlet';

const LayoutContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentContainer>
        <Navbar />
        <MainPageContent />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
