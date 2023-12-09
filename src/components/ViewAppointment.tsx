import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {useDispatch} from 'react-redux';
import EditableCell from './EditableCell';
import {Button} from './ui/button';
import {Separator} from './ui/separator';
import {ScrollArea} from './ui/scroll-area';

import Alert from './Alert';
import {editClientField} from '@/features/clients/clientSlice';
import {
  editAppointmentField,
  selectAppointmentByClientId,
} from '@/features/appointment/appointmentSlice';
import {useAppSelector} from '@/app/hooks';
import {Calendar} from 'lucide-react';

const ViewAppointment: React.FC<Client> = ({
  clientId,
  firstName,
  lastName,
  location,
}) => {
  const appointmentData: Appointment[] = useAppSelector(
    selectAppointmentByClientId(clientId),
  );
  const appointments = useAppSelector(selectAppointmentByClientId(clientId));
  const dispatch = useDispatch();
  function editAppointment(
    appointmentId: string,
    fieldName: 'date' | 'time',
    newValue: string,
  ) {
    dispatch(
      editAppointmentField({
        appointmentId,
        fieldName,
        newValue,
      }),
      
    );
  }

  const editClient = (
    clientId: string,
    fieldName: 'firstName' | 'lastName' | 'location',
    newValue: string,
  ) => {
    dispatch(editClientField({clientId, fieldName, newValue}));
  
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost" title={`${appointments.length<0? 'No Appointment': appointments.length } Appointment`}>
            <div className="relative">
              <Calendar size={32} />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-[6px] ">
                {appointments.length}
              </span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              View Appointments Details
            </DialogTitle>
            <DialogDescription>
              You can make changes to any field by double clicking on it. click
              on the trace icon to delete appointment.
            </DialogDescription>
          </DialogHeader>
          <p className="flex justify-center items-center gap-2">
            <p className="flex gap-x-3">
              Client Info:
              <Alert clientId={clientId} context="client" />
            </p>
          </p>
          <div className="flex justify-between gap-2">
            <p>FirstName</p>
            <p>LastName</p>
            <p>Location</p>
          </div>
          <div className="flex justify-between gap-2">
            <p>
              <EditableCell
                className="h-7 mx-auto"
                value={firstName}
                type="text"
                onChange={(e) =>
                  editClient(clientId, 'firstName', e.target.value)
                }
                onBlur={() => editClient(clientId, 'firstName', firstName)}
                context='firstName'
              />
            </p>
            <p>
              <EditableCell
                className="h-7 mx-auto"
                value={lastName}
                type="text"
                onChange={(e) =>
                  editClient(clientId, 'lastName', e.target.value)
                }
                onBlur={() => editClient(clientId, 'lastName', lastName)}
                context='lastName'
              />
            </p>
            <p>
              <EditableCell
                className="h-7 mx-auto"
                value={location}
                type="text"
                onChange={(e) =>
                  editClient(clientId, 'location', e.target.value)
                }
                onBlur={() => editClient(clientId, 'location', location)}
                context='location'
              />
            </p>
          </div>
          <Separator className="my-[2px]" />
          <p className="grid grid-cols-6">
            <p className="col-span-3">Date</p>
            <p className="col-span-2">Time</p>
            <p className="col-span-1">Delete</p>
          </p>
          <ScrollArea className="h-32 w-full">
            {appointmentData.map(({appointmentId, date, time}) => (
              <ul key={appointmentId} className="grid grid-cols-6 p-1">
                <li className="col-span-3 mt-1">
                  <EditableCell
                    className="h-7"
                    value={date}
                    onChange={(e) =>
                      editAppointment(appointmentId, 'date', e.target.value)
                    }
                    onBlur={() => editAppointment(appointmentId, 'date', date)}
                    type="date"
                    context='date'
                  />
                </li>
                <li className="col-span-2 mt-1">
                  <EditableCell
                    className="h-7 w-4/5"
                    value={time}
                    onChange={(e) =>
                      editAppointment(appointmentId, 'time', e.target.value)
                    }
                    onBlur={() => editAppointment(appointmentId, 'time', time)}
                    type="time"
                    context='time'
                  />
                </li>
                <li className="col-span-1 mt-1 flex justify-center items-center">
                  <Alert
                    clientId={clientId}
                    appointmentId={appointmentId}
                    context="appointment"
                  />
                </li>
              </ul>
            ))}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewAppointment;
