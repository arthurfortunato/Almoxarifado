import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(144, 27, 65, 0.5);
  position: fixed;
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
`;
export const NavIconLogout = styled.button`
  width: 85%;
  height: 80px;
  background: #901b41;
  font-size: 2.4rem;
  border: 0;
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavIconBars = styled(NavIcon)`
  margin-left: 2rem;
`;

export const SidebarNav = styled.nav<{ sidebar: boolean }>`
  background: #901b41;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 0.8s;
  z-index: 10;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;

`;

/* SubMenu================================================================ */

export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;

  text-decoration: none;
  font: 400 1.3rem "Lato", sans-serif;
  color: #e1e9fc;
  transition: 0.6s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-left: 4px solid #901b41;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  background: #414757;
  height: 60px;

  font: 400 1.2rem "Lato", sans-serif;
  text-decoration: none;
  color: #f5f5f5;
  transition: 0.8s;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;
