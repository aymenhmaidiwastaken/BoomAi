import Image from "next/image";
import React from "react";
import Link from "next/link";

import brandOne from "../../public/images/brand/brand-01.png";
import brandTwo from "../../public/images/brand/brand-02.png";
import brandThree from "../../public/images/brand/brand-03.png";
import brandFour from "../../public/images/brand/brand-04.png";

const BrandTwo = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12 mt--10">
          <ul className="brand-list brand-style-2">
            <li>
              <Link href="#">
                <Image
                  src={brandOne}
                  width={119}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandTwo}
                  width={155}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandThree}
                  width={183}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src={brandFour}
                  width={197}
                  height={34}
                  alt="Brand Image"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BrandTwo;
