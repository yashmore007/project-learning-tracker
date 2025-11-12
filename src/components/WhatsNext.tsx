import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhatsNext = () => {
  return (
    <Card className="w-screen sm:w-full sm:max-w-lg h-72 mt-4 shadow-sm border-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Next topic
        </CardTitle>
        <CardDescription></CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 text-lg text-gray-600">
          <li>Finish Next.js authentication notes</li>
          <li>Watch TypeScript generics section</li>
        </ul>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter> */}
    </Card>
  );
};

export default WhatsNext;
