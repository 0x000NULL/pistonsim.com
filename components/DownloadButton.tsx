'use client';

import React from 'react';
import { FaWindows, FaApple, FaLinux, FaDownload } from 'react-icons/fa';

/**
 * Platform-specific download button with icon and version display
 *
 * Features:
 * - Platform icons (Windows, macOS, Linux)
 * - Optional version number display
 * - Disabled state support
 * - Hover animations (scale + color)
 * - Accessible with ARIA labels
 *
 * @param platform - Target platform: 'windows', 'macos', 'linux', or 'all'
 * @param version - Optional software version to display
 * @param size - Button size: 'sm', 'md' (default), or 'lg'
 * @param variant - Visual style: 'primary' (cyan) or 'secondary' (outlined)
 * @param disabled - If true, button is non-interactive
 *
 * @example
 * ```tsx
 * <DownloadButton platform="windows" version="1.0.0" size="lg" />
 * <DownloadButton platform="macos" variant="secondary" />
 * ```
 */
interface DownloadButtonProps {
  platform: 'windows' | 'macos' | 'linux' | 'all';
  version?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const platformInfo = {
  windows: {
    icon: FaWindows,
    label: 'Windows',
    fileExtension: '.exe',
  },
  macos: {
    icon: FaApple,
    label: 'macOS',
    fileExtension: '.dmg',
  },
  linux: {
    icon: FaLinux,
    label: 'Linux',
    fileExtension: '.AppImage',
  },
  all: {
    icon: FaDownload,
    label: 'Download',
    fileExtension: '',
  },
};

export default function DownloadButton({
  platform,
  version,
  size = 'md',
  variant = 'primary',
  disabled = false,
}: DownloadButtonProps): React.ReactElement {
  const info = platformInfo[platform];
  const Icon = info.icon;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-accent-primary hover:bg-accent-secondary border-accent-primary hover:border-accent-secondary',
    secondary: 'bg-transparent hover:bg-background-secondary border-border hover:border-border-hover',
  };

  const handleClick = () => {
    if (disabled) return;

    // TODO: Replace with actual download URLs when available
    // For now, show coming soon alert
    alert(`Download for ${info.label} coming soon in alpha release!`);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-3
        font-mono font-bold uppercase
        border-2 border-dashed
        transition-all duration-200
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
      `}
      aria-label={`Download for ${info.label}${version ? ` version ${version}` : ''}`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      <span>
        {info.label}
        {version && <span className="ml-2 text-xs opacity-75">v{version}</span>}
      </span>
    </button>
  );
}
