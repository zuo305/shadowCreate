function shadowCreate(option){
    let images = document.querySelectorAll(".shadowcreate");


    if(option.shadow_type === 'hard')
        option.shadow_type = '0px';
    else
        option.shadow_type = '15px';

    images.forEach(image=>{
        image.style.boxShadow = `10px 10px ${option.shadow_type} 1px rgb(0,0,0,0.12)`;

        if(option.padding){
            image.style.padding = '1em';
        }

    });
}

module.exports.shadowCreate = shadowCreate;