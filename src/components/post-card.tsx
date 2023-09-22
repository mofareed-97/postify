"use client"

import React from "react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react"
import { MoreHorizontal } from "lucide-react"

import UserInfoPopover from "./user-info-popover"

export default function PostCard() {
  return (
    <Card className="min-h-32 w-full p-4">
      <PostHeader />

      <CardBody className="px-3 py-0 text-small">
        <p className="my-4">
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure! <br /> #FrontendWithZoey 💻
        </p>
        <Image
          src="https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3097&q=80"
          alt=""
        />
      </CardBody>
    </Card>
  )
}

function PostHeader() {
  return (
    <CardHeader className="justify-between">
      <Popover showArrow placement="bottom">
        <PopoverTrigger>
          <User
            as="button"
            name="Zoe Lang"
            description="Product Designer"
            className="transition-transform"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="p-1">
          <UserInfoPopover />
        </PopoverContent>
      </Popover>
      <Dropdown>
        <DropdownTrigger>
          <Button
            isIconOnly
            color="primary"
            variant="faded"
            aria-label="Take a photo"
          >
            <MoreHorizontal />
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
          <DropdownItem key="new" shortcut="⌘N">
            New file
          </DropdownItem>
          <DropdownItem key="copy" shortcut="⌘C">
            Copy link
          </DropdownItem>
          <DropdownItem key="edit" shortcut="⌘⇧E">
            Edit file
          </DropdownItem>
          <DropdownItem
            key="delete"
            shortcut="⌘⇧D"
            className="text-danger"
            color="danger"
          >
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </CardHeader>
  )
}
