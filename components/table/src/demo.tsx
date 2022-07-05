import { tag, WeElement, h, render } from 'omi'
import '@omiu/icon/delete'
import '@omiu/icon/edit'
import './index.tsx'

@tag('table-demo')
export default class Table extends WeElement {

  dataSource = [{
    id: 1,
    name: 'xwang',
    age: 18,
    address: 'Tencent'
  }, {
    id: 2,
    name: 'dntzhang',
    age: 12,
    address: 'Tencent',
    $config: {
      bgColor: 'rgb(247 176 176 / 32%)'
    }
  },
  {
    id: 3,
    name: 'lucy',
    age: 12,
    address: 'Tencent',

  }, {
    id: 4,
    name: 'john',
    age: 12,
    address: 'Tencent',
    $config: {
      bgColor: 'rgb(230 162 60 / 34%)'
    }
  }, {
    id: 5,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 6,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 7,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }, {
    id: 8,
    name: 'tim',
    age: 12,
    address: 'Tencent'
  }
  ]

  columns = [{
    title: 'ID',
    width: '20px',
    render: item => (<strong>{item.id}</strong>),
  }, {
    title: 'Name',
    key: 'name',
    width: '130px',
    editable: true
  }, {
    title: 'Age',
    key: 'age',
    width: '70px',
    editable: true
  }, {
    title: 'Address',
    key: 'address',
    editable: true
  }, {
    title: '操作',
    align: 'right',
    render: item => {
      //onclick 会绑定多次的问题(o-icon-delete一次，o-icon-delete内部的svg一次)
      return <div>
        <o-icon-edit data-item-id={item.id} onClick={this.onEditClick} style="cursor:pointer;font-size:20px;" title="编辑"></o-icon-edit>
        <o-icon-delete data-item-id={item.id} onClick={this.onDeleteClick} style="cursor:pointer;font-size:20px;" title="删除"></o-icon-delete>
      </div>
    }
  }]

  onEditClick = (evt) => {

  }

  onDeleteClick = (evt) => {
    if (evt.currentTarget.dataset.itemId) {
      this.table.deleteRowById(evt.currentTarget.dataset.itemId)
    }
  }

  table

  render(props) {
    return <div>

      <o-table
        ref={e => this.table = e}
        checkbox={true}
        stripe={false}
        border={true}
        compact={false}
        width="250px"
        height="200px"
        fixedLeftCount={2}
        fixedRight={true}
        fixedTop={true}
        columns={this.columns} dataSource={this.dataSource}></o-table>

      <o-table
        ref={e => this.table = e}
        checkbox={true}
        stripe={false}
        border={true}
        compact={true}
        columns={this.columns} dataSource={JSON.parse(JSON.stringify(this.dataSource))}></o-table>
    </div>
  }
}


render(<table-demo></table-demo>, 'body', {
  ignoreAttrs: true
})
