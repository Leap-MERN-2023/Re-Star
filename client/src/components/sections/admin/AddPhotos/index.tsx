import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MdOutlineInsertPhoto, IoMdCloudUpload } from "@/components/icons";
import { useContext, useState } from "react";
import { Card } from "@/components/ui/card";
import { UserContext } from "@/context/UserProvider";
import myAxios from "@/utils/myAxios";
import { toast } from "react-toastify";

export function AddPhotos({ id }: { id: string }) {
  const [image, setImage] = useState<File>();

  const { token } = useContext(UserContext);

  const uploadPic = async () => {
    try {
      const formdata = new FormData();

      formdata.set("image", image!);
      formdata.set("orgId", id);

      await myAxios.put("/org/picUpload", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("sucess");
    } catch (error: any) {
      toast.error("errr", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {" "}
          <MdOutlineInsertPhoto size={26} color="gray" /> Add Photos
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>Add Photo</DialogTitle>
        </DialogHeader>
        <div className="grid w-full p-10">
          <Card>
            {!image && (
              <div className="size-60 text-center flex flex-col justify-center">
                <div className="mx-[10%]">
                  <IoMdCloudUpload className="lg:size-52" color="purple" />
                </div>
                No Chosen File
              </div>
            )}

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="ss"
                className="object-cover rounded-lg"
              />
            )}
          </Card>

          <Button>
            <input
              type="file"
              name="image"
              id="image"
              className=""
              onChange={(e) => setImage(e.currentTarget.files![0])}
            />
          </Button>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full" onClick={uploadPic}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
