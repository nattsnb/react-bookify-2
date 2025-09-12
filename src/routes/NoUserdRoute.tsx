import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthentication } from "../contexts/authenticationContext";

type NoUserProps = {
  redirectTo: string;
  placeholder?: React.ReactNode;
  children?: JSX.Element;
};

export function NoUserRoute({
  redirectTo,
  placeholder,
  children,
}: NoUserProps) {
  const { user, loading } = useAuthentication();
  const location = useLocation();

  if (loading) return <>{placeholder}</>;
  if (user)
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  return children ?? <Outlet />;
}
