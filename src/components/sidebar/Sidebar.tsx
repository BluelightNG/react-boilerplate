/**
 * A sidebar navigation component that displays a list of links.
 *
 * @component
 * @example
 * ```tsx
 * <Sidebar />
 * ```
 *
 * @returns A sidebar container with navigation links to different routes:
 * - Home (/)
 * - Dashboard (/dashboard)
 * - Profile (/profile)
 * - About (/about)
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/dashboard">Dashboard</SidebarLink>
      <SidebarLink to="/profile">Profile</SidebarLink>
      <SidebarLink to="/about">About</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const SidebarLink = styled(Link)`
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.body};

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;
