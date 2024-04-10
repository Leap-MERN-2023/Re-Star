import React, { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaStar, FaClock, BiEdit, FiDelete } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserProvider";
import { ReviewContext } from "@/context/ReviewProvider";
import { ReviewModal } from "../../admin/review-modal";
import { RestaurantContext } from "@/context/RestaurantProvider";
import moment from "moment";

const ReviewTab = ({ revData }: any) => {
  const { loggedUser } = useContext(UserContext);
  const { orgById } = useContext(RestaurantContext);

  const { deleteReview } = useContext(ReviewContext);

  return (
    <div className="flex ">
      <Card className=" shadow md:w-96 bg-secondary ">
        <CardHeader>
          <CardTitle className=" flex  sm:flex-col lg:flex-row justify-between ">
            <div className="flex items-center gap-5 ">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  width={"100px"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p>{revData?.user.name}</p>
                <p className="text-base text-gray-500">Count of reviews</p>
              </div>
            </div>
            <div>
              <Badge className="m-1">
                {revData?.score}
                <span className="flex ">
                  <FaStar />
                </span>
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <FaClock size={28} color="green" />
            <span className="mx-4">Dining :</span>
            <span className="text-gray-500">
              {moment(revData?.createdAt).format("LL")}
            </span>
          </div>
          <div className="my-3">{revData?.message}</div>
        </CardContent>
        {loggedUser?._id == revData?.user._id ? (
          <CardFooter className="flex justify-around">
            <ReviewModal revData={revData} orgId={orgById._id} />
            <Button
              className="bg-primary text-secondary"
              onClick={() => {
                deleteReview(revData._id, orgById._id);
              }}
            >
              <FiDelete className="h-5 w-5 mx-2" />
              Delete Review
            </Button>
          </CardFooter>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default ReviewTab;
