const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		author: "Rifad",
		role: 0,
		shortDescription: "info and my owner the cmd",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: '𝐌𝐑 𝐍𝐎𝐁𝐈𝐓𝐀 𝐕𝐀𝐈',
				gender: '𝐌𝐚𝐥𝐞',
				age: '18+',
				Home : '𝐃𝐢𝐧𝐚𝐣𝐩𝐮𝐫',
				Number : '01881391819',
				WhatsApp : '01881391819',
				Email : '𝐫𝐢𝐦𝐨𝐧2454𝐚@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦'‚


			const bold = 'http://g-v1.onrender.com/uYRKJKfeV.jpg';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const imgResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const imgPath = path.join(tmpFolderPath, 'owner_img.jpeg');

			fs.writeFileSync(imgPath, Buffer.from(imgResponse.data, 'binary'));

			const response = `╭─────❁\n│  𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢  \n│
│𝐍𝐚𝐦𝐞: ${ownerInfo.name}
│𝐆𝐞𝐧𝐝𝐞𝐫: ${ownerInfo.gender}
│𝐀𝐠𝐞: ${ownerInfo.age}
│𝐇𝐎𝐌𝐄: ${ownerInfo.home}
│𝐍𝐮𝐦𝐛𝐞𝐫: ${ownerInfo.number}
│𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩: ${ownerInfo.whatsapp}
│𝐄𝐦𝐚𝐢𝐥: ${ownerInfo.email}\n╰────────────❁`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(imgPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(imgPath);

			api.setMessageReaction('🐔', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};
