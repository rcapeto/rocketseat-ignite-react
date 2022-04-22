import { ISectionSidebar } from '../Section';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export const sections: ISectionSidebar[] = [
   {
      title: 'GERAL',
      items: [
         {
            link: '',
            icon: RiDashboardLine,
            text: 'Dashboard',
         },
         {
            link: '',
            icon: RiContactsLine,
            text: 'Usuários',
         }
      ],
   },
   {
      title: 'AUTOMAÇÃO',
      items: [
         {
            link: '',
            icon: RiInputMethodLine,
            text: 'Formulários',
         },
         {
            link: '',
            icon: RiGitMergeLine,
            text: 'Automação',
         }
      ],
   }
];