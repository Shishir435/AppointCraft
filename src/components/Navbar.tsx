import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarClock } from 'lucide-react';
import AddClientBtn from './AddClientBtn';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full mx-auto px-8 flex justify-between items-center h-[60px] shadow-md inset-y-0">
      <div>
        <Link to="/">
          <img src="/apple-touch-icon.png" className='rounded-full' alt='logo' width={40} height={40}/>
        </Link>
      </div>
      <div>
      <AddClientBtn />
      </div>
      <div >
        <Link to="/calendar" title='View Calendar'><CalendarClock size={32} /></Link>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" title='Dummy Avatar' alt="Dummy Avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
