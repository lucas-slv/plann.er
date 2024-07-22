import { CircleCheck } from "lucide-react";

export function Activities() {
   return (
      <div className='space-y-8'>
         <div className='space-y-3'>
            <div className='flex items-baseline gap-2'>
               <span className='text-zinc-300 font-semibold text-xl'>Dia 17</span>
               <span className='text-zinc-500 text-xs'>Sábado</span>
            </div>
            <p className='text-zinc-500 text-sm'>Nenhuma atividade cadastrada nessa data.</p>
         </div>

         <div className='space-y-3'>
            <div className='flex items-baseline gap-2'>
               <span className='text-zinc-300 font-semibold text-xl'>Dia 18</span>
               <span className='text-zinc-500 text-xs'>Domingo</span>
            </div>

            <div className='space-y-3'>
               <div className='px-4 py-2.5 flex items-center gap-3 bg-zinc-900 rounded-xl shadow-shape'>
                  <CircleCheck className='size-5 text-lime-300' />
                  <p className='text-zinc-100'>Corrida de Kart</p>
                  <span className='text-zinc-400 text-sm ml-auto'>14:00h</span>
               </div>
            </div>

            <div className='space-y-3'>
               <div className='px-4 py-2.5 flex items-center gap-3 bg-zinc-900 rounded-xl shadow-shape'>
                  <CircleCheck className='size-5 text-lime-300' />
                  <p className='text-zinc-100'>Corrida de Kart</p>
                  <span className='text-zinc-400 text-sm ml-auto'>14:00h</span>
               </div>
            </div>
         </div>

         <div className='space-y-3'>
            <div className='flex items-baseline gap-2'>
               <span className='text-zinc-300 font-semibold text-xl'>Dia 19</span>
               <span className='text-zinc-500 text-xs'>Segunda</span>
            </div>
            <div className='space-y-3'>
               <div className='px-4 py-2.5 flex items-center gap-3 bg-zinc-900 rounded-xl shadow-shape'>
                  <CircleCheck className='size-5 text-lime-300' />
                  <p className='text-zinc-100'>Academia</p>
                  <span className='text-zinc-400 text-sm ml-auto'>13:00h</span>
               </div>
            </div>
         </div>
      </div>
   );
}
