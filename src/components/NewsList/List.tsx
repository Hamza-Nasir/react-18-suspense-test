import React from 'react'
import { ListItem } from './ListItem'
import { getNewsData } from '../../data-layer/get';
import { useSuspenseQuery } from '@tanstack/react-query';

// I absolutely freakin' despise this
const newsDataResource = (() => {
  let data: Array<{ id: number; name: string }> | undefined;
  let promise: Promise<void> | null = null;
  
  return {
    read() {
      if (data) return data;
      if (!promise) {
        promise = getNewsData().then(d => {
          data = d;
        });
      }
      throw promise;
    }
  }
})();


export default function List() {

  // const listData = newsDataResource.read();

  // Look at tanstack query
  // very demure, very mindful
  const { data: listData } = useSuspenseQuery({
    queryKey: ['news'],
    queryFn: getNewsData,
  })

  return (
    <div>
        <h2>News List</h2>
        <ul>
          {
            listData.map((item: any) => (
                <ListItem key={item.id} name={item.name} />
            ))
          }
        </ul>
    </div>
  )
}
