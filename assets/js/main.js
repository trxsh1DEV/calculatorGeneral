function Calculator(){
    const display = document.querySelector('.display');


    this.start = function () {
        this.clickButtons();
        // this.backSpace();
        this.pressEnter();
    };

    this.pressEnter = function(){
        display.addEventListener('keyup', e => {       
            if(e.keyCode === 13){
                this.makeAccount();
            }
        })
    };

    this.clickButtons = function(){
        document.addEventListener('click', e => {
            const el = e.target;
            
            if(el.classList.contains('btn-del')) this.deleteOne();
            if(el.classList.contains('btn-num')) this.btnForDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.deleteAll();
            if(el.classList.contains('btn-eq')) this.makeAccount();
        })
    };
    this.deleteOne = () => display.value = display.value.slice(0,-1);
    this.btnForDisplay = value => display.value += value;
    this.deleteAll = () => display.value = '';

    this.makeAccount = () => {
        try{
            const account = eval(display.value);

            if(!account){
                alert('Conta inválida');
                return;
            };
            
        display.value = account
        }catch(e){
            alert('Conta inválida');
        }
    };
}
const calc = new Calculator();
calc.start();