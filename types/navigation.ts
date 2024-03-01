export interface NavigationItemProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavigationItemProps[];
}
