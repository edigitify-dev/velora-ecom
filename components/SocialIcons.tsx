type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.5 2 3 5.7 3 9.9c0 2 1.1 4.5 2.8 5.3.3.1.4 0 .5-.3l.4-1.6c0-.2 0-.3-.1-.5-.6-.7-1-1.8-1-2.8 0-2.7 2-5.2 5.5-5.2 3 0 5.1 2.1 5.1 5 0 3.1-1.6 5.3-3.6 5.3-1.1 0-1.9-.9-1.7-2 .3-1.3.9-2.8.9-3.7 0-.9-.5-1.6-1.4-1.6-1.1 0-2 1.1-2 2.6 0 1 .3 1.6.3 1.6l-1.3 5.5c-.3 1.2 0 3.1 0 3.3 0 .1.2.2.3.1.1-.1 1.5-1.9 2-3.6l.7-2.8c.4.7 1.4 1.3 2.5 1.3 3.3 0 5.5-3 5.5-6.9C21 5 17.6 2 12 2z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  );
}
