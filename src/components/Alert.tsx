import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import {Trash2} from 'lucide-react';
import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux';
import {Button, buttonVariants} from './ui/button';
import {AlertDialogDescription} from '@radix-ui/react-alert-dialog';
import {
  deleteAppointmentByClientId,
  deleteAppointmentById,
} from '@/features/appointment/appointmentSlice';
import {deleteClientById} from '@/features/clients/clientSlice';
import { useLocation, useNavigate} from 'react-router-dom';

type DeleteAppointmentAction ={
  context: 'appointment';
  clientId: string;
  appointmentId: string;
}

type  DeleteClientAction ={
  context: 'client';
  clientId: string;
  appointmentId?: string;
}

type CustomeAlertDialogProps = DeleteAppointmentAction | DeleteClientAction;

const Alert: React.FC<CustomeAlertDialogProps> = ({
  clientId,
  appointmentId,
  context,
}) => {
  const dispatch = useDispatch();
  const {pathname}=useLocation()
  const navigate=useNavigate()
  const handleClick = () => {
    if (context === 'appointment') {
      dispatch(deleteAppointmentById({appointmentId}));
      if(pathname==='/calendar'){

        /* inject '?delete' query in url to access it in BiCalendar component and 
        close the view appointment modal after deleting appointment */
        navigate('?delete')
   
      }
    } else if (context === 'client') {
      dispatch(deleteClientById({clientId}));
      dispatch(deleteAppointmentByClientId({clientId}));
    }
    toast.success(`${context} deleted successfully`);
  };
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger title={`Delete ${context}`} className="flex justify-center items-center">
          {pathname==='/calendar' ? (<Button variant="destructive" className='h-7'>Delete Appointment</Button>):<Trash2 size={28} className="cursor-pointer text-red-500" />}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            {context === 'client'
              ? 'This will delete client data as well as their appointments.'
              : 'This will delete the apppointment'}
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleClick}
              className={buttonVariants({
                variant: 'destructive',
              })}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Alert;
