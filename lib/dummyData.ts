
export const primaryMenu = [
  {
    url: "/#link-1",
    label: "Link 1",
    external: false,
    subMenu: {
      subMenuTitle: "Submenu 1",
      subMenuDesc: "Submenu 1 description",
      subMenuDescUrl: "#",
      menuLists: [
        {
          tag: "tag 1",
          menuItems: [
            {
              url: "/#link-1",
              label: "Link 1",
              external: false,
            },
          ],
        },
      ],
    },
  },
  {
    url: "/#link-2",
    label: "Link 2",
    external: false,
    subMenu: null,
  },
  {
    url: null,
    label: "Link 3",
    external: false,
  },
];

export const secondaryMenu = [
  {
    url: "/#link-1",
    label: "Link 1",
    external: false,
    cta: false,
  },
  {
    url: "/#login",
    label: "Login",
    external: false,
    cta: true,
  },
  {
    url: "/#sign-up",
    label: "Sign Up",
    external: false,
    cta: true,
  },
];
