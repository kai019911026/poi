import { remote } from 'electron'

const { POI_VERSION, getStore } = window


remote.getCurrentWebContents().on('devtools-opened',
  () => {
    const PLUGINS = getStore('plugins') || []
    const FCD = getStore('fcd.version') || {}

    const pluginMessage = PLUGINS.filter(plugin => plugin.enabled)
      .map(
        plugin => `${plugin.id}@${plugin.version}`
      )
      .join(', ')

    const fcdMessage = Object.keys(FCD).map(
      key => `${key}@${FCD[key]}`
    ).join(', ')

    console.log(
      `%cThis is poi@${POI_VERSION} on ${process.platform} ${process.arch} with Electron@${process.versions.electron}, 
      PLUGINS: ${pluginMessage}, 
      FCD: ${fcdMessage}`,
      'font-size: 120%'
    )
  }
)