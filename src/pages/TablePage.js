import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-400', score: 1 },
    { name: 'Lime', color: 'bg-green-300', score: 4 },
  ];

  const config = [
    { label: 'Name', render: (fruit) => fruit.name },
    {
      label: 'Color',
      render: (fruit) => <div className="bg-yellow-400" />,
    },
    { label: 'Score', render: (fruit) => fruit.score },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
