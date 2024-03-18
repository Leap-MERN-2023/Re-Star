import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const AccountTab = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle>overview</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 h-[300px]"></CardContent>
    </div>
  );
};

export default AccountTab;
