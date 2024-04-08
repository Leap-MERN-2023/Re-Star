"use client";
import React from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  GabShareButton,
  GabIcon,
  EmailShareButton,
  EmailIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

import { Button } from "@/components/ui/button";
import { FaShare } from "@/components/icons";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
const websiteUrl = process.env.WEBSITEURL as string;

const ShareButton = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="w-full bg-secondary">
            <FaShare size={"25px"} style={{ margin: 4 }} /> Share
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex justify-between bg-gray-200">
          <div className="flex gap-2">
            <FacebookShareButton
              url={websiteUrl}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={websiteUrl}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <EmailShareButton
              url={"https://github.com/next-share"}
              subject={"Next Share"}
              body="body"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <FacebookMessengerShareButton
              url={"https://github.com/next-share"}
              appId={""}
            >
              <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <RedditShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <RedditIcon size={32} round />
            </RedditShareButton>
          </div>
          <AlertDialogFooter className="flex justify-end">
            <AlertDialogCancel>X</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ShareButton;
