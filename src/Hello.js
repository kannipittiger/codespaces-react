import './Hello.css'
const Hello=({name,age,salary="100"})=>{
    return (<h5>Hello {name} {age} {salary}!  <br/></h5>);
}

export default Hello;