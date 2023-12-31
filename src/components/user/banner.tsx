"use client"

import React from "react"
import { UserType } from "@/db/schema"
import { Avatar, Button, Card } from "@nextui-org/react"
import { useSession } from "next-auth/react"

import FollowsBtn from "../follows-btn"
import UpdateProfile from "../form/update-profile"

export default function Banner({
  user,
}: {
  user: Omit<UserType, "email" | "emailVerified">
}) {
  const { data: session } = useSession()
  return (
    <Card className="h-32 w-full overflow-visible">
      <div className="flex h-full justify-between p-6">
        <div className="flex items-center gap-6 ">
          <div className="relative h-24 w-24">
            <Avatar
              isBordered
              // className="absolute -bottom-7 left-7 h-24 w-24"
              className="h-full w-full"
              src={user.image ?? ""}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="">
              <p className="text-center text-sm font-medium">{user.name}</p>
              <span className="text-xs text-default-400 ">
                @{user.username}
              </span>
            </div>
            <p className="text-xs text-default-500">{user.bio}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {session?.user.id === user.id ? (
            <UpdateProfile user={session.user} />
          ) : (
            <FollowsBtn user={user} />
          )}
        </div>
      </div>
    </Card>
  )
}
