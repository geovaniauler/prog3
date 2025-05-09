class computador {
    constructor(cpu, ram, vga, hd, fonte){
        this.cpu = cpu;
        this.ram = ram;
        this.vga = vga;
        this.hd = hd;
        this.fonte = fonte;
        imprimir(){
            console.log(this.cpu);
            console.log(this.ram);
            console.log(this.vga);
            console.log(this.hd);
            console.log(this.fonte);
        }
    }
}

module.exports = computador;