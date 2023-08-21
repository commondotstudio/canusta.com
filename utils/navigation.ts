import { INavItem } from '@/~components/navigations/desktop-nav'

export const heroNav: { right: INavItem[]; left: INavItem[] } = {
   left: [
      {
         text: 'ABOUT THE PROJECT',
         to: 'about',
      },
      {
         text: 'STORY OF THE PROJECT',
         to: 'story',
      },
      {
         text: 'FAQ',
         to: 'faq',
      },
   ],
   right: [
      {
         text: 'BUY ACCESS TOKEN',
         to: 'buy',
      },
      {
         text: 'CUSTOMIZE',
         to: 'customize',
      },
      {
         text: 'MINT',
         to: 'mint',
      },
   ],
}

export const hamburgerNav = [
   {
      text: 'ABOUT THE PROJECT',
      to: 'about',
   },
   {
      text: 'CONNECT YOUR WALLET',
      to: '',
   },
   {
      text: 'BUY ACCESS TOKEN',
      to: 'buy',
   },
   {
      text: 'CUSTOMIZE',
      to: 'customize',
   },
   {
      text: 'MINT',
      to: 'mint',
   },
   {
      text: 'PROJECT STORY',
      to: 'story',
   },
   {
      text: 'FAQ',
      to: 'faq',
   },
]
