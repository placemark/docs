import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://placemark.github.io",
  integrations: [
    starlight({
      title: "Placemark",
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Formats",
          autogenerate: { directory: "formats" },
        },
        {
          label: "Site",
          autogenerate: { directory: "site" },
        },
        {
          label: "Blog",
          autogenerate: { directory: "blog" },
        },
      ],
    }),
  ],
});
