import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BiPhone } from "@/components/icons";

export function AboutCard() {
  return (
    <div className="flex justify-center ">
      <Card className="w-[500px] items-center">
        <CardHeader>
          <CardTitle className="self-center">Restaurant Name</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col  items-center gap-4 text-xl">
              <Label className="text-lg text-purple-500 ">Phone Number</Label>
              <div className="flex gap-3 items-center ">
                <BiPhone className="text-purple-500" />
                <p>+976 80808080</p>
                <Button className="space-x-3 w-20">Call</Button>
              </div>

              <div className="flex gap-3 items-center">
                <BiPhone className="text-purple-500" />
                <p>+976 80808080</p>
                <Button className="bg-purple-500 w-20">Call</Button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Label className="text-lg text-purple-500">Direction</Label>
              <div className="w-96 bg-gray-400 h-56"></div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-evenly">
          <Button variant="outline">Direction</Button>
          <Button>Copy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
