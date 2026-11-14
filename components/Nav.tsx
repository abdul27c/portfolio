"use client";

import { useState } from "react";
import { Menu, Terminal, X } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  { href: "#projects", label: "projects" },
  { href: "#walkthrough", label: "walkthrough" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-md">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-fog-100">
          <Terminal className="h-4 w-4 text-signal" aria-hidden />
          <span>
            ~/<span className="text-signal">{site.handle}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-fog-300 transition-colors hover:text-signal">
                <span className="text-fog-500">./</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded p-2 text-fog-300 hover:text-signal md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <ul id="mobile-menu" className="container-x flex flex-col gap-1 pb-4 font-mono text-sm md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-fog-300 hover:bg-ink-800 hover:text-signal"
              >
                <span className="text-fog-500">./</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
