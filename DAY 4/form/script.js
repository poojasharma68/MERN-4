const firstNameChange = (e)=>{
    // console.log(e.target.value);
        const val=e.target.value;
        if(val.length>3){
            console.log('correct');
        }

}
// function submitForm(e){
// e.preventDefault();//prevent previous behaviour

    // console.log(e);
//     console.dir(e.target);
// const t=e.target;
// const res={};
    // for(let i=0;i<t.length;i++){
        // console.dir(t[i]);
        // console.dir(t[i].value);
        // console.log(t[i].value);
        // console.log(t[i].type);
        // console.log(cy,vl);

        function submitForm(e){
        
            e.preventDefault();
            const t=e.target;
            const res={
                hobbies:[],
            };

        for(let i=0;i<t.length;i++){
        const cy = t[i].type;
        if(cy!='submit'){
            const vl = t[i].value;
            const nm = t[i].name;
        

        if(cy=='checkbox'&& t[i].checked){
            res.hobbies.push(vl);
        }
        if(cy!='checkbox')

        if(cy!='submit'){
         res[nm]=vl;
        }



        // if(cy=='checkbox'){
        //     console.log(t[i].checked);
        // }



    }
}
console.log(res);
}