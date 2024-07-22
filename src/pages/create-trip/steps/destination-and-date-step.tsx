import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
   isGuestsInputOpen: boolean;
   closeGuestsInput: () => void;
   openGuestsInput: () => void;
}

export function DestinationAndDateStep({
   isGuestsInputOpen,
   closeGuestsInput,
   openGuestsInput,
}: DestinationAndDateStepProps) {
   return (
      <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
         <div className='flex flex-1 items-center gap-2'>
            <MapPin className='size-5 text-zinc-400' />
            <input
               className='placeholder-zinc-400 text-lg bg-transparent outline-none flex-1'
               type='text'
               placeholder='Para onde você vai?'
               disabled={isGuestsInputOpen}
            />
         </div>

         <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />
            <input
               className='placeholder-zinc-400 text-lg bg-transparent w-40 outline-none'
               type='text'
               placeholder='Quando?'
               disabled={isGuestsInputOpen}
            />
         </div>

         <div className='w-px h-6 bg-zinc-800' />

         {isGuestsInputOpen ? (
            <Button variant='secondary' onClick={closeGuestsInput}>
               Alterar local/data
               <Settings2 className='size-5' />
            </Button>
         ) : (
            <Button onClick={openGuestsInput}>
               Continuar
               <ArrowRight className='size-5' />
            </Button>
         )}
      </div>
   );
}
