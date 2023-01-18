export const Valid = (emile , text , name) => {
    const errors = {
         name:"",
        emile:"",
        text:""

    }


if(!name){
    errors.name="لطفا اسم خود را وارد کنید"
}else{
    delete errors.name
}

if(!emile){
    errors.emile = "لطفا ایمیل خور دار وارد کنید"
}else if(!/\S+@\S+\.\S+/.test(emile)){
    errors.emile = "ایمیل صحیح نمیباشد"

}else {
    delete errors.emile;
}


if(!text) {
    errors.text = "لطفا متن خود را وارد کنید"
}else if (text.lenght < 8){
    errors.text = "متن کافی نیست"
}else{
    delete errors.text;
}

}

