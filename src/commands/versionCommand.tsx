import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { sendReply } from "enmity/api/clyde";
import { build, version, device, os } from "enmity/api/native";

export const InformationCommand: Command = {
    id: "version-command",

    name: "version",
    displayName: "version",

    description: "shows the version number of your discord",
    displayDescription: "shows the version number of your discord",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    execute: async function (args, message) {

        let color = "0x" + Math.floor(Math.random() * 16777215).toString(16);

        const embed = {
            type: 'rich',
            title: 'System informations',
            
            footer: {
                text: "build: " + build + "\nversion: " + version + "\ndevice: " + device
            },
            
            color: color
            
        }

        sendReply(message?.channel.id ?? "0", { embeds: [embed]});
        
    }
}