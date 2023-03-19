require('dotenv').config();
const {Configuration, OpenAIApi}=require("openai");
const configuration=new Configuration({apiKey:process.env.API_KEY});
const openai=new  OpenAIApi(configuration);
const fs=require("fs");



//this part to prepareData from jsonl file **************************

// const prepareData=openai.createFile(fs.createReadStream("./data/newData.jsonl"),"fine-tune")
// prepareData.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })




//this part to train prepareData by fine-tune **************************

// const fileName='file-oRa3qmmTYSRADH6Viehh3MCD';

// const response=openai.createFineTune({
//     model: 'davinci',
//     training_file: fileName
// });

// response.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })




//this part to to create fine-tune-event **************************

// const fileName='file-oRa3qmmTYSRADH6Viehh3MCD';

// const models= openai.listFineTuneEvents('ft-SMEdCrf6SiMtYT8Dv1hp3pfg',true);



// models.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })



// const fileName='file-oRa3qmmTYSRADH6Viehh3MCD';

// const models= openai.listFineTuneEvents('ft-SMEdCrf6SiMtYT8Dv1hp3pfg',false);

// setInterval(() => {
    


// models.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error)
// })
// }, 10000);



// const fileName='file-oRa3qmmTYSRADH6Viehh3MCD';

// const models= openai.listFineTuneEvents('ft-SMEdCrf6SiMtYT8Dv1hp3pfg',false);

// setInterval(() => {
    


// models.then((data)=>{
//     console.log(data.data.data);
// }).catch((error)=>{
//     console.log(error)
// })
// }, 5000);


// For check the status*****************************


// const models=openai.listFineTunes();;
// models.then((data)=>{
//     console.log(data.data.data)
// })




const model='davinci:ft-zubayer-2023-03-15-04-08-51';
// const model='davinci:ft-zubayer-2023-03-15-06-34-00';



const response=openai.createCompletion({
    model,
    prompt:"Where to ship and what express delivery",
    temperature: 0.7,
    max_tokens: 250,
});

response.then((data)=>{
  
    console.log(data.data.choices[0].text)
})