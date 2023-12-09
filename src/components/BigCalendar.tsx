import { selectAllAppointmentData } from '@/features/appointment/appointmentSlice';
import { selectAllClientData } from '@/features/clients/clientSlice';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Calendar,
  Event as CalendarEvent,
  momentLocalizer,
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useAppSelector } from '@/app/hooks';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MapPin } from 'lucide-react';
import ClockContainer from './ClockContainer';
import Alert from './Alert';
import { useLocation, useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);
interface CustomEvent extends CalendarEvent {
  firstName: string;
  lastName: string;
  location: string;
  time: string;
  start: Date;
  end: Date;
  clientId: string;
  appointmentId: string;
}
type SelectedEventState = CustomEvent | null;

const BigCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<SelectedEventState>(null);
  const [open, setOpen] = useState(false);
  const allAppointments = useAppSelector(selectAllAppointmentData);
  const allClientData = useAppSelector(selectAllClientData);

  const events = allAppointments.map((appointment) => {
    const {clientId, time, date,appointmentId} = appointment;
    const clientData: Client[] = allClientData.filter(
      (client) => client.clientId === clientId,
    );
    const {firstName, lastName, location} = clientData[0];
    const startDateTime = new Date(date + 'T' + time);
    const endDateTime = moment(startDateTime).add(1, 'hour').toDate();
    const retrunObj = {
      title: `${firstName} ${lastName}`,
      start: startDateTime,
      end: endDateTime,
      location: `${location}`,
      firstName,
      lastName,
      time,
      clientId,
      appointmentId
    };
    return retrunObj;
  });
  function handleSelectEvent(event: CustomEvent) {
    setOpen(true);
    setSelectedEvent(event);
  }
  /* get access to '?delete' query and close the modal and uptae the url*/ 
  const {pathname,search}=useLocation()
  const navigate=useNavigate()
  useEffect(()=>{
    if(search ==='?delete'){
      setOpen(false)
    }
    navigate('/calendar')
  },[navigate, pathname, search])
  return (
    <div style={{height: '95vh'}}>
      <Dialog open={open} onOpenChange={setOpen} >
        <DialogContent className="max-w-sm rounded-lg md:rounded-md">
          <DialogHeader>
            <DialogTitle className="opacity-70">
              Appointment Details  
            </DialogTitle>
            <DialogDescription>
              {selectedEvent && (
                <div className="flex flex-col gap-4 my-2 text-black">
                  <div className="flex justify-evenly">
                    <p className="font-medium">
                      {`${selectedEvent?.firstName} ${selectedEvent?.lastName}`}
                    </p>
                    <p>{selectedEvent?.start?.toDateString()}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <p className="flex gap-2">
                      <MapPin />
                      {selectedEvent?.location}
                    </p>
                    <p className="flex gap-2">
                      <ClockContainer time={selectedEvent?.time} />
                    </p>
                  </div>
                  <Alert clientId={selectedEvent?.clientId} appointmentId={selectedEvent?.appointmentId} context='appointment'/>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{padding: '8px', height: '100vh'}}
      />
    </div>
  );
};

export default BigCalendar;
