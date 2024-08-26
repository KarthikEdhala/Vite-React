import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FormData } from "./Login";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body: FormData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    console.log(body);
    //Send the data to the backend through the api and do validations on it and store it in the database
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader className="items-center gap-2">
          <CardTitle className="animate-pulse">SIGN UP FORM</CardTitle>
          <CardDescription>
            Sign Up With Your Eamil and Password.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Confirm Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*******"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button type="submit">Submit</Button>
            <Button onClick={() => navigate("/signin")}>Sign In</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
export default SignUp;
