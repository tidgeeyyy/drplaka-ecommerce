import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaGoogle } from "react-icons/fa";
 
export default function Login() {
  return (
    <div className="w-full max-w-md mx-auto flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="http://localhost:5000/api/users/aut" method="post">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="name" placeholder="name@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="name" placeholder="Password" />
              </div>
            </div>         
            <Button type="submit" className="w-full">
            Login
          </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-1.5">

          <Button type="submit" variant="outline" className="w-full">
            <FaGoogle />
            Sign in using Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
