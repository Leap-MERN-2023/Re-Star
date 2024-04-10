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

  console.log("orfid in deletorf", orgId);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} className="flex justify-center items-center m-3 ">
          <MdDeleteForever color="red" className="w-10 h-10" />
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
