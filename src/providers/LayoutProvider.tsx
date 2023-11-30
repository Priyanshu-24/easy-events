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
    <div className="bg-[#e0fbfc] h-screen lg:px-20 px-5">
      <div className="flex justify-between items-center bg-[#3d5a80] p-4 shadow-xl">
        <h1 className="text-xl font-semibold text-[#ffffff]">EASY EVENTS</h1>
        <div className="flex gap-5 items-center">
          <Dropdown size="sm">
            <DropdownTrigger>
              <Button
                variant="bordered"
                radius="none"
                className="text-[#ffffff]"
              >
                Profile
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LayoutProvider;
