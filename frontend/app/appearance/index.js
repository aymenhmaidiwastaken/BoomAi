"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import Appearance from "@/components/Appearance/Appearance";

const AppearancePage = () => {
  return (
    <>
      <main className="page-wrapper boom-dashboard-page">
        <Context>
          <div className="boom-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <Appearance />
          </div>
        </Context>
      </main>
    </>
  );
};

export default AppearancePage;
