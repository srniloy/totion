import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className="text-red-500 font-bold">Hello, this is notion clone</p>
      <Button variant="destructive"> Click Me </Button>
    </>
  );
}
