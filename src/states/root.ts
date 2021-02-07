export interface RootState {
  path: string;
  size: string;
  isMobile: boolean;
  colorMode: 'dark' | 'light';
}
export const initial_state: RootState = {
  path: '',
  size: '60px',
  isMobile: false,
  colorMode: 'light',
};
