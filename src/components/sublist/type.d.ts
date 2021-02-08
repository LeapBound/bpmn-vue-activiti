import { TableColumnCtx } from 'element-plus/lib/el-table/src/table.type';

/**
 * 状态
 */
export interface SubListState<T> {
  data: Array<T>;
  editing: boolean;
  editItem: T | undefined | null;
  editIndex: number | undefined;
  isNew: boolean;
}

/**
 * 扩展的的可编辑列
 */
export interface TableColumn extends TableColumnCtx {
  editComponent?: (scope: any | undefined | null) => JSX.Element;
}
