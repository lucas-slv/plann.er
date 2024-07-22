import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
   return (
      <div className='space-y-6'>
         <h2 className='font-semibold text-xl text-zinc-50'>Convidados</h2>
         <div className='flex items-center justify-between'>
            <div className='space-y-1.5'>
               <span className='text-slate-100 block font-medium'>Jessica White</span>
               <span className='text-sm block text-zinc-400 truncate max-w-60'>
                  jessica.white44@yahoo.com
               </span>
            </div>
            <CircleDashed className='text-zinc-400 size-5' />
         </div>
         <div className='flex items-center justify-between'>
            <div className='space-y-1.5'>
               <span className='text-slate-100 block font-medium'>Dr. Rita Pacocha</span>
               <span className='text-sm block text-zinc-400 truncate max-w-60'>
                  lacy.stiedemann@gmail.com
               </span>
            </div>
            <CircleDashed className='text-zinc-400 size-5' />
         </div>

         <Button variant='secondary' size='full'>
            <UserCog className='size-5' />
            Gerenciar convidados
         </Button>
      </div>
   );
}
