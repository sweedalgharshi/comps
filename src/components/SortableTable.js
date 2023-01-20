import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((columnObj) => {
    if (!columnObj.sortValue) {
      return columnObj;
    }

    return {
      ...columnObj,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(columnObj.label)}
        >
          <div className="flex items-center">
            {getIcons(columnObj.label, sortBy, sortOrder)}
            {columnObj.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;

// const data = [
//   {name:'Tomato', cost:'5', weight:'5'},
//   {name:'Onion', cost:'10', weight:'2'},
//   {name:'Carrot', cost:'15', weight:'7'}
// ];

// const sortByValue = (vegetable)=> {
//   return vegetable.weight;
// }

// const sortOrder = 'desc'

// data.sort((a, b) => {
//   const valueA = sortByValue(a);
//   const valueB = sortByValue(b);

//   const reverseOrder = sortOrder === 'asc' ? 1 : -1
//   if(typeof valueA === 'string'){
//     return valueA.localeCompare(valueB) * reverseOrder;
//   }else{
//     return (valueA - valueB) * reverseOrder;
//   }

// })
