import React from 'react';
import { FaWindows, FaFileArchive } from 'react-icons/fa';
import { release, downloadUrl, sizeMB, type ReleaseFile } from '@/lib/release';

/**
 * Download link for one file of the current release
 *
 * Features:
 * - Real link to the file under /downloads/<version>/ (no script needed)
 * - Shows the version and the file size
 * - Hover animations (scale + color)
 * - Accessible with ARIA labels
 *
 * @param file - The release file to link to (release.installer or release.portable)
 * @param size - Button size: 'sm', 'md' (default), or 'lg'
 * @param variant - Visual style: 'primary' (cyan) or 'secondary' (outlined)
 *
 * @example
 * ```tsx
 * <DownloadButton file={release.installer} size="lg" />
 * <DownloadButton file={release.portable} variant="secondary" />
 * ```
 */
interface DownloadButtonProps {
  file: ReleaseFile;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

export default function DownloadButton({
  file,
  size = 'md',
  variant = 'primary',
}: DownloadButtonProps): React.ReactElement {
  const Icon = file.name.endsWith('.zip') ? FaFileArchive : FaWindows;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-accent-primary hover:bg-accent-secondary border-accent-primary hover:border-accent-secondary',
    secondary: 'bg-transparent hover:bg-background-secondary border-border hover:border-border-hover',
  };

  return (
    <a
      href={downloadUrl(file)}
      download
      className={`
        inline-flex items-center justify-center gap-3
        font-mono font-bold uppercase
        border-2 border-dashed
        transition-all duration-200
        cursor-pointer hover:scale-105
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `}
      aria-label={`Download ${file.label}, version ${release.version}, ${sizeMB(file)} MB`}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
      <span>
        {file.label}
        <span className="ml-2 text-xs opacity-75">
          v{release.version} · {sizeMB(file)} MB
        </span>
      </span>
    </a>
  );
}
