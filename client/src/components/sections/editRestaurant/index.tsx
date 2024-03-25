"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
  } from "@/components/ui/sheet"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


export function EditOrganization() {
  return (
    <div>
      <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Page</Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Edit Page</SheetTitle>
          <SheetDescription>
            Make changes to your business page here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Restaurant Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Operation Hours" className="text-right">
              Operation Hours
            </Label>
            <Input id="OperationHours" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4"> 
            <Label htmlFor="Phone" className="text-right">
              Phone
            </Label>
            <Input id="Phone" value="99999999" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Website" className="text-right">
              Website
            </Label>
            <Input id="Website" value="www.Website.mn" className="col-span-3" />
          </div>
          <div className="grid grid-cols-1 items-center gap-4 "> 
          <Label htmlFor="Category" className="text-left">
             Select a Category
            </Label>
          <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="category 1" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="N/A">Indian</SelectItem>
          <SelectItem value="Korean">Korean</SelectItem>
          <SelectItem value="Western">Western</SelectItem>
          <SelectItem value="Mongolian">Mongolian</SelectItem>
          <SelectItem value="Fast Food">Fast Food</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="category 2" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="N/A"></SelectItem>
          <SelectItem value="Korean">Korean</SelectItem>
          <SelectItem value="Western">Western</SelectItem>
          <SelectItem value="Mongolian">Mongolian</SelectItem>
          <SelectItem value="Fast Food">Fast Food</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="category 3" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="N/A">N/A</SelectItem>
          <SelectItem value="Korean">Casual Dining</SelectItem>
          <SelectItem value="Western">Western</SelectItem>
          <SelectItem value="Mongolian">Mongolian</SelectItem>
          <SelectItem value="Fast Food">Fast Food</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
        </div>
        <SheetFooter>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Page</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
          <SheetClose asChild>
            <Button className="bg-blue-400" type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
}
export default EditOrganization;

