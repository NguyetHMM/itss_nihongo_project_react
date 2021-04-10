import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Food from './Food';

import { getKey } from "../lib/util";

function FoodList() {
  const [items, putItems] = React.useState([
    { key: getKey(), name: 'Phở Thìn', address: '13 Lò Đúc', kind: 'food', done: true },
    { key: getKey(), name: 'Phở Lý Quốc Sư', address: '10 Lý Quốc Sư', kind: 'food', done: false },
    { key: getKey(), name: 'Strongbow úp ngược vị hoa quả', address: 'Funny Monkey, 251 Xã Đàn, Đống Đa', kind: 'drink', done: false },
    { key: getKey(), name: 'Cháo sườn chợ Đồng Xuân', address: '14 Đồng Xuân, Hoàn Kiếm', kind: 'food', done: true },
    { key: getKey(), name: 'Trà sữa lon Hà Nội', address: 'Master Tea – 75 Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy', kind: 'drink', done: true },
  ]);
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };
  return (
    <Table>
      <thead>
        <tr>
          <th style={{textAlign:'center'}}>Let's eat</th>
          <th>Name</th>
          <th>Address</th>
          <th style={{textAlign:'center'}}>Kind</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
            <Food
              key={item.key}
              item={item}
              onCheck={handleCheck} />  
        ))}
      </tbody>
    </Table>

  );
}
export default FoodList;
