import {Client, TextChannel} from "discord.js";
import config from "./config";

const client = new Client({user: true});

client.on("ready", () => {
    console.log(`logged in as ${client.user?.username}#${client.user?.discriminator}`);
    client.user?.setStatus("invisible");
});

client.on("message", async (msg) => {
    const sendChannel = (await client.channels.fetch("843471565986594816")) as TextChannel;
    if (msg.channel.id === "755013928647524372" && msg.embeds.length > 0) {
        if (msg.embeds[0].title?.includes("Experiment Added")) {
            sendChannel!.send({embed: msg.embeds[0]});
        }
    }
});

client.login(config.token);
