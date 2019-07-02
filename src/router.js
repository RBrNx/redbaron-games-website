import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Blog = () => import('./views/Blog.vue');
const CV = () => import('./views/CV.vue');

const CardClone = () => import('./components/CardClone.vue');
const PortfolioItem = () => import('./components/PortfolioItem.vue');
const PortfolioItemInformation = () =>
  import('./components/PortfolioItemInformation.vue');
const BlogCard = () => import('./components/BlogCard.vue');
const BlogArticle = () => import('./components/BlogArticle.vue');

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
