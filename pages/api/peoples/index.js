export default (req, res) => {

        const peoples = [{id:1, 'name':'karan', age:18},{id:2, 'name':'salman', age: 20}, {id:3, 'name': 'varun', age: 25}]

        if(req.method === 'GET'){
            res.send(peoples)

        }
        if(req.method === 'POST'){
            const {name, age} = req.body
            if(age>=18){
                res.send('He is Major!')
            }else{
                res.send('He is Minor!')
            }
        }




}