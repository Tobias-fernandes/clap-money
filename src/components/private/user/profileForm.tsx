import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileForm = () => {
  const getUserAvatar = () => {
    // TODO: Get user photo from database
    const userPhoto = "https://github.com/shadcn.png";
    return userPhoto;
  };

  const handleChangePhoto = () => {
    // TODO: Implement change photo logic
  };

  const handleDeletePhoto = () => {
    // TODO: Implement delete photo logic
  };

  return (
    <div className="flex gap-6 items-center max-sm:flex-col">
      <Avatar className="h-24 w-24">
        <AvatarImage src={getUserAvatar()} />
        <AvatarFallback>
          <Skeleton />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2 xs:flex-row">
        <Button onClick={handleChangePhoto}>Change Photo</Button>
        <Button onClick={handleDeletePhoto} variant="destructive">
          Delete Photo
        </Button>
      </div>
    </div>
  );
};

export { ProfileForm };
