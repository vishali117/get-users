export default (req, res) => {

    const peoples = [{id:1, 'name':'Karan', age:18, 'salary':'70k', 'job':'React developer', 'company': 'Google'},
    {id:2, 'name':'Salman', age: 20, 'salary':'50k', 'job':'Python developer', 'company': 'Accenture'},
    {id:3, 'name': 'Varun', age: 25, 'salary':'90k', 'job':'Node developer', 'company': 'Capgemini'}]

    if(req.method === 'GET'){
        const id = req.query.id
        const people = peoples.find(people=>people.id==id)
        res.send(people)

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