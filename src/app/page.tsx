import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Spline from '@splinetool/react-spline/next';

import { InformationCircleIcon } from "@heroicons/react/24/outline";




export default function Home() {
  return (
  <div>
   
  <div className="spline">
    <Spline scene="https://prod.spline.design/VtPbAOCqihERyBcN/scene.splinecode" />
  </div>
  <div className="container mx-auto">
    <div className="cursor-default absolute bottom-2 left-8 h-16 w-16 ...">
      <Popover>
      <PopoverTrigger><InformationCircleIcon className="size-6 text--foreground" /></PopoverTrigger>
      <PopoverContent className="text-xs">This particle emiter is built in 3D<br/>Click and drag to explore.</PopoverContent>
      </Popover>
    </div>
  </div>
  </div>

  );
}
