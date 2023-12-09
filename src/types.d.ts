declare type Client = {
    clientId: string;
    firstName: string;
    lastName: string;
    location: string;
};

declare type AddClientAction = PayloadAction<Client>;
declare type DeleteClientAction = PayloadAction<{
    clientId: string;
}>;

type EditClientFieldAction = PayloadAction<{
    clientId: string;
    fieldName: 'firstName' | 'lastName' | 'location';
    newValue: string;
}>;

declare type Appointment = {
    clientId: string;
    appointmentId: string;
    date: string;
    time: string;
};



declare type AddAppointmentAction = PayloadAction<{
    appointments: Appointment[];
}>;
declare type DeleteAppointmentByIdAction = PayloadAction<{
    appointmentId: string;
}>;
declare type DeleteAppointmentByClientIdAction = PayloadAction<{
    clientId: string;
}>;
declare type EditAppointmentFieldAction = PayloadAction<{
    appointmentId: string;
    fieldName: 'date' | 'time';
    newValue: string;
}>;


declare type PaginationState= {
    currentPage: number;
  }