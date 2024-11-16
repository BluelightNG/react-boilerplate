/**
 * Layout component that represents the main structural layout of the application.
 * Organizes the main components in a structured format with sidebar, navigation, and content areas.
 *
 * @component
 * @returns {JSX.Element} A structured layout containing Sidebar, Navbar, and MainPageContent components
 *
 * @example
 * ```tsx
 * <Layout />
 * ```
 */

import Navbar from '@components/navbar/Navbar';
import MainPageContent from '@components/outlet/PageOutlet';
import Sidebar from '@components/sidebar/Sidebar';
import React from 'react';
import styled from 'styled-components';

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

const LayoutContainer = styled.div`
  display: flex;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 250px);
  position: absolute;
  right: 0;
`;
