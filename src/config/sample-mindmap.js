export const nodes = [
  { id: 'Root', text: 'Центральная тема', side: null },
  {
    id: 'subNode1',
    text: 'Основная тема 1',
    side: 'left',
  },
  { id: 'subNode1-1', text: 'Подтема 1-1', side: 'left' },
  {
    id: 'subNode1-2',
    text: 'Подтема 1-2',
    side: 'left',
  },
  { id: 'subNode1-2-1', text: 'Подтема 1-2-1', side: 'left' },
  {
    id: 'subNode1-3',
    text: 'Подтема 1-3',
    side: 'left',
  },
  { id: 'subNode2', text: 'Основная тема 2', side: 'left' },
  {
    id: 'subNode2-1',
    text: 'Подтема 2-1',
    side: 'left',
  },
  { id: 'subNode2-1-1', text: 'Подтема 2-1-1', side: 'left' },
  {
    id: 'subNode2-2',
    text: 'Подтема 2-2',
    side: 'left',
  },
  { id: 'subNode2-3', text: 'Подтема 2-3', side: 'left' },
  {
    id: 'subNode2-3-1',
    text: 'Подтема 2-3-1',
    side: 'left',
  },
  { id: 'subNode3', text: 'Основная тема 3', side: 'left' },
  {
    id: 'subNode3-1',
    text: 'Подтема 3-1',
    side: 'left',
  },
  { id: 'subNode3-1-1', text: 'Подтема 3-1-1', side: 'left' },
  {
    id: 'subNode3-1-2',
    text: 'Подтема 3-1-2',
    side: 'left',
  },
  { id: 'subNode3-1-3', text: 'Подтема 3-1-3', side: 'left' },
  {
    id: 'subNode4',
    text: 'Основная тема 4',
    side: 'right',
  },
  { id: 'subNode4-1', text: 'Подтема 4-1', side: 'right' },
  {
    id: 'subNode4-1-1',
    text: 'Подтема 4-1-1',
    side: 'right',
  },
  { id: 'subNode4-1-2', text: 'Подтема 4-1-2', side: 'right' },
  {
    id: 'subNode4-1-3',
    text: 'Подтема 4-1-3',
    side: 'right',
  },
  { id: 'subNode4-1-4', text: 'Подтема 4-1-4', side: 'right' },
  {
    id: 'subNode4-2',
    text: 'Подтема 4-2',
    side: 'right',
  },
  { id: 'subNode4-3', text: 'Подтема 4-3', side: 'right' },
  {
    id: 'subNode4-4',
    text: 'Подтема 4-4',
    side: 'right',
  },
  { id: 'subNode5', text: 'Основная тема 5', side: 'right' },
  {
    id: 'subNode5-1',
    text: 'Подтема 5-1',
    side: 'right',
  },
  { id: 'subNode5-2', text: 'Подтема 5-2', side: 'right' },
  {
    id: 'subNode5-2-1',
    text: 'Подтема 5-2-1',
    side: 'right',
  },
  { id: 'subNode5-2-2', text: 'Подтема 5-2-2', side: 'right' },
  {
    id: 'subNode5-2-3',
    text: 'Подтема 5-2-3',
    side: 'right',
  },
  { id: 'subNode5-3', text: 'Подтема 5-3', side: 'right' },
  {
    id: 'subNode5-3-1',
    text: 'Подтема 5-3-1',
    side: 'right',
  },
  { id: 'subNode5-3-2', text: 'Подтема 5-3-2', side: 'right' },
];

export const links = [
  { id: 'Root_subNode1', source: 'Root', target: 'subNode1' },
  {
    id: 'Root_subNode2',
    source: 'Root',
    target: 'subNode2',
  },
  { id: 'subNode2_subNode2-1', source: 'subNode2', target: 'subNode2-1' },
  {
    id: 'subNode2_subNode2-2',
    source: 'subNode2',
    target: 'subNode2-2',
  },
  { id: 'subNode2-3_subNode2', source: 'subNode2', target: 'subNode2-3' },
  {
    id: 'subNode2-3_subNode2-3-1',
    source: 'subNode2-3',
    target: 'subNode2-3-1',
  },
  { id: 'subNode2-1-1_subNode2-1', source: 'subNode2-1', target: 'subNode2-1-1' },
  {
    id: 'Root_subNode3',
    source: 'Root',
    target: 'subNode3',
  },
  { id: 'subNode3-1_subNode3', source: 'subNode3', target: 'subNode3-1' },
  {
    id: 'Root_subNode4',
    source: 'Root',
    target: 'subNode4',
  },
  { id: 'subNode4_subNode4-1', source: 'subNode4', target: 'subNode4-1' },
  {
    id: 'subNode4-2_subNode4',
    source: 'subNode4',
    target: 'subNode4-2',
  },
  { id: 'subNode4-3_subNode4', source: 'subNode4', target: 'subNode4-3' },
  {
    id: 'subNode4-4_subNode4',
    source: 'subNode4',
    target: 'subNode4-4',
  },
  {
    id: 'subNode4-1-1_subNode4-1',
    source: 'subNode4-1',
    target: 'subNode4-1-1',
  },
  {
    id: 'subNode4-1-2_subNode4-1',
    source: 'subNode4-1',
    target: 'subNode4-1-2',
  },
  {
    id: 'subNode4-1-3_subNode4-1',
    source: 'subNode4-1',
    target: 'subNode4-1-3',
  },
  { id: 'subNode4-1-4_subNode4-1', source: 'subNode4-1', target: 'subNode4-1-4' },
  {
    id: 'subNode1_subNode1-1',
    source: 'subNode1',
    target: 'subNode1-1',
  },
  { id: 'subNode1_subNode1-2', source: 'subNode1', target: 'subNode1-2' },
  {
    id: 'subNode1_subNode1-3',
    source: 'subNode1',
    target: 'subNode1-3',
  },
  { id: 'subNode1-2_subNode1-2-1', source: 'subNode1-2', target: 'subNode1-2-1' },
  {
    id: 'Root_subNode5',
    source: 'Root',
    target: 'subNode5',
  },
  { id: 'subNode5_subNode5-1', source: 'subNode5', target: 'subNode5-1' },
  {
    id: 'subNode5_subNode5-2',
    source: 'subNode5',
    target: 'subNode5-2',
  },
  { id: 'subNode5_subNode5-3', source: 'subNode5', target: 'subNode5-3' },
  {
    id: 'subNode5-2_subNode5-2-1',
    source: 'subNode5-2',
    target: 'subNode5-2-1',
  },
  {
    id: 'subNode5-2_subNode5-2-2',
    source: 'subNode5-2',
    target: 'subNode5-2-2',
  },
  {
    id: 'subNode5-2_subNode5-2-3',
    source: 'subNode5-2',
    target: 'subNode5-2-3',
  },
  {
    id: 'subNode5-3_subNode5-3-1',
    source: 'subNode5-3',
    target: 'subNode5-3-1',
  },
  {
    id: 'subNode5-3_subNode5-3-2',
    source: 'subNode5-3',
    target: 'subNode5-3-2',
  },
  {
    id: 'subNode3-1_subNode3-1-1',
    source: 'subNode3-1',
    target: 'subNode3-1-1',
  },
  {
    id: 'subNode3-1_subNode3-1-2',
    source: 'subNode3-1',
    target: 'subNode3-1-2',
  },
  { id: 'subNode3_subNode3-1-3', source: 'subNode3', target: 'subNode3-1-3' },
];
