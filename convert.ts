import rehypeParse from "https://esm.sh/rehype-parse";
import rehypeRemark from "https://esm.sh/rehype-remark";
import remarkStringify from "https://esm.sh/remark-stringify";
import remarkFrontmatter from "https://esm.sh/remark-frontmatter@5";
import { stringify } from "https://esm.sh/yaml";
import * as d3 from "https://esm.sh/d3-dsv";
import { unified } from "https://esm.sh/unified";

const blog = d3.csvParse(Deno.readTextFileSync("./webflow/blog.csv"));

for (let post of blog) {
  const { Slug, "Post Body": body, ...rest } = post;

  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkStringify)
    .use(function () {
      return function (tree) {
        tree.children.unshift({
          type: "yaml",
          value: stringify(rest),
        });
      };
    })
    .process(body);

  Deno.writeTextFileSync(`./blog/${Slug}.md`, String(file));
}

const docs = d3.csvParse(Deno.readTextFileSync("./webflow/docs.csv"));

for (let post of docs) {
  const { Slug, Body: body, ...rest } = post;

  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkStringify)
    .use(function () {
      return function (tree) {
        tree.children.unshift({
          type: "yaml",
          value: stringify(rest),
        });
      };
    })
    .process(body);

  Deno.writeTextFileSync(`./docs/${Slug}.md`, String(file));
}
