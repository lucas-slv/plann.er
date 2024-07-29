import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/api";

export function CreateTripPage() {
   const navigate = useNavigate();

   const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
   const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
   const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
   const [emailsToInvite, setEmailsToInvite] = useState(["test@test.com"]);
   const [destination, setDestination] = useState("");
   const [ownerName, setOwnerName] = useState("");
   const [ownerEmail, setOwnerEmail] = useState("");
   const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

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

   function openConfirmTripModal() {
      setIsConfirmTripModalOpen(true);
   }

   function closeConfirmTripModal() {
      setIsConfirmTripModalOpen(false);
   }

   function addNewEmailToInvite(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      //   console.log("submit");

      const data = new FormData(event.currentTarget);
      const email = data.get("email")?.toString();

      if (!email) return;
      if (emailsToInvite.includes(email)) return;

      //   console.log(email);
      setEmailsToInvite([...emailsToInvite, email]);

      event.currentTarget.reset();
   }

   function removeEmailFromInvites(emailToRemove: string) {
      const newEmailList = emailsToInvite.filter((email) => email !== emailToRemove);
      setEmailsToInvite(newEmailList);
   }

   async function createTrip(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      //   console.log("create trip");
      //   console.log(destination);
      //   console.log(eventStartAndEndDates);
      //   console.log(emailsToInvite);
      //   console.log(ownerName);
      //   console.log(ownerEmail);

      if (!destination) return;
      if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) return;
      if (!emailsToInvite?.length) return;
      if (!ownerName || !ownerEmail) return;

      const response = await api.post("/trips", {
         destination: destination,
         starts_at: eventStartAndEndDates?.from,
         ends_at: eventStartAndEndDates?.to,
         emails_to_invite: emailsToInvite,
         owner_name: ownerName,
         owner_email: ownerEmail,
      });

      const { tripId } = response.data;

      navigate(`/trips/${tripId}`);
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
               <DestinationAndDateStep
                  isGuestsInputOpen={isGuestsInputOpen}
                  closeGuestsInput={closeGuestsInput}
                  openGuestsInput={openGuestsInput}
                  setDestination={setDestination}
                  setEventStartAndEndDates={setEventStartAndEndDates}
                  eventStartAndEndDates={eventStartAndEndDates}
               />

               {isGuestsInputOpen && (
                  <InviteGuestsStep
                     openGuestsModal={openGuestsModal}
                     emailsToInvite={emailsToInvite}
                     openConfirmTripModal={openConfirmTripModal}
                  />
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
            <InviteGuestsModal
               closeGuestsModal={closeGuestsModal}
               emailsToInvite={emailsToInvite}
               addNewEmailToInvite={addNewEmailToInvite}
               removeEmailFromInvites={removeEmailFromInvites}
            />
         )}

         {isConfirmTripModalOpen && (
            <ConfirmTripModal
               closeConfirmTripModal={closeConfirmTripModal}
               createTrip={createTrip}
               setOwnerName={setOwnerName}
               setOwnerEmail={setOwnerEmail}
            />
         )}
      </div>
   );
}
