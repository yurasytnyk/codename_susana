import Link from 'next/link'

import { navigationConfig } from "./navigationConfig";

const Navigation = () => {
  return (
    <div>{navigationConfig.map((navItem) => {
      return (
        <Link href={navItem.url}>
          {navItem.label}
        </Link>
      )
    })}</div>
  );
};

export default Navigation;
