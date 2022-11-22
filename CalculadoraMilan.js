class CalculadoraMilan{

    constructor() {
        
        this.result = ""; //memoria
        this.op1="0"; //primer operando
        this.init=1; //saber si hay que inicializar el nº en pantalla , donde 1 indica true y 0 indica false
        this.coma=0; //para saber si un número tiene coma o no, 1 si si tiene coma 0 del caso contrario
        this.op2=0; //segundo operando
        this.op="no"; //indicador de operaciones (+,-,*,/,...) si no hay ninguna se indica con un no
        this.cadena = ""; //cadena de caracteres utiliza en el método equals()
        this.answer ="";  //cadena de caracteres utiliza en el método equals()
       
    }
  

    //Métodos básicos para la calculadora

    //Método para los números

    dígitos(xx) {
        if (this.op1=="0" || this.init==1) {
            document.querySelector('input[type=text][name=\"pantalla\"]').value = xx; 
            this.op1=xx; 
            if (xx==".") { 
                document.querySelector('input[type=text][name=\"pantalla\"]').value = "0.";
                this.op1=xx; 
                this.coma=1;
            }
        }else { 
               if (xx=="." && this.coma==0) { 
                document.querySelector('input[type=text][name=\"pantalla\"]').value+=xx;
                this.op1+=xx;
                this.coma=1;
               }else if (xx=="." && this.coma==1) {
                //No se hace nada porque no queremos que se escriban más comas justo después de una
               }else {
                document.querySelector('input[type=text][name=\"pantalla\"]').value+=xx;
                this.op1 = this.op1 + xx.toString();
               }
            }
        this.init=0;
        this.coma = 0;
    }

    operación(s) {
        this.equals();
        this.op2=this.op1; 
        this.op=s; 
        this.init=1; 
    }	

    //Método de raíz cuadrada
    raíz() {
        this.op1=Math.sqrt(this.op1); 
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.op1; 
        this.init=1; 
    }

    //método para calcular el porcentaje
    porcentaje(){
        this.op1=this.op1/100; 
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.op1; 
        this.igualar(); 
        this.init=1;
    }

    //Método de cambio de signo
    masmenos() {
        this.op1=Number(this.op1) * (-1);
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.op1;
        this.init=1;
         
     }

    //método que calcula la operación que hay por pantalla
    equals() {
        if (this.op=="no" || this.op == "") {
            document.querySelector('input[type=text][name=\"pantalla\"]').value = this.op1;
        }else{
           this.cadena=this.op2+this.op+this.op1;
           this.answer=eval(this.cadena); 
           document.querySelector('input[type=text][name=\"pantalla\"]').value = this.answer;
           this.op1=this.answer;
           this.op="no";
           this.init=1;
           }
    }

    //Método para borrar lo que haya en la pantalla
    borrar() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value = 0;
        this.op1="0"; 
        this.coma=0; 
        this.op2=0; 
        this.op="no";
    }

    mrc() {
        this.result = this.op1;
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.result;
        this.op="no"; 
        this.init=1; 
    }

    mMinus() {
        this.op1 = this.op1 - this.op1;
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.x;
        this.op="no";
        this.init=1; 
    }

    /**/
    mMas() {
        this.x = this.op1 + this.op1;
        document.querySelector('input[type=text][name=\"pantalla\"]').value=this.op1;
        this.op="no"; 
        this.init=1; 
    }

    CE(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value =0; 
        this.op1=0;
        this.coma=0; 
    }

}

let calculadoraM = new CalculadoraMilan();


document.addEventListener('keydown', function (event) {
    if(event.key >= '0' && event.key <= '9'){

        calculadoraM.dígitos(Number(event.key));

    }
    if (event.key === '+') {
      calculadoraM.operación('+');
    }
    if (event.key === '-') {
      calculadoraM.operación('-');
    }
    if (event.key === 'd') {
        calculadoraM.operación('/');
      }
    if (event.key === 'x') {
        calculadoraM.operación('*');
    }
    if(event.key === 'm'){
        calculadoraM.mrc();
    }
    if(event.key === 'i'){
        calculadoraM.mMinus();
    }
    if(event.key === 'a'){
        calculadoraM.mMas();
    }
    if(event.key === 'e'){
        calculadoraM.CE();
    }
    if(event.key === 's'){
        calculadoraM.masmenos();
    }
    if(event.key === 'r'){
        calculadoraM.raíz();
    }
    if(event.key === 'p'){
        calculadoraM.porcentaje();
    }
    if(event.key === '.'){
        calculadoraM.dígitos('.');
    }
    if(event.key === 'Enter'){
        event.preventDefault();
        calculadoraM.equals();
    }
    if(event.key === 'Delete'){
        event.preventDefault();
        calculadoraM.borrar();
    }

  });