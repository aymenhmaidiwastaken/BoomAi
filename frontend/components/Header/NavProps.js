import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavProps = ({ list }) => {
  const pathname = usePathname();

  const isActive = (href) =>
    pathname.substring(0, 11) === href.substring(0, 11);

  return (
    <>
      <div className="col-lg-3 single-mega-item">
        <ul className="mega-menu-item">
          {list &&
            list.map((item, i) => (
              <li key={i}>
                {item.heading ? (
                  <h3 className="boom-short-title">{item.heading}</h3>
                ) : (
                  <Link
                    className={`${item.isComing ? "disabled" : ""} ${
                      isActive(item.link) ? "active" : ""
                    }`}
                    href={item.link}
                  >
                    <span>{item.text}</span>
                    {item.badge ? (
                      <div className="boom-badge-card badge-sm ml--5">
                        {item.badge}
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default NavProps;
