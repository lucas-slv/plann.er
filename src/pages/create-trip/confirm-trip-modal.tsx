import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
   closeConfirmTripModal: () => void;
   createTrip: (event: React.FormEvent<HTMLFormElement>) => void;
   setOwnerName: (ownerName: string) => void;
   setOwnerEmail: (ownerEmail: string) => void;
}

export function ConfirmTripModal({
   closeConfirmTripModal,
   createTrip,
   setOwnerName,
   setOwnerEmail,
}: ConfirmTripModalProps) {
   return (
      <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
         <div className='bg-zinc-900 w-[540px] rounded-xl px-6 py-5 shadow-shape space-y-5'>
            <div className='space-y-2'>
               <div className='flex items-center justify-between'>
                  <h2 className='font-semibold text-lg'>Confirmar criação da viagem</h2>
                  <button type='button' onClick={closeConfirmTripModal}>
                     <X className='size-5 text-zinc-400' />
                  </button>
               </div>
               <p className='text-zinc-400 text-sm'>
                  Para concluir a criação da viagem para{" "}
                  <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas
                  datas de{" "}
                  <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024</span>{" "}
                  preencha seus dados abaixo:
               </p>
            </div>

            <form onSubmit={createTrip} className='space-y-3'>
               <div className='px-4 flex items-center border border-zinc-800 bg-zinc-950 rounded-lg h-14 gap-2.5'>
                  <User className='size-5 text-zinc-400' />
                  <input
                     className='placeholder-zinc-400 bg-transparent outline-none flex-1'
                     type='text'
                     name='name'
                     placeholder='Seu nome completo'
                     onChange={(event) => setOwnerName(event.target.value)}
                  />
               </div>
               <div className='px-4 flex items-center border border-zinc-800 bg-zinc-950 rounded-lg h-14 gap-2.5'>
                  <Mail className='size-5 text-zinc-400' />
                  <input
                     className='placeholder-zinc-400 bg-transparent outline-none flex-1'
                     type='email'
                     name='email'
                     placeholder='Seu e-mail pessoal'
                     onChange={(event) => setOwnerEmail(event.target.value)}
                  />
               </div>

               <Button type='submit' size='full'>
                  Confirmar criação da viagem
               </Button>
            </form>
         </div>
      </div>
   );
}
