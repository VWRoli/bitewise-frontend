'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/app/components/ui/alert-dialog';

import { Button } from '@/app/components/ui/button';
import { deleteUser } from '@/app/(modules)/[lang]/dashboard/(modules)/profile/actions';
import { useDictionary } from '@/app/providers/dictionary-provider';

const DeleteAccount = () => {
  const { common, profile } = useDictionary();

  const handleDeleteUser = async () => {
    await deleteUser();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">{profile.deleteAccount.title}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {profile.deleteAccount.verification}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {profile.deleteAccount.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{common.cancel}</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteUser}>
            {common.continue}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAccount;
