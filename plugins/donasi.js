//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Emoney 〕
├ GoPay: 083117436733 [BLZXB5] 
├ Gopay 2: 085156863516 [Niskata]
├ Dana: 0881010130631 [DVT Teams] 
├ Dana 2: 085156863516 [Niskata]
├ Pulsa: 083117436733 [Syah DVT] 
├ Saweria: http://Saweria.co/Mayumi
└────
Terima kasih telah berdonasi ☺ 
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
