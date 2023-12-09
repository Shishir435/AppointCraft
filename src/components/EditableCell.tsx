import {InputHTMLAttributes, useState} from 'react';
import toast from 'react-hot-toast';
import {Input} from './ui/input';
import {cn} from '@/lib/utils';

interface EditableCellProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  className?: string;
  context: "firstName"|'lastName'|'location'|'date'|'time'
}
const EditableCell: React.FC<EditableCellProps> = ({
  value,
  onChange,
  onBlur,
  type,
  className,
  context
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onBlur();
      toast.success(`${context.charAt(0).toUpperCase() + context.slice(1)} Updated Succesfully`);
    }
  };

  return isEditing ? (
    <Input
      className={cn('w-[120px] cursor-pointer', className)}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={() => {
        setIsEditing(false);
        onBlur();
      }}
      onKeyDown={handleKeyPress}
      autoFocus
    />
  ) : (
    <span onDoubleClick={handleDoubleClick}>{value}</span>
  );
};

export default EditableCell;
