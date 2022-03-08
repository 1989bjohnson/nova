import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route, Link } from "react-router-dom";
import MaterialTable from "../table/MaterialTable";
import BootstrapTable from "../table/BootstrapTable";
import data from "../../data/data.json";

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
      <Container>
        <Row>
          <Col>
            <nav className="w-100 d-flex justify-content-around">
              <Link to="/mui">Material UI Table</Link>
              <Link to="/boot">Bootstrap Table</Link>
            </nav>
            <Routes>
              <Route
                path="/mui"
                element={<MaterialTable data={filteredData} />}
              />
              <Route
                path="/boot"
                element={<BootstrapTable data={filteredData} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
