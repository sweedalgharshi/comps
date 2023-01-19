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
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    { label: 'Score', render: (fruit) => fruit.score },
  ];

  const keyFunc = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFunc={keyFunc} />
    </div>
  );
}

export default TablePage;
