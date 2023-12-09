import { useAppSelector } from '@/app/hooks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { selectAllClientData } from '@/features/clients/clientSlice';
import { CalendarClock, LayoutGrid, Search, Table } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddClientBtn from './AddClientBtn';
import GridCard from './GridCards';
import InfoTable from './InfoTable';
import Pagination from './Pagination';

const MainContainer = () => {
  const allClientdata = useAppSelector(selectAllClientData);
  const [currentClients, setCurrentClients] = useState<Client[]>(allClientdata);
  return (
    <div className="w-full mx-auto">
     
      <Tabs defaultValue="InfoTable" className="md:flex md:justify-end">
        <TabsList className="bg-opacity-40 flex md:flex-col justify-center sm:justify-between flex-wrap md:flex-nowrap px-4 md:px-0 md:py-4 md:justify-start w-full mx-auto h-[100px] sm:h-[60px] md:w-[60px] md:h-[100vh] gap-3 md:fixed md:left-0 md:bottom-0 md:z-30 rounded-none">
          <div className="hidden sm:block md:mb-12">
            <Link to="/">
              <img
                src="/apple-touch-icon.png"
                className="rounded-full"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="flex md:flex-col items-center gap-4 flex-wrap justify-center">
            <div>
              <AddClientBtn />
            </div>
            <div>
              <Link to="/calendar" title="View Calendar">
                <CalendarClock size={32} className="text-black" />
              </Link>
            </div>
            <div>
              <Link to='/search'>
                <Search size={32} className='text-black'/>
              </Link>
            </div>
            <TabsTrigger value="InfoTable" title="Table View">
              <Table />
            </TabsTrigger>
            <TabsTrigger value="GridCard" title="Grid View" className="">
              <LayoutGrid />
            </TabsTrigger>
            <Pagination setCurrentClients={setCurrentClients} />
          </div>
        </TabsList>
        <TabsContent
          value="InfoTable"
          className="w-full md:w-[calc(100%-60px)]"
        >
          <InfoTable currentClients={currentClients} />
        </TabsContent>
        <TabsContent value="GridCard" className="w-full md:w-[calc(100%-60px)]">
          <GridCard currentClients={currentClients} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContainer;
