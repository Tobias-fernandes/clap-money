import { useStoreUser } from "@/context/user";
import { ProfilePhotoInput } from "@/components/ui/InputFIle";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileForm = () => {
  const {
    state: { avatarUrl, isLoading },
  } = useStoreUser();

  if (isLoading) {
    return <Skeleton className="h-14 w-full rounded-md" />;
  }

  return (
    <div className="flex gap-6 items-center max-sm:flex-col">
      <ProfilePhotoInput initialImageUrl={avatarUrl} />
    </div>
  );
};

export { ProfileForm };
