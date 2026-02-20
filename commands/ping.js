import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `⚔️ Sung Il-hwan Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `Digital Crew 243`
        )
    }, { quoted: message })
}