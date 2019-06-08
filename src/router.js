import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import CV from './views/CV.vue';

import CardClone from './components/CardClone.vue';
import PortfolioItem from './components/PortfolioItem.vue';
import PortfolioItemInformation from './components/PortfolioItemInformation.vue';
import BlogCard from './components/BlogCard.vue';
import BlogArticle from './components/BlogArticle.vue';

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
