import { ISectionSidebar } from '../Section';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export const sections: ISectionSidebar[] = [
   {
      title: 'GERAL',
      items: [
         {
            link: '/dashboard',
            icon: RiDashboardLine,
            text: 'Dashboard',
         },
         {
            link: '/users',
            icon: RiContactsLine,
            text: 'Usuários',
         }
      ],
   },
   {
      title: 'AUTOMAÇÃO',
      items: [
         {
            link: '/forms',
            icon: RiInputMethodLine,
            text: 'Formulários',
         },
         {
            link: '/automation',
            icon: RiGitMergeLine,
            text: 'Automação',
         }
      ],
   }
];