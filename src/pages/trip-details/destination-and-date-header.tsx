import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface TripDataProps {
   id: string;
   destination: string;
   starts_at: string;
   ends_at: string;
   is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
   const { tripId } = useParams();
   const [tripData, setTripData] = useState<TripDataProps | undefined>();

   useEffect(() => {
      api.get(`/trips/${tripId}`).then((response) => setTripData(response.data.trip));
   }, [tripId]);

   const displayedDate = tripData
      ? format(tripData.starts_at, "d' de 'LLL")
           .concat(" até ")
           .concat(format(tripData.ends_at, "d' de 'LLL"))
      : null;

   return (
      <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center justify-between shadow-shape'>
         <div className='flex items-center gap-2'>
            <MapPin className='size-5 text-zinc-400' />
            <span className='tex-zinc-100 text-lg'>{tripData?.destination}</span>
         </div>

         <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
               <Calendar className='size-5 text-zinc-400' />
               <span className='text-zinc-100 text-lg'>{displayedDate}</span>
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            <Button variant='secondary'>
               Alterar local/data
               <Settings2 className='size-5' />
            </Button>
         </div>
      </div>
   );
}
