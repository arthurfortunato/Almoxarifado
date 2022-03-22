import {
  Nav,
  NavIcon,
  NavIconBars,
  SidebarNav,
  SidebarWrap,
  NavIconLogout,
} from "./styles";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

import { useState } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const navigate = useNavigate();
  const { Logout } = useAuth();

  async function handleSidebarOpen() {
    setSidebar(!sidebar);
  }

  const handleLogout = () => {
    Logout();
    navigate("/");
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavIconBars to="#">
          <FaIcons.FaBars onClick={handleSidebarOpen} />
        </NavIconBars>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <FaIcons.FaArrowAltCircleLeft onClick={handleSidebarOpen} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
        <SidebarWrap>
          <NavIconLogout onClick={handleLogout}>
            <BiIcons.BiLogOut onClick={handleSidebarOpen} />
          </NavIconLogout>
        </SidebarWrap>
      </SidebarNav>
    </IconContext.Provider>
  );
};
