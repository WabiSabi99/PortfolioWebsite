// Footer.tsx
// Displays the site footer with copyright, privacy link, and social media icons.

import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center pb-32 sm:flex-row-reverse sm:justify-between">
      <Socials /> {/* Social media icons */}
      <section className="mt-8 sm:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()}</span>{" "}
          <Link className="link" href="/">
            Placeholder.com
          </Link>
          {" | "}
          <Link className="link font-bold" href="/privacy">
            privacy?
          </Link>
        </p>
      </section>
    </footer>
  );
}
