import { RxDashboard } from "react-icons/rx";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { RiBillLine } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import { GoAlert } from "react-icons/go";
import { CiSettings } from "react-icons/ci";

export const leftPanelItem = [
  { icons: <RxDashboard />, text: "Overview", path: "/" },
  {
    icons: <MdOutlineAccountBalanceWallet />,
    text: "Balances",
    path: "balances",
  },
  { icons: <GrTransaction />, text: "Transactions", path: "/transactions" },
  { icons: <RiBillLine />, text: "Bills", path: "/bills" },
  { icons: <GiExpense />, text: "Expenses", path: "/expenses" },
  { icons: <GoAlert />, text: "Goals", path: "/goals" },
  { icons: <CiSettings />, text: "Settings", path: "/settings" },
];
