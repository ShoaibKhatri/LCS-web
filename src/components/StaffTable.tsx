import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ButtonProps,
} from "@relume_io/relume-ui";
import { colors } from "../constants/theme";

type TableData = {
  name: string;
  company: string;
  number: number;
  team: string;
  date: string;
  link: string;
};

type Props = {
  headerTitle: string;
  headerDescription: string;
  buttons: ButtonProps[];
  tableHeaders: string[];
  tableRows: TableData[];
  paginationItems: number[];
};

export type Table1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const StaffTable = (props: Table1Props) => {
  const { tableHeaders, tableRows } = {
    ...Table1Defaults,
    ...props,
  };

  const tableHeaderClasses = [
    "w-[245px] pr-4 xxl:w-[350px] rounded-lg",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[128px] pr-4",
    "w-[245px] pr-4 xxl:w-[250px]",
    "w-[192px] pr-4",
    "w-[96px] pr-4 text-center",
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-50">
      <div className="container relative pb-20">
        <div className="text-center mb-20">
          <h5
            className="mb-1 font-thin leading-6 "
            style={{
              background: colors.themeGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STAFFING RATE GUIDE
          </h5>
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-8xl">
            Tentative Rate Card
            <span
              className=" ml-2"
              style={{
                background: colors.themeGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              For Staff
            </span>
          </h2>
          <p className="md:text-md text-gray-500">
            Explore our competitive and transparent rate card, designed to align
            with your budget and project requirements.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg !border-none ">
          <Table className="w-full ">
            <TableHeader>
              <TableRow className="rounded-lg">
                {tableHeaders.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`${tableHeaderClasses[index]} bg-blue-200 text-blue-500  border border-gray-200`}
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableRows.map((row, rowIndex) => (
                <TableRow key={rowIndex} className="border border-gray-200">
                  <TableCell className="font-medium bg-blue-200 border border-gray-200 text-gray-500">
                    {row.name}
                  </TableCell>
                  <TableCell className="border border-gray-200 text-gray-500">
                    {row.company}
                  </TableCell>
                  <TableCell className="border border-gray-200 text-gray-500">
                    {row.team}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="text-gray-500 text-[16px] my-4">
            These rates are subject to change based on factors such as
            experience, skills and project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Table1Defaults: Props = {
  headerTitle: "Table Header",
  headerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { children: "Button", variant: "secondary", size: "sm" },
    { children: "Button", size: "sm" },
  ],
  tableHeaders: ["Staff Level", "Hourly Rate (USD)", "Monthly Rate (USD)"],
  tableRows: [
    {
      name: "Junior to Mid-Level",
      company: "$10 - $20",
      number: 14,
      team: " $1,760 - $3,520",
      date: "Jan 11, 2050",
      link: "#",
    },
    {
      name: "Mid to Senior Level",
      company: "$20 - $40",
      number: 14,
      team: "$3,520 - $7,040",
      date: "Jan 11, 2050",
      link: "#",
    },
  ],
  paginationItems: [1, 2, 3, 4, 5],
};
