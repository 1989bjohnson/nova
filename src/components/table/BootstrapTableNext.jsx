import BootstrapTable  from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const BootstrapTableNext = ({ data }) => {
  const columns = Object.keys(data[0]).map((entry) => {
    return {
      dataField: entry,
      text: entry.toUpperCase().replaceAll("_", " "),
      sort: true,
    };
  });

  console.log(columns);

  return (
    <>
      <h1>Bootstrap Table</h1>
      <BootstrapTable
        keyField="granite_equip_inst_id"
        data={data}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 10 })}
      />
    </>
  );
};

export default BootstrapTableNext;
