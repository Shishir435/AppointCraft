import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { v4 as uuid } from 'uuid';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { addClient } from '@/features/clients/clientSlice';
import { UserPlus } from 'lucide-react';


const formSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'firstName must be greater than 2 characters',
    })
    .max(60, {
      message: 'firstName must be less than 20 characters ',
    }),
  lastName: z
    .string()
    .min(2, {
      message: 'lastName must be greater than 2 characters',
    })
    .max(60, {
      message: 'lastName must be less than 20 characters ',
    }),
  location: z
    .string()
    .min(2, {
      message: 'location must be greater than 2 characters',
    })
    .max(15, {
      message: 'location must be less than 20 characters ',
    }),
});
const AddClientBtn = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      location: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setOpen(false);
    toast.success('Client added successfully');
    const client = {
      clientId: uuid(),
      ...values,
    };
    dispatch(addClient(client));
  }
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset({
        firstName: '',
        lastName: '',
        location: '',
      });
    }
  }, [form.reset, form.formState, form]);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="link" title='Add client'><UserPlus size={32} /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add client</DialogTitle>
            <DialogDescription>You can add client here</DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FirstName</FormLabel>
                    <FormControl>
                      <Input placeholder="shishir" {...field} />
                    </FormControl>
                    <FormDescription>Client&apos;s first name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LastName</FormLabel>
                    <FormControl>
                      <Input placeholder="chaurasiya" {...field} />
                    </FormControl>
                    <FormDescription>Client&apos;s last name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loaction</FormLabel>
                    <FormControl>
                      <Input placeholder="chennai" {...field} />
                    </FormControl>
                    <FormDescription>Client&apos;s Location.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddClientBtn;
