import {
  Nav,
  NavIcon,
  NavIconBars,
  SidebarNav,
  SidebarWrap,
} from "./styles";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import { useState } from "react";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  async function handleSidebarOpen() {
    setSidebar(!sidebar);
  }

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
      </SidebarNav>
    </IconContext.Provider>
  );
};
