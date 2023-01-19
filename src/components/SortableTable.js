import Table from './Table';

function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((columnObj) => {
    if (!columnObj.sortValue) {
      return columnObj;
    }

    return {
      ...columnObj,
      header: () => <th>{columnObj.label} IS SORTABLE</th>,
    };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
