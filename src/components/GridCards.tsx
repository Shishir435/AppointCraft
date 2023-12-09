
import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import ViewAppointment from './ViewAppointment';
import Alert from './Alert';
import EditableCell from './EditableCell';
import { useAppDispatch } from '@/app/hooks';
import { editClientField } from '@/features/clients/clientSlice';
import AddAppointmentBtn from './AddAppointmentBtn';
type GridCardProps ={
  currentClients: Client[];
}

const GridCard:React.FC<GridCardProps> = ({currentClients}) => {
  const dispatch = useAppDispatch();
  const updateClientData = (
    clientId: string,
    fieldName: 'firstName' | 'lastName' | 'location',
    newValue: string,
  ) => {
    dispatch(editClientField({clientId, fieldName, newValue}));
  };
  return (
    <div className='grid grid-cols-12 gap-4 p-4 container'>
      {currentClients.map(({firstName,lastName,location,clientId})=>
        (<Card key={clientId} className='col-span-12 md:col-span-6 lg:col-span-4 p-4 md:pd-6 lg:pd-8'>
          <div className='flex justify-between'>
            <div>
            <CardTitle className='flex text-lg'>
              <EditableCell
                value={firstName}
                className="h-7 "
                type="text"
                onChange={(e) => {
                  updateClientData(clientId, 'firstName', e.target.value);
                }}
                onBlur={() =>
                  updateClientData(clientId, 'firstName', firstName)
                }
                context='firstName'
              /> 
              &nbsp;
              <EditableCell
                type="text"
                className="h-7"
                value={lastName}
                onChange={(e) =>
                  updateClientData(clientId, 'lastName', e.target.value)
                }
                onBlur={() => updateClientData(clientId, 'lastName', lastName)}
                context='lastName'
              />
              </CardTitle>
            </div>
            <div>
            <CardDescription className='flex gap-2'>
              <MapPin/>
            <EditableCell
                type="text"
                className="h-7"
                value={location}
                onChange={(e) =>
                  updateClientData(clientId, 'location', e.target.value)
                }
                onBlur={() => updateClientData(clientId, 'location', location)}
                context='location'
              /></CardDescription>
            </div>
          </div>
          
          <div className='flex justify-between items-center mt-8'>
            <div>
            <ViewAppointment clientId={clientId} firstName={firstName} lastName={lastName} location={location}/>
            </div>
            <AddAppointmentBtn clientId={clientId}/>
            <div>
            <Alert clientId={clientId} context='client'/>
            </div>
          </div>
        </Card>)
      )}
    </div>
  );
};

export default GridCard;
