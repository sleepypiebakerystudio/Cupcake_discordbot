module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`${client.user.tag} uyandı pişirme vakti`);

        client.user.setPresence({
            status: 'idle',
            activities: [{
                name: 'Sleepy Pie Bakery Studio 🍰',
                type: 0 // Playing
            }]
        });
    }
};
