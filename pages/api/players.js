import nc from "next-connect";

const handler = nc().get((req, res) =>  {
    res.send('this is get method of players');
  }).post((req, res) => {
      const {age} = req.body
      if(age >= 18){
        res.send('player got selected successfully!')
      }else{
          res.send('sorry!, player not selected!')
      }
})


export default handler;