import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route, Link } from "react-router-dom";
import MaterialTable from "../table/MaterialTable";
import BootstrapTableNext from "../table/BootstrapTableNext";
import data from "../../data/data.json";
import CustomForm from "../form/CustomForm";
import CustomReport from "../report/CustomReport";
import ReportsDashboard from "../report/ReportsDashboard";

const displayColumns = [
  "granite_equip_inst_id",
  "device_name",
  "hostname",
  "granite_site",
  "facility_type",
  "super_region",
];
const filteredData = data.map((entry) => {
  let obj = {};
  for (const columns of displayColumns) {
    obj[columns] = entry[columns];
  }
  return obj;
});

const Home = () => {
  return (
    <>
      <Container className="vh-100">
        <Row className="h-100">
          <Col>
            <nav className="w-100 d-flex justify-content-around my-5">
              <Link to="/mui">Material UI Table</Link>
              <Link to="/boot">Bootstrap Table</Link>
              <Link to="/form">PDG Tool</Link>
              <Link to="/report">NOVA Report Dashboard</Link>
            </nav>
            <Routes>
              <Route
                path="/mui"
                element={<MaterialTable data={filteredData} />}
              />
              <Route
                path="/boot"
                element={<BootstrapTableNext data={filteredData} />}
              />
              <Route path="/form" element={<CustomForm />} />
              <Route path="/report" element={<ReportsDashboard />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
