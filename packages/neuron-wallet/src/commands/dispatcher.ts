import Command from './commands'
import handlers, { CommandInfo } from './handlers'

const maps = {
  [Command.ShowAbout as string]: handlers.aboutHandler,
  [Command.ShowPreferences as string]: handlers.rendererMessageHandler,
  [Command.SetUILocale as string]: handlers.rendererMessageHandler,
  [Command.OpenNervosWebsite as string]: handlers.externalUrlHandler,
  [Command.OpenSourceCodeReposity as string]: handlers.externalUrlHandler,
}

const dispatch = (command: Command, info: CommandInfo | null = null) => {
  const handler = maps[command]
  if (handler) {
    handler(command, info)
  }
}

export { Command }
export default dispatch