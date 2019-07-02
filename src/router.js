import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');
const Blog = () => import(/* webpackChunkName: "blog" */ './views/Blog.vue');
const CV = () => import(/* webpackChunkName: "cv" */ './views/CV.vue');

const CardClone = () =>
  import(/* webpackChunkName: "cardclone" */ './components/CardClone.vue');
const PortfolioItem = () =>
  import(
    /* webpackChunkName: "portfolioitem" */ './components/PortfolioItem.vue'
  );
const PortfolioItemInformation = () =>
  import(
    /* webpackChunkName: "portfolioiteminformation" */ './components/PortfolioItemInformation.vue'
  );
const BlogCard = () =>
  import(/* webpackChunkName: "blogcard" */ './components/BlogCard.vue');
const BlogArticle = () =>
  import(/* webpackChunkName: "blogarticle" */ './components/BlogArticle.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/portfolio',
    },
    {
      path: '/portfolio',
      name: 'home',
      component: Home,
      children: [
        {
          path: ':id',
          component: CardClone,
          name: 'portfolioItem',
          props: {
            cardFrontComponent: PortfolioItem,
            cardBackComponent: PortfolioItemInformation,
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: ':id',
          component: CardClone,
          name: 'blogPost',
          props: {
            cardFrontComponent: BlogCard,
            cardBackComponent: BlogArticle,
            fullscreen: true,
          },
        },
      ],
    },
    {
      path: '/cv',
      name: 'cv',
      component: CV,
    },
  ],
});
