'use client';

import { useTheme } from 'next-themes';

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

/**
 * Custom Toaster component with enhanced styling for different toast types
 * @param {ToasterProps} props - Sonner Toaster props
 * @returns {JSX.Element} Styled toaster component
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-5" />,
        info: <InfoIcon className="size-5" />,
        warning: <TriangleAlertIcon className="size-5" />,
        error: <OctagonXIcon className="size-5" />,
        loading: <Loader2Icon className="size-5 animate-spin" />,
      }}
      style={
        {
          // Base styles
          '--border-radius': '12px',
          '--font-size': '16px',
          '--font-weight': '500',
          '--toast-width': '420px',
          '--toast-padding': '16px 20px',

          // Success styles
          '--success-bg': '#06B6D4',
          '--success-text': 'hsl(0 0% 100%)',
          '--success-border': '#06B6D4',
          '--success-icon-color': 'hsl(0 0% 100%)',

          // Error styles
          '--error-bg': '#FF0000',
          '--error-text': 'hsl(0 0% 100%)',
          '--error-border': '#FF0000',
          '--error-icon-color': 'hsl(0 0% 100%)',

          // Warning styles
          '--warning-bg': '#FF0000',
          '--warning-text': 'hsl(0 0% 100%)',
          '--warning-border': '#FF0000',
          '--warning-icon-color': 'hsl(0 0% 100%)',

          // Info styles
          '--info-bg': '#FF0000',
          '--info-text': 'hsl(0 0% 100%)',
          '--info-border': 'hsl(221 83% 53%)',
          '--info-icon-color': 'hsl(0 0% 100%)',

          // Loading styles
          '--loading-bg': 'hsl(215 25% 27% / 0.95)',
          '--loading-text': 'hsl(0 0% 100%)',
          '--loading-border': 'hsl(215 25% 27%)',
          '--loading-icon-color': 'hsl(0 0% 100%)',

          // Normal/Default styles
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
