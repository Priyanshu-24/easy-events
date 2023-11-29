"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { UserButton } from "@clerk/nextjs";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 h-screen lg:px-20 px-5">
      <div className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-xl font-semibold text-gray-600">EASY EVENTS</h1>
        <div className="flex gap-5 items-center">
          <Dropdown size="sm">
            <DropdownTrigger>
              <Button variant="bordered" radius="none">
                Profile
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <UserButton />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutProvider;
