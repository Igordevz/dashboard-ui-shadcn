"use client";
import { Button } from "@/components/ui/button";
import {
  PersonIcon,
  CardStackIcon,
  DashboardIcon,
  SunIcon,
} from "@radix-ui/react-icons";
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
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useTheme } from "next-themes";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Products } from "./products";
export default function Dashboard() {
  const [isloading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  const { setTheme, theme } = useTheme();

  function modeTheme() {
    if (theme == "dark") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  }

  const getAllProducts = Products;

  return (
    <>
      <header className="border-b-2 border-white-200 h-[90px]  w-full flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-primary mx-10 text-4xl">Dashboard</h1>
          <a
            href=""
            className="mx-2 transition-all text-secondary-foreground   hover: text-neutral-500"
          >
            gráficos
          </a>
          <a
            href=""
            className="mx-2 transition-all  text-secondary-foreground  hover: text-neutral-500"
          >
            Products
          </a>
          <a
            href=""
            className="mx-2 transition-all  text-secondary-foreground  hover: text-neutral-500"
          >
            Settings
          </a>
        </div>
        <div className="mx-10">
          <button>
            <SunIcon className="w-20 cursor-pointer" onClick={modeTheme} />
          </button>
          <AlertDialog>
            <Button>Download</Button>
            <AlertDialogTrigger className="mx-4">Sair</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Você tem certeza que deseja sair?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Com está ação você saira desta conta, apenas com o login
                  novamente, será possivel acessar novamente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Confirmar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>
      <main className="flex items-center w-full justify-center flex-col">
        <div className="flex w-full items-center justify-center flex-wrap flex-row  my-6 gap-8">
          {isloading ? (
            <>
              <Skeleton className="w-1/5 min-w-[230px] h-[200px]" />
              <Skeleton className="w-1/5 min-w-[230px] h-[200px]" />
              <Skeleton className="w-1/5 min-w-[230px] h-[200px]" />
              <Skeleton className="w-1/5 min-w-[230px] h-[200px]" />
            </>
          ) : (
            <>
              <div className="flex w-1/5 min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
                <div className="flex w-full  justify-between">
                  {" "}
                  <h1 className="mx-4">Total Revenue</h1>
                  <h1 className="mx-4">$</h1>
                </div>
                <div className="mx-4">
                  <h2 className="text-[30px] font-semibold">$45,231.89</h2>
                  <p className=" text-neutral-500">+20.1% from last month</p>
                </div>
              </div>

              <div className="flex w-1/5 min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
                <div className="flex w-full  justify-between">
                  {" "}
                  <h1 className="mx-4">subscriptions</h1>
                  <h1 className="mx-4">
                    <PersonIcon />
                  </h1>
                </div>
                <div className="mx-4">
                  <h2 className="text-[30px] font-semibold">+2350</h2>
                  <p className=" text-neutral-500">+180.1% from last month</p>
                </div>
              </div>

              <div className="flex w-1/5 min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
                <div className="flex w-full  justify-between">
                  {" "}
                  <h1 className="mx-4">Sales</h1>
                  <h1 className="mx-4">
                    <CardStackIcon />
                  </h1>
                </div>
                <div className="mx-4">
                  <h2 className="text-[30px] font-semibold">+12,234</h2>
                  <p className=" text-neutral-500">+19% from last month</p>
                </div>
              </div>

              <div className="flex w-1/5 min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
                <div className="flex w-full  justify-between">
                  {" "}
                  <h1 className="mx-4">Active Now</h1>
                  <h1 className="mx-4">
                    <DashboardIcon />
                  </h1>
                </div>
                <div className="mx-4">
                  <h2 className="text-[30px] font-semibold">+573</h2>
                  <p className=" text-neutral-500">+201 since last hour</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex w-[85%]">
          <Table className="w-[100%]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Código de pedido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>método de pagamento</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            {getAllProducts.map((index) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      {index.codding}
                    </TableCell>
                    <TableCell
                      className={
                        index.status ? "text-green-500" : "text-amber-700"
                      }
                    >
                      {index.status ? "Enviado" : "Em Processo"}
                    </TableCell>
                    <TableCell>{index.payment}</TableCell>
                    <TableCell className="text-right">{index.value}</TableCell>
                  </TableRow>
                  
                </TableBody>
              );
            })}
            <TableCaption>Pedidos dos clientes</TableCaption>
          </Table>
        </div>
      </main>
    </>
  );
}
