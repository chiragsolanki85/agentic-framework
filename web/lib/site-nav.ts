export type NavItem = { title: string; slug: string };
export type NavGroup = { title: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Portal Overview", slug: "overview" },
      { title: "First Product Guide", slug: "first-product" },
      { title: "Tiering Model", slug: "tiering-model" }
    ]
  },
  {
    title: "Role Guides",
    items: [
      { title: "Product Managers", slug: "role-product-managers" },
      { title: "Engineers and Architects", slug: "role-engineering" },
      { title: "Delivery and Governance", slug: "role-governance" }
    ]
  },
  {
    title: "Lifecycle",
    items: [
      { title: "Foundations", slug: "lifecycle-foundations" },
      { title: "Requirements", slug: "lifecycle-requirements" },
      { title: "Technical Specification", slug: "lifecycle-specification" },
      { title: "Implementation", slug: "lifecycle-implementation" },
      { title: "Validation and Testing", slug: "lifecycle-validation" },
      { title: "Deployment", slug: "lifecycle-deployment" },
      { title: "Feedback", slug: "lifecycle-feedback" },
      { title: "Context Lifecycle", slug: "lifecycle-context" }
    ]
  }
];
