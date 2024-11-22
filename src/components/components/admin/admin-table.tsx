"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import AdminAlertDialog from '@/components/components/admin/admin-alert-dialog';

type AdminTableProps = {
  data: {
    name: string;
    id: number;
  }[];
  handleDelete: (id: number) => void;
};

export default function AdminTable({ data, handleDelete }: AdminTableProps) {
  const path = usePathname();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Update</TableHead>
          <TableHead className="text-right">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell><Link href={`${path}/update/${item.id}`}>Update</Link></TableCell>
            <TableCell className="text-right"><AdminAlertDialog onDelete={() => handleDelete(item.id)}>Delete</AdminAlertDialog></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
