const axios = require('axios');
const baseurl = 'http://localhost:3000/events'

describe('eventsAPI', () => {

    it('post an event', async () => {
        return axios.post(baseurl, {
            'name': 'Concert',
            'place': 'ktm',
            'purpose': 'donation',
            'description': 'CommunityPurpose',
            'date': '2017/01/01'
            
        })
            .then((event) => {
                expect(event.data.name).toEqual('Concert');
            })
    });
    it('gets all events', async () => {
        return axios.get(baseurl)
            .then((events) => {
                expect(events.data[0].name).toEqual("Concert");
            });
    });
});