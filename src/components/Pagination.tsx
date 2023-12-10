import {useSelector, useDispatch} from 'react-redux';
import {
  selectCurrentPage,
  setCurrentPage,
} from '@/features/pagination/paginationSlice';
import {useEffect} from 'react';
import {buttonVariants} from './ui/button';
import {useAppSelector} from '@/app/hooks';
import {selectAllClientData} from '@/features/clients/clientSlice';
const {innerWidth} = window;
const ITEMS_PER_PAGE = innerWidth > 1024 ? 12 : 9;


type setCurrentClientsPops = {
  setCurrentClients: React.Dispatch<React.SetStateAction<Client[]>>;
};

const Pagination: React.FC<setCurrentClientsPops> = ({setCurrentClients}) => {
  const orders: Client[] = useAppSelector(selectAllClientData);
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  useEffect(() => {
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentClients(currentOrders);
  }, [
    currentPage,
    indexOfFirstItem,
    indexOfLastItem,
    orders,
    setCurrentClients,
  ]);
  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <ul className="flex md:flex-col md:gap-y-3 gap-x-4 overflow-x-auto items-center justify-center">
      {Array.from(
        {length: Math.ceil(orders.length / ITEMS_PER_PAGE)},
        (_, index) => (
          <li
            key={index}
            onClick={() => paginate(index + 1)}
            className={` cursor-pointer h-8 ${
              currentPage === index + 1
                ? 'active bg-blue-600 text-white hover:bg-blue-600'
                : 'bg-gray-50'
            } ${buttonVariants({
              variant: 'outline',
            })}`}
          >
            <span className="">{index + 1}</span>
          </li>
        ),
      )}
    </ul>
  );
};

export default Pagination;
