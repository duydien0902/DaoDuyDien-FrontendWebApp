"use client";

import { useState, useEffect } from "react";

import { PaginationState } from "@tanstack/react-table";

import { users } from "@/actions/initial-data";
import {
  queryUserApi,
  deleteUserApi,
  createUserApi,
  updateUserApi,
} from "@/actions/fake-call-api";

import { ALERT_DIALOG_TYPE, PAGINATION } from "@/utilities/contans";
import { compareObj } from "@/utilities/compare";

import { InfoUser, InfoUserData } from "@/types/user";

import { ToolbarUser } from "@/app/(root)/_sections/users/_components/toolbar-user";
import { TableUser } from "@/app/(root)/_sections/users/_components/table-user";
import { Title } from "@/components/ui/title";
import { Description } from "@/components/ui/description";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import ConfirmDialog from "@/components/confirm-dialog";
import { FormUser } from "@/app/(root)/_sections/users/_components/form-user";

const TABS = ["all", "active", "inactite"];

export const UsersSection = () => {
  //table
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: PAGINATION.USERS.PAGE_INDEX,
    pageSize: PAGINATION.USERS.PAGE_SIZE,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rowSelection, setRowSelection] = useState({});

  //tabs
  const [dataUserTable, setDataUserTable] = useState<InfoUserData | null>(null);
  const [tab, setTab] = useState<string>(TABS[0]);
  const [isLoading, setIsLoading] = useState(false);

  //create
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  //update
  const [isFormUpdate, setIsFormUpdate] = useState(false);
  const [userUpdate, setUserUpdate] = useState<InfoUser | null>(null);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  //delete
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [currentIdsToDelete, setCurrentIdsToDelete] = useState<string[]>([]);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        clearRowSelection();
        const updateData = await queryUserApi(users, tab);
        setDataUserTable(updateData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [tab]);

  const handleTab = async (tab: string) => setTab(tab);

  const clearRowSelection = () => {
    setCurrentIdsToDelete([]);
    setRowSelection({});
  };

  //create
  const showFormCreate = () => {
    setIsFormOpen(true);
  };

  const handleSubmit = async (value: Omit<InfoUser, "id">) => {
    try {
      setIsLoadingSubmit(true);
      const id = new Date().getTime().toString();
      const user = {
        ...value,
        id,
      };
      const data = await createUserApi(dataUserTable, user);
      setDataUserTable(data);
      return true;
    } catch (error) {
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  //update
  const showFormUpdate = (user: InfoUser) => {
    setUserUpdate(user);
    setIsFormUpdate(true);
  };

  const onCancelupdate = () => {
    setIsFormUpdate(false);
    setUserUpdate(null);
  };

  const handleUpdate = async (user: InfoUser) => {
    try {
      setIsLoadingUpdate(true);

      let compareUser1 = {
        ...userUpdate,
      };
      delete compareUser1.id;
      if (compareObj(compareUser1, user)) return false;

      const data: any = await updateUserApi(
        dataUserTable,
        user,
        userUpdate?.id
      );
      setDataUserTable(data.updatedData);
      onCurrentIndex(Math.floor(data.index / pagination.pageSize));
      return true;
    } catch (error) {
    } finally {
      setIsLoadingUpdate(false);
    }
  };

  const onCurrentIndex = (num: number) => {
    setCurrentIndex(num);
  };

  //delete
  const showComfirmDelete = () => {
    setIsConfirmOpen(true);
  };

  const onDelete = () => handleDelete();

  const onCancelDelete = () => {
    setIsConfirmOpen(false);
    clearRowSelection();
  };

  const handleDelete = async () => {
    if (currentIdsToDelete?.length > 0) {
      try {
        setIsLoadingDelete(true);
        const data = await deleteUserApi(dataUserTable, currentIdsToDelete);
        setDataUserTable(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingDelete(false);
        onCancelDelete();
      }
    }
  };

  return (
    <section>
      <Tabs defaultValue={tab}>
        <div className="space-y-8">
          <div className="pt-2">
            <ToolbarUser
              tabs={TABS}
              handleTab={handleTab}
              showComfirmDelete={showComfirmDelete}
              showForm={showFormCreate}
              disable={currentIdsToDelete?.length <= 0}
            />
          </div>
          <div className="bg-slate-100 dark:bg-black rounded-sm p-6">
            <Title>
              Employee
              <Description>
                Manage your employees and view their informations.
              </Description>
            </Title>
            <TabsContent value={tab}>
              <TableUser
                isLoading={isLoading}
                data={dataUserTable?.data || []}
                total={dataUserTable?.total || 0}
                pagination={pagination}
                setPagination={setPagination}
                showFormUpdate={showFormUpdate}
                showComfirmDelete={showComfirmDelete}
                setRowSelection={setRowSelection}
                rowSelection={rowSelection}
                setCurrentIdsToDelete={setCurrentIdsToDelete}
                currentIndex={currentIndex}
                onCurrentIndex={onCurrentIndex}
              />
            </TabsContent>
          </div>
        </div>
      </Tabs>
      {isConfirmOpen && (
        <ConfirmDialog
          title={"Are you sure you want to delete?"}
          description={
            "This will permanently delete this employee's account from our servers."
          }
          onCancel={onCancelDelete}
          open={isConfirmOpen}
          onOk={onDelete}
          isLoading={isLoadingDelete}
          type={ALERT_DIALOG_TYPE.DANGEROUS}
        />
      )}
      {isFormOpen && (
        <FormUser
          isOpen={isFormOpen}
          onCancel={() => setIsFormOpen(false)}
          onOk={handleSubmit}
          isLoading={isLoadingSubmit}
          title={"Add User"}
        />
      )}
      {isFormUpdate && (
        <FormUser
          isOpen={isFormUpdate}
          onCancel={onCancelupdate}
          onOk={handleUpdate}
          isLoading={isLoadingUpdate}
          userUpdate={userUpdate}
          title={"Edit User"}
        />
      )}
    </section>
  );
};
