let _ipc = window.__require('ipc')

export default class IPC{
   // TODO use whitelist for valid commands or provide functions instead
   static send(msg){
     _ipc.send(msg)
   } 
}