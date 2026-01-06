export const getData = () =>
   Promise.resolve([
       {
           id: 'node_1',
           type: 'heading',
           attrs: {
               level: 1,
           },
           children: [
               {
                   id: 'node_2',
                   type: 'text',
                   value: 'This is the primary heading for our page',
               },
           ],
       },
       {
           id: 'node_3',
           type: 'heading',
           attrs: {
               level: 2,
           },
           children: [
               {
                   id: 'node_4',
                   type: 'text',
                   value: 'Here is some accompanying info we render as a subheading',
               },
           ],
       },
       {
           id: 'node_5',
           type: 'unordered-list',
           children: [
               {
                   id: 'node_6',
                   type: 'list-item',
                   children: [
                       {
                           id: 'node_7',
                           type: 'text',
                           value: 'Option 1',
                       },
                   ],
               },
               {
                   id: 'node_8',
                   type: 'list-item',
                   children: [
                       {
                           id: 'node_9',
                           type: 'text',
                           value: 'Option 2',
                       },
                   ],
               },
               {
                   id: 'node_10',
                   type: 'list-item',
                   children: [
                       {
                           id: 'node_11',
                           type: 'text',
                           value: 'Option 3',
                       },
                   ],
               },
           ],
       },
       {
           id: 'node_12',
           type: 'image',
           attrs: {
               width: 300,
               height: 50,
               alt: 'Atlassian logo',
               src: '/images/atlassian-logo.svg'
           },
       },
   ]);
