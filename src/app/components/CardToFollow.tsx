import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

const CardToFollow: React.FC = () => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="font-bold">Who To Follow</h2>

      <div className="flex items-center justify-between my-2 border border-gray-300 rounded-md p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firzaasu</p>
        </div>

        <UserPlus />
      </div>

      <div className="flex items-center justify-between my-2 border border-gray-300 rounded-md p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firzaasu</p>
        </div>

        <UserPlus />
      </div>

      <div className="flex items-center justify-between my-2 border border-gray-300 rounded-md p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firzaasu</p>
        </div>

        <UserPlus />
      </div>

      <div className="flex items-center justify-between my-2 border border-gray-300 rounded-md p-2">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Firzaasu</p>
        </div>

        <UserPlus />
      </div>
      
    </div>
  );
};

export default CardToFollow;
