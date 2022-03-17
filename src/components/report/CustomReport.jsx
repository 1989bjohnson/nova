import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Table } from "react-bootstrap";

const colors = ["#00477D", "#00233D", "#006BBD", "#0072C9", "#005CA3"];

const CustomReport = ({ data }) => {
  return (
    <Row style={{ height: "85%" }}>
      <Col className="d-flex justify-content-center align-items-center">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart width={300} height={300}>
            <Pie data={data} dataKey="value" outerRadius={200} fill="grey">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Col>
      <Col className="d-flex justify-content-center align-items-center">
        <Table bordered hover className="mt-5">
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <th className="bg-light">{item.name}</th>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default CustomReport;
