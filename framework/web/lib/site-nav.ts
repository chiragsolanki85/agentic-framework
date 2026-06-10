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
  },
  {
    title: "Standards",
    items: [
      { title: "Standards Overview", slug: "standards-overview" },
      { title: "Coding Standards", slug: "standards-coding" },
      { title: "Security and NFR", slug: "standards-security-nfr" },
      { title: "Artefact Governance", slug: "standards-artefact-governance" },
      { title: "Traceability Policy", slug: "standards-traceability" },
      { title: "Accountability Matrix", slug: "standards-accountability" },
      { title: "V2 Lifecycle Governance", slug: "standards-v2-lifecycle" }
    ]
  },
  {
    title: "Agents",
    items: [
      { title: "Agent Overview", slug: "agents-overview" },
      { title: "Agent Handoffs", slug: "agents-handoffs" },
      { title: "Agent Prompt Playbook", slug: "agents-prompt-playbook" }
    ]
  },
  {
    title: "Executive Readout",
    items: [
      { title: "Executive Implementation Guide", slug: "executive-implementation-guide" }
    ]
  }
];
