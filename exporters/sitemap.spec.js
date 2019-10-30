const ezs = require('ezs');
const from = require('from');

test('export an xml', done => {
    let outputString = '';
    from([{
        uri: 'http://exemple.com',
        publicationDate: Date.now(),
    }])
        .pipe(ezs('delegate', { file: __dirname + '/sitemap.ini' }))
        .on('data', data => {
            if (data) outputString += data;
        })
        .on('end', () => {
            expect(outputString).toContain('<loc>http://exemple.com');
            done();
        })
        .on('error', done);
});
