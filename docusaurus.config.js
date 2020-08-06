const path = require("path");

const allDocHomesPaths = [
  'docs/',
];

module.exports = {
  title: "Muta",
  tagline:
    "Build your own blockchain, today!",
  url: "docs.muta.dev",
  baseUrl: "/",
  favicon: "/img/muta-logo.png",
  organizationName: "nervosnetwork",
  projectName: "muta-docs",
  customFields: {
    metadata: require("./metadata"),
  },
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'muta',
        src: '/img/muta.svg',
      },
      links: [
        { to: "docs/", label: "Docs", position: "left" },
        { to: "guides/", label: "Guides", position: "left" },
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "community/",
          label: "Communtiy",
          position: "right",
        }, 
        {
          label: "Translate",
          position: 'right', 
          items: [
            {
              label: '中文',
              to: 'docs/docs_zh/about/what-is-muta',
            },
            {
              label: 'English',
              to: 'docs/about/what-is-muta',
            },
            // ... more items
          ],
        }, 
        {
          href: "https://github.com/nervosnetwork/muta",
          className: 'header-github-link',
          position: "right",
        },    
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    footer: {
      links: [
        {
          title: "About",
          items: [
            {
              label: "What is Muta?",
              to: "docs/about/what-is-muta/",
            },
            {
              label: "The Team",
              to: "community/#team",
            },
            {
              label: "Contact Us",
              to: "contact/",
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              label: "Getting Started",
              to: "docs/setup/getting-started/",
            },
            {
              label: "Service Dev",
              to: "docs/dev/dev-overview/",
            },
            {
              label: "Dapp Dev",
              to: "docs/dev/dex/",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://talk.nervos.org/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/rN35fe8',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nervosnetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nervosnetwork/muta',
            },
          ],
        },
      ],
      logo: {
        alt: "nervosnetwork",
        src: "/img/nervos-logo.svg",
        href: "https://nervos.org/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Fundation`,
    },
    algolia: {
      apiKey: "**",
      indexName: "**",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        editUrl: "https://github.com/nervosnetwork/muta/edit/master/website/",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Timber, Inc.`,
        },
      },
    ],
    path.resolve(__dirname, "./plugins/guides"),
    ["@docusaurus/plugin-content-pages", {}]
  ],
  scripts: [],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],
};
