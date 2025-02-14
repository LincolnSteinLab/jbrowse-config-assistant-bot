import { MenuItem } from '@jbrowse/core/ui'
import { ElementId } from '@jbrowse/core/util/types/mst'
import { types } from 'mobx-state-tree'

const stateModel = types
  .model({
    id: ElementId,
    type: types.literal('HelloView'),
  })
  .actions(() => ({
    // unused but required by your view
    setWidth() {},
  }))
  .views(() => ({
    menuItems(): MenuItem[] {
      return []
    },
  }))

export default stateModel
