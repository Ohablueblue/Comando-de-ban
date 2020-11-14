const Discord = require('Discord.js')
exports.run = async (bot, message, args, args_txt, chat) => {

	let bUser = message.guild.member(message.mentions.users.first());

	if (!message.member.hasPermission("BAN_MEMBER")) {
		const permissão = new Discord.MessageEmbed()

		.setTitle("Você Não tem permissão para executar esse comando")
		.setTimestamp()
		.setFooter(`${message.guild.name}`)
		.setColor("#8B008B")

		return message.reply(permissão)
	}

	if(!bUser) {
		const mencione = new Discord.MessageEmbed()

		.setTitle("Mencione o membro que deseja ser banido.")
		.setTimestamp()
		.setFooter(`${message.guild.name}`)
		.setColor("#8B008B")

		return message.reply(mencione)
	}

	let bReason = args.join(" ").slice(22);
	if(!bReason) {
		bReason = "Razão do ban";

	}

	const Ban = new Discord.MessageEmbed()
	.setTitle("Banido")
	.setColor("8B008B")
	.setdescription("Foi banido")
    message.reply(Ban);

 message.guild.members.ban(bUser).then(bReason);

}

   exports.help = {
   	name: "ban"
   	aliases: ["ban"]
   }
