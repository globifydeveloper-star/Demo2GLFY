import technologies from "@/data/technologyData";

// Map display names (and common aliases) to slugs
const aliasMap: Record<string, string> = {
  ".NET": "microsoft-net",
  "Microsoft .NET": "microsoft-net",
  "PHP/Laravel": "laravel",
  "Vue.js": "", // no page yet
  "Tailwind CSS": "",
  "Microsoft Azure": "azure",
  "Magento / Adobe Commerce": "magento",
};

// Direct route overrides for platforms with dedicated service pages
const directRouteMap: Record<string, string> = {
  "PrestaShop": "/prestashop-development",
  "Shopware": "/shopware-development",
  "BigCommerce": "/bigcommerce-development",
  "Wix E-Commerce": "/wix-ecommerce",
  "Migration Services": "/migration-services",
};

const slugSet = new Set(technologies.map((t) => t.slug));

/**
 * Returns the /technology/:slug path for a tech name, or null if no page exists.
 */
export const getTechHref = (name: string): string | null => {
  // Check direct route overrides first
  if (name in directRouteMap) return directRouteMap[name];

  // Check alias
  if (name in aliasMap) {
    const slug = aliasMap[name];
    return slug ? `/technology/${slug}` : null;
  }

  // Try converting name to slug directly
  const slug = name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  if (slugSet.has(slug)) return `/technology/${slug}`;

  // Common patterns
  const altSlug = name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "");
  if (slugSet.has(altSlug)) return `/technology/${altSlug}`;

  return null;
};
