import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthentication } from "../contexts/authenticationContext";

type ProtectedRouteProps = {
  redirectTo: string;
  placeholder?: React.ReactNode;
  children?: JSX.Element;
};

export function ProtectedRoute({
  redirectTo,
  placeholder,
  children,
}: ProtectedRouteProps) {
  const { user, loading } = useAuthentication();
  const location = useLocation();

  if (loading) return <>{placeholder}</>;
  if (!user)
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  return children ?? <Outlet />;
}
