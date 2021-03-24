const Events = require('../../../models/Event');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test_mydb';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    // await mongoose.connection.dropCollection('heros');
     await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('EventSchema', () => {
    it('Should be able create a Event', () => {
        let event = {
              'name': 'Concert',
            'place': 'ktm',
            'purpose': 'donation',
            'description': 'CommunityPurpose',
            'date': '2017/01/01'
        };
       
        return Events.create(event)
            .then((event_1) => {
                expect(event_1.name).toEqual('Concert');
            });
    });

    
    it('Updating the event Location', async () => {
        let event = await Events.findOne({'name':'Concert'});
        event.place = 'Dharan';
        let updated_event = await event.save();
        expect(updated_event.place).toEqual('Dharan');
        
    });
    
    

    it('For deleting all Events', async () => {
        const status = await Events.deleteMany();
        expect(status.ok).toBe(1);
    });
})