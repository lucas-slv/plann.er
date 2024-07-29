import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/api";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface ActivitiesProps {
   date: string;
   activities: {
      id: string;
      title: string;
      occurs_at: string;
   }[];
}

export function Activities() {
   const { tripId } = useParams();
   const [activities, setActivities] = useState<ActivitiesProps[]>([]);

   useEffect(() => {
      api.get(`/trips/${tripId}/activities`).then((response) =>
         setActivities(response.data.activities),
      );
   }, [tripId]);

   return (
      <div className='space-y-8'>
         {activities.map((category) => {
            return (
               <div key={category.date} className='space-y-3'>
                  <div className='flex items-baseline gap-2'>
                     <span className='text-zinc-300 font-semibold text-xl'>
                        Dia {format(category.date, "d")}
                     </span>
                     <span className='text-zinc-500 text-xs'>
                        {format(category.date, "EEEE", { locale: ptBR })}
                     </span>
                  </div>
                  {category.activities.length > 0 ? (
                     <div>
                        {category.activities.map((activity) => {
                           return (
                              <div key={activity.id} className='space-y-3'>
                                 <div className='px-4 py-2.5 flex items-center gap-3 bg-zinc-900 rounded-xl shadow-shape'>
                                    <CircleCheck className='size-5 text-lime-300' />
                                    <p className='text-zinc-100'>{activity.title}</p>
                                    <span className='text-zinc-400 text-sm ml-auto'>
                                       {format(activity.occurs_at, "HH:mm")}h
                                    </span>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  ) : (
                     <p className='text-zinc-500 text-sm'>
                        Nenhuma atividade cadastrada nessa data.
                     </p>
                  )}
               </div>
            );
         })}
      </div>
   );
}
