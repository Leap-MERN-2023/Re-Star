import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MdDeleteForever } from "@/components/icons";
import { IMenu } from "@/interface";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuProvider";

interface IProps extends IMenu {
  orgId: string;
}

export function DeleteOrg({ _id, name, orgId }: IProps) {
  const { DeleteMenuByOrgId } = useContext(MenuContext);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex justify-center items-center text-[#be2929f7] bg-white  w-full">
          {/* <MdDeleteForever color="red" className="w-10 h-10" /> */}
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to menu item {name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            restaurant menu and remove your food data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => DeleteMenuByOrgId(orgId, _id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
