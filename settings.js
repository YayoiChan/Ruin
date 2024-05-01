//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "IG: @ruinstarmoon" //ur yt chanel name
global.socialm = "IG: @ruinstarmoon" //ur github or insta name
global.location = "Tokyo, Japan" //ur location

//new
global.botname = '𝖗𝖚𝖎𝖓𝖘𝖙𝖆𝖗𝖒𝖔𝖔𝖓' //ur bot name
global.ownernumber = '6285724170749' //ur owner number
global.ownername = '𝖘𝖙𝖆𝖗𝖒𝖔𝖔𝖓' //ur owner name
global.websitex = "https://www.instagram.com/ruinstarmoon"
global.wagc = "https://chat.whatsapp.com/FZvEX3aTbrG21NI4ian1re"
global.themeemoji = '🌙'
global.wm = "StarMoon Inc."
global.botscript = '-' //script link
global.packname = ""
global.author = "by : ruinbot"
global.creator = "6285724170749@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285724170749"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v8'
global.typereply = 'v1' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!',
    freelance: '🌟 Pengen punya penghasilan sendiri/tambahan jajan, seperti testimoni gambar di atas?\nYuk, buruan join bisnis freelance ini dengan modal join cuma 7-15k rupiah! 💼\n> Dengan modal 7-15k rupiah saja, kamu sudah bisa bergabung dan meraih kesuksesan dalam bisnis ini🥳\n\n✨ Jangan khawatir jika kamu belum memiliki pengalaman sebelumnya. Kami menyediakan full bimbingan untuk membantu kamu sukses dalam bisnis ini. Kamu akan mendapatkan pengetahuan dan keterampilan yang dibutuhkan.\n\nJadi, tunggu apa lagi? Jangan lewatkan kesempatan emas ini untuk memulai karir freelancemu dengan modal yang terjangkau. Bergabunglah sekarang dan buktikan bahwa bisnis ini tidak akan mengganggu waktu berharga kamu! 💪✨\n\n💌 KEUNTUNGAN JOIN 💌\n✅ Modal ribuan bisa untung ratusan ribu bahkan jutaan\n✅ Modal sekali seumur hidup\n✅ Full bimbingan\n✅ Dikasih berupa tutorial dan di ajarkan sampai bisa\n✅ Tanpa download apk\n✅ Perminggu bisa untung\npuluhan ratusan ribu\n\n\nminat join/tanya²? 👇🏻👇🏻\n\n✉️ : https://wa.me/message/WJGCBUJL56K6H1\n☎️ : @sweesyyy'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})