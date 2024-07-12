import {
   MapPin,
   Calendar,
   ArrowRight,
   Settings2,
   UserRoundPlus,
   X,
   AtSign,
   Plus,
} from "lucide-react";
import { useState } from "react";

export function App() {
   const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
   const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
   const [emailsToInvite, setEmailsToInvite] = useState(["test@test.com"]);

   function openGuestsInput() {
      setIsGuestsInputOpen(true);
   }

   function closeGuestsInput() {
      setIsGuestsInputOpen(false);
   }

   function openGuestsModal() {
      setIsGuestsModalOpen(true);
   }

   function closeGuestsModal() {
      setIsGuestsModalOpen(false);
   }

   function addNewEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      console.log("submit");

      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();

      if (!email) return;
      if (emailsToInvite.includes(email)) return;

      console.log(email);
      setEmailsToInvite([...emailsToInvite, email]);

      event.currentTarget.reset();
   }

   function removeEmailFromInvites(emailToRemove: string) {
      const newEmailList = emailsToInvite.filter((email) => email !== emailToRemove);
      setEmailsToInvite(newEmailList);
   }

   return (
      <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
         <div className='w-full max-w-3xl px-6 text-center space-y-10'>
            <div className='flex flex-col items-center gap-3'>
               <img src='./logo.svg' alt='plann.er' />
               <p className='text-zinc-300 text-lg'>
                  Convide seus amigos e planeje sua próxima viagem!
               </p>
            </div>

            <div className='space-y-4'>
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
                     <button
                        onClick={closeGuestsInput}
                        className='bg-zinc-800 py-2 px-5 rounded-lg text-zinc-200 font-medium flex items-center gap-2 hover:bg-zinc-700'
                     >
                        Alterar local/data
                        <Settings2 className='size-5' />
                     </button>
                  ) : (
                     <button
                        onClick={openGuestsInput}
                        className='bg-lime-300 py-2 px-5 rounded-lg text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
                     >
                        Continuar
                        <ArrowRight className='size-5' />
                     </button>
                  )}
               </div>

               {isGuestsInputOpen && (
                  <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
                     <button
                        type='button'
                        onClick={openGuestsModal}
                        className='flex flex-1 items-center gap-2 text-left'
                     >
                        <UserRoundPlus className='size-5 text-zinc-400' />
                        <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
                     </button>

                     <div className='w-px h-6 bg-zinc-800' />

                     <button className='bg-lime-300 py-2 px-5 rounded-lg text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'>
                        Confirmar viagem
                        <ArrowRight className='size-5' />
                     </button>
                  </div>
               )}
            </div>

            <p className='text-zinc-500'>
               Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos{" "}
               <a href='#' className='underline text-zinc-300'>
                  termos de uso
               </a>{" "}
               e{" "}
               <a href='#' className='underline text-zinc-300'>
                  políticas de privacidade
               </a>
               .
            </p>
         </div>
         {isGuestsModalOpen && (
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
                     <button
                        type='submit'
                        className='bg-lime-300 py-2 px-5 rounded-lg text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
                     >
                        Convidar
                        <Plus className='size-5' />
                     </button>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
}
