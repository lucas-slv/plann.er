import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/api";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
   closeCreateActivityModal: () => void;
}

export function CreateActivityModal({ closeCreateActivityModal }: CreateActivityModalProps) {
   const { tripId } = useParams();

   async function createActivity(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const title = data.get("title")?.toString();
      const occurs_at = data.get("occurs_at")?.toString();

      //   console.log({ title, occurs_at });

      await api.post(`/trips/${tripId}/activities`, {
         title,
         occurs_at,
      });

      closeCreateActivityModal();
      window.document.location.reload();
   }

   return (
      <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
         <div className='bg-zinc-900 w-[540px] rounded-xl px-6 py-5 shadow-shape space-y-5'>
            <div className='space-y-2'>
               <div className='flex items-center justify-between'>
                  <h2 className='font-semibold text-lg'>Cadastrar atividade</h2>
                  <button type='button' onClick={closeCreateActivityModal}>
                     <X className='size-5 text-zinc-400' />
                  </button>
               </div>
               <p className='text-zinc-400 text-sm'>
                  Todos convidados podem visualizar as atividades.
               </p>
            </div>

            <form onSubmit={createActivity} className='space-y-2'>
               <div className='px-4 flex items-center border border-zinc-800 bg-zinc-950 rounded-lg h-14 gap-2.5'>
                  <Tag className='size-5 text-zinc-400' />
                  <input
                     className='placeholder-zinc-400 bg-transparent outline-none flex-1'
                     type='text'
                     name='title'
                     placeholder='Qual a atividade?'
                  />
               </div>

               <div className='px-4 flex flex-1 items-center border border-zinc-800 bg-zinc-950 rounded-lg h-14 gap-2.5 [color-scheme:dark]'>
                  <Calendar className='size-5 text-zinc-400' />
                  <input
                     className='placeholder-zinc-400 bg-transparent outline-none flex-1'
                     type='datetime-local'
                     name='occurs_at'
                     placeholder='Data e horário da atividade'
                  />
               </div>

               <Button size='full'>Salvar atividade</Button>
            </form>
         </div>
      </div>
   );
}
