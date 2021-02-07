import React, { FC, useMemo, useState } from 'react';
import { SiteNavigationMap } from 'types/gql';
import { useImmer } from 'hooks/useImmer';
import './styles/Header.less';
import clsx from 'utils/clsx';
import { Link } from 'gatsby';
import { useMetadata } from 'hooks/useMetadata';

const Header: FC<{
  title: string;
  navs: Array<SiteNavigationMap>;
  path?: string;
}> = ({ title, navs, path }) => {
  const [{ isMobile, size, colorMode }, mutation] = useImmer();
  const metadata = useMetadata();
  const avatarSize = useMemo(() => size ?? '25px', [size]);
  const [isHide, setIsHide] = useState(false);
  return (
    <header
      className={clsx(
        'header',
        isHide && 'header--hide',
        isMobile && 'header--mobile'
      )}
    >
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={`https://thirdwx.qlogo.cn/mmopen/vi_32/Y4leNt4RnrFfxbamLOrb1KjEesMEMxTxqBwr3YYKzJwMTnRicNvc3RP48t5X88P6Dv2Ewy8zSia6kysrL4UMXwcQ/132`}
              alt="title profile picture"
              style={{
                width: avatarSize,
                height: avatarSize,
              }}
            />
          </div>
        </Link>
        <Link to="/">
          <h1 className="header-title-text">{title}</h1>
        </Link>
      </div>
      <nav className="navbar">
        <button>搜索</button>
        <ul className="nav-list">
          {navs.map((it) => (
            <li
              className={clsx(
                'nav-item',
                it.path === path && 'nav-item__active'
              )}
              key={it.path}
            >
              {it.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
