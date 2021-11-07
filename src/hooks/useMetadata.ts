import { useContext, createContext } from 'react';
import { LayoutQuery, SiteSiteMetadata } from '~/types/gql';

const metadataContext = createContext<
  NonNullable<LayoutQuery['site']>['metadata'] | null
>(null);

export const MetadataProvider = metadataContext.Provider;

export const useMetadata = () => {
  const context = useContext(metadataContext);
  if (context === undefined) {
    throw new Error('This hook can only be invoked under <MetadataProvider/>');
  }
  return context;
};
