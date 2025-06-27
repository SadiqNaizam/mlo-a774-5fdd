import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

// A simple, self-contained SVG component for the Google logo.
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.48 10.92v3.28h7.84c-.27 1.44-1.14 2.73-2.43 3.57v2.75h3.57c2.18-2.04 3.44-5 3.44-8.6s-1.26-6.56-3.44-8.6H17.9v2.75c1.29.84 2.16 2.13 2.43 3.57h-7.84z" fill="#4285F4" />
    <path d="M2.78 14.86c-.2-.62-.3-1.28-.3-1.94s.1-.1.32-.3-1.94c0-.66.1-1.32.3-1.94V8.14H.25C-.04 8.76 0 9.38 0 10c0 .62.04 1.24.12 1.86l2.66-2.14z" fill="#FBBC05" />
    <path d="M12.48 4.3v3.28h7.84a8.17 8.17 0 00-11.41-3.57l2.66 2.14c.95-.68 2.16-1.1 3.48-1.1z" fill="#EA4335" />
    <path d="M12.48 17.42c-1.32 0-2.53-.42-3.48-1.1l-2.66 2.14a8.17 8.17 0 0011.41-3.57H12.48v3.28z" fill="#34A853" />
  </svg>
);

type Provider = 'google' | 'github';

interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: Provider;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, ...props }) => {
  console.log(`SocialLoginButton loaded for provider: ${provider}`);

  const providerConfig = {
    google: {
      icon: <GoogleIcon className="mr-2 h-4 w-4" />,
      text: 'Continue with Google',
    },
    github: {
      icon: <Github className="mr-2 h-4 w-4" />,
      text: 'Continue with GitHub',
    },
  };

  const { icon, text } = providerConfig[provider];

  const handleAuth = () => {
    console.log(`Attempting to authenticate with ${provider}`);
    // In a real application, you would trigger the OAuth flow here.
  };

  return (
    <Button variant="outline" type="button" className="w-full" onClick={handleAuth} {...props}>
      {icon}
      {text}
    </Button>
  );
};

export default SocialLoginButton;