import mongoose from 'mongoose';
import '../env/env';
class DataBase{
    public mongoConnection:any
    
    constructor(){
        this.mongo();
    }

    mongo(){
        this.mongoConnection = mongoose.connect(`${process.env.MONGO_ATLAS_URL}`, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
        });
    }
}

export default new DataBase();