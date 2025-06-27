import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  console.log('Header loaded');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">QuickAccess Login</span>
        </Link>
        <nav className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <LayoutDashboard className="h-4 w-4 mr-2 inline-block" />
                Dashboard
              </NavLink>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                <LogIn className="h-4 w-4 mr-2 inline-block" />
                Login
              </NavLink>
              <Button asChild size="sm">
                <Link to="/sign-up">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;