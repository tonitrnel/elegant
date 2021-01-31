import React, { FC } from 'react';
import Layout from 'components/Layout';
import './styles/NotFound.less';

const NotFound: FC<{}> = () => {
  return (
    <Layout className="error-page error-page--404" title="找不到页面">
      <div className="error-container">
        <h1>404 Not Found.</h1>
        <p>页面已被遗忘.</p>
      </div>
    </Layout>
  );
};
export default NotFound;
