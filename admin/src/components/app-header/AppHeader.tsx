import { ReactNode } from "react";

interface AppHeaderProps {
  children: ReactNode;
}
export const AppHeader = ({ children }: AppHeaderProps) => {
  return (
    <h5 className="mb-3 text-lg font-bold text-text-color-inverted capitalize text-gray-600 mb-4">
      {children}
    </h5>
  );
};
