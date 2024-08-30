export default function RadiantText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`from-red-500  to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}