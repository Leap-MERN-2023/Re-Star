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
          <Button className="w-full bg-secondary hover:bg-secondary text-primary">
            <FaShare size={"25px"} style={{ margin: 4 }} /> Share
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex justify-between bg-secondary p-10">
          <div className="flex gap-2">
            <FacebookShareButton
              url={"https://www.facebook.com/blackgate4"}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={websiteUrl}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <EmailShareButton
              url={"https://www.instagram.com/gate_concept_bar/?hl=en"}
              subject={"Next Share"}
              body="body"
            >
              <EmailIcon size={50} round />
            </EmailShareButton>
            <FacebookMessengerShareButton
              url={"https://www.facebook.com/blackgate4"}
              appId={""}
            >
              <FacebookMessengerIcon size={50} round />
            </FacebookMessengerShareButton>
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={50} round />
            </TelegramShareButton>
            <RedditShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <RedditIcon size={50} round />
            </RedditShareButton>
          </div>
          <AlertDialogFooter className="flex justify-end text-xl text-primary">
            <AlertDialogCancel>x</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ShareButton;
