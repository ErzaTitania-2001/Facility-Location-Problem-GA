// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Your Account',
    path: '/userboard/details',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Add Payment Options',
    path: '/userboard/payment',
    icon: getIcon('eva:people-fill'),
  },
  {
  title: 'Green Wallet Points',
  path: '/userboard/wallet',
  icon: getIcon('eva:people-fill'),
},
{
  title: 'Contact Us',
  path: '/userboard/contact',
  icon: getIcon('eva:people-fill'),
},
{
  title: 'Drives History',
  path: '/userboard/drives',
  icon: getIcon('eva:people-fill'),
},

  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  
];

export default navConfig;
