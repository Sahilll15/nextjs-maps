import { SignIn } from "@clerk/nextjs";
import Image from 'next/image';

export default function Page() {
  return    (
    <div className="mx-auto">
        <Image  src='/uberbanner.jpeg' className=" object-contain h-full w-full" width={900} height={1000}/>
       

        <div className="absolute top-10  right-10">
        <SignIn path="/sign-in" />
        </div>
    </div>
  )
    
  ;
}