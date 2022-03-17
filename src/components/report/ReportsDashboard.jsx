import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CustomReport from "./CustomReport";

// eventually the data  will be pulled in from a different source,
//this is just to show that the reports dashboard will be scalable
const data = [
  {
    name: "dataset 1",
    data: [
      { name: "data1", value: 400 },
      { name: "data2", value: 700 },
      { name: "data3", value: 700 },
      { name: "data3", value: 200 },
      { name: "data4", value: 1000 },
    ],
  },
  {
    name: "dataset 2",
    data: [
      { name: "data1", value: 600 },
      { name: "data2", value: 200 },
      { name: "data3", value: 200 },
      { name: "data4", value: 1000 },
    ],
  },
  {
    name: "dataset 3",
    data: [
      { name: "data2", value: 300 },
      { name: "data3", value: 200 },
      { name: "data4", value: 150 },
    ],
  },
];

const ReportsDashboard = () => {
  return (
    <>
      <Tabs>
        {data.map((entry) => {
          return (
            <Tab eventKey={entry.name} title={entry.name} className="h-100">
              <CustomReport data={entry.data} />
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default ReportsDashboard;
