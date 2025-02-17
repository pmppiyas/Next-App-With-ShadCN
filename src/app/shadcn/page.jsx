import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ShadCN() {
  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <h2 className="text-green-500 text-3xl ">ShadCN 😊❤️</h2>
      <Card className="w-[400px] py-12">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Link href="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
