import {Server} from './Server';
import {Connection} from './DataBase'
import Laptoop from './Laptop';

const server = new Server(8000)
const connection = new Connection();

server.startServer()
connection.dataBaseConnection()

// Routes pour l'API REST : 

//Method GET:

server.getapp().get('/laptops', async(request, response)=>{
    try{
        const mesLaptops = await Laptoop.find().exec()
        response.json(mesLaptops)
    }catch(error: any){
        response.status(500).json( {message: error.message })
    }

})

//Method POST:

server.getapp().post('/laptop/add', async(requeste, response) => {
    const {laptopName, laptopPrice} = requeste.body;

    if(!laptopName || !laptopPrice){
        return response.status(500).json({ message: 'Laptop name et laptop price sont requis'});
    }

    const newLaptop = new Laptoop({laptopName, laptopPrice});

    try{
        const savedLaptop = await newLaptop.save();
        response.status(201).json({ message: 'Laptop sauvegardé avec succès', laptop: savedLaptop });
    }catch(error:any){
        response.status(400).json({ message: error.mesage});

        (err:any)=>{
            response.status(500).json({ message: err.mesage});
        }

    }
})

//Method GET BY ID:

server.getapp().get('/laptop/:id', async (request, response)=>{

    try{
        const myLaptop = await Laptoop.findById(request.params.id);
        response.json(myLaptop)

    }catch(error:any){
        response.status(500).json({ message: error.mesage});

    }})

//Method PUT:

server.getapp().put('/laptop/update/:id', async(request, response)=>{
    try{
        const updatedLaptop = await Laptoop.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if(!updatedLaptop){
            return response.status(404).json({ message: 'Laptop not founs'});
        }else{
            response.json(updatedLaptop);
        }

    }catch(error:any){
        response.status(400).json({message: error.message})

    }
})

//Method DELETE:

server.getapp().delete('/laptop/delete/:id', async(request, response)=>{
    try{
        const deletedLaptop = await Laptoop.findByIdAndDelete(request.params.id);
        if(!deletedLaptop){
            return response.status(404).json({ message: 'Laptop not found'});
        }else{
            response.status(204).send();
        }

    }
    catch(error:any){
        response.status(500).json({ message: error.message});
    }
})