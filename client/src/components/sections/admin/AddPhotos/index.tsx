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
  const [loading, setLoading] = useState(false);

  const { token } = useContext(UserContext);

  const uploadPic = async () => {
    setLoading(true);
    try {
      const formdata = new FormData();

      formdata.set("image", image!);
      formdata.set("orgId", id);

      await myAxios.put("/org/picUpload", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("success");
      setLoading(false);
    } catch (error: any) {
      toast.error("errr", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-secondary gap-2 text-primary hover:bg-black hover:scale-105 transform transition-all hover:cursor-pointer">
          {" "}
          Add Photos
          <MdOutlineInsertPhoto size={26} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>Add Photo</DialogTitle>
        </DialogHeader>
        <div className="grid w-full ">
          <Card>
            {!image && (
              <div className="flex flex-col justify-center">
                <div className=" flex justify-center items-center gap-10">
                  No Chosen File
                  <IoMdCloudUpload className="size-10" />
                </div>
              </div>
            )}
            {loading && (
              <div className="h-fit flex flex-col justify-center items-center ">
                <span className="loading loading-dots "></span>
                <span>Uploading</span>
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

          <Button className="mt-5">
            <input
              type="file"
              name="image"
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
