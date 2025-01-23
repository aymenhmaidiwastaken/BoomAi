import Image from "next/image";
import Link from "next/link";

import avatar from "../../public/images/team/team-01sm.jpg";
import UserMenuItems from "./HeaderProps/UserMenuItem";

const UserMenu = () => {
  return (
    <>
      <div className="inner">
        <div className="boom-admin-profile">
          <div className="admin-thumbnail">
            <Image src={avatar} width={31} height={31} alt="User Images" />
          </div>
          <div className="admin-info">
            <span className="name">My Account</span>
            <Link
              className="boom-btn-link color-primary"
              href="/profile-details"
            >
              View Profile
            </Link>
          </div>
        </div>
        <UserMenuItems parentClass="user-list-wrapper user-nav" />
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper user-nav">
          <li>
            <Link href="/privacy-policy">
              <i className="fa-solid fa-comments-question"></i>
              <span>Help Center</span>
            </Link>
          </li>
          <li>
            <Link href="/profile-details">
              <i className="fa-sharp fa-solid fa-gears"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper">
          <li>
            <Link href="/signup">
              <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
