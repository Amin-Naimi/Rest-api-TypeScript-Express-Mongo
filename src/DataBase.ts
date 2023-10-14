import mongoose from "mongoose";

export class Connection {

  private dbUrl: string = 'mongodb://0.0.0.0:27017/firstproject';

  dataBaseConnection(): void {
    mongoose.connect(this.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions)
      .then(() => {
        console.log("MongoDB connection established sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
