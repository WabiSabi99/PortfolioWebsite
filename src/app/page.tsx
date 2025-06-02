import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Techtacks from "@/components/TechStacks";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const CALVIN_BIRTH_YEAR = 1999;
const birthDate = new Date(new Date().getFullYear(), 6, 8); // July is month 6 (0-indexed)
const today = new Date();
const age = today.getFullYear() - CALVIN_BIRTH_YEAR - (today < birthDate ? 1 : 0);
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/Calvin.jpg"
          alt="Photo of Calvin"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi Calvin here. 👋</h1>
          <p className="mt-2 font-medium">
            {/* Update my age */}
            {new Date().getFullYear() - CALVIN_BIRTH_YEAR} {" "}
              Years old full-stack and AI developer from Denmark DK
          </p>
          <p className="mt-8 max-w-lg flex-1 text-lg font-light">
            Backend by trade, full-stack by passion. I build and self-host the
            lot. 
          </p>

          <div className="mt-8 flex items-end gap-1">
            <p className="font-semibold">
              For any Q&A, raise a ticket with the chatobot below.
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>
          <p className="mt-1 text-xs font-light">
            For escalations, please meesage me at
            <Link
              href="https://www.linkedin.com/in/calvin-lloren-mikkelsen-3029101b0/"
              target="_blank"
              className="link font-semibold"
              title="meow"
            >
              {" "}
              LinkedIn{" "}
            </Link>
            instead.
          </p>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />
      
      <Techtacks />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">Recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
