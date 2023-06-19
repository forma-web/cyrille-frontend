export type TTriggerProps = {
  isActive?: boolean;
  onClick?: () => void;
  renderIcon?: (isActive: boolean) => JSX.Element;
  children?: React.ReactNode;
};
