import React, { FC, useMemo, useState } from 'react';
import { useImmer } from 'hooks/useImmer';
import './styles/Header.less';
import clsx from 'utils/clsx';
import { Link } from 'gatsby';

const Header: FC<{
  title: string;
  navs: Record<'name' | 'path', string>[];
  path?: string;
}> = ({ title, navs, path }) => {
  const [{ isMobile, size, colorMode }, mutation] = useImmer();
  const avatarSize = useMemo(() => size ?? '25px', [size]);
  const [isHide, setIsHide] = useState(false);
  return (
    <header
      id="header"
      className={clsx(isHide && 'header--hide', isMobile && 'header--mobile')}
    >
      <div className="header-title">
        <Link to="/">
          <div className="header-profile-image-wrap">
            <img
              src={`https://source.unsplash.com/random/100x100'`}
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
