const routers = [
  {
    path: "/",
    redirect: "/user/dynamic",
  },
  {
    component: "MainLayout",
    path: "/user",
    name: "Main",
    exact: false,
    redirect: "/user/dynamic",
    childrens: [
      {
        component: "Dynamic",
        path: "/dynamic",
        componentPath: "pages/dynamic/DynamicCard",
        name: "Home",
        auth: false,
        exact: true,
      },
    ],
  },
  {
    component: "MainLayout",
    path: "/table",
    name: "Main",
    exact: false,
    redirect: "/table/tablepage",
    childrens: [
      {
        component: "Dynamic",
        path: "/tablepage",
        componentPath: "pages/table/TablePage.js",
        name: "Dynamic",
        auth: false,
        exact: true,
      },
    ],
  },
];
export default routers;
