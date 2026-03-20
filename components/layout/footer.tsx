import { Section, Container } from "@/components/craft";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { getNavigation, WPMenuItem } from "@/lib/wordpress";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export async function Footer() {
  const wpMenuItems = await getNavigation();

  const menuItems: WPMenuItem[] =
    wpMenuItems.length > 0
      ? wpMenuItems
      : Object.entries(mainMenu).map(([key, href]) => ({
          label: key.charAt(0).toUpperCase() + key.slice(1),
          href,
        }));

  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <Image
                src={Logo}
                alt="Logo"
                className="dark:invert"
                width={42}
                height={26.44}
              />
            </Link>
            <p>{siteConfig.site_description}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="font-medium text-base">Website</h5>
            {menuItems.map((item) => (
              <Link
                className="hover:underline underline-offset-4"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <ThemeToggle />
          <p className="text-muted-foreground">
            &copy; <a href="https://9d8.dev">9d8</a>. All rights reserved.
            2025-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
