const {
	MessageType,
    WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (bosco, anu) => {
		try {
           const mdata = await bosco.groupMetadata(anu.jid)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await bosco.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await bosco.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            hehe = await getBuffer(pp_user)
            if (anu.action == 'add' && mem.includes(bosco.user.jid)) {
            bosco.sendMessage(anu.jid, `*ʜʟᴏ ɢʏs....👋 ᴀᴍ ʟᴇᴠɪ sɪʀ ᴘᴜʙʟɪᴄ ʙᴏᴛ....💘 ᴛᴏ ᴜsᴇ ${prefix}ᴍᴇɴᴜ*`, 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(bosco.user.jid)) {
             const mdata = await bosco.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await bosco.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await bosco.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = bosco.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `╭──➤𝐖𝐄𝐋𝐂𝐎𝐌𝐄𑁍───❋ུ۪۪\n│❖ *ɴᴀᴍᴇ* : @${num.split('@')[0]} \n│❖ *ʙɪᴏ* : ${thu.status} \n│❖ *ᴍᴇᴍʙᴇʀ* : ${memeg}\n╰───────────────❋ུ۪۪ \n *☞︎︎︎ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾𖨆* \n╭───────────────❋ུ۪۪ \n│❄︎ ${mdata.subject} \n╰───────────────❋ུ۪۪ \n *☞︎︎︎ᴅᴏ ɴᴏᴛ ғᴏʀɢᴇᴛ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ* \n ${time_wel} -  ${time_welc} \n©ɪͥᴛͭsᷤ ͢ᴍͫᴇͤꪶ͢𝐿𝑒𝑣𝑖 𝑠𝑒𝑟ꫂ`
                welcomeBut = [{buttonId:`${prefix}getdeskgc`,buttonText:{displayText:'𝐃𝐈𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍📌'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'𝐒𝐂𝐑𝐈𝐏𝐓🌾'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                bosco.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(bosco.user.jid)) {
                const mdata = await bosco.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await bosco.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = bosco.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `╭──➤𝐆𝐎𝐎𝐃 𝐁𝐘𝐄👋•──❋ུ۪۪ \n│❖ *ɴᴀᴍᴇ* : @${num.split('@')[0]} \n│❖ *ʙɪᴏ*   : 404 \n╰───────────────❋ུ۪۪ \n*❄︎ 𝚁𝙴𝚂𝚃 𝙽𝙾𝚆 𝙿𝙴𝙰𝙲𝙴🥀* \n╭───────────────❋ུ۪۪ \n│❖ *ᴛɪᴍᴇ* : ${time_wel} \n│❖ *ᴅᴀᴛᴇ* : ${time_welc} \n╰───────────────❋ུ۪۪ \n©ɪͥᴛͭsᷤ ͢ᴍͫᴇͤꪶ͢𝐿𝑒𝑣𝑖 𝑠𝑒𝑟ꫂ`
                goodbyeBut = [{buttonId:`${prefix}h`,buttonText:{displayText:'𝐆𝐄𝐓 𝐎𝐔𝐓 🚪'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'𝐒𝐂𝐑𝐈𝐏𝐓🌾'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                bosco.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
