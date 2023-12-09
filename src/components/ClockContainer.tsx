import React from 'react';
import * as Lucide from 'lucide-react';

type ClockComponents ={
  [key: number]: React.ComponentType<{ size?: number; color?: string }>;
}

const clockComponents: ClockComponents = {
    1: Lucide.Clock1 as React.ComponentType<{ size?: number; color?: string }>,
    2: Lucide.Clock2 as React.ComponentType<{ size?: number; color?: string }>,
    3: Lucide.Clock3 as React.ComponentType<{ size?: number; color?: string }>,
    4: Lucide.Clock4 as React.ComponentType<{ size?: number; color?: string }>,
    5: Lucide.Clock5 as React.ComponentType<{ size?: number; color?: string }>,
    6: Lucide.Clock6 as React.ComponentType<{ size?: number; color?: string }>,
    7: Lucide.Clock7 as React.ComponentType<{ size?: number; color?: string }>,
    8: Lucide.Clock8 as React.ComponentType<{ size?: number; color?: string }>,
    9: Lucide.Clock9 as React.ComponentType<{ size?: number; color?: string }>,
    10: Lucide.Clock10 as React.ComponentType<{ size?: number; color?: string }>,
    11: Lucide.Clock11 as React.ComponentType<{ size?: number; color?: string }>,
    12: Lucide.Clock12 as React.ComponentType<{ size?: number; color?: string }>,
  };
  

type ClockContainerProps ={
  time: string;
}

const ClockContainer: React.FC<ClockContainerProps> = ({ time }) => {
  const [hh,mm] = time.split(':');
  const hour=parseInt(hh)
  function convertTo12HourFormat(hour: number) {
    if (hour < 0 || hour > 23) {
      return 'Invalid input';
    }

    const isPM = hour >= 12;
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${mm} ${isPM ? 'PM' : 'AM'}`;
  }

  function getClockComponent(hour: number) {
    if (hour < 0 || hour > 23) {
      return null;
    }
    if (hour === 0) {
      return clockComponents[12];
    } else if (hour > 12) {
      const localhour = hour - 12;
      return clockComponents[localhour];
    } else {
      return clockComponents[hour];
    }
  }

  const ClockComponent = getClockComponent(hour);

  return (
    <div>
      {ClockComponent && (
        <div className='flex gap-2'>
          <ClockComponent size={24} color='black'/>
          {convertTo12HourFormat(hour)}
        </div>
      )}
    </div>
  );
};

export default ClockContainer;
