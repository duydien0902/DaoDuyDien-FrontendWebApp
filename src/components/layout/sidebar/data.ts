import {
  HomeIcon,
  UsersIcon,
  ReportIcon,
  ProductIcon,
  EventIcon,
} from "@/components/ui/icons";

import { PATH_NAME } from "@/utilities/contans";

export interface dataSidebarTypes {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

export const dataSidebar: dataSidebarTypes[] = [
  {
    title: "dashboard",
    Icon: HomeIcon,
    href: `/${PATH_NAME.DASHBOARD}`,
  },
  {
    title: "employee",
    Icon: UsersIcon,
    href: `/${PATH_NAME.EMPLOYEE}`,
  },
  {
    title: "report",
    Icon: ReportIcon,
    href: `/${PATH_NAME.REPORT}`,
  },
  {
    title: "products",
    Icon: ProductIcon,
    href: `/${PATH_NAME.PRODUCTS}`,
  },
  {
    title: "events",
    Icon: EventIcon,
    href: `/${PATH_NAME.EVENTS}`,
  },
];
