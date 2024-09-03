import React from "react";

import { cn } from "@/lib/utils";

import { ALERT_DIALOG_TYPE } from "@/utilities/contans";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loading } from "@/components/ui/loading";

interface ModalConfirmProps {
  title: string;
  description?: string;
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
  isLoading: boolean;
  type?: string;
}

const ConfirmDialog = ({
  open,
  onCancel,
  onOk,
  title,
  description,
  isLoading = false,
  type = ALERT_DIALOG_TYPE.DEFAULT,
}: ModalConfirmProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle
            className={cn({
              "text-red-600": type === ALERT_DIALOG_TYPE.DANGEROUS,
            })}
          >
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={cn({
              "bg-red-600 hover:bg-red-700":
                type === ALERT_DIALOG_TYPE.DANGEROUS,
            })}
            onClick={onOk}
            disabled={isLoading}
          >
            {!isLoading && <>OK</>} {isLoading && <Loading />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
