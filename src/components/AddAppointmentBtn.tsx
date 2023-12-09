import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {DialogDescription} from '@radix-ui/react-dialog';
import {Input} from '@/components/ui/input';
import {useForm, SubmitHandler, useFieldArray} from 'react-hook-form';
import {v4 as uuid} from 'uuid';
import {PlusCircleIcon, MinusCircleIcon, CalendarPlus} from 'lucide-react';
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


import toast from 'react-hot-toast';
import { ScrollArea } from './ui/scroll-area';
import EditableCell from './EditableCell';
import Alert from './Alert';
import { addAppointment, editAppointmentField, selectAppointmentByClientId } from '@/features/appointment/appointmentSlice';

const appointmentSchema = z.object({
  appointmentId: z.string(),
  date: z.string(),
  time: z.string(),
});

const formSchema = z.object({
  appointments: z.array(appointmentSchema),
});

interface AddAppointmentBtnProps {
  clientId: string;
}

interface FormData {
  appointments: {
    clientId: string;
    appointmentId: string;
    date: string;
    time: string;
  }[];
}
const AddAppointmentBtn: React.FC<AddAppointmentBtnProps> = ({clientId}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    register,
    formState: {isSubmitSuccessful},
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appointments: [{clientId, appointmentId: uuid(), date: '', time: ''}],
    },
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'appointments',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const appointmentsWithClientId = data.appointments.map((appointment) => ({
      ...appointment,
      clientId: clientId,
    }));
    dispatch(addAppointment({appointments: appointmentsWithClientId}));
    setOpen(false);
    toast.success('appointment added succesfully');

  };

  const appointmentsOfClient = useSelector(
    selectAppointmentByClientId(clientId),
  );

  function editField(appointmentId: string, fieldName: 'date' | 'time', newValue: string) {
    editAppointmentField({
        appointmentId,
        fieldName,
        newValue,
      })
    }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        appointments: [{appointmentId: uuid(), date: '', time: ''}],
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" title='Add Appoinment'>
            <CalendarPlus size={32} /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Appointment</DialogTitle>
            <DialogDescription>
              Add appointment for your clients
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className='h-60 w-full p-2'>

          {appointmentsOfClient.map(({appointmentId, date, time}) => (
            <ul
              key={appointmentId}
              className="grid grid-cols-6 p-1 text-center"
            >
              <li className="col-span-3 mt-1">
                <EditableCell
                  className='h-7 mx-auto'
                  value={date}
                  onChange={(e) => editField(appointmentId, 'date', e.target.value)}
                  onBlur={() => editField(appointmentId, 'date', date)}
                  type="date"
                  context='date'
                />
              </li>
              <li className="col-span-2 mt-1">
                <EditableCell
                  className='h-7  mx-auto'
                  value={time}
                  onChange={(e) => editField(appointmentId, 'time', e.target.value)}
                  onBlur={() => editField(appointmentId, 'time', time)}
                  type="time"
                  context='time'
                />
              </li>
              <li className="col-span-1 mt-1 flex justify-center items-center">
                <Alert clientId={clientId} appointmentId={appointmentId} context="appointment"/>
              </li>
            </ul>
          ))}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
            {fields.map((appointment, index) => (
              <div key={index} className="grid grid-cols-6 p-1">
                <Input
                  type="date"
                  id={`date-${index}`}
                  {...register(`appointments.${index}.date` as const, {
                    required: true,
                  })}
                  className="col-span-3 h-7 w-4/5 mx-auto"
                  required
                />
                <Input
                  type="time"
                  id={`time-${index}`}
                  {...register(`appointments.${index}.time` as const, {
                    required: true,
                  })}
                  className="col-span-2 h-7"
                  required
                />
                <input
                  type="hidden"
                  {...register(`appointments.${index}.appointmentId` as const)}
                  value={appointment.id}
                />
                <span className="col-span-1 flex justify-center items-center">
                  <PlusCircleIcon
                    onClick={() => {
                      append({clientId,appointmentId: uuid(), date: '', time: ''});
                    }}
                    style={{cursor: 'pointer'}}
                  />
                  {index > 0 && (
                    <MinusCircleIcon
                      onClick={() => {
                        remove(index);
                      }}
                      style={{cursor: 'pointer'}}
                    />
                  )}
                </span>
              </div>
            ))}
            <DialogFooter className='py-2'>
              <Button type="submit" className=' w-full h-9'>Save changes</Button>
            </DialogFooter>
          </form>
          </ScrollArea>  
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddAppointmentBtn;


