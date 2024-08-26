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
import { useNavigate } from "react-router-dom";

export type FormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const body: FormData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");

    console.log(body);
    //Send the data to the backend through the api and do validations on it and store it in the database
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <Card className="w-[450px]">
        <CardHeader className="items-center gap-2">
          <CardTitle className="animate-pulse">LOGIN FORM</CardTitle>
          <CardDescription>Login With Your Credentials.</CardDescription>
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
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button type="submit">Submit</Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
export default Login;
