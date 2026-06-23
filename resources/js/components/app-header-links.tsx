import { Link } from "@inertiajs/react"

interface AppHeaderLinksProps {
  href: string;
  children: React.ReactNode;
}

const AppHeaderLinks = ({ href, children }: AppHeaderLinksProps) => {
  return (
    <div>
        <Link href={href} className="text-gray-800 hover:text-gray-600">
            {children}
        </Link>
    </div>
  )
}

export default AppHeaderLinks