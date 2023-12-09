import {useAppDispatch, useAppSelector} from '@/app/hooks';
import {
  searchClients,
  selectSearchedClients,
} from '@/features/clients/clientSlice';
import {useState} from 'react';
import GridCard from './GridCards';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';

const Search = () => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {
    dispatch(searchClients(searchText));
  };
  const searchedClients: Client[] = useAppSelector(selectSearchedClients)(
    searchText,
  );
  return (
    <div>
      <Input
        type="text"
        placeholder="Search clients..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="max-w-md mx-auto rounded-full my-4 "
        autoFocus
      />
      <Button className="hidden" onClick={handleSearch}>
        Search
      </Button>

      <div>
        {searchedClients.length === 0 ? (
          <div className="text-center text-lg">
            No matching clients were located with the given text{' '}
            <span className="text-red-400">{`${searchText}`}</span>
          </div>
        ) : (
          <GridCard currentClients={searchedClients} />
        )}
      </div>
    </div>
  );
};

export default Search;
