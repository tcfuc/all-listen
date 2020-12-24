const router = require('koa-router')()
const superagent = require('superagent');


router.post('/music/cloud/search', async (ctx, next) => {
    let body = ctx.request.body;
    const url = 'http://music.163.com/api/search/pc';
    await superagent
        .post(url)
        .type('form')
        .send(body)
        .then(async res => {
            ctx.body = await filter(JSON.parse(res.text));
        })
        .catch(err => {
            console.log(err);
            ctx.body = {
                msg: '请求失败',
                code: 500
            };
        });
})

let filter = (param) => {
    return new Promise((resolve, reject) => {
        const result = param.result.songs.map(item => {
            let one = {
                id: item.id,
                name: item.name,
                duration: item.duration,
                artist: item.artists[0].name,
                album: item.album.name,
            }
            return one;
        })
        resolve(result);
    })
}


module.exports = router;