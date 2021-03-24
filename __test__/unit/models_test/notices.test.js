const Notices = require('../../../models/Notice');
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
     //await mongoose.connection.db.dropDatabase();
    //await mongoose.connection.close();
});

describe('NoticeSchema', () => {
    it('Should be able create a Notice', () => {
        let notice = {
              'name': 'Concert',
            'info': 'Free'
         
        };
       
        return Notices.create(notice)
            .then((notice_1) => {
                expect(notice_1.name).toEqual('Concert');
            });
    });

    it('Updating the Notice Information', async () => {
        let notice = await Notices.findOne({'name':'Concert'});
        notice.info = 'Chargeable';
        let updated_notice = await notice.save();
        expect(updated_notice.info).toEqual('Chargeable');
        
    });

    it('For deleting all Notices', async () => {
        const status = await Notices.deleteMany();
        expect(status.ok).toBe(1);
    });
})