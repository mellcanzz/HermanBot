let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '6281278673170' , 'Intann Cans', m)
  conn.reply(m.chat, `Tuh Pacar Ku Jangan Galak² Ya >_<, Nanti Ku Banned Nanges`, m) 
}
handler.help = ['pacarowner']
handler.tags = ['info']

handler.command = /^(pacarowner)$/i

module.exports = handler
