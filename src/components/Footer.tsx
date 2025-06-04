import Link from 'next/link'

const footerSections = [
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety Information', href: '/safety' },
      { label: 'Cancellation Policy', href: '/cancellation' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Success Stories', href: '/stories' },
      { label: 'Guidelines', href: '/guidelines' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Hosting',
    links: [
      { label: 'Become a Host', href: '/host' },
      { label: 'Host Resources', href: '/host/resources' },
      { label: 'Host Protection', href: '/host/protection' },
      { label: 'Community Forum', href: '/community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-600 hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} Host Guest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 