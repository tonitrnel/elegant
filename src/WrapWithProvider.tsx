import React from 'react';
import dayjs from 'dayjs';
import { ImmerProvider } from 'components/ImmerProvider';
import { reportWebVitals } from 'utils/reportWebVitals';
import { graphql, useStaticQuery } from 'gatsby';
import { LanguageQuery } from 'types/gql';

const QUERY_LANGUAGE = graphql`
  query LANGUAGE {
    site {
      metadata: siteMetadata {
        language
      }
    }
  }
`;

export default (props: Record<'element', any>) => {
  const language =
    useStaticQuery<LanguageQuery>(QUERY_LANGUAGE).site?.metadata?.language ??
    'zh-CN';
  import(`dayjs/locale/${language.toLowerCase()}`)
    .then(() => {
      dayjs.locale(language.toLowerCase());
    })
    .catch(() => {});
  return <ImmerProvider>{props.element}</ImmerProvider>;
};
reportWebVitals(console.log).catch(() => {});
