import FileCopyIcon from '@mui/icons-material/FileCopy';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HomeIcon from '@mui/icons-material/Home';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PolicyIcon from '@mui/icons-material/Policy';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmailIcon from '@mui/icons-material/Email';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import SchoolIcon from '@mui/icons-material/School';


export const sidebarLinks = [
    {
        title: 'Manage',
        pages: [
            {
                id: 0,
                name: 'Requests',
                icon: <FileCopyIcon />,
            },
            {
                id: 1,
                name: 'Orders',
                icon: <ShoppingBasketIcon />
            },
            {
                id: 2,
                name: 'Messages',
                icon: <EmailIcon />
            },
          ],
    },
    {
        title: 'Research & Buy',
        pages: [
            {
                id: 0,
                name: 'Marketplace',
                icon: <LocalMallIcon />
            },
            {
                id: 1,
                name: 'Strategic Storefronts',
                icon: <StorefrontIcon />
            },
            {
                id: 2,
                name: 'Quote Request Tool',
                icon: <RequestQuoteIcon />
            },
            {
                id: 3,
                name: 'Cart',
                icon: <ShoppingCartIcon />
            },
        ],
    },
    {
        title: 'Resources',
        pages: [
            {
                id: 0,
                name: 'Agency Guidance',
                icon: <ShoppingBasketIcon />
            },
            {
                id: 1,
                name: 'Prourement & Contracting Policy',
                icon: <PolicyIcon />
            },
            {
                id: 2,
                name: 'SEWP Homepage',
                icon: <HomeIcon />
            },
        ],
    },
    {
        title: 'Support',
        pages: [
            {
                id: 0,
                name: 'Customer Support',
                icon: <ContactSupportIcon />
            },
            {
                id: 1,
                name: 'Reports',
                icon: <BrokenImageIcon />
            },
            {
                id: 2,
                name: 'SEWP Training',
                icon: <SchoolIcon />
            },
        ],
    },
  ]