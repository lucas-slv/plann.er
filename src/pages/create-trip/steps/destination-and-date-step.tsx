import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
   isGuestsInputOpen: boolean;
   closeGuestsInput: () => void;
   openGuestsInput: () => void;
   setDestination: (destination: string) => void;
   setEventStartAndEndDates: (dates: DateRange | undefined) => void;
   eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
   isGuestsInputOpen,
   closeGuestsInput,
   openGuestsInput,
   setDestination,
   setEventStartAndEndDates,
   eventStartAndEndDates,
}: DestinationAndDateStepProps) {
   const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

   function openDatePicker() {
      return setIsDatePickerOpen(true);
   }

   function closeDatePicker() {
      setIsDatePickerOpen(false);
   }

   const displayedDate =
      eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
         ? format(eventStartAndEndDates.from, "d' de 'LLL")
              .concat(" até ")
              .concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
         : null;

   return (
      <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
         <div className='flex flex-1 items-center gap-2'>
            <MapPin className='size-5 text-zinc-400' />
            <input
               className='placeholder-zinc-400 text-lg bg-transparent outline-none flex-1'
               type='text'
               placeholder='Para onde você vai?'
               disabled={isGuestsInputOpen}
               onChange={(event) => setDestination(event.target.value)}
            />
         </div>

         <button
            disabled={isGuestsInputOpen}
            onClick={openDatePicker}
            className='flex items-center gap-2 outline-none text-left w-60'
         >
            <Calendar className='size-5 text-zinc-400' />
            <span className='text-zinc-400 text-lg'>{displayedDate || "Quando?"}</span>
         </button>

         {isDatePickerOpen && (
            <div className='bg-black/60 fixed inset-0 flex items-center justify-center'>
               <div className='bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5'>
                  <div className='space-y-2'>
                     <div className='flex items-center justify-between'>
                        <h2 className='font-semibold text-lg'>Selecione a data</h2>
                        <button type='button' onClick={closeDatePicker}>
                           <X className='size-5 text-zinc-400' />
                        </button>
                     </div>
                  </div>

                  <DayPicker
                     mode='range'
                     selected={eventStartAndEndDates}
                     onSelect={setEventStartAndEndDates}
                  />
               </div>
            </div>
         )}

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
