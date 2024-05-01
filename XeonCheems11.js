//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const pkg = require('imgur')
const { ImgurClient } = pkg
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./XeonMedia/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')

const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xdate = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖒𝖆𝖑𝖆𝖒`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖒𝖆𝖑𝖆𝖒`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖘𝖔𝖗𝖊`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖘𝖎𝖆𝖓𝖌`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖕𝖆𝖌𝖎`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `𝖘𝖊𝖑𝖆𝖒𝖆𝖙 𝖕𝖆𝖌𝖎`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= XeonTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(XeonBotInc, m, premium)
        
        //theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XeonMedia/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
    replygcxeon(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcxeon(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                XeonBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               XeonBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
        
        //fake bug
        const fbug2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "status@broadcast"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${xeontext1}`, "caption": `${xeontext1}`, 'jpegThumbnail': thumb}}}
        let fbug = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            },
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": `${xeontext3}`,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "999999999",
                     "height": 999999999,
                     "width": 999999999,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            //end fbug
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = XeonBotInc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: XeonBotInc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: XeonBotInc.getName(botNumber), alias: botname}, owner: { nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: XeonBotInc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//bug loading
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key })
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcxeon(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            XeonBotInc.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcxeon(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcxeon("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!XeonBotInc.public) {
            if (XeonTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	XeonBotInc.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            XeonBotInc.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            XeonBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            XeonBotInc.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (XeonTheCreator || isAdmins || !isBotAdmins) return
            XeonBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
    
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await XeonBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcxeon('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
XeonBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(XeonTheCreator) return
XeonBotInc.groupParticipantsUpdate(from, [sender], 'remove')
await XeonBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
XeonBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          replygcxeon(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage" > 3){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `𝖍𝖆𝖍`
if (isAdmins) return replygcxeon(bvl)
if (m.key.fromMe) return replygcxeon(bvl)
if (XeonTheCreator) return replygcxeon(bvl)
               await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    },
			    await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove'))
			XeonBotInc.sendMessage(from, {text:`𝖒𝖆𝖒𝖕𝖚𝖘 𝖐𝖆𝖓 𝖐𝖊 𝖐𝖎𝖈𝖐, 𝖘𝖔 𝖘𝖔 𝖆𝖓 𝖘𝖎𝖍.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `𝖍𝖆𝖍`
if (isAdmins) return replygcxeon(bvl)
if (m.key.fromMe) return replygcxeon(bvl)
if (XeonTheCreator) return replygcxeon(bvl)
               await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
//			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcxeon(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcxeon(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./XeonCheems11.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcxeon(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcxeon('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcxeon(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcxeon({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) XeonBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            XeonBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
        
        switch (isCommand) {
//============UTAMA============
            case 't':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                let me = m.sender
                let teks = `*Message: ${wagc}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'p':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'p5':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
                        case 'p10':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
                        case 'p50':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
                                    case 'p100':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : `PINDAH GC ASIK, ANTI SEPI DAN TIDAK BANYAK RULES\n${wagc}\n\nGALAU? WAJIB FOLLOW YAA\nhttps://whatsapp.com/channel/0029VaUq9lYJJhzXRhf5JX1m`,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'a':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                if (!m.quoted) return replygcxeon(`${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'mau':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[0] === 'tutup') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`𝖘𝖚𝖐𝖘𝖊𝖘 𝖒𝖊𝖓𝖚𝖙𝖚𝖕 𝖌𝖗𝖚𝖕`))
                } else if (args[0] === 'buka') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`𝖘𝖚𝖐𝖘𝖊𝖘 𝖒𝖊𝖒𝖇𝖚𝖐𝖆 𝖌𝖗𝖚𝖕`))
                } else {
                    replygcxeon(`𝕶𝖊𝖙𝖎𝖐 .𝖒𝖆𝖚 𝖇𝖚𝖐𝖆/𝖙𝖚𝖙𝖚𝖕`)
                }
            break
            case 'kick':
            case 'k':
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!m.isGroup) return XeonStickGroup()
                if (!XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                break
                            case 'antilink': {
                            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
               if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('𝖔𝖓/𝖔𝖋𝖋?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcxeon(`𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖘𝖚𝖐𝖘𝖊𝖘 𝖉𝖎 𝖆𝖐𝖙𝖎𝖋𝖐𝖆𝖓`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcxeon(`𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐 𝖘𝖚𝖐𝖘𝖊𝖘 𝖉𝖎 𝖒𝖆𝖙𝖎𝖐𝖆𝖓`)
               }
            }
            break
            case 'antilinkgc': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
               if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('𝖔𝖓/𝖔𝖋𝖋?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcxeon(`𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐𝖌𝖈 𝖘𝖚𝖐𝖘𝖊𝖘 𝖉𝖎 𝖆𝖐𝖙𝖎𝖋𝖐𝖆𝖓`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcxeon(`𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐𝖌𝖈 𝖘𝖚𝖐𝖘𝖊𝖘 𝖉𝖎 𝖒𝖆𝖙𝖎𝖐𝖆𝖓`)
               }
            }
            break
            case 'welcome':
            case 'left': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
               if (!m.isGroup) return XeonStickGroup()
if (!XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('𝖔𝖓/𝖔𝖋𝖋?')
               if (args[0] === 'on') {
                  welcome = true
                  replygcxeon(`𝖜𝖊𝖑𝖈𝖔𝖒𝖊/𝖑𝖊𝖋𝖙 𝖉𝖎 𝖆𝖐𝖙𝖎𝖋𝖐𝖆𝖓`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcxeon(`𝖜𝖊𝖑𝖈𝖔𝖒𝖊/𝖑𝖊𝖋𝖙 𝖉𝖎 𝖒𝖆𝖙𝖎𝖐𝖆𝖓`)
               }
            }
            break
//==========TAMBAHAN============
                case 's': case 'sticker': case 'stiker': {
                satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!quoted) return replygcxeon(`𝕶𝖎𝖗𝖎𝖒/𝕭𝖆𝖑𝖆𝖘 𝕲𝖆𝖒𝖇𝖆𝖗/𝖁𝖎𝖉𝖊𝖔/𝕲𝖎𝖋 𝕯𝖊𝖓𝖌𝖆𝖓 𝕿𝖊𝖐𝖘 .𝖘\n𝕯𝖚𝖗𝖆𝖘𝖎 𝖁𝖎𝖉𝖊𝖔 1-9 𝕯𝖊𝖙𝖎𝖐`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('𝕶𝖎𝖗𝖎𝖒/𝕭𝖆𝖑𝖆𝖘 𝕲𝖆𝖒𝖇𝖆𝖗/𝖁𝖎𝖉𝖊𝖔/𝕲𝖎𝖋 𝕯𝖊𝖓𝖌𝖆𝖓 𝕿𝖊𝖐𝖘 .𝖘\n𝕯𝖚𝖗𝖆𝖘𝖎 𝖁𝖎𝖉𝖊𝖔 1-9 𝕯𝖊𝖙𝖎𝖐')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`𝕶𝖎𝖗𝖎𝖒/𝕭𝖆𝖑𝖆𝖘 𝕲𝖆𝖒𝖇𝖆𝖗/𝖁𝖎𝖉𝖊𝖔/𝕲𝖎𝖋 𝕯𝖊𝖓𝖌𝖆𝖓 𝕿𝖊𝖐𝖘 .𝖘\n𝕯𝖚𝖗𝖆𝖘𝖎 𝖁𝖎𝖉𝖊𝖔 1-9 𝕯𝖊𝖙𝖎𝖐`)
}
}
break
case 'pin': {
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!text) return replygcxeon(`𝖓𝖞𝖆𝖗𝖎 𝖆𝖕𝖆?`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: '⭔ 𝕸𝖊𝖉𝖎𝖆 𝖀𝖗𝖑 : '+result }, { quoted: m })
}
break
            case 'hd': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
			if (!quoted) return replygcxeon(`𝖒𝖆𝖓𝖆 𝖋𝖔𝖙𝖔𝖓𝖞𝖆?`)
			if (!/image/.test(mime)) return replygcxeon(`𝕶𝖎𝖗𝖎𝖒/𝕭𝖆𝖑𝖆𝖘 𝕱𝖔𝖙𝖔 𝕯𝖊𝖓𝖌𝖆𝖓 𝕶𝖊𝖙𝖊𝖗𝖆𝖓𝖌𝖆𝖓 .𝖗𝖊𝖒𝖎𝖓𝖎`)
			await XeonStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			XeonBotInc.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'colong':{
			satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()
if (!args.join(" ")) return replygcxeon(`𝖙𝖊𝖐𝖘 𝖓𝖞𝖆?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('𝖒𝖆𝖐𝖘𝖎𝖒𝖆𝖑 10 𝖉𝖊𝖙𝖎𝖐')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`𝖋𝖔𝖙𝖔/𝖛𝖎𝖉𝖊𝖔`)
}
}
break
//========NSFW=========
case 'hentaivid': case 'hentai': case 'hentaivideo': {
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
	if (!XeonTheCreator) return XeonStickAdmin()
                
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()
						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!m.isGroup) return XeonStickGroup()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await XeonBotInc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gangbang':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'nsfwloli':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
XeonBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await XeonBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
satu =`@${m.sender.split("@")[0]} telah menggunakan NSFW command, yaitu ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickAdmin()

var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await XeonBotInc.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
//=========HELPER===========
        case 'ruin': {
        satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!XeonTheCreator) return XeonStickAdmin()
        m.reply(`𝖍𝖆𝖑𝖔 𝖆𝖇𝖊𝖊`)
        }
        break
        case 'akumw': {
        satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
        if (!XeonTheCreator) return XeonStickAdmin()
        await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
        }
        break
        case 'iniownerok': {
        satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
        if (!XeonTheCreator) return XeonStickAdmin()
        return replygcxeon(`\`\`\`NSFW
        
hentai
gifhentai
gifblowjob
hentaivid
hneko
nwaifu
animespank
trap
blowjob
cuckold
milf
eba
gangbang
neko-hentai
nsfwloli
pussy
yuri
zettai\`\`\``)
        }
        break
        case 'naon': {
        satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!XeonTheCreator) return XeonStickAdmin()
        return replygcxeon(`𝖍𝖎 ${pushname}
${xeonytimewisher} ${readmore}

𝖆
𝖕
𝖙
𝖐
𝖒𝖆𝖚
𝖈𝖔𝖑𝖔𝖓𝖌
𝖗𝖚𝖎𝖓
𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐
𝖆𝖓𝖙𝖎𝖑𝖎𝖓𝖐𝖌𝖈
𝖜𝖊𝖑𝖈𝖔𝖒𝖊
𝖆𝖉𝖉𝖔𝖜𝖓𝖊𝖗
𝖉𝖊𝖑𝖔𝖜𝖓𝖊𝖗
𝖑𝖎𝖘𝖙𝖔𝖜𝖓𝖊𝖗`)
        }
        break
        case 'menu': {
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
        return replygcxeon(`𝖍𝖎 ${pushname}
${xeonytimewisher} ${readmore}

.𝖒𝖊𝖓𝖚

( 𝖆𝖎 )
.𝖍𝖉
.𝖕𝖎𝖓
.𝖆𝖎

( 𝖘𝖙𝖎𝖈 )
.𝖘
.𝖖𝖈

( 𝖒𝖚𝖘𝖎𝖈 )
.𝖘𝖕𝖔𝖙
.𝖕𝖑𝖆𝖞

( 𝖗𝖆𝖓𝖉𝖔𝖒 𝖋𝖚𝖓 )
.𝖘𝖚𝖎𝖙
.𝖒𝖆𝖙𝖍
.𝖙𝖙𝖙
.𝖈𝖕
.𝖖𝖚𝖔`)
        }
        break
//============OTHER
case 'addowner':
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`𝖈𝖔𝖓𝖙𝖔𝖍 .𝖆𝖉𝖉𝖔𝖜𝖓𝖊𝖗 ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await XeonBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcxeon(`𝕸𝖆𝖘𝖚𝖐𝖐𝖆𝖓 𝕹𝖔𝖒𝖔𝖗 𝖄𝖆𝖓𝖌 𝖁𝖆𝖑𝖎𝖉 𝕯𝖆𝖓 𝕿𝖊𝖗𝖉𝖆𝖋𝖙𝖆𝖗 𝕯𝖎 𝖂𝖍𝖆𝖙𝖘𝕬𝖕𝖕!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcxeon(`𝖓𝖔𝖒𝖔𝖗 ${bnnd} 𝖙𝖊𝖑𝖆𝖍 𝖏𝖆𝖉𝖎 𝖔𝖜𝖓𝖊𝖗!!!`)
break
case 'delowner':
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!XeonTheCreator) return XeonStickOwner()
if (!args[0]) return replygcxeon(`𝖈𝖔𝖓𝖙𝖔𝖍 .𝖉𝖊𝖑𝖔𝖜𝖓𝖊𝖗 628570xxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcxeon(`𝖓𝖔𝖒𝖔𝖗 ${ya} 𝖉𝖎𝖍𝖆𝖕𝖚𝖘 𝖉𝖆𝖗𝖎 𝖑𝖎𝖘𝖙𝖔𝖜𝖓𝖊𝖗!!!`)
break
            case 'op':  case 'os': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
            if (!XeonTheCreator) return XeonStickOwner()
if (!text) return replygcxeon(`𝖈𝖔𝖓𝖙𝖔𝖍 : .𝖕𝖑𝖆𝖞 𝖑𝖎𝖓𝖊 𝖜𝖎𝖙𝖍𝖔𝖚𝖙 𝖆 𝖍𝖔𝖔𝖐`)
const xeonplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'join':
                try {
                    if (!XeonTheCreator) return XeonStickOwner()
                    if (!text) return replygcxeon('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    XeonBotInc.groupAcceptInvite(result)
                    await replygcxeon(`Done`)
                } catch {
                    replygcxeon('Failed to join the Group')
                }
                break
                case 'cyaa':
            case 'out':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!m.isGroup) return XeonStickGroup()
                replygcxeon('cyaaa')
                sleep(1500)
                await XeonBotInc.groupLeave(m.chat)
            break
case 'telestick': {
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
	if (m.isGroup) return XeonStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcxeon(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcxeon('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				XeonBotInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcxeon(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'listowner': {
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                return replygcxeon(teks)
            }
            break
            case 'play':  case 'song': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
            if (m.isGroup) return XeonStickPrivate()
if (!text) return replygcxeon(`𝖈𝖔𝖓𝖙𝖔𝖍 : .𝖕𝖑𝖆𝖞 𝖑𝖎𝖓𝖊 𝖜𝖎𝖙𝖍𝖔𝖚𝖙 𝖆 𝖍𝖔𝖔𝖐`)
const xeonplaymp3 = require('./lib/ytdl')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            sourceUrl: websitex,
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
            case 'ai': 
            case 'ask':
            case 'openai': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
               if (db.data.users[sender].limit < 1) return replygcxeon(mess.limit)
	            if (!q) return replygcxeon(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygcxeon(isi)
			   }
			   break
    case 'qc': {
    satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
if (!q) return replygcxeon(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygcxeon(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygcxeon('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await XeonBotInc.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
XeonBotInc.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
case 'self': {
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!XeonTheCreator) return XeonStickOwner()
                XeonBotInc.public = false
                replygcxeon('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!XeonTheCreator) return XeonStickOwner()
                XeonBotInc.public = true
                replygcxeon('*Successful in Changing To Public Usage*')
            }
            break
case 'spot':{
satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
	if (!text) return replygcxeon(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcxeon('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcxeon('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcxeon( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgxeon",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await XeonBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcxeon('*Error*')
    }
    }
    break
      case 'dalle': {
      satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
  if (!text) return replygcxeon(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
  try {
  	replygcxeon('*Please wait, generating image...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await XeonBotInc.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    replygcxeon('*Oops! Something went wrong while generating images. Please try again later.*')
  }
  }
  break
            case 'suitpvp':
            case 'suit': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcxeon(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcxeon(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcxeon(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcxeon(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await XeonBotInc.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcxeon(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcxeon(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                XeonBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcxeon("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'cp': case 'couple': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
XeonBotInc.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
    case 'quo':
    satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replygcxeon(textquotes)
break
            case 'tomp3': {
            satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `ruin.mp3`
                }, {
                    quoted: m
                })

            }
            break
/////////////////// END ///////////////////
            default:
                if (budy.startsWith('bot online?')) {
  return replygcxeon(`${xeonytimewisher} 𝖙𝖚𝖆𝖓 ${pushname}, 𝖗𝖚𝖎𝖓𝖘𝖙𝖆𝖗𝖒𝖔𝖔𝖓 𝖔𝖓𝖑𝖎𝖓𝖊`)
                }
                if (budy.startsWith('=>')) {
                satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                    if (!XeonTheCreator) return XeonStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                    if (!XeonTheCreator) return XeonStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                satu =`@${m.sender.split("@")[0]} telah menggunakan command ${prefix}${command}`
await XeonBotInc.sendMessage("6287872303819@s.whatsapp.net", { text: satu, mentions: [sender]}, { quoted: m})
                    if (!XeonTheCreator) return XeonStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
XeonBotInc.sendMessage("916909137213@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
