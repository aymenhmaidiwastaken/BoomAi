"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserMenuItems = ({ parentClass }) => {
  const pathname = usePathname();
  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <ul className={parentClass}>
        <li>
          <Link
            className={isActive("/profile-details") ? "active" : ""}
            href="/profile-details"
          >
            <i className="fa-sharp fa-regular fa-user"></i>
            <span>Profile Details</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/notification") ? "active" : ""}
            href="/notification"
          >
            <i className="fa-sharp fa-regular fa-shopping-bag"></i>
            <span>Notification</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/chat-export") ? "active" : ""}
            href="/chat-export"
          >
            <i className="fa-sharp fa-regular fa-users"></i>
            <span>Chat Export</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/appearance") ? "active" : ""}
            href="/appearance"
          >
            <i className="fa-sharp fa-regular fa-home"></i>
            <span>Apperance</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/plans-billing") ? "active" : ""}
            href="/plans-billing"
          >
            <i className="fa-sharp fa-regular fa-briefcase"></i>
            <span>Plans and Billing</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/sessions") ? "active" : ""}
            href="/sessions"
          >
            <i className="fa-sharp fa-regular fa-users"></i>
            <span>Sessions</span>
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/application") ? "active" : ""}
            href="/application"
          >
            <i className="fa-sharp fa-regular fa-list"></i>
            <span>Application</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserMenuItems;
