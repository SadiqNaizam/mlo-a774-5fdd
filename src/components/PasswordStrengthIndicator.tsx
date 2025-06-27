import React, { useMemo } from 'react';

interface PasswordStrengthIndicatorProps {
  /** The password string to evaluate. The component will not render if this is empty or not provided. */
  password?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const getPasswordStrength = (pw: string) => {
    let score = 0;

    // A very weak password (e.g., < 8 chars) should get a score of 1.
    if (pw.length > 0 && pw.length < 8) {
        score = 1;
    } else if (pw.length >= 8) {
        score = 1; // Base score for length
        // Award points for complexity
        if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) {
            score++;
        }
        if (/[0-9]/.test(pw)) {
            score++;
        }
        if (/[^A-Za-z0-9]/.test(pw)) {
            score++;
        }
    }
    
    // Determine strength level, label, and appearance
    switch (score) {
      case 1:
        return { level: 1, label: 'Weak', color: 'bg-red-500', width: 'w-1/4' };
      case 2:
        return { level: 2, label: 'Medium', color: 'bg-yellow-500', width: 'w-2/4' };
      case 3:
        return { level: 3, label: 'Strong', color: 'bg-lime-500', width: 'w-3/4' };
      case 4:
        return { level: 4, label: 'Very Strong', color: 'bg-green-600', width: 'w-full' };
      default:
        // Case 0: No password entered
        return { level: 0, label: '', color: 'bg-transparent', width: 'w-0' };
    }
  };

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  // Don't render anything if there's no password
  if (!password) {
    return null;
  }

  return (
    <div className="w-full mt-2" aria-live="polite">
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className={`h-2 rounded-full transition-all duration-300 ease-in-out ${strength.color} ${strength.width}`}
          role="progressbar"
          aria-valuenow={strength.level}
          aria-valuemin={0}
          aria-valuemax={4}
          aria-valuetext={`Password strength: ${strength.label}`}
        ></div>
      </div>
      <p className="text-xs text-right text-gray-500 mt-1 h-4">
        {strength.label}
      </p>
    </div>
  );
};

export default PasswordStrengthIndicator;