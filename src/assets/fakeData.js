const entityAndProp = [
  {
    id: 1, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 11,
      name: 'markid',
      color: 'color'
    },
    content: '',
    children: [{
      mark: { id: '', name: '', type: '' },
      content: "患儿咳嗽症状未见"
    }, {
      // mark: {id: 1, name: '部位', type: 'prop', color: 'eb6161'},
      mark: { id: 2, name: '部位', type: 'prop', forecast: 1, color: 'eb6161' },//通过forecast字段表示是否是预标注标签
      content: "明显好转"
    }, {
      mark: { id: '', name: '', type: '' },
      content: "，同时伴"
    }, {
      mark: { id: 22, name: '发热', type: 'entity', forecast: 1, color: '99b9b1' },
      content: "发热"
    }, {
      mark: { id: '', name: '', type: '' },
      content: "，热峰40.5℃。间隔2-4小时体温复升，发热时，"
    }, {
      mark: { id: 999, name: '', type: 'unknow' },
      content: "伴有寒战"
    }, {
      mark: { id: '', name: '', type: '' },
      content: "，无抽搐。"
    }],
    status: 0,
    flag: false
  },
  {
    id: 2, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 11,
      name: 'markid',
      color: 'color'
    },
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。患儿咳嗽症状未见明显好转，同时伴发热，热峰40.5℃。间隔2-4小时体温复升，发热时，伴有寒战，无抽搐。',
    children: [],
    status: 0,//标注状态：0--未标注；1--标注中;2--标注完成
    flag: false//当前段落是否为current状态
  },
  {
    id: 3, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 33,
      name: 'markid',
      color: 'color'
    },
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。阵咳有痰，咳白痰，不伴有喘息。',
    children: [],
    status: 0,
    flag: false
  },
  {
    id: 4, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 44,
      name: 'markid',
      color: 'color'
    },
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。22有痰，咳白痰，不伴有喘息。',
    children: [],
    status: 0,
    flag: false
  },
  {
    id: 5, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 44,
      name: 'markid',
      color: 'color'
    },
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。33有痰，咳白痰，不伴有喘息。',
    children: [],
    status: 0,
    flag: false
  },
  {
    id: 6, // 由专门的sequence生成,保证唯一性  
    mark: {
      id: 44,
      name: 'markid',
      color: 'color'
    },
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。44有痰，咳白痰，不伴有喘息。',
    children: [],
    status: 0,
    flag: false
  }
];

const normalPara = [
  {
    id: 1, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。22有痰，咳白痰，不伴有喘息。',
    status: 0,
    flag: false,
    forecast: 1,
    mark: {
      color: 'FFB3B3',
      name: '一般情况'
    }
  },
  {
    id: 2, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。患儿咳嗽症状未见明显好转，同时伴发热，热峰40.5℃。间隔2-4小时体温复升，发热时，伴有寒战，无抽搐。',
    status: 0,//标注状态：0--未标注；1--标注中;2--标注完成
    flag: false,//当前段落是否为current状态
    mark: {
      color: 'FFB3B3',
      name: '一般情况'
    }
  },
  {
    id: 3, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。阵咳有痰，咳白痰，不伴有喘息。',
    status: 0,
    flag: false
  },
  {
    id: 4, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。22有痰，咳白痰，不伴有喘息。',
    status: 0,
    flag: false
  },
  {
    id: 5, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。33有痰，咳白痰，不伴有喘息。',
    status: 0,
    flag: false
  },
  {
    id: 6, // 由专门的sequence生成,保证唯一性  
    content: '患儿8天前无明显诱因出现咳嗽，阵咳有痰，咳白痰，不伴有喘息。44有痰，咳白痰，不伴有喘息。',
    status: 0,
    flag: false
  }
];

export default{
  entityAndProp,
  normalPara
};