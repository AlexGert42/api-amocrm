const AmoCRM = require('amocrm-js')

const crm = new AmoCRM({
    domain: 'aleeexgerttt',
    auth: {
        client_id: 'bfe9fcdb-88c5-4d99-95a5-9aa88529202f',
        client_secret: 'm1y2R6ftY7Bo9CLgWtnuJ4i58WtDt99oSprTMRdSK26ddlheTMK6kOD4ThTDBMTO',
        redirect_uri: 'https://example.com',
        server: {
            port: 1337
        }
    },
})



module.exports = {


    async index(ctx, next) {
        
        // const data = await crm.request.get('/api/v4/leads')
        const data = await crm.request.get('/api/v4/leads')
        console.log(data);

        ctx.body = data
    },
};













