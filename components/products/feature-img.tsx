import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export const FeatureImage = ({
  src,
  alt,
  className,
  imageClassName,
}: FeatureImageProps) => {
  return (
    <div
      className={cn(
        "relative h-full min-h-80 w-full overflow-hidden rounded-3xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-contain", imageClassName)}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
    </div>
  );
};
