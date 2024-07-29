import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/api";

interface Participants {
   id: string;
   name: string | null;
   email: string;
   is_confirmed: boolean;
}

export function Guests() {
   const { tripId } = useParams();
   const [participants, setParticipants] = useState<Participants[]>([]);

   useEffect(() => {
      api.get(`/trips/${tripId}/participants`).then((response) =>
         setParticipants(response.data.participants),
      );
   }, [tripId]);

   return (
      <div className='space-y-6'>
         <h2 className='font-semibold text-xl text-zinc-50'>Convidados</h2>
         {participants.map((participant, index) => (
            <div key={participant.id} className='flex items-center justify-between'>
               <div className='space-y-1.5'>
                  <span className='text-slate-100 block font-medium'>
                     {participant.name ?? `Convidado ${index}`}
                  </span>
                  <span className='text-sm block text-zinc-400 truncate max-w-60'>
                     {participant.email}
                  </span>
               </div>
               {participant.is_confirmed ? (
                  <CheckCircle2 className='text-lime-300 size-5' />
               ) : (
                  <CircleDashed className='text-zinc-400 size-5' />
               )}
            </div>
         ))}

         <Button variant='secondary' size='full'>
            <UserCog className='size-5' />
            Gerenciar convidados
         </Button>
      </div>
   );
}
