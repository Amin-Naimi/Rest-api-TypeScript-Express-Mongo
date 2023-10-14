import express = require('express');
import {Request, Response} from 'express'
import bodyParser = require('body-parser');

export class Server{

    private app: express.Application;

    constructor( private port: number){
        this.app = express();
        this.app.use(bodyParser.json())
    }
   
    public startServer():void{
        this.app.listen(this.port, ()=>{
            console.log("Server started ...")
        })
    }
    
    public getapp(): express.Application{
        return this.app;
    }
}