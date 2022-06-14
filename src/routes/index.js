/** @type {import('vue-router').RouterOptions['routes']} */

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
        props: true,
        // meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
