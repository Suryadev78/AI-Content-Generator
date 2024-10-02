import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export default async function HistoryPage() {
  const { userId } = auth();
  const userHistory = await prisma.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });
  return (
    <div className="bg-white p-2 ml-2 mt-2">
      <Table>
        <TableCaption>A list of your recent output history</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Template</TableHead>
            <TableHead className="whitespace-pre-wrap hidden md:table-cell">
              Description
            </TableHead>
            <TableHead>CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userHistory && userHistory.length > 0 ? (
            userHistory.map((history) => (
              <TableRow key={history.id}>
                <TableCell>{history.title}</TableCell>
                <TableCell>{history.templateUsed}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {history.description}
                </TableCell>
                <TableCell>{history.createdAt.toLocaleString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <div className="text-center">No history found</div>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
