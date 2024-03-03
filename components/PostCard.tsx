import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/lib/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IPostCard {
  title: string;
  slug: string;
  image: string | StaticImport;
  excerpt: string;
}

export default function PostCard({ title, slug, image, excerpt }: IPostCard) {
  return (
    <Link
      href={{
        pathname: "/blog/[slug]",
        params: {
          slug: slug,
        },
      }}
    >
      <Card className="w-3/4 md:w-1/2 mx-auto my-3">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mx-auto">
            <Image
              src={`https:${image}`}
              alt={title}
              width={700}
              height={200}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
