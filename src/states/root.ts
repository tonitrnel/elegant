export interface RootState {
  path: string;
  size: string;
  isMobile: boolean;
}
export const initial_state: RootState = {
  path: '',
  size: '25px',
  isMobile: false,
};
