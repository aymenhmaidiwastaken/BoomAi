"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import PlansBilling from "@/components/PlansBilling/PlansBilling";
import BackToTop from "../backToTop";

const PlansBillingPage = () => {
  return (
    <>
      <main className="page-wrapper boom-dashboard-page">
        <Context>
          <div className="boom-panel-wrapper">
            <HeaderDashboard display="d-none" />

            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <PlansBilling />
          </div>

          <BackToTop />
        </Context>
      </main>
    </>
  );
};

export default PlansBillingPage;
