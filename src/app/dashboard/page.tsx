"use client";
import { Button } from "@/components/ui/button";
import {
  PersonIcon,
  CardStackIcon,
  DashboardIcon,
  CheckIcon,
  TimerIcon,
  ArrowRightIcon,
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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { works } from "./works";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
export default function Dashboard() {
  const [isloading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const { setTheme, theme } = useTheme();

  function modeTheme() {
    if (theme == "dark") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  }

  const getAllWorks = works;

  return (
    <>
      <header className="border-b-2 border-white-200 h-[90px]  w-full flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-primary mx-10 text-4xl">Dashboard</h1>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
        </div>
        <div className="mx-10 flex items-center gap-2">
          <Switch onClick={modeTheme} />
          <AlertDialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Share</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Insira alguns dados</DialogTitle>
                  <DialogDescription>
                    Preencha os dados para fazer o cadastro de uma nova empresa
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <label htmlFor="link" className="sr-only">
                      Link
                    </label>
                    <span>Nome</span>
                    <Input id="link" placeholder="Nome da empresa" />
                    <span>Link de logo da empresa</span>
                    <Input
                      id="link"
                      defaultValue="https://postimages.org/"
                      placeholder="Link de logo da empresa "
                    />
                    <span>Email</span>
                    <Input id="link" placeholder="Email " />
                    <span>Código para empresa</span>
                    <Input id="link" placeholder="Código para empresa " />
                  </div>
                </div>
                <DialogFooter className="sm:justify-start ">
                  <DialogClose className="w-full">
                    <Button
                      type="button"
                      variant="default"
                      className=" w-[50%]"
                    >
                      Criar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

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
                <AlertDialogAction className="bg-red-500 hover:bg-red-300">
                  Confirmar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>
      <main className="flex items-center w-full justify-center flex-col">
        <div className="flex w-full items-center justify-center flex-wrap flex-row  my-6 gap-8">
          {isloading ? (
            <>
              <Skeleton className="w-[22%] min-w-[230px] h-[200px]" />
              <Skeleton className="w-[22%] min-w-[230px] h-[200px]" />
              <Skeleton className="w-[22%] min-w-[230px] h-[200px]" />
              <Skeleton className="w-[22%] min-w-[230px] h-[200px]" />
            </>
          ) : (
            <>
              <div className="flex w-[22%] min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
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

              <div className="flex w-[22%] min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
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

              <div className="flex w-[22%] min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
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
              <div className="flex w-[22%] min-w-[230px] py-10 rounded-xl border flex-col  justify-center ">
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
          {isloading ? (
            <>
              <Skeleton className="w-[100%] h-[200px]" />
            </>
          ) : (
            <Table className="w-[100%]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Código de pedido</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>método de pagamento</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>

              {getAllWorks.map((index) => {
                return (
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {index.work}
                      </TableCell>
                      <TableCell
                        className={
                          index.status ? "text-purple-500" : "text-amber-400"
                        }
                      >
                        {index.status ? (
                          <div className="flex flex-row items-center">
                            <h1 className="">Assinado</h1>
                            <CheckIcon className="mx-2" />
                          </div>
                        ) : (
                          <div className="flex flex-row items-center">
                            <h1 className="">Aguardando pagamento</h1>
                            <TimerIcon className="mx-2" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{index.payment}</TableCell>
                      <TableCell className="text-right text-green-400">
                        {index.value}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}

              <TableCaption>Histórico de pedido dos clientes</TableCaption>
            </Table>
          )}
        </div>
        <Card className="w-2/5 my-12">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo
              quam ipsam aliquid aut cupiditate eveniet, repellendus temporibus,
              exercitationem ipsa officiis quis excepturi vero quibusdam maxime
              labore error, facere debitis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="default" className="">
              Avançar
              <ArrowRightIcon className="mx-2 z-10  text-4xl" />
            </Button>
            <Button
              variant="link"
              onClick={() => {
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                });
              }}
            >
              ver checkout
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
