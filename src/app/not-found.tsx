import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-content py-32 text-center">
      <p style={{ color: 'var(--accent)' }} className="font-display text-6xl font-semibold mb-4">
        404
      </p>
      <div style={{ backgroundColor: 'var(--accent)' }} className="w-8 h-px mx-auto mb-8" />
      <h1 style={{ color: 'var(--text)' }} className="font-display text-2xl font-semibold mb-4">
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-muted)' }} className="text-sm mb-10">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
