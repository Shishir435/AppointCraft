import clientsData from "@/app/clients";
import { RootState } from "@/app/store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types

type Client = {
    clientId: string;
    firstName: string;
    lastName: string;
    location: string;
};

type AddClientAction = PayloadAction<Client>;
type DeleteClientAction = PayloadAction<{
    clientId: string;
}>;
type EditClientFieldAction = PayloadAction<{
    clientId: string;
    fieldName: 'firstName' | 'lastName' | 'location';
    newValue: string;
}>;

type SearchClientsAction = PayloadAction<string>;

// Helper Functions
const isValidClientFieldName = (fieldName: string): fieldName is keyof Client => {
    return ["firstName", "lastName", "location"].includes(fieldName);
};

// Initial State
const initialState = {
    clientsData: clientsData as Client[],
};

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addClient: (state, action: AddClientAction) => {
            const { clientId, firstName, lastName, location } = action.payload
            const newClient: Client = {
                clientId,
                firstName,
                lastName,
                location
            }

            return { ...state, clientsData: [...state.clientsData, newClient] }

        },
        deleteClientById: (state, action: DeleteClientAction) => {
            const {clientId} = action.payload;
            return { ...state, clientsData: state.clientsData.filter((client) => client.clientId !== clientId) };
        },
        editClientField: (state, action: EditClientFieldAction) => {
            const { clientId, fieldName, newValue } = action.payload;
            const clientIndex = state.clientsData.findIndex((client) => client.clientId === clientId);
        
            if (clientIndex !== -1 && isValidClientFieldName(fieldName)) {
                const updatedClient = { ...state.clientsData[clientIndex] };
                updatedClient[fieldName] = newValue;
                const updatedClientData = [...state.clientsData];
                updatedClientData[clientIndex] = updatedClient;
                return { ...state, clientsData: updatedClientData };
            }
            return state;
        },
        searchClients:(state,action:SearchClientsAction)=>{
            const searchText=action.payload;
            const filteredClients = state.clientsData.filter(
                (client) =>
                  client.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
                  client.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
                  client.location.toLowerCase().includes(searchText.toLowerCase())
              );
        
              return { ...state, searchedClients: filteredClients };
        }
    }
})

export const { addClient, deleteClientById, editClientField, searchClients} = clientSlice.actions
export default clientSlice.reducer

export const selectAllClientData = (state: RootState) => state.clientData.clientsData
export const selectClientByClientId = (clientId: string) => createSelector(selectAllClientData, (clients) => clients.filter(client => client.clientId === clientId)) as (state: RootState) => Client[]
export const selectSearchedClients = createSelector(
    selectAllClientData,
    (clients) => (searchText: string) => {
      const normalizedSearchText = searchText.toLowerCase();
      return clients.filter(
        (client) =>
          client.firstName.toLowerCase().includes(normalizedSearchText) ||
          client.lastName.toLowerCase().includes(normalizedSearchText) ||
          client.location.toLowerCase().includes(normalizedSearchText)
      );
    }
  );