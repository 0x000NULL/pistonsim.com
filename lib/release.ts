/**
 * The current PISTON release, as published on this site.
 *
 * The files live in public/downloads/<version>/ and are copied unchanged from the
 * release build. The SHA-256 values must match the .sha256 files next to them;
 * update all of this together when a new release is published.
 */

export interface ReleaseFile {
  /** What the file is, as shown to the user */
  label: string;
  /** File name inside public/downloads/<version>/ */
  name: string;
  /** Size in bytes */
  bytes: number;
  /** Lower-case hex SHA-256 of the file */
  sha256: string;
}

export const release = {
  version: '0.1.0-alpha',
  date: '2026-09-23',
  installer: {
    label: 'Windows installer',
    name: 'PISTON-0.1.0-alpha-win64.exe',
    bytes: 6523352,
    sha256: 'd779caa13d3a158777d4f1e04b2711ea311d83453e380724e562359a4e8f6dba',
  } satisfies ReleaseFile,
  portable: {
    label: 'Portable ZIP',
    name: 'PISTON-0.1.0-alpha-win64.zip',
    bytes: 7593182,
    sha256: '7bfda6d91cf9d6da4fefe1ff437dac3a4518478c48d164710fafbd6f77eaa784',
  } satisfies ReleaseFile,
} as const;

/** Site-relative URL of a release file */
export function downloadUrl(file: ReleaseFile): string {
  return `/downloads/${release.version}/${file.name}`;
}

/** File size in MB, one decimal */
export function sizeMB(file: ReleaseFile): string {
  return (file.bytes / 1_000_000).toFixed(1);
}
