const Empleado = require("../models/empleado");

class EmpleadoDAO {
    constructor(){}

    async crear(empleadoData){
        try{
            const empleado = new Empleado(empleadoData);
            return await empleado.save();
        }catch(error){
            throw Error(error);            
        }
    }
    
 
    async obtenerEmpleados() {
        try {
            return await Empleado.find();
        } catch (error) {
            throw Error(error);
        }
    }    

    async obtenerPorNumEmpleado(numero){
        try{
            return await Empleado.find({numero:numero});
        }catch(Error){
            throw Error(error)
        }
    }

    async obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo){
        try{
            return await Empleado.find({numero:numero}, {correo:correo});
        }catch(Error){
            throw Error(error)
        }
    }

    async actualizarEmpleado(numero, correo, empleadoData){
        const empleado = await this.obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo);
        if(!empleado){
            console.log("Empleado no existe")
        }

        return await Empleado.findOneAndUpdate(number, empleadoData, {
            new: true,
        });
    }

    async eliminarEmpleado(numero, correo){
        const empleado = await this.obtenerEmpleadoPorNumEmpleadoYCorreo(numero, correo);
        if(!empleado){
            console.log("Empleado no existe")
        }

        return await Empleado.findOneAndRemove(number);
    }
}

module.exports = new EmpleadoDAO();
