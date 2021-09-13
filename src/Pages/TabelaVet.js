import React from 'react';
import '../styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>&nbsp;&nbsp;&nbsp;Tabela do Veterinario</caption>
      <thead>
        <br></br><br></br>
        <tr>
          <th>
            <button 
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
            &nbsp;&nbsp;&nbsp;&nbsp;  Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              CRVM
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              Email
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('password')}
              className={getClassNamesFor('password')}
            >
              Senha
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>&nbsp;&nbsp;{item.name}</td>
            <td>{item.crmv}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function TabelaVet() {
  return (
    <div align="center" className="App">
      <ProductTable
        products={[
          { id: 1, name: 'Vinícius', crmv: 456654, stock: 20 },
          { id: 2, name: 'Rodrigo',  crmv: 456654, stock: 32 },
          { id: 3, name: 'Nicolas',  crmv: 456654, stock: 12 },
          { id: 4, name: 'Amanda',  crmv: 456654, stock: 9 },
          { id: 5, name: 'Leticia',  crmv: 456654, stock: 99 },
          { id: 6, name: 'Beatriz ',  crmv: 456654, stock: 86 },
          { id: 7, name: 'Carlos',  crmv: 456654, stock: 12 },
        ]}
      />
      
      <a href="/CadastroVet"> <button type="submit">Incluir um novo</button></a>
    </div>
  );
}
 
