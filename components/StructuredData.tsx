import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, unknown>
}

/**
 * Component to inject JSON-LD structured data into the page head
 *
 * @param data - The structured data object to be serialized
 * @returns Script component with JSON-LD data
 */
export default function StructuredData({ data }: StructuredDataProps): React.ReactElement {
  return (
    <Script
      id={`structured-data-${Math.random().toString(36).substring(7)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  )
}
