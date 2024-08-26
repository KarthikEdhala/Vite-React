import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 p-6 sticky top-0 z-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            APP<span className="text-white animate-pulse"> LOGO</span>
          </h1>
        </div>
        <div className="flex space-x-3 justify-center items-center">
          <Button>
            <ShoppingCart />
          </Button>
          <Button className="" onClick={() => navigate("/signin")}>
            Sign IN
          </Button>
          <Button onClick={() => navigate("/signup")}>Sign UP</Button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
