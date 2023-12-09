import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import appointmentsData from "@/app/appointments";
import { RootState } from "@/app/store";



// Types
type Appointment = {
    clientId: string;
    appointmentId: string;
    date: string;
    time: string;
};


type AddAppointmentAction = PayloadAction<{
    appointments: Appointment[];
}>;
type DeleteAppointmentByIdAction = PayloadAction<{
    appointmentId: string;
}>;
type DeleteAppointmentByClientIdAction = PayloadAction<{
    clientId: string;
}>;
type EditAppointmentFieldAction = PayloadAction<{
    appointmentId: string;
    fieldName: 'date' | 'time';
    newValue: string;
}>;

// Helper Functions  
const isValidAppointmentFieldName = (fieldName: string): fieldName is keyof Appointment => {
    return ["date", "time"].includes(fieldName);
};

const initialState = {
    appointmentData: appointmentsData as Appointment[]
}

const appointmentSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppointment: (state, action: AddAppointmentAction) => {
            const { appointments } = action.payload;
            // console.log('Current state:', state);
            // console.log('Adding appointments:', appointments);
        
            const newState = { ...state, appointmentData: [...state.appointmentData, ...appointments] };
        
            // console.log('New state:', newState);
            return newState;
        },
        deleteAppointmentById: (state, action: DeleteAppointmentByIdAction) => {
            const { appointmentId } = action.payload
            return { ...state, appointmentData: state.appointmentData.filter(item => item.appointmentId !== appointmentId) }
        },
        deleteAppointmentByClientId: (state, action: DeleteAppointmentByClientIdAction) => {
            const { clientId } = action.payload
            return { 
                ...state,
                appointmentData: state.appointmentData.filter(item => item.clientId !== clientId) }
        },
        editAppointmentField: (state, action: EditAppointmentFieldAction) => {
            const { appointmentId, fieldName, newValue } = action.payload
            const appointmentIndex = state.appointmentData.findIndex((appointment) => appointment.appointmentId === appointmentId);
            
            if(appointmentIndex !== -1 && isValidAppointmentFieldName(fieldName)){
                const updatedAppointment={...state.appointmentData[appointmentIndex]}
                updatedAppointment[fieldName]=newValue;
                const updatedAppointmentData=[...state.appointmentData]
                updatedAppointmentData[appointmentIndex]=updatedAppointment
                return {...state,appointmentData: updatedAppointmentData}
            }
           
            return state;
        }
    }
})

export const {addAppointment,deleteAppointmentById,deleteAppointmentByClientId,editAppointmentField} =appointmentSlice.actions
export default appointmentSlice.reducer


// selector methods

export const selectAllAppointmentData=(state: RootState)=>state.appointmentsData.appointmentData
export const selectAppointmentByClientId=(clientId:string)=>createSelector(selectAllAppointmentData,(appintments)=>appintments.filter(appointment=>appointment.clientId===clientId))
export const selectAppointmentByAppointmentId=(appointmentId:string)=>createSelector(selectAllAppointmentData,(appintments)=>appintments.filter(appointment=>appointment.appointmentId===appointmentId))

