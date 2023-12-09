import ViewAppointment from './ViewAppointment';
import Alert from './Alert';
import AddAppointmentBtn from './AddAppointmentBtn';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import EditableCell from './EditableCell';
import {useAppDispatch} from '@/app/hooks';
import {editClientField} from '@/features/clients/clientSlice';

type InfoTableProps = {
  currentClients: Client[];
};

const InfoTable: React.FC<InfoTableProps> = ({currentClients}) => {
  const dispatch = useAppDispatch();
  const updateClientData = (
    clientId: string,
    fieldName: 'firstName' | 'lastName' | 'location',
    newValue: string,
  ) => {
    dispatch(editClientField({clientId, fieldName, newValue}));
  };
  return (
    <Table className="text-center">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-center">FirstName</TableHead>
          <TableHead className="text-center">LastName</TableHead>
          <TableHead className="text-center">Location</TableHead>
          <TableHead className="text-center">View</TableHead>
          <TableHead className="text-center">Add</TableHead>
          <TableHead className="text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentClients.map(({clientId, firstName, lastName, location}) => (
          <TableRow key={clientId}>
            <TableCell className="font-medium text-center">
              <EditableCell
                value={firstName}
                className="mx-auto"
                type="text"
                onChange={(e) => {
                  updateClientData(clientId, 'firstName', e.target.value);
                }}
                onBlur={() =>
                  updateClientData(clientId, 'firstName', firstName)
                }
                context='firstName'
              />
            </TableCell>
            <TableCell>
              <EditableCell
                type="text"
                className="mx-auto"
                value={lastName}
                onChange={(e) =>
                  updateClientData(clientId, 'lastName', e.target.value)
                }
                onBlur={() => updateClientData(clientId, 'lastName', lastName)}
                context='lastName'
              />
            </TableCell>
            <TableCell>
              <EditableCell
                type="text"
                className="mx-auto"
                value={location}
                onChange={(e) =>
                  updateClientData(clientId, 'location', e.target.value)
                }
                onBlur={() => updateClientData(clientId, 'location', location)}
                context='location'
              />
            </TableCell>
            <TableCell>
              <ViewAppointment
                clientId={clientId}
                firstName={firstName}
                lastName={lastName}
                location={location}
              />
            </TableCell>
            <TableCell className="text-center">
              <AddAppointmentBtn clientId={clientId} />
            </TableCell>
            <TableCell className="text-center flex justify-center">
              <Alert clientId={clientId} context="client" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default InfoTable;
