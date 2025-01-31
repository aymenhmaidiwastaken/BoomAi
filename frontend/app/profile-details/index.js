"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";

const ProfileDetailsPage = () => {
  return (
    <>
      <main className="page-wrapper boom-dashboard-page">
        <Context>
          <div className="boom-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <ProfileDetails />
          </div>
        </Context>
      </main>
    </>
  );
};

export default ProfileDetailsPage;
