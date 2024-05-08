function SeletorCaracteres(){
    const upperCase= document.getElementById('#includUpperCase').checked
    const lowerCase= document.getElementById('#includLowerCase').checked
    const number= document.getElementById('#includNumer').checked
    const caracterEspecial= document.getElementById('#includCaracterEspecial').checked


    const selTypes=[];
    if(upperCase){
        selTypes.push('ABCDFGHIJKLMNOPQRSTUVWXYZ')
    }
    if(lowerCaserCase){
        selTypes.push('abcdfghijklmnopqrstuvwxyz')
    }

    if(number){
        selTypes.push('0123456789')
    }
    if(caracterEspecial){
        selTypes.push('/@!#$%&*/|\~')
    }

    
}
 function RandomSeletor(selTypes){
    const randomIndex =Math.floor( Math.random()* selTypes.length)
 }

document.getElementById('gerador').addEventListener('click', function(){
    console.log(SeletorCaracteres())
})