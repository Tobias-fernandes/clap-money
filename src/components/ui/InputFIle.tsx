import { useRef, useState, useEffect, ChangeEvent, DragEvent, FC } from "react";
import { FileImage } from "lucide-react";
import { Button } from "./button";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Skeleton } from "./skeleton";

type IProfilePhotoInput = {
  onFileChange?: (file: File | null) => void;
  initialImageUrl?: string;
  size?: number;
};

const ProfilePhotoInput: FC<IProfilePhotoInput> = ({
  onFileChange,
  initialImageUrl,
  size = 96,
}) => {
  const [preview, setPreview] = useState<string | null>(
    initialImageUrl ?? null
  );
  const [dragging, setDragging] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (file: File | null) => {
    if (preview && preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    if (!file) {
      setPreview(null);
      onFileChange?.(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Please, select a valid image file.");

      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    onFileChange?.(file);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    handleFileChange(file);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    handleFileChange(file);
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const onDragLeave = () => {
    setDragging(false);
  };

  return (
    <div className="flex items-center xs:flex-col sm:flex-row gap-4">
      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`flex items-center justify-center rounded-full overflow-hidden shadow-sm border-2 transition ${
          dragging ? "border-dashed border-clap-green" : "border-transparent"
        }`}
        style={{ width: size, height: size }}
        role="img"
        aria-label="Preview Profile Photo Area"
      >
        {preview && (
          <Avatar className="h-full w-full">
            <AvatarImage className="w-full h-full object-cover" src={preview} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        )}

        {!preview && (
          <Avatar className="h-full w-full">
            <AvatarImage className="w-full h-full object-cover" src={""} />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        )}
      </div>

      <div className="flex items-center xs:flex-col sm:flex-row gap-2">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onInputChange}
          aria-hidden="true"
        />

        <Button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Insert Profile Photo"
        >
          <FileImage />
          <span>Insert Profile Photo</span>
        </Button>

        {preview && (
          <Button
            variant={"destructive"}
            onClick={() => handleFileChange(null)}
            aria-label="Remove Profile Photo"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export { ProfilePhotoInput };
