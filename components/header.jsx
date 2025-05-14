import { SignedIn,SignInButton,SignedOut,UserButton,SignUpButton  } from '@clerk/nextjs';
import Image from 'next/image'
import Link from "next/link";
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from 'lucide-react';
import { Button } from './ui/button';
import { checkUser } from '@/lib/checkUser';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
 
 export default async function Header() {
  await checkUser();
   return (
     <header className="fixed top-0 w-full border-b bg-background/80 baackdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60"> 
      <nav className="container mx-3 px-4 h-16 flex items-center justify-between ">
        <Link href='/'>
        <Image src="/logo.png" 
        alt="Sensai logo"
        width={200} height={60} className="h-12 py-1 w-auto object-contain"/>
        </Link>
        <div className='flex items-center space-x-4 conatiner '>
          <SignedIn>
            <Link href={'/dashboard'}>
            <Button variant="outline">
              <StarIcon className= 'h-4 w-4'/>
              <span className="hidden md:block">Coins
              </span>
              <ChevronDown className="h-4 w-4"/>
              </Button></Link>
   
          <DropdownMenu>
  <DropdownMenuTrigger>
  <Button>
              <LayoutDashboard className= 'h-4 w-4 '/>
              <span className="hidden md:block">
             PreTastic </span>
              </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuItem>
      <Link href= {"/resume"} className='flex items-center gap-2'>
    <FileText className='h-4 w-4'/>
    <span>Build resume</span>
    </Link>
    </DropdownMenuItem>
    <DropdownMenuItem> <Link href= {"/ai-cover-letter"} className='flex item-center gap-2'>
    <PenBox className='h-4 w-4'/>
    <span>cover letter</span>
    </Link></DropdownMenuItem>
    <DropdownMenuItem> <Link href= {"/interview"} className='flex item-center gap-2'>
    <GraduationCap className='h-4 w-4'/>
    <span>Interview prep</span>
    </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
<SignedOut>
     <SignInButton >
      <Button varient="outline">Sign In</Button>
     </SignInButton>
   </SignedOut>
   <SignedIn>
     <UserButton
      appearance={{
        elements:{
          avatarBox:"w-10 h-10",
          userButtonPopoverCard:"shadow-xl",
          userPreviewMainIdentifire:"font-semibold",
        },
      }}
      fallbackRedirectUrl="/"
      />
   </SignedIn>

        </div>
      </nav>
    
   </header>
   );
 };
