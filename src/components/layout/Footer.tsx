import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <p className="text-sm text-center text-muted-foreground">
          &copy; {currentYear} QuickAccess Login. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link
            to="/terms"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;