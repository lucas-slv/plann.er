import { AtSign, Plus, X } from "lucide-react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
   closeGuestsModal: () => void;
   emailsToInvite: string[];
   addNewEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
   removeEmailFromInvites: (emailToRemove: string) => void;
}

export function InviteGuestsModal({
   closeGuestsModal,
   emailsToInvite,
   addNewEmailToInvite,
   removeEmailFromInvites,
}: InviteGuestsModalProps) {
   return (
      <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
         <div className='bg-zinc-900 w-[640px] rounded-xl px-6 py-5 shadow-shape space-y-5'>
            <div className='space-y-2'>
               <div className='flex items-center justify-between'>
                  <h2 className='font-semibold text-lg'>Selecionar convidados</h2>
                  <button type='button' onClick={closeGuestsModal}>
                     <X className='size-5 text-zinc-400' />
                  </button>
               </div>
               <p className='text-zinc-400 text-sm'>
                  Os convidados irão receber e-mails para confirmar a participação na viagem.
               </p>
            </div>

            <div className='flex flex-wrap gap-2'>
               {emailsToInvite.map((email) => {
                  return (
                     <div
                        key={email}
                        className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'
                     >
                        <span className='text-zinc-300'>{email}</span>
                        <button onClick={() => removeEmailFromInvites(email)} type='button'>
                           <X className='size-4 text-zinc-400' />
                        </button>
                     </div>
                  );
               })}
            </div>

            <div className='h-px w-full bg-zinc-800'></div>

            <form
               onSubmit={addNewEmailToInvite}
               className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
            >
               <div className='px-2 flex flex-1 items-center gap-2'>
                  <AtSign className='size-5 text-zinc-400' />
                  <input
                     className='placeholder-zinc-400 bg-transparent outline-none flex-1'
                     type='email'
                     name='email'
                     placeholder='Digite o e-mail do convidado'
                  />
               </div>

               <Button type='submit'>
                  Convidar
                  <Plus className='size-5' />
               </Button>
            </form>
         </div>
      </div>
   );
}
