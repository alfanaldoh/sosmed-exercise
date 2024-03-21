import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import { Bell, HomeIcon, Mail, User } from "lucide-react"
import HeaderTweet from "./components/HeaderTweet";
import CardToFollow from "./components/CardToFollow";

export default function Home() {
  return (
    <main className="container mx-auto px-4 ">
      <section className="grid grid-cols-5 pt-4">
        {/* SIDEBAR */}
        <div className="flex flex-col gap-4">
          <Button variant="ghost" className="justify-normal">
            <HomeIcon className="mr-2 h-4 w-4"/>Home
          </Button>
          <Button variant="ghost" className="justify-normal">
            <Bell  className="mr-2 h-4 w-4"/>Notification
          </Button>
          <Button variant="ghost" className="justify-normal">
            <Mail className="mr-2 h-4 w-4"/>Message
          </Button>
          <Button variant="ghost" className="justify-normal">
            <User className="mr-2 h-4 w-4"/>Profile
          </Button>
        </div>
        {/* END OF SIDEBAR */}

        {/* TWEET LIST */}
        <div className="col-span-3 px-4"><HeaderTweet/></div>
        {/* END OF TWEETLIST */}

        {/* WHO TO FOLLOW */}
        <div><CardToFollow/></div>
        {/* END OF WHO TO FOLLOW */}
      </section>
    </main>
  );
}
