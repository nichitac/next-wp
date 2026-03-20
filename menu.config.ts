// Define the menu items (fallback when WP nav is unavailable)
export const mainMenu = {
  home: "/",
  about: "/about",
  services: "/services",
  blog: "/posts",
  contact: "/contact",
};

// Override WP nav labels and hrefs by matching the original href
export const navOverrides: Record<string, { label?: string; href?: string }> = {
  "/news": { label: "Blog", href: "/posts" },
};

// Desired display order (items not listed here appear at the end)
export const navOrder = ["/", "/about", "/services", "/posts", "/contact"];

export const contentMenu = {
  categories: "/posts/categories",
  tags: "/posts/tags",
  authors: "/posts/authors",
};
