import {
  Home,
  UserRound,
  UsersRound,
  BriefcaseBusiness,
  Calendar,
  Package,
  CircleArrowRight,
  LogOut,
  Settings,
  Search,
  MoreHorizontal,
  CirclePlus,
  Trash2,
  FilePenLine,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

export const HomeIcon = ({ className }: { className?: string }) => {
  return <Home className={cn("w-5 h-5", className)} />;
};

export const UserIcon = ({ className }: { className?: string }) => {
  return <UserRound className={cn("w-5 h-5", className)} />;
};

export const UsersIcon = ({ className }: { className?: string }) => {
  return <UsersRound className={cn("w-5 h-5", className)} />;
};

export const ReportIcon = ({ className }: { className?: string }) => {
  return <BriefcaseBusiness className={cn("w-5 h-5", className)} />;
};

export const ProductIcon = ({ className }: { className?: string }) => {
  return <Package className={cn("w-5 h-5", className)} />;
};

export const EventIcon = ({ className }: { className?: string }) => {
  return <Calendar className={cn("w-5 h-5", className)} />;
};

export const ArrowRightIcon = ({ className }: { className?: string }) => {
  return <CircleArrowRight className={cn("w-5 h-5", className)} />;
};

export const LogoutIcon = ({ className }: { className?: string }) => {
  return <LogOut className={cn("w-5 h-5", className)} />;
};

export const SettingIcon = ({ className }: { className?: string }) => {
  return <Settings className={cn("w-5 h-5", className)} />;
};

export const SearchIcon = ({ className }: { className?: string }) => {
  return <Search className={cn("w-5 h-5", className)} />;
};

export const EllipsisIcon = ({ className }: { className?: string }) => {
  return <MoreHorizontal className={cn("w-5 h-5", className)} />;
};

export const PlusIcon = ({ className }: { className?: string }) => {
  return <CirclePlus className={cn("w-5 h-5", className)} />;
};

export const TrashIcon = ({ className }: { className?: string }) => {
  return <Trash2 className={cn("w-5 h-5", className)} />;
};

export const EditIcon = ({ className }: { className?: string }) => {
  return <FilePenLine className={cn("w-5 h-5", className)} />;
};

export const TrendingUpIcon = ({ className }: { className?: string }) => {
  return <TrendingUp className={cn("w-5 h-5", className)} />;
};

export const TrendingDownIcon = ({ className }: { className?: string }) => {
  return <TrendingDown className={cn("w-5 h-5", className)} />;
};
